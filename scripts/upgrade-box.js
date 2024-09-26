// Manual way

const { getNamedAccounts, ethers, deployments } = require("hardhat");

async function main() {
    // const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    // const [account] = await ethers.getSigners();
    // const deployer = account;

    const boxProxyAdmin = await ethers.getContractAt("BoxProxyAdmin", deployer);
    // const transparentProxy = await ethers.getContractAt("Box_Proxy");
    // const boxProxyAdmin = await ethers.getContract("BoxProxyAdmin", deployer);
    // const transparentProxy = await ethers.getContract("Box_Proxy");

    // const proxyBoxV1Contract = await deployments.get("Box");
    // const proxyBoxV1Address = proxyBoxV1Contract.address;

    // const proxyBoxV1 = await ethers.getContractAt("Box", proxyBoxV1Address);
    // const versionV1 = await proxyBoxV1.version();
    // console.log(versionV1);

    // const proxyBoxV2Contract = await deployments.get("BoxV2");
    // const proxyBoxV2Address = proxyBoxV2Contract.address;
    // const boxV2 = await ethers.getContractAt("BoxV2", proxyBoxV2Address);

    // // Error starts from here...
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
