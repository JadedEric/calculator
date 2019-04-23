import { Key } from '../arithmetic/key';
import { KEYS } from '../arithmetic/key.const';
import { Arithmetic } from '../arithmetic/arithmetic';
import { Command } from '../arithmetic/command';
import { ICommand } from '../interfaces/i-command';

/**
 * 
 */
export class CalculatorBase { 

    /**
     * 
     */
    public keys: Array<Key> = KEYS;

    /**
     * 
     */
    public arithmetic: Arithmetic = new Arithmetic();

    /**
     * 
     * @param key the key user selects on the calculator
     */
    private action(key: Key): void {
        let cmd: ICommand = Command.init(this.arithmetic, key);
        cmd.parse();
    }
}
