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