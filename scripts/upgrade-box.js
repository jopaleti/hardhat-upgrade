// Manual way

const { ethers } = require("hardhat");

async function main() {
    const boxProxyAdmin = await ethers.getContractAt("BoxProxyAdmin");
    const transparentProxy = await ethers.getContractAt("Box_Proxy");

    const proxyBoxV1 = await ethers.getContractAt("Box", transparentProxy.address);
    const versionV1 = await proxyBoxV1.version()
    console.log(versionV1)

    const boxV2 = await ethers.getContractAt("BoxV2");
    const upgradeTx = await boxProxyAdmin.upgrade(
        transparentProxy.address,
        boxV2.address,
    );
    await upgradeTx.wait(1);

    // Getting BoxV2 contract && loading it at the transparent proxy address.
    const proxyBoxV2 = await ethers.getContractAt(
        "BoxV2",
        transparentProxy.address,
    );
    const versionV2 = await proxyBoxV1.version();
    console.log(versionV2);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
