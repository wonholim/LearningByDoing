import {Frame} from "./TPacket";
import {TSNetworkInterface} from "./TSNetworkInterface";

export class TRouterC {
    private tsNetworkInterface: TSNetworkInterface;
    private destinationMacAddress: string = "TNetworkInterface";
    constructor() {
        this.tsNetworkInterface = new TSNetworkInterface();
    }
    next(frame: Frame): void {
        frame.Header.SourceMACAddress = "TRouterC";
        frame.Header.DestinationMacAddress = this.destinationMacAddress;
        this.tsNetworkInterface.decapsulation(frame);
    }
}