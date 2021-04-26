import IIncome from "../models/IIncome";
import { UpdateIncomeRequest, CreateIncomeRequest } from "../types/IncomeControllerTypes";

interface IIncomeController {
    all(): IIncome[]
    show(id: number): IIncome
    create(params: CreateIncomeRequest): IIncome
    update(params: UpdateIncomeRequest): IIncome
    destroy(id): IIncome
}

export default IIncomeController