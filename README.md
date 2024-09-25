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
