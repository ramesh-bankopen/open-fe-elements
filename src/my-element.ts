import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './index.css';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {

  static styles = css`
  /* UnoCSS utilities will be automatically injected */
  :host {
    display: block;
  }
  @unocss-placeholder
`

  /**
   * Copy for the read the docs hint.
   */

  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <div class="p-4 bg-blue-500 text-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-2">Hello UnoCSS!</h1>
        <p class="text-sm opacity-90">This works with Lit Shadow DOM!</p>
        <button
          class="mt-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100"
        >
          Click me
        </button>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
