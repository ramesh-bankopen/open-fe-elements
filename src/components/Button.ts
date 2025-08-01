import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js"

@customElement("om-button")
export class Button extends LitElement {

    @property() label = 'Click me';

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
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">${this.label}</button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "om-button": Button;
    }
}
