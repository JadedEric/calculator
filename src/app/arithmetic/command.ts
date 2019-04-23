import { Arithmetic } from './arithmetic';
import { Key } from './key';
import { KeyEnum } from './key.enum';
import { PushCommand } from '../commands/push-command';
import { SetCommand } from '../commands/set-command';
import { ClearCommand } from '../commands/clear-command';
import { EqualsCommand } from '../commands/equals-command';
import { InvertCommand } from '../commands/invert-command';
import { ICommand } from '../interfaces/i-command';

export class Command {

    static init(arithmetic: Arithmetic, key: Key): ICommand {
        switch (key.type) {
            case KeyEnum.Operation: {
                return new SetCommand(arithmetic, key.value);
            }
            case KeyEnum.Equals: {
                return new EqualsCommand(arithmetic);
            }
            case KeyEnum.Clear: {
                return new ClearCommand(arithmetic);
            }
            case KeyEnum.Invert: {
                return new InvertCommand(arithmetic);
            }
            case KeyEnum.Number:
            default: {
                return new PushCommand(arithmetic, key.value);
            }
        }
    }
}
