import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * the commands that outputs the result of the arithmetic operation
 */
export class EqualsCommand implements ICommand {

    constructor(private readonly arithmetic: Arithmetic) {
    }

    /**
     * parses the arithmetic command
     */
    parse(): void {

        const result: number = this.arithmetic.action();

        this.arithmetic.arithmetic = result;
        this.arithmetic.value = '' + this.arithmetic.arithmetic;
        this.arithmetic.operand = '';
    }
}
