import { Controller } from "@hotwired/stimulus";

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

export default class extends Controller {
  formatCurrency({ target, params }) {
    const maxValue = params.maxValue || 9999.99;

    let price = target.value;
    if (!price) return;

    function toCurrency(inputString) {
      inputString = inputString.replace(/[^.\d]/g, "");
      if (inputString === "") return target.defaultValue;

      let formattedNumber = Number(inputString).toFixed(2);

      if (isNaN(formattedNumber)) return target.defaultValue;
      if (formattedNumber > maxValue) formattedNumber = maxValue;

      return moneyFormatter.format(formattedNumber);
    }

    target.value = toCurrency(price);
  }
}
