import yargs from 'yargs';

enum OptionType {
    Any = 'any',
    Array = 'array',
    Boolean = 'boolean',
    Number = 'number',
    String = 'string'
}
/**
 * An option description. `.
 */
interface Option {
    /**
     * The name of the option.
     */
    name: string;
    /**
     * A short description of the option.
     */
    description: string;
    /**
     * The type of option value. If multiple types exist, this type will be the first one, and the
     * types array will contain all types accepted.
     */
    type: OptionType;
    /**
     * Aliases supported by this option.
     */
    aliases: string[];
    /**
     * Whether this option is required or not.
     */
    required?: boolean;
}
export function yargsOptionsGenerate(yargs: yargs.Argv<{}>, list: Option[]) {
    list = list.slice();

    while (list.length) {
        const item = list.pop();
        yargs = yargs.option(item.name, {
            alias: item.aliases,
            array: item.type === OptionType.Array,
            boolean: item.type === OptionType.Boolean,
            description: item.description,
            demandOption: item.required,
            type: item.type !== OptionType.Any && item.type !== OptionType.Array ? item.type : undefined
        });
    }
    return yargs;
}