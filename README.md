# Blockchain Sketches
Sketches of wallet integration and other blockchain smart contract functionality.

This repository is basically an elaborate Gist with some example code. Don't expect this code to be suitable for any kind of production environment. It's just a rough reference.

## Run

Install: 

* Node.js
* Yarn package management for Node.js
* MetaMask chrome browser extension. This is your Ethereum Wallet.
* Ganache (a test blockchain). Launch it. Set your ganache RPC port to `HTTP://0.0.0.0:8545`

**MetaMask Setup:**

* Set your MetaMask wallet to point to your Ganache blockchain at http://localhost:8545
* Create a new account from "import". Paste in the private key from the generated test accounts in your Ganache blockchain test simulator.
* When you reload the Ganache test blockchain you will need to delete the transaction information from previous interactions with the old blockchain test data. To do this go to Account > Settings > Advance > Reset Account.

**Setup this code:**
```
git clone git@github.com:aquabu/blockchain_sketches.git
cd blockchain_sketches

yarn install
yarn setup
yarn dev

open http://localhost:8080
```

## Approach

* Quick sketches - not the prettiest code, but clean enough to think about
* Low ceremony examples
* Fairly minimal use of libraries
* No or limited tests except where it helps me think more clearly or illustrates usage
* Remember I said this isn't production code

## TODO

* ERC1404 whitelist examples
* DAO Integration Example
* Binance chain integration through Trust Wallet