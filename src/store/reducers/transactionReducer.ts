import { ITransaction } from '@/types/dataTypes';
import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactionList: [
            { id: '1', amount: 500, category: 'Salary', date: '2023-02-01', type: 0 }, // type: 0 -> income
            { id: '2', amount: 100, category: 'Groceries', date: '2023-02-03', type: 1 }, // type: 1 -> expense
            { id: '3', amount: 200, category: 'Rent', date: '2023-02-05', type: 1 },
            { id: '4', amount: 300, category: 'Salary', date: '2023-02-07', type: 0 },
            { id: '5', amount: 150, category: 'Groceries', date: '2023-02-09', type: 1 },
            { id: '6', amount: 250, category: 'Rent', date: '2023-02-11', type: 1 },
            { id: '7', amount: 400, category: 'Salary', date: '2023-02-13', type: 0 },
            { id: '8', amount: 50, category: 'Groceries', date: '2023-02-15', type: 1 },
            { id: '9', amount: 100, category: 'Rent', date: '2023-02-17', type: 1 },
            { id: '10', amount: 600, category: 'Salary', date: '2023-02-19', type: 0 },
        ] as ITransaction[],
    },
    reducers: {
        addTransaction: (state, action) => {
            state.transactionList.push(action.payload);
        }
    },
});

export const { addTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;