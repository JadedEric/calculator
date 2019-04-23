import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * 
 */
export class InvertCommand implements ICommand {

    constructor(private readonly arithmetic: Arithmetic) {
    }

    /**
     * 
     */
    parse(): void {
        
        this.arithmetic.value = - Number(this.arithmetic.value) + '';
    }
}
