import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    @-webkit-keyframes move {
      from {
          background-position: 0% 0%
      }
      to { 
          background-position: 187% 0%
      }
    }

    @-webkit-keyframes bounce {
      0% {
        -webkit-transform: scale(1);
      }
      50% {
        -webkit-transform: scale(.6);
      }
      100% {
        -webkit-transform: scale(1);
      }
    }

    .letter {
      background:
      linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0,
      linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0,
      linear-gradient(315deg, #ECEDDC 25%, transparent 25%),
      linear-gradient(45deg, #ECEDDC 25%, transparent 25%);
      background-size: 100px 100px;
      background-color: #EC173A;

      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;

      animation: move 5s infinite, bounce 2s infinite;
    }
  </style>
  <span class="letter">
    Q
  </span>
`;

class LetterQ extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-q", LetterQ);
