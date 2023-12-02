/* This code is saved in the file "sophisticated_code.js" and it showcases a banking system that simulates transactions, account management, and customer interactions. It is a complex and elaborate system with advanced features and functionalities. */

// ======================================================================== //
// ========================= BANKING SYSTEM =============================== //
// ======================================================================== //

// Define classes for Bank, Customer, and Account
class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  removeCustomer(customer) {
    const index = this.customers.indexOf(customer);
    if (index >= 0) {
      this.customers.splice(index, 1);
    }
  }
}

class Customer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  removeAccount(account) {
    const index = this.accounts.indexOf(account);
    if (index >= 0) {
      this.accounts.splice(index, 1);
    }
  }

  getTotalBalance() {
    return this.accounts.reduce((acc, account) => acc + account.balance, 0);
  }
}

class Account {
  constructor(id, type, balance) {
    this.id = id;
    this.type = type;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'Deposit', amount: amount });
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ type: 'Withdrawal', amount: amount });
    } else {
      console.log('Insufficient balance!');
    }
  }
}
// End of class definitions

// Create a bank instance
const myBank = new Bank('MyBank');

// Create customers
const customer1 = new Customer('John Doe', 30);
const customer2 = new Customer('Jane Smith', 25);

// Create accounts for customers
const account1 = new Account('A1', 'Savings', 1000);
const account2 = new Account('A2', 'Checking', 500);

// Add accounts to customers
customer1.addAccount(account1);
customer2.addAccount(account2);

// Add customers to the bank
myBank.addCustomer(customer1);
myBank.addCustomer(customer2);

// Perform banking operations
account1.deposit(500);
account1.withdraw(200);
account2.deposit(1000);
account2.withdraw(300);

// Print total balance for each customer
console.log(`Total balance for ${customer1.name}: $${customer1.getTotalBalance()}`);
console.log(`Total balance for ${customer2.name}: $${customer2.getTotalBalance()}`);

// Remove an account from a customer
customer1.removeAccount(account1);

// Remove a customer from the bank
myBank.removeCustomer(customer2);

// Print the updated list of customers
console.log(myBank.customers);

// ======================================================================== //
// ========================= END OF CODE ================================== //
// ======================================================================== //
