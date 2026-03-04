import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Quote {
    id: bigint;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
    productInterest: string;
    phone: string;
}
export type Time = bigint;
export interface ContactInfo {
    emails: Array<string>;
    addresses: Array<string>;
    phones: Array<string>;
}
export interface backendInterface {
    getAllQuotes(): Promise<Array<Quote>>;
    getContactInfo(): Promise<ContactInfo>;
    submitQuote(name: string, company: string, email: string, phone: string, productInterest: string, message: string): Promise<bigint>;
}
