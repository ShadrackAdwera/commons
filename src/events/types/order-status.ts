/*Order Statuses
created - order has been created but the ticket has not been reserved.

cancelled - ticket from which the order was created has already been reserved by another order, 
or order expires before payment,
or order has been cancelled.

awaiting:payment - order successfully reserved the ticket.

complete - order has reserved the ticket and user has paid the amount successfully.
*/

export enum OrderStatus { 
    Created = 'created',
    Cancelled = 'cancelled',
    AwaitingPayment = 'awaiting_payment',
    Complete = 'complete'
 }