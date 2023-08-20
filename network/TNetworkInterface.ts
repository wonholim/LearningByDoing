interface HTTP {
    Host: string;
    RequestMethod: string;
    RequestURI: string;
    RequestVersion: string;
    Accept: string;
    UserAgent: string;
    Connection: string;
}
export interface Message {
    Headers: string;
    Protocol: HTTP;
}