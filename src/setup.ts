import { CommandModule } from 'yargs';
export const setCommand: CommandModule = {
    command: ['set'],
    describe: 'set release warehouse',
    builder: yargs => {
        yargs.option('repositority', {
            alias: 'r',
            desc: `Specify the release warehouse address of the package`,
        });
        return yargs;
    },
    handler: async argv => {
        const params: string[] = [];
        if (argv.mode) {
            params.push('--mode', `${argv.mode}`);
        }
        if (argv.docsDir) {
            params.push(`--docsDir`, `${argv.docsDir}`);
        }
        
    }
};