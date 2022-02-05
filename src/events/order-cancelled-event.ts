import { OrderStatus, Subjects } from "..";

export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        version: number;
        status: OrderStatus;
        userId: string;
        ticket: {
            id: string;
            price: number;
        }
    }
}