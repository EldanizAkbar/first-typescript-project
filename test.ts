import { v4 as uuidv4 } from 'uuid';

enum CurrencyEnum {
    USD = 'USD',
    UAH = 'UAH',
}

class Transaction {
    id: string;
    amount: number;
    currency: CurrencyEnum;

    constructor(amount: number, currency: CurrencyEnum) {
        this.id = uuidv4();
        this.amount = amount;
        this.currency = currency;
    }
}

class Card {
    transactions: Transaction[] = [];

    addTransaction(arg1: Transaction | number, arg2?: CurrencyEnum): string {
        if (arg1 instanceof Transaction) {
            this.transactions.push(arg1);
            return arg1.id;
        } else if (typeof arg1 === 'number' && arg2) {
            const transaction = new Transaction(arg1, arg2);
            this.transactions.push(transaction);
            return transaction.id;
        } else {
            throw new Error('Invalid arguments for addTransaction');
        }
    }

    getTransaction(transactionId: string): Transaction | undefined {
        return this.transactions.find((t) => t.id === transactionId);
    }

    getBalance(currency: CurrencyEnum): number {
        return this.transactions
            .filter((t) => t.currency === currency)
            .reduce((total, t) => total + t.amount, 0);
    }
    showAllTransactions(): Transaction[] {
        return this.transactions;
    }
}

const card = new Card();

const transactionId1 = card.addTransaction(234, CurrencyEnum.USD);
const transactionId2 = card.addTransaction(543, CurrencyEnum.UAH);
const transactionId3 = card.addTransaction(500, CurrencyEnum.USD);
const transactionId4 = card.addTransaction(100, CurrencyEnum.UAH);


console.log('Transaction 1:', card.getTransaction(transactionId1));
console.log('Transaction 2:', card.getTransaction(transactionId2));
console.log('Transaction 3:', card.getTransaction(transactionId3));
console.log('Transaction 4:', card.getTransaction(transactionId4));

console.log('-----------------------------------------------------');

console.log('Total balance in USD:', card.getBalance(CurrencyEnum.USD));
console.log('Total balance in UAH:', card.getBalance(CurrencyEnum.UAH));
