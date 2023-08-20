import {Message} from "./TPacket";
import {TServer} from "./TServer";


export class TSApplication {
    private tServer: TServer;
    constructor() {
        this.tServer = new TServer();
    }
    decapsulation(TCPData: Message) {
        this.tServer.request(TCPData.Protocol);
    }
}