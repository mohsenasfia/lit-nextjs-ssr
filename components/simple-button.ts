import { html, TemplateResult, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class SimpleButton extends LitElement {
  @property({ type: String })
  public label = "Button";

  protected render(): TemplateResult {
    return html`<button>${this.label}</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "simple-button": SimpleButton;
  }
}

customElements.get("simple-button") ||
  customElements.define("simple-button", SimpleButton);
