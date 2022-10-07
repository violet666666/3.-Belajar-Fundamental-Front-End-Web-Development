class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                font-family: 'Quicksand', cursive;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: rgba(111, 247, 211);
                color: black;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding: 16px;
                text-align: center;
            }
        </style>
        <h2>iTunes Finder</h2>`;
    }
}

customElements.define("app-bar", AppBar);