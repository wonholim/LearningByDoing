import {Message} from "./TNetworkInterface";
import {TTransport} from "./TTransport";


export class TApplication {
    private tTransport: TTransport;
    constructor() {
        this.tTransport = new TTransport();
    }
    public encapsulation(url: string): boolean {
        const [, http = 'empty', host = 'empty', uri = 'empty'] = url.match(/(https?):\/\/([^\/]+)\/(.+)/) || [];
        console.log(http, host, uri);
        const message: Message = {
            Headers: "Application",
            Protocol: {
                Host: host,
                RequestMethod: "GET",
                RequestURI: uri,
                RequestVersion: "HTTP/1.1",
                Accept: "text/html",
                UserAgent: "Mozilla/5.0 Safari",
                Connection: "keep-alive"
            }
        };
ß
        this.tTransport.encapsulation(message);
        return false;
    }
}