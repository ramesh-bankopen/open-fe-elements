import { LitElement, html, css } from "lit";
import { customElement} from "lit/decorators.js";
import './my-element';
import './components/Button';
import './components/Header';


@customElement("main-layout")
export class Main extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <my-element></my-element>
        <om-button></om-button>
        <om-header></om-header>
        `;
    }
}

