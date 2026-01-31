import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["popup"];

  show() {
    this.popupTarget.classList.add("modal-open");
  }

  hide() {
    this.popupTarget.classList.remove("modal-open");
  }
}
