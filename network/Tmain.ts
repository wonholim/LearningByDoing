import readline from 'readline';
import {TBrowser} from "./TBrowser";

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('요청할 주소를 입력하세요 : ', (url: string): void => {
    /** Browser Class */
    const browser: TBrowser = new TBrowser();
    /** run() 메서드는 엔터와 동일한 메서드 */
    browser.run(url);
    rl.close();
});