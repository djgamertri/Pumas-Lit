import { LitElement, html } from "lit-element";
import StylesCss from "./js/Actas/Styles"

import "./js/nav"
import "./js/Actas/Acta"

class Login extends LitElement{
    static get styles(){
        return [StylesCss]
    }
    render(){
        return html`
        <my-nav></my-nav>
        <my-acta><my-acta>
        `
    }
}

customElements.define("my-login", Login)