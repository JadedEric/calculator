import { Arithmetic } from './arithmetic';
import { Command } from './command';
import { Key } from './key';
import { KeyEnum } from './key.enum';

describe('Arithmetic', () => {

    beforeEach(() => {
    });

    it('should calculate a positive addition', () => {

        const arithmetic: Arithmetic = new Arithmetic();
        const three = Command.init(arithmetic, new Key('3', KeyEnum.Number));
        const addition = Command.init(arithmetic, new Key('+', KeyEnum.Operation));
        const nine = Command.init(arithmetic, new Key('9', KeyEnum.Number));
        const equals = Command.init(arithmetic, new Key('=', KeyEnum.Equals));

        three.parse();
        addition.parse();
        nine.parse();
        equals.parse();

        const expected: number = (3 + 9);

        expect(arithmetic.arithmetic).toEqual(expected);
    });
});
