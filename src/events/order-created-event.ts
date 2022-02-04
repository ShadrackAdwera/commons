import { OrderStatus } from "../events/types/order-status";
import { Subjects } from "./subjects";

export interface OrderCreated {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt: string;
        ticket: {
            id: string;
            price: number;
        };
    }
}