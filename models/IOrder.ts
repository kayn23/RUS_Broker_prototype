import OrderStatus from '../types/OrderStatus'
import IFile from './IFile'
import IIncome from './IIncome'
import IPayment from './IPayment'

interface IOrder {
    id: number
    status: OrderStatus
    src_files: IFile[]
    result_files: IFile[]
	incomes: IIncome[]
	payments: IPayment[]
    user_id: number
}

export default IOrder