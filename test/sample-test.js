const { expect } = require("chai");
const { ethers } = require("hardhat");


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

    //test to receive listing price and auction price
    let listingPrice = await market.getListingPrice()
    listingPrice = listingPrice.toString()
    const auctionPrice = ethers.utils.parseUnits('1', 'ether')

    //test for minting (grab from minting function in NFT contract)
    await nft.mintToken('video1')
    await nft.mintToken('video2')
    await nft.mintToken('video3')
    await nft.mintToken('video4')

    await market.makeMarketItem(nftContractAddress, 1, auctionPrice, {value: listingPrice})
    await market.makeMarketItem(nftContractAddress, 2, auctionPrice, {value: listingPrice})
    await market.makeMarketItem(nftContractAddress, 3, auctionPrice, {value: listingPrice})
    await market.makeMarketItem(nftContractAddress, 4, auctionPrice, {value: listingPrice})

    //test for different addresses from different users - test accounts
    //return an array of however many addresses there are
    //first address is seller (0 address) and we use _, second is buyerAddress
    //getSigners functionality is from hardhat
    const[_, buyerAddress] = await ethers.getSigners()

    //create a market sale with address, id, and price
    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 3, {
      value: auctionPrice
    })

    //get the market items and display them in console 
    let items = await market.getMarketTokens()

    items = await Promise.all(items.map(async i => {
      //get the uri of the value
      const tokenUri = await nft.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item;
    }))
    
    console.log('items', items)

  });
});
