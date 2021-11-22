Final Project- NFT Music Photography Photos

Github- https://github.com/BangkokBlock/blockchain-developer-bootcamp-final-project.git

After you have cloned the project locally install the dependencies in the root project folder

Dependencies (copy, paste, install all of these)…
(1) npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client axios 
(2) npm install add -D tailwindcss@latest postcss@latest autoprefixer@latest 
(3) npx tailwindcss init – p 
(4) npx hardhat


How to run this Project locally….
(1)In first terminal in root project folder run npx hardhat node

(2)Log into metamask on localhost 8545

(3)Copy the first account[0] private key generated in your terminal and import this into metamask

(4)Now in metamask click “account details” then “export private key”… copy the key
and paste it into the p-key.txt file 

(5)In a second terminal…MAKE SURE YOU ARE IN PROJECT ROOT DIRECTORY FOLDER and run…. npx hardhat run scripts/deploy.js --network localhost  This will return both contract addresses. 

(6)Go to config.js file and put those contract addresses that have been generated in quotes as they need to be strings. If the addresses were not automatically generated copy them in from the terminal into the file with quotes like this...
export const nftmarketaddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
export const nftaddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'

(7)Run npx hardhat test This should return 1 passing test however if you look at sample-test.js in the test folder you will see there are many passing subtests within this one passing test.

(8)In the same terminal (second terminal)… npm run dev then enter the webpage 

(9)Minting a token- on the mint function page we enter Artist Name, Performance Date, and Price (please put 1 ether) and upload a jpeg file. There is a folder called Pics in the root project folder where you can select from a number of pics or use your own. Once you hit the mint button it should ask you to execute the transaction in metamask, then ask you to confirm it.  If successful the token will be loaded onto the Main Marketplace and the My Minted NFT’s page. 

(10)Buying a token- on the Main Marketplace you can buy a token. Once you hit the “buy” button it should ask you to execute the transaction in metamask, then ask you to confirm it.  If successful the token will be removed from the Main Marketplace and loaded onto the My Purchased NFT’s. 


*IF RUNNING INTO ERRORS WITH METAMASK first try switching off the network and switching back onto it. If stll running errors try to “reset the account” by going to “settings”, then “advanced”, than account “reset”. If still getting errors after a reset than go to “settings”, “advanced” and turn on “Customize transaction nonce”. Now go back and execute a transaction. Put in 0 for the “nonce” for your first transaction and every one thereafter should populate automatically in succession.
