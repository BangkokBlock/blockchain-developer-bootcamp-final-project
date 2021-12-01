const { expect } = require("chai");

describe("Basic Token contract", async () => {
    let Contract, token, owner, signer1;

    beforeEach(async () => {
        Contract = await ethers.getContractFactory("NFT");
        [owner, signer1] = await ethers.getSigners();
        token = await Contract.deploy(owner.address);
    });

    describe("Deployment", async () => {
        it("Should set the right owner", async () => {
            expect(await token.contractAddress()).to.equal(owner.address);
        });
    });

    describe("Minting", async () => {
        it("Should allow a mint", async () => {
            const tokenUri = "https://some.url.here/tokenId"
            await expect(token.mintToken(tokenUri)).to.not.be.reverted;
        });
    });
});