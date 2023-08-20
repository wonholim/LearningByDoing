import {Message, TCPSegment} from "./TPacket";
import {TSApplication} from "./TSApplication";


export class TSTransport {
    private tsApplication: TSApplication;
    constructor() {
        this.tsApplication = new TSApplication();
    }

    decapsulation(InternetData: TCPSegment): void {
        this.tsApplication.decapsulation(InternetData.TCPData);
    }
}