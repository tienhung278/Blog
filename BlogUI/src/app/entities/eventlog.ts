export interface Eventlog {
    id: number,
    eventType: string,
    createdAt: string,
    createdBy: string,
    content: string,
    transactionId: string
}
