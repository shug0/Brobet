[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/shug0/brobet)

# 👐 Bro Bet 
Brobet is a app for bet with your friends with virtuals but secured tokens.

## 🏁 Get Starded 
Enter your Firebase credentials : 
* Firebase Web `constants/credentials/client.js`
* Firebase Admin SDK `constants/credentials/server.js`

Brobet is build with Yarn. (But you can use npm)

### 👟 Commands

* **Linting** -> `yarn run test`
* **Fix** Linting -> `yarn run fix`
* **Run dev** server -> `yarn run dev`
* **Build** the app -> `yarn run build`
* **Run the builded** app -> `yarn run start`
* **Prepare the build** for hosting -> `yarn run export`
* **Build the app** for production and **host it with Now**. -> `yarn run deploy`

## 🛠 Technical 
### Libraries
* Next.js (React + Next router system)
    * React JS
    * Styled Component
    * yup (object validation for form & server payload)
* Firebase (Auth & Firestore)
  * Firebase Web (client)
  * Firebase Admin SDK (server)

### Guideline
This project use the [Standard JS](https://standardjs.com/) syntax.

## 🍔 Features

* Auth 
    * [X] Login & logout
    * [X] Signup
* Tokens (virtual money)
    * [X] Transaction system
        * [X] Logging all transactions in history
        * [X] Can't create tokens, only transfers from main (bank) or users wallets
        * [X] Can't create a transactions if the money is not available
        * [X] The transactions are run with firebase transaction mode wich allow us to don't make set if the data has changed
* Wallets 
    * When registering a new user theses taks are done :
        * [X] Creating the user in firebase auth
        * [X] Creating the user in firebase store with auth UID
        * [X] Creating a transaction with status "initialDeposit" for giving the starter tokens for the user
        
### Database Rules 
The tokens transactions are only managed on the server side and can be done by a authentified users (auth token is validated on server side).

For now only the admins can make transactions request to the server. (Admins lists are stored on the firestore)

The users can only read their wallets amount.
The users can read & edit their profile informations.

