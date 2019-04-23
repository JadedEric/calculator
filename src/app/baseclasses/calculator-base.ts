import { Key } from '../arithmetic/key';
import { KEYS } from '../arithmetic/key.const';
import { Arithmetic } from '../arithmetic/arithmetic';
import { Command } from '../arithmetic/command';
import { ICommand } from '../interfaces/i-command';

/**
 * a base class to be used to implement different types of calculators
 */
export class CalculatorBase {

    /**
     * an array of keys
     */
    public keys: Array<Key> = KEYS;

    /**
     * an arithmetic operation
     */
    public arithmetic: Arithmetic = new Arithmetic();

    /**
     * @param key the key user selects on the calculator
     */
    private action(key: Key): void {
        const cmd: ICommand = Command.init(this.arithmetic, key);
        cmd.parse();
    }
}
