export interface Ticket {
    id?: number;
    name: string;
    dateEvent: string;
    datePurchase: string;
}

export interface Category {
    id: number
    title: string
    description: string
    img: string
    creator: string
    yearCreate: number
}