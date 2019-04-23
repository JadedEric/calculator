/**
 * an interface definding the structure of a command
 */
export interface ICommand {
    /**
     * parses the arithmetic command
     */
    parse(): void;
}
