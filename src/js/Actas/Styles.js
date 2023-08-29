import { css } from "lit-element"

export default css`
:root{
    --Color-Red: #ff0000;
}

*{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.Content-profile{
    width: 500px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--Color-Red);
    border-radius: 0 0 50px 0;
}

.profile > img {
    float: left;
    width: 50px;
    height: 50px;
    background: #ffff;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    transform: translate(-150px, 0px);
}

.profile{
    width: 90%;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.profile p{
    color: #4c4c4c;
    width: 50%;
    background: #ffff;
    padding: 20px 30px;
    border-radius: 0 0 20px 0;
}

.Menu{
    width: 50px;
    height: 50px;
    padding: 10px;
    margin: 10px 30px;
    background: #4C4C4C;
}

.Slide-menu{
    margin: 10px 20px;
    width: 20%;
    background: #cfcfcf;
    padding: 20px;
    border-radius: 20px;
}

.Slide-menu li{
    display: flex;
    align-items: center;
    gap: 12px;
    list-style: none;
    background: #fff;
    padding: 20px 10px;
    margin: 20px;
    border-radius: 5px;
}
h3{
    font-size: 1rem;
    color: #545252;
}

.img-icon{
    width: 20px;
}

.Slide-menu li a{
    text-decoration: none;
    color: black;
}

.Content-right{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.Content{
    display: flex;
    justify-content: space-between;
}

.Card{
    margin: 15px 0;
    width: 350px;
    height: 130px;
    box-shadow: 11px 9px 16px 1px black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    border-radius: 15px;
}

.Content-card{
    width: 90%;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3,1fr);
    gap: 12px;
}

.Card-Img{
    width: 50px;
    height: 50px;
}

.Card-Text{
    width: 50%;
}

.Card-button{
    border: 0;
    background: none;
    font-size: 2rem;
    color: black;
    font-weight: bold;
    margin: 20px 0 ;
}

.Content-Forms{
    margin: 50px 0 0 0;
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.Content-Forms h1{
    font-size: 2rem;
}
.Content-Forms h3 {
    margin: 10px;
}
.Content-Forms hr{
    width: 500px;
}
form{
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
}

.Content-Form-Inputs{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.Form-Input{
    width: 50%;
    display: flex;
    flex-direction: column;
}

.Form-Input-Textarea{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

textarea{
    width: 80%;
    margin: 10px;
}
.Form-Input-Textarea > button {
    width: 20%;
    border: 0;
    padding: 15px 30px;
    background: var(--Color-Red);
    border-radius: 10px;
    font-size: 1rem;
    color: #fff;
    font-weight: bold;

}

input{
    margin: 10px;
    padding: 15px 10px;
    font-size: 1.2rem;
}
select{
    width: 400px;
    padding: 5px 20px;
    margin: 10px;
    border-radius: 5px;
}
.Content-select-form{
    padding: 20px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 100%;
}
table{
    width: 100%;
    border-collapse: collapse;
}
td,th{
    text-align: center;
    border: 1px solid #cfcffc;
}
td{
    height: 60px;
}
table th{
    color: #ffff;
    background: #4c4c4c;
    padding: 10pt;
}
button:hover, .Menu, li{
    cursor: pointer;
}
`