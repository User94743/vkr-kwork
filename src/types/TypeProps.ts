export interface DataServer {
    id: number | null
    email: string
    avatarSrc: string
    tickets: Ticket[]
    data: Data
}
export interface Data {
    id: null | number
    email: string | false
    firstName: string
    lastName: string
    middleName: string
    description: string
    avatarSrc: string
    tickets: Ticket[]
}
export interface Vacancy {
    title: string;
    experience: string;
    image: string;
    description: string;
    salary: string;
}
export interface Location {
    id: number
    img: string
    name: string
    title: string
}
export interface Event {
    id: number;
    date: string;
    description: string;
    title: string;
    imageUrl: string;
}
export interface AchievementProps {
    title: string;
    description: string;
    image: string;
}
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