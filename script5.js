const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: Date.now(),
      type,
      amount,
    };
    return transaction;
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостатньо коштів на рахунку');
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    return this.transactions.find(transaction => transaction.id === id);
  },
  getTransactionTotal(type) {
    const total = this.transactions.reduce((sum, { type: t, amount }) => {
      return t === type ? sum + amount : sum;
    }, 0);
    return total;
  },
};
account.deposit(100); 
account.withdraw(30); 
console.log(account.getBalance()); 
console.log(account.getTransactionDetails(account.transactions[0].id));
console.log(account.getTransactionTotal(Transaction.DEPOSIT)); 
