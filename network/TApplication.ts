import {Message} from "./TPacket";
import {TTransport} from "./TTransport";
import {TServer} from "./TServer";


export class TApplication {
    private tTransport: TTransport;
    constructor() {
        this.tTransport = new TTransport();
    }
    public encapsulation(url: string): void {
        /** 주소를 구조 분해 할당 */
        const [, http = 'empty', host = 'empty', uri = 'empty'] = url.match(/(https?):\/\/([^\/]+)\/(.+)/) || [];

        /** 응용 계층 패킷 생성 (Message) */
        const message: Message = {
            Headers: "Application",
            Protocol: {
                Host: host,
                RequestMethod: "GET",
                RequestURI: uri,
                RequestVersion: "HTTP/1.1",
                Accept: "text/html",
                UserAgent: "Mozilla/5.0 Safari",
                Connection: "keep-alive",
                Data: ""
            }
        };

        /** 전송 계층으로 이동 */
        this.tTransport.encapsulation(message);
    }
}