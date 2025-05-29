import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js"

@customElement("om-button")
export class Button extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <button>Click Button</button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "Button": Button;
    }
}
