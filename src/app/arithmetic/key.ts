import { KeyEnum } from './key.enum';

export class Key {

    public cspan: number = 1;

    constructor(readonly value: string, readonly type: KeyEnum, readonly span: number = 1) {
        this.value = value;
        this.type = type;

        if (span) {
            this.cspan = span;
        }
    }
}