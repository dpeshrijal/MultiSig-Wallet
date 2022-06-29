

const main = async () => {
    const walletContractFactory = await hre.ethers.getContractFactory("MultiSigWallet");
    const multiSigWalletContract = await walletContractFactory.deploy(["0x1D4cFB4ABCA035C722d50156bF2bf2Cf3932dfbb", "0x1B7f90aab1cE063BcDc485649f5A1E586937dE95", "0xf09b380300B83a2951258EA65d06138d52e94541"], 2)
    await multiSigWalletContract.deployed();

    console.log("MultiSigWallet is deployed to address: ", multiSigWalletContract.address);

    let tx1 = await multiSigWalletContract.getOwners();

    console.log(tx1);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();
