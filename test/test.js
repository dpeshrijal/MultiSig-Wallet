const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("MultiSig Wallet Contract", () => {

    let MultiSigContractFactory, MultiSigContract;
    let owner, addr1, addr2, addr3;

    beforeEach(async () => {
        [owner, addr1, addr2, addr3] = await ethers.getSigners();
        MultiSigContractFactory = await ethers.getContractFactory("MultiSigWallet");
        MultiSigContract = await MultiSigContractFactory.deploy([owner.address, addr1.address, addr2.address], 3);
        await MultiSigContract.deployed();
    });

    it("should create owners and set confirmation required as supplied", async () => {
        expect(await MultiSigContract.getOwners()).to.equal([owner.address, addr1.address, addr2.address]);
    })
})