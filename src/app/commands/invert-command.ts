import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * the command that inverts the positive number to a negative
 */
export class InvertCommand implements ICommand {

    constructor(private readonly arithmetic: Arithmetic) {
    }

    /**
     * parses the arithmetic command
     */
    parse(): void {

        this.arithmetic.value = - Number(this.arithmetic.value) + '';
    }
}
