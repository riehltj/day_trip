import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    publishableKey: String,
    checkoutUrl: { type: String, default: "/checkout" },
  };

  connect() {
    if (typeof Stripe === "undefined") {
      console.error("Stripe.js is not loaded");
      return;
    }

    this.stripe = Stripe(this.publishableKeyValue);
  }

  async checkout(event) {
    event.preventDefault();

    // Disable the button to prevent multiple clicks
    event.currentTarget.disabled = true;
    event.currentTarget.classList.add("opacity-50");

    try {
      const response = await fetch(this.checkoutUrlValue, {
        method: "POST",
        headers: {
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
            .content,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.getCheckoutData()),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const { id } = await response.json();

      const result = await this.stripe.redirectToCheckout({ sessionId: id });

      if (result.error) {
        console.error(result.error.message);
        this.handleError(result.error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      this.handleError(error.message);
    } finally {
      // Re-enable the button
      event.currentTarget.disabled = false;
      event.currentTarget.classList.remove("opacity-50");
    }
  }

  getCheckoutData() {
    // Collect any data needed for checkout
    // You might want to customize this to include booking ID, etc.
    return {
      booking_id: this.element.dataset.bookingId,
      ride_id: this.element.dataset.rideId,
    };
  }

  handleError(message) {
    // Display error message to user
    // You could use a toast notification or update a target element
    const errorContainer = this.element.querySelector(
      "[data-stripe-target='error']"
    );
    if (errorContainer) {
      errorContainer.textContent = `Payment error: ${message}`;
      errorContainer.classList.remove("hidden");
    }
  }
}
