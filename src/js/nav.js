import { LitElement, html } from "lit-element";
import StylesCss from "./Actas/Styles"


class Nav extends LitElement{
    static get styles(){
        return [StylesCss]
    }
    render(){
        return html`
        <header>
            <div class="Content-profile">
                <div class="profile">
                    <img src="src/Img/Logo.png" alt="">
                    <p>Usuarios</p>
                </div>
            </div>
            <img src="src/Img/Menu.png" alt="" class="Menu">
        </header>
        `
    }
}

customElements.define("my-nav", Nav)