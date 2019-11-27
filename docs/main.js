import {html, render} from "./web_modules/lit-html.js";

const items = ['one','two','three']
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
        
        div {
            
        }
        
        h3 {
            width: 100%;
            text-align: left;
        }
    </style>
    <div>
        <h3>Polymer Elements</h3>
        <iron-list .items="${items}" as="item">
          <template>
            <div>Testing [[item]]</div>
          </template>
        </iron-list>
    </div>
    
    
`, document.querySelector('body'));

