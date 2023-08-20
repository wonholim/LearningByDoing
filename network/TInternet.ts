import {IPDataGram, TCPSegment} from "./TPacket";
import {TNetworkInterface} from "./TNetworkInterface";
import {TTransport} from "./TTransport";

export class TInternet {
    private tNetworkInterface: TNetworkInterface;
    constructor() {
        this.tNetworkInterface = new TNetworkInterface();
    }
    encapsulation(tcpSegment: TCPSegment): void {
        /** 캡슐화 과정 */
        const ipDatagram: IPDataGram = {
            Header: {
                Version: "IPv4",
                TimeToLive: 10,
                Protocol: "TCP",
                SourceAddress: "TBrowser",
                DestinationAddress: "TServer"
            },
            InternetData: tcpSegment
        }
        this.tNetworkInterface.encapsulation(ipDatagram);
    }
}