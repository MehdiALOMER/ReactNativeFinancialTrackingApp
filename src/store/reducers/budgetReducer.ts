import { IBudget, IExpense } from '@/types/dataTypes';
import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
    name: 'budget',
    initialState: {
        budgetList: [
            { id: '1', name: 'Ocak 2024', totalAmount: 2000 },
            { id: '2', name: 'Şubat 2024', totalAmount: 1500 },
            { id: '3', name: 'Mart 2024', totalAmount: 2000 },
            { id: '4', name: 'Nisan 2024', totalAmount: 2500 },
            { id: '5', name: 'Mayıs 2024', totalAmount: 3000 },
            { id: '6', name: 'Haziran 2024', totalAmount: 3500 },
            { id: '7', name: 'Temmuz 2024', totalAmount: 4000 },
            { id: '8', name: 'Ağustos 2024', totalAmount: 4500 },
            { id: '9', name: 'Eylül 2024', totalAmount: 5000 },
            { id: '10', name: 'Ocak 1. Hafta 2024', totalAmount: 100 },
            { id: '11', name: 'Ocak 2. Hafta 2024', totalAmount: 100 },
            { id: '12', name: 'Ocak 3. Hafta 2024', totalAmount: 100 },
            { id: '13', name: 'Ocak 4. Hafta 2024', totalAmount: 100 },
        ] as IBudget[],
        expenseList: [
            { id: '1', budgetId: '1', description: 'Market', amount: 200 },
            { id: '2', budgetId: '1', description: 'Akaryakıt', amount: 300 },
            { id: '3', budgetId: '2', description: 'Market', amount: 250 },
            { id: '4', budgetId: '2', description: 'Akaryakıt', amount: 350 },
            { id: '5', budgetId: '2', description: 'Fatura', amount: 100 },
            { id: '6', budgetId: '3', description: 'Market', amount: 300 },
            { id: '7', budgetId: '3', description: 'Akaryakıt', amount: 400 },
            { id: '8', budgetId: '3', description: 'Fatura', amount: 150 },
            { id: '9', budgetId: '4', description: 'Market', amount: 350 },
            { id: '10', budgetId: '4', description: 'Akaryakıt', amount: 450 },
            { id: '11', budgetId: '4', description: 'Fatura', amount: 200 },
            { id: '12', budgetId: '5', description: 'Market', amount: 400 },
            { id: '13', budgetId: '5', description: 'Akaryakıt', amount: 500 },
            { id: '14', budgetId: '5', description: 'Fatura', amount: 250 },
            { id: '15', budgetId: '6', description: 'Market', amount: 450 },
            { id: '16', budgetId: '6', description: 'Akaryakıt', amount: 550 },
            { id: '17', budgetId: '6', description: 'Fatura', amount: 300 },
            { id: '18', budgetId: '7', description: 'Market', amount: 500 },
            { id: '19', budgetId: '7', description: 'Akaryakıt', amount: 600 },
            { id: '20', budgetId: '7', description: 'Fatura', amount: 350 },
            { id: '21', budgetId: '8', description: 'Market', amount: 550 },
            { id: '22', budgetId: '8', description: 'Akaryakıt', amount: 650 },
            { id: '23', budgetId: '8', description: 'Fatura', amount: 400 },
            { id: '24', budgetId: '9', description: 'Market', amount: 600 },
            { id: '25', budgetId: '9', description: 'Akaryakıt', amount: 700 },
            { id: '26', budgetId: '1', description: 'Fatura', amount: 100 },
            { id: '27', budgetId: '1', description: 'Market', amount: 25 },
            { id: '28', budgetId: '1', description: 'Akaryakıt', amount: 50 },
            { id: '29', budgetId: '1', description: 'Fatura', amount: 75 },
            { id: '30', budgetId: '1', description: 'Market', amount: 100 },
            { id: '31', budgetId: '1', description: 'Akaryakıt', amount: 125 },
            { id: '32', budgetId: '1', description: 'Fatura', amount: 150 },
        ] as IExpense[],
    },
    reducers: {
        addBudget: (state, action) => {
            state.budgetList.push(action.payload);
        },
        addExpense: (state, action) => {
            state.expenseList.push(action.payload);
        },
    },
});

export const { addBudget, addExpense } = budgetSlice.actions;

export default budgetSlice.reducer;