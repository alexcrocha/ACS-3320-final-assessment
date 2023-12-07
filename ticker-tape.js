class TickerTape extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.classList.add('ticker-tape-container');

    const slot = document.createElement('slot');
    container.appendChild(slot);

    const style = document.createElement('style');
    style.textContent = `
            .ticker-tape-container {
                white-space: nowrap;
                overflow: hidden;
                box-sizing: border-box;
            }
            ::slotted(h1) {
                display: inline-block;
                padding-left: 50%;
                animation: ticker 10s linear infinite;
            }
            @keyframes ticker {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
        `;

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define('ticker-tape', TickerTape);
