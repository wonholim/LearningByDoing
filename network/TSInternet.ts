import {IPDataGram, TCPSegment} from "./TPacket";
import {TSTransport} from "./TSTransport";

export class TSInternet {
    private tsTransport: TSTransport;
    constructor() {
        this.tsTransport = new TSTransport();
    }
    decapsulation(NetworkData: IPDataGram): void {
        this.tsTransport.decapsulation(NetworkData.InternetData);
    }
}