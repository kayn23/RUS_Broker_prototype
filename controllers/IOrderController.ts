import IOrder from "../models/IOrder";
import IPayment from "../models/IPayment";
import { RedirectOrderData, UpdateOrderParams } from "../types/OrderControllerTypes";

interface IOrderController {
    all(): IOrder[]
    show(id: number): IOrder
    create(): IOrder
    update(params: UpdateOrderParams): IOrder
    create_payment(): IPayment
    check_payment(payment_data: string): string
    payment_redirect(payment_data: string): RedirectOrderData
}

export default IOrderController