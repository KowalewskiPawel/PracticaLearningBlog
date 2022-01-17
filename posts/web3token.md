---
title: "What the WEB3? Understand WEB3 by Creating a Token Inside of a Node.js App"
date: "January 16 2022"
excerpt: "Before we dive into the code and start building our own crypto token, let's answer briefly the question what is the whole idea behind the WEB3, Cryptocurrencies, Decentralization, NFTs etc. Currently we are in so-called era of Web 2.0, what simply means that unlike WEB 1.0, where we could mainly read chunks of information from the web, now we can also interact with each other, and add our own blocks to this puzzle in form of posts, pictures, videos, or even likes. The problem here is that firstly we have to use some kind of 3rd party provider, and as a result the hosting service between us, holds our data."
cover_image: "/assets/posts/web3token.jpg"
---

## What is WEB3?

<br>

Before we dive into the code and start building our own crypto token, let's answer briefly the question what is the whole idea behind the WEB3, Cryptocurrencies, Decentralization, NFTs etc. Currently we are in so-called era of Web 2.0, what simply means that unlike WEB 1.0, where we could mainly read chunks of information from the web, now we can also interact with each other, and add our own blocks to this puzzle in form of posts, pictures, videos, or even likes. The problem here is that firstly we have to use some kind of 3rd party provider, and as a result the hosting service between us, holds our data. This leads to various issues, such as privacy concerns, ownership concerns, incompatibility with other services and so on. WEB3 on the other hand, tries to solve these issue, at least in some way. If you remember P2P networks such as Torrents, that used to be very infamous years ago, than you may already have a clue of what WEB3 is. Indeed, it's not a super revolutionary technology, rather it's just going back to the roots of the Internet and peer to peer connections where chunks of data are copied and spread among users of the given network. Additionally, blockchain is used at the top of it, to add another layer of security and **Immutability**. Blockchain in a most simplified form, is a kind of a Virtual Machine that runs on all of the supporter nodes (blockchain nodes), also very often called **miners** who store and process the whole data in exact same way. In other words, it can be said that blockchain is a state machine, that's state is maintained by all of the nodes in the given network. There are many networks like that, and they can be supported just by a few computers, up to thousands of them - Bitcoin for example.

<br>

**Decentralization** is another keyword here, as we have to store the same data on all of the computers that support the given network (miners), instead of having one source of truth like it takes places in case of centralized solutions (web 2.0). It's not a perfect solution, as it may lead to a huge energy consumption, it's very expensive and slow because every action that modifies the state, has to approved by the whole network and updated on every single computer supporting the network. Additionally, there is also hashing and finding the cryptographic solution to link the another block to the blockchain - what is the main reason why bitcoin miners spend so much money on the most fancy graphic cards. On the other hand, we get an ultimate security layer - the more computers there are in the network, the harder it gets to manipulate the data and attack the network. Most probably it is also one of the reason why Bitcoin and few other big cryptocurrencies are so expensive. Their value also derives from the scale of how many computers are supporting them, how many people had to spend a lot of money and time for the equipment, electricity, and the Internet bills.

<br>

## Architecture

<br>

There is a lot of hype around WEB3 possibly replacing WEB2 in the nearest future. However, after reading the intro you may already have clue that it not necessary a good idea. Even though, there are many advantages of decentralization and blockchain, it's rather good for storing very sensitive data, than for storing huge static files and other generic things. It would cost millions to decentralize literally everything on the Internet, plus everything could slow down a lot becoming almost unusable. Most of the time, the architecture of the Web3 apps is not very different from what we already know from Web2, and it's more of an extension to the current stack than the replacement. Below you can see the simplest representation of the web2 and web3 app. Some people also tend to think that blockchain can be a replacement for the traditional backend, what is partly true and even possible to do, but in any bigger production it would be too expensive and slow. That is why, blockchain is most of the time added at the top of this technologies, to add additional layer of security.

<br>

![Web2 vs Web3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2h2p9f6ar7pfc43672w.jpg)

<br>

## Tech Stack

<br>

In this particular tutorial, we are going to use several technologies, but the only prerequisite is knowing basics of JavaScript and having Node.js installed on your computer. Below you can find a list of the technologies, libraries, and services that we will be using in this tutorial, with related links and short description.

<br>

- [Node.js](https://nodejs.org/en/download/) - JavaScript Runtime
- [Metmask](https://metamask.io/) - Crypto Wallet that stores our address which is our ID number or profile in the decentralized world
- [Solidity](https://docs.soliditylang.org/en/v0.8.11/) - a programming language used for programming decentralized apps
- [Hardhat](https://hardhat.org/) - a JavaScript library that works as an environment for compiling, deploying, testing, and testing decentralized applications written in Solidity
- [Alchemy](https://www.alchemy.com/) - a service that works as a bridge between our local project and real blockchain

<br>

Node.js (especially versions 16 and higher) is the only thing that you will need to continue, rest of the things will be explained later, but if you want you can install Metamask browser extension and create a free account on Alchemy. Additionally, you can install some extension for Solidity in your favorite editor (such as VS Code) to highlight the syntax.

<br>

## Coding Time

<br>

First of all, open some empty folder where you would like to create the project, and then open the terminal. From the terminal we will create a new directory, initiate a new node.js project, and install hardhat library. Just enter the following commands:

<br>

```
mkdir tokenApp
cd tokenApp
npm init -y
npm install hardhat --save-dev
```

<br>

Once you have the project and hardhat library ready, it's time to create a new template structure for our future decentralized application. Just like for example in React we have `npx create-react-app <nameoftheapp>` command, very similarly we create an example project with hardhat. For this purpose, enter following command: `npx hardhat`. This command will start the process of creating a new application, just hit enter for everything.

<br>

![Hardhat](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6e36jmb7vpc0kuo22dcz.png)

<br>

After installing all of the dependencies your package.json file should look more or less like that:

<br>

```
{
  "name": "tokenApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@nomiclabs/hardhat-ethers": "^2.0.4",
    "@nomiclabs/hardhat-waffle": "^2.0.1",
    "chai": "^4.3.4",
    "ethereum-waffle": "^3.4.0",
    "ethers": "^5.5.3",
    "hardhat": "^2.8.2"
  }
}
```

<br>

If some of the libraries are missing, feel free to install them manually. Now it's also the time to open the editor in the given directory (`code .` command should open VS Code). When you check the content of the directory you should see 3 new folders:

<br>

- contracts
- scripts
- test

<br>

In the first one, we will add Solidity code which will be later compiled to the machine code by hardhat library. The second one is for JavaScript scripts, that will let us deploy or/and interact with our application on the blockchain. Test just like name reveals, is the place where we store test files to check if our code written in Solidity works fine, before deploying it to the blockchain. For now, you can just delete all of the files inside of those folders, as we will create everything from scratch. There should be also one more file called `hardhat.config.js` in the main directory, and it's the file which will work as a configuration for our whole project but will move on to it later.

<br>

## Hello Solidity!

<br>

Finally, it's the time when we finally start to write some code in another language - Solidity, that will eventually live on the blockchain. But hey, what is Solidity? Solidity is a programming language that looks very similar to JavaScript, but with a few major differences:

<br>

- Statically typed
- Object Oriented
- Compiled

  <br>

  Even though, it's a completely different language, if you have experience with JavaScript or other similar language, you should be familiar with 80% of the syntax. Now, open `contracts` folder and create a new file called `HelloWorldToken.sol`. Inside of this file add the following code:

<br>

```
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract HelloWorldToken {
    string public name = "HelloToken";
    string public symbol = "HWT";
    uint public totalSupply = 1000;
    mapping(address => uint) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint) {
        return balances[account];
    }
}
```

<br>

Just take a while and study the code, if you are familiar with programming in general the code shouldn't be very difficult to understand. There are a few things that may look odd though:

<br>

- First two lines indicate the license and Solidity compiler version
- **contract** - basically just like **class** in other languages
- **mapping** - something like **map** in JavaScript or dictionary in other languages, that let's store key: value pairs
- \*_address_ - a special type of hexadecimal string with the public address of a given person's wallet
- **msg.sender** - a global variable that always points to the address of the person who called the given function
- **constructor** runs only once, and it happens when we deploy the instance of our contract to the blockchain

<br>

## Compilation Time

<br>

Like it was mentioned before, Solidity is a compiled language and has to be compiled to the binary code, before we deploy it to the blockchain. Our application/ smart contract is currently written in Solidity, but blockchain itself cannot understand it. In order to compile our Solidity code to the binary code, run following command `npx hardhat compile`.

<br>

## Is ABI an API?

<br>

When it comes to the traditional apps, we have something called API (Application Programming Interface) which is a way of interacting with a given code between two abstract environments. In the world of Web3 a very similar pattern exists, but here it's called ABI (Application Binary Interface) which is in fact some sort of a lower level of API. When we compile our contract, a new directory is created in the root of the project, and when you go to the

<br>

```
./artifacts/contracts/HelloWorldToken.sol/HelloWorldToken.json
```

<br>

you will see that there a json file with a set of instructions and the bytecode of our application. Using this set of instructions, we will interact with the smart contract, after it's deployment to the blockchain.

<br>

## Testing

<br>

Do you remember that blockchain is **immutable** ? Well, this is one of the reasons why we have to be very careful and test our contract before deploying it to the blockchain. Moreover, as you know our contracts may be related with a huge money, so the smallest mistake in the code may cost millions. Fortunately, we can test our contract without need to pay for anything or even without deploying it to the blockchain. Instead, we can create a local blockchain on our computer, that will simulate the real one, and execute the functions and test on this local instance. Hardhat also comes with the necessary tools, so it will deal with all of the logic of creating the local blockchain behind the scenes. Go to the `test` folder and create a new file called **HelloWorldToken.test.js**. Inside of this file you can add the following code:

<br>

```
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorldToken", function () {
  let token;

  const tokenReceiver = "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f";

  beforeEach(async () => {
    const HelloWorldToken = await ethers.getContractFactory("HelloWorldToken");
    token = await HelloWorldToken.deploy();
    await token.deployed();
  });

  it("Should return the name of the token", async function () {
    expect(await token.name()).to.equal("HelloToken");
  });

  it("Should return the symbol of the token", async function () {
    expect(await token.symbol()).to.equal("HWT");
  });

  it("Should return a total supply of the token", async function () {
    const totalSupply = await token.totalSupply();

    expect(String(totalSupply)).to.equal("1000");
  });

  it("Should transfer tokens to the other account", async function () {
    // given

    const sendTransaction = await token.transfer(tokenReceiver, 200);

    // when

    await sendTransaction.wait();

    const addressBalance = await token.balanceOf(tokenReceiver);

    // then

    expect(String(addressBalance)).to.equal("200");
  });
});
```

<br>

After that, go back to the terminal and run the test by executing the following command `npx hardhat test`

<br>

## Predeployment

<br>

Our Solidity code is ready and compiled, tests are passing, but still it's available only on our local machine, so what is the purpose of it? It's like having website only on our hard drive. To let others interact with it, we have to deploy it to the real blockchain, and to do that we will need a crypto wallet and some blockchain node. We need the first one, to pay for the deployment as deployment process is a "write" operation, and it does introduce changes to the blockchain which have to be approved by all of the supporters what generates costs. We also need a blockchain node, to connect with a given network and upload our code from our computer to the blockchain network. In fact there are many wallets, and node providers but for the sake of simplicity we will stick to Metamask, Alchemy, and Ethereum Rinkeby Test Network. First of all we have to create a Metamask wallet, the process is super simple but if you have some problems you can just follow the guid that can be found [here](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask). After setting up the Metamask account, there is one more important detail, as we are not going to deploy our application to the Ethereum Mainnet because every operation there costs real Ethereum and real money. Instead we are going to use Ethereum Rinkeby testnet, which just like name says is just a test version of Ethereum network, where we also have to pay for the operations, but we can get some free test Ethereum from a faucet. Before we get some free test Ethereum, we should switch to the test network in our Metamask - to do that just click on the Metamask extension, click networks and select Rinkeby. If you cannot see any test networks, you may need to turn them on from the options. Nevertheless, you should see something like on the picture below.

<br>

![Metamask Rinkeby](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uuuk9jj5kybx28geab64.png)

<br>

When your Metamask account is ready, it's time to get some free test Ethereum. You can get some from [here](https://faucets.chain.link/rinkeby) Just copy-paste your public address from the metamask, enter the address, and submit. You should get 0.1 eth on your account within a couple of minutes. It will be more than enough to deploy our application. There is one more point missing and it's a blockchain node. Actually, we could run our own node but it would be very complicated and time consuming, that is why we can use services such as [Alchemy](https://alchemy.com/?r=552689cf93f064ec). Just go to [Alchemy](https://alchemy.com/?r=552689cf93f064ec) and create a new account. The process is quite straightforward so I won't explain it here, after registration create a new app an be sure to select **Ethereum** Chain, **Staging** environment and **Rinkeby** network. It should look more or less like on the picture below.

<br>

![Alchemy](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ba5s6vsanq68b8g4lieb.png)

<br>

Great! Now we have our wallet ready, with some test Eth on it, plus we also have a portal to a blockchain. It's finally time for the last corrections and deployment. Before we deploy our app, we need to configure the local environment and create a script for the deployment. Go back to your project, open `hardhat.config.js` file, and add the following code to it:

<br>

```
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
```

<br>

As you may see we are using some sensitive information here, and we need dotenv library to support .env files. Open terminal and input following command `npm install dotenv`. After it's downloaded, create ".env" file in the root directory of the project and add a following keys:

<br>

```
   API_URL=<ALCHEMY_API_URL>
   API_KEY=<THE_LAST_PART OF_THE_API_URL>
   PRIVATE_KEY=<YOUR_WALLET'S_PRIVATE_KEY>
   CONTRACT_ADDRESS=<DEPOLOYED_TOKEN_ADDRESS>
```

<br>

For now, you can skip the CONTRACT_ADDRESS key, while the API_URL and API_KEY can be found on the Alchemy website under "VIEW KEY" button, as a "HTTP" key. And your private key to your address can be extracted from the Metamask like [that](https://metamask.zendesk.com/hc/en-us/articles/360015289632) However, **NEVER EVER SHARE YOUR PRIVATE KEY WITH ANYONE**. That is why, I also suggest not using this account for real transactions.

<br>

## Deployment

<br>

Now, it's final time to deploy our smart contract to the blockchain, there is only one more file to add and we are ready to deploy. Open scripts folder and create a file called `deploy.js`, inside of it add the following code.

<br>

```
(async () => {
  try {
    const HelloWorldToken = await ethers.getContractFactory("HelloWorldToken");

    const deployedToken = await HelloWorldToken.deploy();

    console.log("Contract deployed to address:", deployedToken.address);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

```

<br>

The last point is executing a following command:

<br>

```
npx hardhat run scripts/deploy.js --network rinkeby
```

<br>

After that you should see something like that:

<br>

```
Contract deployed to address: 0xc8B329B720bD37aAb9A4B2D9Fe61AF3d4EF8C4eb
```

<br>

Congratulations! Your contract has been successfully deployed to the blockchain! :)

<br>

## Interaction

<br>

Now our contract is ready, tested, and deployed but how can we interact with it? Copy the address of the contract to the .env file, open scripts folder, create a new file, call it "interact.js", and add the following code:

<br>

```
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/HelloWorldToken.sol/HelloWorldToken.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "rinkeby"),
  API_KEY
);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldTokenContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

(async () => {
  process.stdout.write("Fetching the data. Please wait");
  const dotsIncrement = setInterval(() => {
    process.stdout.write(".");
  }, 1000);

  const tokenName = await helloWorldTokenContract.name();
  const tokenSymbol = await helloWorldTokenContract.symbol();
  const tokenSupply = await helloWorldTokenContract.totalSupply();

  clearInterval(dotsIncrement);
  process.stdout.write("\n");

  console.log(
    `
       Name: ${tokenName}
       Symbol: ${tokenSymbol}
       Supply: ${String(tokenSupply)}`
  );
})();
```

<br>

This is the simplest way of interacting with our token contract, to run the code above, open terminal and input the command:

<br>

```
npx hardhat run scripts/interact.js
```

<br>

If everything goes OK, you should see the basic information about your token, right from the blockchain. Moreover, you can also add your token to the Metamask wallet. To do that just click on the `import token` button, then paste the address of your token contract and write 0 as a decimal places. When you click import, you should see 1000 Tokens. When you go to **"https://rinkeby.etherscan.io/token/"** and add the address of your contract to the end of the link, you should also see some extra info about your token, such as a list of the holders. Currently it will be just you, since you were the person who deployed the contract, and as you may remember in the `constructor` we set the total supply of the token, to our own account.

<br>

## Conclusion

<br>

Repository with the related code can be found [here](https://github.com/KowalewskiPawel/Solidity-Token-Templates)

<br>

Congratulations once again! Now you can send your token to the others, but not much more than that. Our Token is a custom token, that doesn't meet any standards, which of course exists in the crypto world. Even if you wanted to deploy it to the mainnet, it would be probably a waste of money. Also this was just a demonstration, you can treat it as a boilerplate to create your own tokens or NFTs, but you should definitely write them according to the standards, or build a decentralized app. What is more, is that I have used Hardhat, Metamask, and Ethereum Rinkeby testnet, but it there are plenty more of other technologies out there which work in a similar way. Once you get the concept of the smart contract world, changing the technology should be an obstacle for your. There is also one more part missing, and it's of course a frontend app to connect it all, in a concise whole but since this tutorial is already very long, you may find the tutorial about that issue in the nearest future.
