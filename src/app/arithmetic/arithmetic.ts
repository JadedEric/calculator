export class Arithmetic {
    /**
     * 
     */
    public value: string = '';

    /**
     * 
     */
    public arithmetic: number = 0;

    /**
     * 
     */
    public operand: string = '';   

    constructor() {        
    }

    /**
     * calculates the answer of an arithmetic equation
     * 
     * @returns number
     */
    action(): number {

        let answer: number = 0;

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
