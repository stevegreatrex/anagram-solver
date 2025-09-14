// Letter Tile Web Component
class LetterTile extends HTMLElement {
    // Scrabble point values for each letter - moved inside the component as requested
    static scrabblePoints = {
        'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 's': 1, 't': 1, 'r': 1,
        'd': 2, 'g': 2,
        'b': 3, 'c': 3, 'm': 3, 'p': 3,
        'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
        'k': 5,
        'j': 8, 'x': 8,
        'q': 10, 'z': 10
    };

    constructor() {
        super();
        this._letter = '';
        this._pointValue = 0;
        this._isDimmed = false;
    }

    static get observedAttributes() {
        return ['letter', 'tile-size', 'font-size', 'position-x', 'position-y'];
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', this.handleClick.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.handleClick);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    get letter() {
        return this.getAttribute('letter') || this._letter;
    }

    set letter(value) {
        this._letter = value;
        this.setAttribute('letter', value);
    }

    get tileSize() {
        return parseInt(this.getAttribute('tile-size')) || 60;
    }

    set tileSize(value) {
        this.setAttribute('tile-size', value);
    }

    get fontSize() {
        return parseInt(this.getAttribute('font-size')) || 24;
    }

    set fontSize(value) {
        this.setAttribute('font-size', value);
    }

    get positionX() {
        return parseInt(this.getAttribute('position-x')) || 0;
    }

    set positionX(value) {
        this.setAttribute('position-x', value);
    }

    get positionY() {
        return parseInt(this.getAttribute('position-y')) || 0;
    }

    set positionY(value) {
        this.setAttribute('position-y', value);
    }

    handleClick() {
        this._isDimmed = !this._isDimmed;
        this.classList.toggle('dimmed', this._isDimmed);
    }

    render() {
        const letter = this.letter.toLowerCase();
        const pointValue = LetterTile.scrabblePoints[letter] || 0;
        
        this.innerHTML = `${letter.toUpperCase()}<span class="point-value">${pointValue}</span>`;
        this.className = 'letter-tile absolute flex items-center justify-center rounded-lg shadow-lg font-semibold select-none cursor-pointer';
        this.setAttribute('data-letter', letter);
        
        this.style.width = `${this.tileSize}px`;
        this.style.height = `${this.tileSize}px`;
        this.style.fontSize = `${this.fontSize}px`;
        this.style.left = `${this.positionX}px`;
        this.style.top = `${this.positionY}px`;
        
        // Maintain dimmed state after re-render
        this.classList.toggle('dimmed', this._isDimmed);
    }
}

// Register the custom element
customElements.define('letter-tile', LetterTile);