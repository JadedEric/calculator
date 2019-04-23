import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * 
 */
export class ClearCommand implements ICommand {
    
    constructor(private readonly arithmetic: Arithmetic) {        
    }

    /**
     * 
     */
    parse(): void {
        
        this.arithmetic.value = '';
        this.arithmetic.arithmetic = 0;
        this.arithmetic.operand = '';
    }
}
