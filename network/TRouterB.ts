import {Frame} from "./TPacket";
import {TRouterC} from "./TRouterC";

export class TRouterB {
    private tRouterC: TRouterC;
    private destinationMacAddress: string = "TRouterC";
    constructor() {
        this.tRouterC = new TRouterC();
    }
    next(frame: Frame): void {
        frame.Header.SourceMACAddress = "TRouterB";
        frame.Header.DestinationMacAddress = this.destinationMacAddress;
        this.tRouterC.next(frame);
    }
}