import { Arithmetic } from '../arithmetic/arithmetic';
import { ICommand } from '../interfaces/i-command';

/**
 * 
 */
export class SetCommand implements ICommand {

    constructor(private readonly arithmetic: Arithmetic, private readonly operation: string) {        
    }

    /**
     * 
     */
    parse(): void {
        
        let result: number = this.arithmetic.action();

        this.arithmetic.arithmetic = this.arithmetic.operand === '' 
            ? Number(this.arithmetic.value) 
            : result;

        this.arithmetic.value = '';
        this.arithmetic.operand = this.operation;
    }
}
