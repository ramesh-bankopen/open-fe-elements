import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js"

@customElement("om-header")
export class OmHeader extends LitElement {
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
        <h2 class="p-4 text-lg font-medium">My Header</h2>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "om-header": OmHeader;
    }
}
