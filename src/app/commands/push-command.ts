import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * the command that pushes the key hit to the display
 */
export class PushCommand implements ICommand {

    constructor(private readonly arithmetic: Arithmetic, private readonly value: string) {
    }

    /**
     * parses the arithmetic command
     */
    parse(): void {
        if (this.arithmetic.value === '') {
            this.arithmetic.value = this.value;
            return;
        }

        this.arithmetic.value += this.value;
    }
}
