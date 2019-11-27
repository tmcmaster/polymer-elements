import {html, render} from "./web_modules/lit-html.js";


render(html`
    <style>
        body {
          background-color: lightgray;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
        } 

    </style>
    <h3>Polymer Elements</h3>
`, document.querySelector('body'));

