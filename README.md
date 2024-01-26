# First TypeScript Project

## Task

Technical Requirements:

 - Create an enum called CurrencyEnum with values USD and UAH.
 - Create a class called Transaction that has Id (a unique transaction identifier), Amount (the amount of money), and Currency (the currency, using the mentioned enum). The Id should be generated when a new instance of the class is created (using uuid). Other parameters are passed to the constructor.
 - Create a class called Card. It should contain a list of transactions and the following methods:
 - The AddTransaction method that takes a Transaction as input. It should add the transaction to the list of transactions inside the card and return the Id of the transaction.
 - Overload the AddTransaction method to accept Currency and Amount as input. It should create a new transaction, add it to the list of transactions inside the card, and return the Id of the transaction.
 - The GetTransaction method that takes an Id as input and returns the transaction from the card's list with the specified Id.
 - The GetBalance method that takes Currency as input and returns the total amount of money for all transactions on the card in the specified currency.
 - All the above conditions should be implemented using TypeScript and type capabilities to the maximum extent possible.
 - Create a test.ts file to demonstrate the usage of the Card entity.


## Prerequisites

- Node.js and npm installed

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/EldanizAkbar/first-typescript-project.git
