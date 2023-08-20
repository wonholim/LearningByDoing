import {TApplication} from "./TApplication";
import {Message} from "./TNetworkInterface";

/**
 * Browser 클래스
 * 서버에게 입력된 URL을 요청한다.
 */
export class TBrowser {
    private tApplicattion: TApplication;
    constructor() {
        this.tApplicattion = new TApplication();
    }

    public run(url: string): string {
        this.tApplicattion.encapsulation(url);

        return "";
    }
}