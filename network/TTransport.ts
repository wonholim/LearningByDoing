import {TInternet} from "./TInternet";
import {Message, TCPSegment} from "./TPacket";
import {TApplication} from "./TApplication";


export class TTransport {
    private tInternet: TInternet;
    constructor() {
        this.tInternet = new TInternet();
    }

    public encapsulation(message: Message): void {
        /** TCP 프로토콜만 구현 */
        const tcpSegment: TCPSegment = {
            Header: {
                SourcePort: 54321,
                DestinationPort: 80,
                Flags: "이걸 어떻게 구현해",
                Window: 2048,
                CheckSum: 0xa41c,
                UrgentPointer: 0,
                Payload: JSON.stringify(message).length
            },
            TCPData: message
        };

        this.tInternet.encapsulation(tcpSegment);
    }
}