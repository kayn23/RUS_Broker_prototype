import PaymentStatus from "../types/PaymentStatus";

interface IPayment {
    id: number
    status: PaymentStatus
    payment_link: string | null
    order_id: number
}

export default IPayment