import GetJSON from './GetJSON.js';
import readline from 'readline'

export default class Search{
    prompt() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question('What unit would you like data on? ', (searchUnit) => {
            console.log(`Searching for ${searchUnit}...`);
            GetJSON.prototype.getJSON(searchUnit);
            rl.close();
        });
    }
}