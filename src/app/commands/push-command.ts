import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * 
 */
export class PushCommand implements ICommand {

    constructor(private readonly arithmetic: Arithmetic, private readonly number: string) {
    }

    /**
     * 
     */
    parse(): void {
        if (this.arithmetic.value === '') {
            this.arithmetic.value = this.number;
            return;
        }

        this.arithmetic.value += this.number;
    }
}
