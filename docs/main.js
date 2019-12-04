import {html, render} from "./web_modules/lit-html.js";

let sites = {
    'src': 'https://github.com/tmcmaster/polymer-elements',
    'pika': 'https://www.pika.dev/npm/@wonkytech/polymer-elements',
    'npm': 'https://www.npmjs.com/package/@wonkytech/polymer-elements',
    'docs': 'https://github.com/tmcmaster/polymer-elements#readme'
};

const items = ['one','two','three'];

render(html`
    <style>
        body {
            padding: 0;
            margin: 0;
            left:0;
            top:0;
            width: 100vw;
            height: 100vh;  
        }
    </style>
    <tm-examples heading="Polymer Elements" .sites="${sites}">
    
        <section title="paper-button">
            <paper-button>Paper Button</paper-button>
        </section>
        
        <section title="iron-list">
             <iron-list .items="${items}" as="item">
                  <template>
                    <div>Testing [[item]]</div>
                  </template>
            </iron-list>
        </section>
        
    </tm-examples>    
`, document.querySelector('body'));

