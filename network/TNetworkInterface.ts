import {Frame, IPDataGram} from "./TPacket";
import {TRouterA} from "./TRouterA";

export class TNetworkInterface {
    private tRouterA: TRouterA;
    private destinationMacAddress: string = "TRouterA";
    constructor() {
        this.tRouterA = new TRouterA();
    }
    encapsulation(ipDataGram: IPDataGram): void {
        /** 프레임 생성 */
        const frame: Frame = {
            Header: {
                SourceMACAddress: "TClient",
                DestinationMacAddress: this.destinationMacAddress
            },
            NetworkData: ipDataGram
        }
        this.tRouterA.next(frame);
    }
}