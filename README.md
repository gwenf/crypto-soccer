# CryptoSoccer

Work in Progress.  

## 💡[Document](./DOCUMENT.md)

### Technical stack

#### Frontend
- React
- Redux
- Saga
- Web3(MetaMask)

#### UI
- Sass
- Material-UI

#### Smart contract/Solidity
- [Truffle](./TRUFFLE.md)

#### Database
- [Bluzelle](./BLUZELLE.md) 
- IPFS (Coming Soon)

### Install flow

#### Clone repo

```
git clone https://github.com/PhyrexTsai/react-truffle-metamask
cd react-truffle-metamask
```

#### Install ganache

```
npm install -g ganache-cli
```

#### Install truffle

```
npm install -g truffle
```

#### Build repo

```
yarn install
truffle compile
```

#### Start repo

Open a new console
```
ganache-cli
```

```
truffle migrate
yarn start
```

## Reference
- react-truffle-metamask https://github.com/PhyrexTsai/react-truffle-metamask
- ganache-cli: https://github.com/trufflesuite/ganache-cli
- truffle: https://github.com/trufflesuite/truffle