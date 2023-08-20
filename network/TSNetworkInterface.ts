import {Frame, IPDataGram} from "./TPacket";
import {TSInternet} from "./TSInternet";

export class TSNetworkInterface {
    private tsInternet: TSInternet;
    constructor() {
        this.tsInternet = new TSInternet();
    }
    decapsulation(frame: Frame): void {
        this.tsInternet.decapsulation(frame.NetworkData);
    }
}