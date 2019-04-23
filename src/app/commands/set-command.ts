import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * the command that sets the arithmetic operation
 */
export class SetCommand implements ICommand {

    constructor(private readonly arithmetic: Arithmetic, private readonly operation: string) {
    }

    /**
     * parses the arithmetic command
     */
    parse(): void {

        const result: number = this.arithmetic.action();

        this.arithmetic.arithmetic = this.arithmetic.operand === ''
            ? Number(this.arithmetic.value)
            : result;

        this.arithmetic.value = '';
        this.arithmetic.operand = this.operation;
    }
}
