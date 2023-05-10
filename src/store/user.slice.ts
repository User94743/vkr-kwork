import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Ticket} from "../types/TypeProps";

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

export interface DataServer {
    id: number | null
    email: string
    avatarSrc: string
    tickets: Ticket[]
    data: Data
}

const initialState: Data = {
    id: null,
    email: false,
    firstName: '',
    lastName: '',
    middleName: '',
    description: '',
    avatarSrc: '',
    tickets: []
}
export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state:Data, action: PayloadAction<DataServer>) => {
            state.id = action.payload.id
            state.email = action.payload.email;
            state.firstName = action.payload.data.firstName;
            state.lastName = action.payload.data.lastName;
            state.middleName = action.payload.data.middleName;
            state.description = action.payload.data.description;
            state.avatarSrc = action.payload.avatarSrc;
            state.tickets = action.payload.tickets;
        },
        removeUser: (state:Data) => {
            state.id = null
            state.email = false
            state.firstName = ''
            state.lastName = ''
            state.middleName = ''
            state.description = ''
            state.avatarSrc = ''
            state.tickets = []
        },
        setTickets: (state:Data, action:PayloadAction<Ticket[]>) => {
            state.tickets = action.payload
        }
    }
})


export const UserActions = UserSlice.actions
export const UserReducer = UserSlice.reducer