import {Frame} from "./TPacket";
import {TServer} from "./TServer";
import {TNetworkInterface} from "./TNetworkInterface";

export class TRouterC {
    private tNetworkInterface: TNetworkInterface;
    private destinationMacAddress: string = "TNetworkInterface";
    constructor() {
        this.tNetworkInterface = new TNetworkInterface();
    }
    next(frame: Frame): string {
        frame.Header.SourceMACAddress = "TRouterC";
        frame.Header.DestinationMacAddress = this.destinationMacAddress;
        this.tNetworkInterface.decapsulation(frame);
        return "";
    }
}