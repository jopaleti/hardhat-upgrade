1. Upgrade Box -> BoxV2
Proxy      Box
        -> BoxV2

1. Deploy a Proxy manually
2. Hardhat-deploy's built-in proxies <-
3. Openzeppelin upgrades plugin

# ⚡ Hardhat Ethers Compatibility Guide
## 🚨 Problem
If you're encountering the following error:
```bash
(0 , ethers_1.getAddress) is not a function
    at new HardhatEthersSigner (/path/to/project/node_modules/@nomicfoundation/hardhat-ethers/src/signers.ts:73:30)
```
This indicates a version mismatch between the ethers library and 
the ```@nomicfoundation/hardhat-ethers``` plugin in your Hardhat project.

## ⚠️ Cause of the Error
- ```@nomicfoundation/hardhat-ethers version 3.x``` is designed 
to work with ethers version 6.
- If you have ethers version 5 installed, it is not compatible with 
```@nomicfoundation/hardhat-ethers version 3.x```.
The ```getAddress``` function has different implementations or may 
not exist in certain versions, leading to this error.

## 🛠️ Solution
You have two options to resolve this issue:
## Option 1: Upgrade to ethers Version 6 🔄
If you want to use the latest versions, you should upgrade ```ethers``` 
to version 6 to match the ```@nomicfoundation/hardhat-ethers``` plugin.
### Steps:
1. Update ethers to Version 6
Using Yarn:
```bash
yarn add --dev ethers@^6.0.0
```
2. Ensure ```@nomicfoundation/hardhat-ethers``` is Installed
```bash
yarn add --dev @nomicfoundation/hardhat-ethers@^3.0.0
```
3. Check Your ```hardhat.config.js```
Make sure you have the correct plugin required:
```js
require("@nomicfoundation/hardhat-ethers");
```
4. Update Your Code for ethers v6
Be aware that ethers v6 introduces breaking changes. You will need to 
update your code to be compatible with the new version.
- Provider and Signer Usage:
```js
// ethers v5
const [deployer] = await ethers.getSigners();

// ethers v6
const accounts = await ethers.getSigners();
const deployer = accounts[0];
```
- Contract Interaction:
Ensure that contract deployment and interaction code is updated according 
to the ethers v6 documentation.

## Option 2: Downgrade to ethers Version 5 ⬇️
If you prefer to keep using ethers v5, you should downgrade the 
```hardhat-ethers``` plugin to a compatible version.
### Steps:
1. Remove Incompatible Plugins
```bash
yarn remove @nomicfoundation/hardhat-ethers ethers
```
2. Install Compatible Versions
```bash
yarn add --dev ethers@^5.0.0 @nomiclabs/hardhat-ethers@^2.0.0
```
3. Update ```hardhat.config.js```
```js
require("@nomiclabs/hardhat-ethers");
```
4. Clean Install
Sometimes, it's helpful to clean your ```node_modules``` folder:
```bash
rm -rf node_modules
yarn install
```
5. Verify Your Code
Ensure your code is compatible with ethers v5, which it likely already 
is if you were previously using it.