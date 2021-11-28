# Final Project- NFT Music Photography Photos

## About:
This is a marketplace designed for photographers to create NFT’s of their original photos which they can display and sell on the marketplace website. It also provides a place for fans to purchase their favorite artist photos and resell them on in the marketplace. Users will need a metamask wallet to participate with minting, purchases, and sales. 

## Steps to run on local/rinkby

1. Export your provate key for the owner of the two sol contracts
2. put that key in .env.local as: ```CONTRACT_PRIVATE_KEY=d9a12983....```
3. ```npm i``` to install the dependencies
4. 4. Go to infura and create your project
5. Copy your project id (rinkeby) to .env.local as ```INFURA_PROJECT_ID=....```
6. Copy the infura url (rinkeby) to .env.local as ```NEXT_PUBLIC_INFURA_URL=....```
7. ```npm run deploy-dev``` to compile and deploy contracts to rinkeby
8. Use a rinkeby faucet to get some test ether
9. Run the app using ```npm run dev ```
10. Go to http://localhost:3000

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

## Dependencies (copy, paste, install all of these)                                                                    
(1)***npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client axios***                                                                 
(2)***npm install add -D tailwindcss@latest postcss@latest autoprefixer@latest***                                        
(3)***npx tailwindcss init p***                                                                                          
(4)***npx hardhat***

## How to run this Project locally...

(1)In first terminal in root project folder run ***npx hardhat node***

(2)Log into metamask localhost 8545 on Chrome browser. If you do not have local host 8545 set up please set it up pointing to http://127.0.0.1:8545

(3)Copy the first account[0] private key generated in your terminal and import this into metamask

(4)Now in metamask click “account details” then “export private key”… copy the key
and paste it into the **p-key.txt** file. Save the file!

(5)In a second terminal…MAKE SURE YOU ARE IN PROJECT ROOT DIRECTORY FOLDER and run…. ***npx hardhat run scripts/deploy.js --network localhost***  This will return both contract addresses. 

(6)Go to **config.js** file and put those contract addresses that have been generated in quotes as they need to be strings. If the addresses were not automatically generated copy them in from the terminal into the file with quotes like this... Do not forget to save the file after changes are made! 

*export const nftmarketaddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'                                          
export const nftaddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'*

(7)Run ***npx hardhat test*** This should return 1 passing test however if you look at **sample-test.js** file in the **test** folder you will see there are many passing subtests within this one passing test.

(8)In the same terminal (second terminal)… ***npm run dev*** then copy and paste the provided webpage (http://localhost:3000/) into your webrowser. Please use Chrome. 

## HOW TO MINT, BUY, & SELL TOKENS

**Minting an NFT**- on the mint function page we enter Artist Name, Performance Date, and Price (**please put 1 ether**) and upload a jpeg file. There is a folder called **Pics **in the root project folder where you can select from a number of pics or you can use your own. Once you hit the mint button it should ask you to execute the transaction in metamask, then ask you to confirm it. If successful the token will be loaded onto both the Main Marketplace and the My Minted NFT’s page. 

**Buying an NFT-** on the Main Marketplace you can buy an NFT. Once you hit the “buy” button it should ask you to confirm the transaction in metamask.  If successful the NFT will be removed from the Main Marketplace and loaded onto the My Purchased NFT’s. 

### Troubleshooting:
*IF RUNNING INTO ERRORS WITH METAMASK reset the account you imported by going to “settings”, then “advanced”, then account “reset”. After this, switch off the network and back onto localhost 8545. If still getting errors after a reset than go to “settings”, “advanced” and turn on “Customize transaction nonce”. Now go back and execute a transaction. Put in 0 for the “nonce” for your first transaction and every one thereafter should populate automatically in succession.
