import { LitElement, html } from "lit-element";


class Login extends LitElement{
    render(){
        return html`
        <div class="content-login">
            <div class="header-login">Pumas FC</div>
            <form action="" class="form-login">
                <div class="input-login">
                    <input type="text" placeholder="Usuario">
                    <input type="text" placeholder="Contraseña">
                </div>

                <button>Ingresar</button>
                <a href="">Olvido su contraseña?</a>
            </form>
        </div>
        `
    }
}

customElements.define("my-login", Login)