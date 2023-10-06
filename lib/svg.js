class SVG {
    constructor(text, color="white", shape) {
        this.shape = shape;
        this.color = color;
        this.text = text;
    }

    setText(text,color) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.color = color;
    }

    setShape(shape) {
        this.shape = shape;
    }

    render() {
        let rendered = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
        if (this.shape) {
            rendered += this.shape.render()
        }
        if (this.text) {
            rendered += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
        }
        rendered += '</svg>';
        return rendered;
    }
}

module.exports = SVG