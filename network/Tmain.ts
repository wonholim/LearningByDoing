import {TBrowser} from "./TBrowser";
import readline from 'readline';

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('요청할 주소를 입력하세요 : ', (url: string): void => {
    const browser: TBrowser = new TBrowser(url);
    browser.run();
    rl.close();
});