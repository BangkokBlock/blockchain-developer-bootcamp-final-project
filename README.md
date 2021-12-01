# Final Project- NFT Music Photography Photos

## About:
This is a marketplace designed for photographers to create NFT’s of their original photos which they can display and sell on the marketplace website. It also provides a place for fans to purchase their favorite artist photos and resell them on in the marketplace. Users will need a metamask wallet to participate with minting tokens. 
 ## Prerequisites:                                                                                                        
metamask wallet <br />
node js <br />
hardhat <br />
ethers <br />
hardhat-ethers <br />
hardhat-waffle <br />
ethereum waffle <br />
chai <br />
ipfs-http-client <br />
axios <br />
web3modal <br />
@openzeppelin <br />
tailwinds 

## Website url:
https://blockchain-developer-bootcamp-final-pro-git-ed01b6-bangkokblock.vercel.app/

## Video walk-through
https://streamable.com/2l99ij

## Steps to run on rinkeby testnet with hardhat.

1. Clone the project locally from the github repository.
2. In the root project folder run **```npm i```** to install the dependencies.
4. Open the project in your editor (VS Code) and create a file called ***.env.local***. See ***.env.example*** file to see an example. 
5. In metamask switch onto the Rinkeby network and export the private key of your MetaMask account. Copy that private key into .env.local as: **```CONTRACT_PRIVATE_KEY=d9a12983....```** See .env.example file to see an example.
6. Use a rinkeby faucet to get some test ether (*https://faucets.chain.link/*). You will need some Rinkeby test ETH to deploy the contracts and to mint tokens with Metamask.
7. Go to Infura and create your project under Rinkeby network
8. Copy your project id (rinkeby) to .env.local as **```INFURA_PROJECT_ID=....```** See .env.example
9. Copy the infura url (rinkeby) to .env.local as **```NEXT_PUBLIC_INFURA_URL=....```** See .env.example
10. Once your metamask private key, infura project Id, and Infura URL ID are all copied into the .env.local. Save the file. Now run **```npm run deploy-dev```** in your terminal. This will will compile and deploy the contracts to rinkeby using hardhat. This will return both contract addresses. **VERY VERY IMPORTANT** - The inital response to this command may say "Compilation Successful" or "Nothing to compile" wihtou returning the addresses, but if you wait anywhere from 30 seconds to 2 minutes it will indeed return both contract address. So please be patient as it can occasionlly take 1 to 3 minutes for the contracts to compile, deploy, and return the 2 contract addresses.
11. Run **```npx hardhat test```** to see passing tests.
12. Use your metamask account (on Rinkeby) to mint tokens. Again please be patient when executing transactions in Metamask. It may take anywhere from 30 seconds to 2 minutes for confirmations. Refresh your screen after minting tokens on the main marketplace page if you do not see a transaction appear after a couple minutes. Try another refresh again. See instructions below for more specfic info. on minting. 
 
## HOW TO MINT TOKENS

**Minting an NFT**- on the mint function page we enter Artist Name, Performance Date, and Price (**please put .0001 ether**) and upload a jpeg file. There is a folder called **Pics** in the root project folder where you can select from a number of pics or you can use your own. Once you hit the mint button it should ask you to execute the transaction in metamask, then ask you to confirm it. Please be patient when executing transactions in Metamask. It may take anywhere from 30 seconds to 2 minutes for confirmations. After the transaction is confirmed the token will be loaded onto both the Main Marketplace and the My Minted NFT’s page. Please refresh your screen a couple times if you do not see the token. 

#### Ethereum Address- 0x1DB8E46892DEf0C5576d31Fcd6daB68Cff0F6a91


