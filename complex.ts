class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }

    public addComplex(complex: Complex): Complex {
        const re = this.re + complex.re;
        const im = this.im + complex.im;
        return new Complex(re, im);
    }

    public subtractComplex(complex: Complex): Complex {
        const re = this.re - complex.re;
        const im = this.im - complex.im;
        return new Complex(re, im);
    }

    public mod(): number {
        return Math.sqrt(this.re * this.re + this.im * this.im);
    }

    public toString(): void {
        console.log("RE " + this.re + ", IM " + this.im);
    }
}

const complex1 = new Complex(1, 2);
const complex2 = new Complex(3, 4);

const complexAdd = complex1.addComplex(complex2);
complexAdd.toString();

const complexSubtract= complexAdd.subtractComplex(complex1);
complexSubtract.toString();

const mod = complexSubtract.mod();
console.log(mod);
