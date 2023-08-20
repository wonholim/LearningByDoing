import {TApplication} from "./TApplication";

/**
 * Browser 클래스
 * 서버에게 입력된 URL을 요청한다.
 */
export class TBrowser {
    private tApplicattion: TApplication;
    constructor() {
        this.tApplicattion = new TApplication();
    }

    /** Application 계층으로 URL을 전송 */
    public run(url: string): string {
        this.tApplicattion.encapsulation(url);

        return "";
    }
}