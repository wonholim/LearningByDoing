export interface HTTP {
    Host: string;
    RequestMethod: string;
    RequestURI: string;
    RequestVersion: string;
    Accept: string;
    UserAgent: string;
    Connection: string;
    Data: string;
}

interface TCPHeader {
    SourcePort: number;
    DestinationPort: number;
    Flags: string;
    Window: number;
    CheckSum: number;
    UrgentPointer: number;
    Payload: number;
}

interface IPHeader {
    Version: string;
    TimeToLive: number;
    Protocol: string;
    SourceAddress: string;
    DestinationAddress: string;
}

interface Ethernet {
    SourceMACAddress: string;
    DestinationMacAddress: string;
}

export interface Message {
    Headers: string;
    Protocol: HTTP;
}

export interface TCPSegment {
    Header: TCPHeader;
    TCPData: Message;
}

export interface IPDataGram {
    Header: IPHeader;
    InternetData: TCPSegment;
}

export interface Frame {
    Header: Ethernet;
    NetworkData: IPDataGram;
}