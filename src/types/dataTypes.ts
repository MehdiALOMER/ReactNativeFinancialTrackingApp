export interface IUser {
    username: string;
    password: string;
}
export interface ITransaction {
    id: string;
    amount: number;
    category: string;
    date: string;
    type: number | string; // 0 -> income, 1 -> expense
}

export interface IBudget {
    id: string;
    name: string;
    totalAmount: number;
}
export interface IExpense {
    id: string;
    budgetId: string;
    description: string;
    amount: number;
}