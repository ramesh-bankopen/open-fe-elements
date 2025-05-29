import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js"

@customElement("om-button")
export class Button extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        @unocss-placeholder
        `
    ];

    render() {
        return html`
        <h2 type="button" class="p-4 text-lg font-medium">My Header</h2>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "om-header": Button;
    }
}
