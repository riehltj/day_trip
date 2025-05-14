import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    autoDismiss: { type: Boolean, default: true },
    dismissAfter: { type: Number, default: 3000 }, // 3 seconds
  };

  connect() {
    // Set up the animation end listener
    this.element.addEventListener(
      "animationend",
      this.removeAfterAnimation.bind(this)
    );

    // Start auto-dismiss timer if enabled
    if (this.autoDismissValue) {
      this.dismissTimeout = setTimeout(() => {
        // Add the animation class that will trigger the fade out
        this.element.classList.add("animate-fade-out");
      }, this.dismissAfterValue);
    }
  }

  disconnect() {
    // Clean up timeout when element is removed
    if (this.dismissTimeout) {
      clearTimeout(this.dismissTimeout);
    }

    // Remove event listener to prevent memory leaks
    this.element.removeEventListener(
      "animationend",
      this.removeAfterAnimation.bind(this)
    );
  }

  // Called when animation ends
  removeAfterAnimation(event) {
    // Some browsers return the full animation name including @keyframes
    const animationName = event.animationName;

    // Check if this is our fade out animation
    if (
      animationName.includes("fadeOut") ||
      animationName.includes("fade-out")
    ) {
      this.element.remove();
    }
  }

  // Called by the close button
  close(event) {
    // Clear the auto-dismiss timeout
    if (this.dismissTimeout) {
      clearTimeout(this.dismissTimeout);
    }

    // Add the animation class to trigger fade out
    this.element.classList.add("animate-fade-out");

    // Prevent default button behavior
    event.preventDefault();
  }
}
