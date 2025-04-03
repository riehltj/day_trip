import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["total", "hiddenTotal"];

  updateTotal({ target, params }) {
    console.log("updateTotal");
    const qty = target.value;
    this.hiddenTotalTarget.value = qty * params.price;

    // Format the currency properly
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    this.totalTarget.innerText = formatter.format(
      this.hiddenTotalTarget.value / 100
    );
  }
}
