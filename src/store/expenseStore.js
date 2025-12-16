import { create } from 'zustand';

const useExpenseStore = create((set) => ({
  expenses: [],
  
  addExpense: (expense) =>
    set((state) => ({
      expenses: [
        ...state.expenses,
        {
          id: Date.now(),
          ...expense,
          date: new Date().toISOString(),
        },
      ],
    })),
  
  deleteExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
  
  getTotal: () => {
    const state = useExpenseStore.getState();
    return state.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  
  getExpensesByCategory: () => {
    const state = useExpenseStore.getState();
    return state.expenses.reduce((acc, expense) => {
      const category = expense.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += expense.amount;
      return acc;
    }, {});
  },
}));

export default useExpenseStore;
