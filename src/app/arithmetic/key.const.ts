import { Key } from './key';
import { KeyEnum } from './key.enum';

export const KEYS: Key[] = [
    new Key('C', KeyEnum.Clear),
    new Key('+/-', KeyEnum.Invert),
    new Key('%', KeyEnum.Operation),
    new Key('÷', KeyEnum.Operation),
    
    new Key('7', KeyEnum.Number),
    new Key('8', KeyEnum.Number),
    new Key('9', KeyEnum.Number),

    new Key('x', KeyEnum.Operation),

    new Key('4', KeyEnum.Number),
    new Key('5', KeyEnum.Number),
    new Key('6', KeyEnum.Number),    

    new Key('-', KeyEnum.Operation),

    new Key('1', KeyEnum.Number),
    new Key('2', KeyEnum.Number),
    new Key('3', KeyEnum.Number),

    new Key('+', KeyEnum.Operation),

    new Key('0', KeyEnum.Number, 2),

    new Key('.', KeyEnum.DecimalPoint),
    new Key('=', KeyEnum.Equals),
    
];