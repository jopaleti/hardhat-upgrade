// Manual way

const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    // const { deployer } = await getNamedAccounts();
    // const [account] = await ethers.getSigners();
    // const deployer = account;
    console.log(await ethers.getSigners())
    // const boxProxyAdmin = await ethers.getContract("BoxProxyAdmin", deployer);
    // const transparentProxy = await ethers.getContractAt("Box_Proxy", deployer);
    // const proxyBoxV1 = await ethers.getContract(
    //     "Box",
    //     transparentProxy.address,
    // );
    // const versionV1 = await proxyBoxV1.version();
    // console.log(versionV1);

    // const boxV2 = await ethers.getContractAt("BoxV2", deployer);
    // const upgradeTx = await boxProxyAdmin.upgrade(
    //     transparentProxy.address,
    //     boxV2.address,
    // );
    // await upgradeTx.wait(1);

    // // Getting BoxV2 contract && loading it at the transparent proxy address.
    // const proxyBoxV2 = await ethers.getContractAt(
    //     "BoxV2",
    //     transparentProxy.address,
    // );
    // const versionV2 = await proxyBoxV2.version();
    // console.log(versionV2);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
