export interface Expense {
    title: string;
    type: string;
    date: Date;
    amount: number;
}


export type ExpenseView = Omit<Expense, 'date'> & {
  date: string;
}
