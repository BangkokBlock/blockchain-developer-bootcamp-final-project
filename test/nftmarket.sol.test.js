const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Basic Token contract", async () => {
    let Contract, token, owner, signer1;

    beforeEach(async () => {
        Contract = await ethers.getContractFactory("NFT");
        [owner, signer1] = await ethers.getSigners();
        token = await Contract.deploy(owner.address);
    });


    describe("MVMarket", function () {
        it("Should mint and trade NFTs", async function () {

            //test to recieve contract addresses
            const Market = await ethers.getContractFactory('MVMarket')
            const market = await Market.deploy()
            await market.deployed()
            const marketAddress = market.address

            const NFT = await ethers.getContractFactory('NFT')
            const nft = await NFT.deploy(marketAddress)
            await nft.deployed()
            const nftContractAddress = nft.address
        });
    });


    describe("MVMarket", function () {
        it("Should test to receive listing price and auction price", async function () {
            //test to receive listing price and auction price
            const Market = await ethers.getContractFactory('MVMarket')
            const market = await Market.deploy()
            await market.deployed()
            const marketAddress = market.address

            let listingPrice = await market.getListingPrice()
            listingPrice = listingPrice.toString()
            const auctionPrice = ethers.utils.parseUnits('1', 'ether')
        });
    });
});



// const { expect } = require("chai");

// describe("Basic Token contract", async () => {
//     let Contract, token, owner, signer1;

//     beforeEach(async () => {
//         Contract = await ethers.getContractFactory("NFT");
//         [owner, signer1] = await ethers.getSigners();
//         token = await Contract.deploy(owner.address);
//     });


//     describe("Transactions", async () => {
//         it("Should transfer tokens between accounts", async () => {
//             await token.transfer(address1.address, 50);
//             expect(await token.balanceOf(address1.address)).to.equal(50);
//         });

//         it("Should not transfer when there are insufficient tokens", async () => {
//             await expect(
//                 token.transfer(address1.address, TOTAL_SUPPLY + 50)
//             ).to.be.revertedWith("Not enough tokens");
//         });

//         it("Should update the balances after transfers", async () => {
//             await token.transfer(address1.address, 50);
//             expect(await token.balanceOf(owner.address)).to.equal(
//                 TOTAL_SUPPLY - 50
//             );
//         });
//     });