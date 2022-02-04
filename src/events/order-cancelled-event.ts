import { OrderStatus, Subjects } from "..";

export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt: string;
        ticket: {
            id: string;
            price: number;
        }
    }
}