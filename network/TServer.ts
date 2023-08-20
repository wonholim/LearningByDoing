import {HTTP} from "./TPacket";
import fs from "node:fs";
export class TServer {

    request(protocol: HTTP): void {
        if (fs.existsSync(`./${protocol.RequestURI}`)) {
            const html: Buffer = fs.readFileSync(`./${protocol.RequestURI}`);
            console.log(html.toString());
        }
    }
}