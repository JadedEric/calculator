import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * 
 */
export class EqualsCommand implements ICommand {

    constructor(private readonly arithmetic: Arithmetic) {        
    }

    /**
     * 
     */
    parse(): void {
        
        let result: number = this.arithmetic.action();

        this.arithmetic.arithmetic = result;
        this.arithmetic.value = '' + this.arithmetic.arithmetic;
        this.arithmetic.operand = '';
    }
}
