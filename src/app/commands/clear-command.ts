import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * the command which clears the arithmetic operation result
 */
export class ClearCommand implements ICommand {

    constructor(private readonly arithmetic: Arithmetic) {
    }

    /**
     * parses the arithmetic command
     */
    parse(): void {
        this.arithmetic.value = '';
        this.arithmetic.arithmetic = 0;
        this.arithmetic.operand = '';
    }
}
