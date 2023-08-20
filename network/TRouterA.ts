import {Frame} from "./TPacket";
import {TRouterB} from "./TRouterB";


export class TRouterA {
    private tRouterB: TRouterB;
    private destinationMacAddress: string = "TRouterB";
    constructor() {
        this.tRouterB = new TRouterB();
    }
    next(frame: Frame): void {
        frame.Header.SourceMACAddress = "TRouterA";
        frame.Header.DestinationMacAddress = this.destinationMacAddress;
        this.tRouterB.next(frame);
    }
}