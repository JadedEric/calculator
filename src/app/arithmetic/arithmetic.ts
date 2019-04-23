export class Arithmetic {
    /**
     * the value of the arithmetic operation
     */
    public value = '';

    /**
     * the arithmetic presentation
     */
    public arithmetic = 0;

    /**
     * the operand used in the arithmetic operation
     */
    public operand = '';

    constructor() {
    }

    /**
     * calculates the answer of an arithmetic equation
     * @returns number
     */
    action(): number {

        let answer = 0;

        switch (this.operand) {
            case '-': {
                answer = this.arithmetic - Number(this.value);
                break;
            }
            case 'x': {
                answer = this.arithmetic * Number(this.value);
                break;
            }
            case '÷': {
                answer = this.arithmetic / Number(this.value);
                break;
            }
            case '%': {
                answer = this.arithmetic % Number(this.value);
                break;
            }
            default: {
                answer = this.arithmetic + Number(this.value);
                break;
            }
        }

        return answer;
    }
}
