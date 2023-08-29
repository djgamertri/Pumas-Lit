import { LitElement, html } from "lit-element";
import StylesCss from "./Styles"

import "./Card"
import "./Form"

class Acta extends LitElement{
    static get styles(){
        return [StylesCss]
    }
    render(){
        return html`
        <div class="Content">
            <nav class="Slide-menu">
                <ul>
                    <li><i><img src="src/Img/IconNav.png" alt="" class="img-icon"></i><a href=""> lorem</a></li>
                    <li><i><img src="src/Img/IconNav.png" alt="" class="img-icon"></i><a href=""> lorem</a></li>
                    <li><i><img src="src/Img/IconNav.png" alt="" class="img-icon"></i><a href=""> lorem</a></li>
                    <li><i><img src="src/Img/IconNav.png" alt="" class="img-icon"></i><a href=""> lorem</a></li>
                    <li><i><img src="src/Img/IconNav.png" alt="" class="img-icon"></i><a href=""> lorem</a></li>
                    <li><i><img src="src/Img/IconNav.png" alt="" class="img-icon"></i><a href=""> lorem</a></li>
                    <li><i><img src="src/Img/IconNav.png" alt="" class="img-icon"></i><a href=""> lorem</a></li>
                    <li><i><img src="src/Img/IconNav.png" alt="" class="img-icon"></i><a href=""> lorem</a></li>
                    <li><i><img src="src/Img/IconNav.png" alt="" class="img-icon"></i><a href=""> lorem</a></li>
                </ul>
            </nav>
            <div class="Content-right">
                <div class="Content-card">
                    <div class="Card">
                        <img src="src/Img/Icon6.png" alt="" class="Card-Img">
                        <div class="Card-Text">
                            <h1>Solicitudes</h1>
                            <hr>
                        </div>
                        <button class="Card-button">></button>
                    </div>
                    <div class="Card">
                        <img src="src/Img/Icon6.png" alt="" class="Card-Img">
                        <div class="Card-Text">
                            <h1>Actas</h1>
                            <hr>
                        </div>
                        <button class="Card-button">></button>
                    </div>
                    <div class="Card">
                        <img src="src/Img/Icon7.png" alt="" class="Card-Img">
                        <div class="Card-Text">
                            <h1>Pendientes</h1>
                            <hr>
                        </div>
                        <button class="Card-button">></button>
                    </div>
                </div>
                <div class="Content-Forms">
                    <h1>Actas</h1>
                    <hr>
                
                    <div class="Content-select-form">
                        <div>
                            <h3>Por favor seleccione el año a consultar</h3>
                            <select name="" id="">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div>
                            <h3>Por favor seleccione el mes a consultar</h3>
                            <select name="" id="">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="Content-select-form">
                        <table>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <tr>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                            </tr>
                            <tr>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                            </tr>
                            <tr>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                            </tr>
                            <tr>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                            </tr>
                            <tr>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                            </tr>
                            <tr>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define("my-acta", Acta)