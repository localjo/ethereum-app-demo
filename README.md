# ethereum-app-demo

> A simple app to demo what's possible with Ethereum.

This app mimics a simple Twitter poll with the votes being tracked on the Ethereum blockchain. It includes instructions for how to run it on a local blockchain, but can also be adapted to run on a testnet or the public Ethereum network.

![Screenshot](./screenshot.png)

## Installation

Clone this repository, then run `npm install`.

## Starting The App

Follow these steps to start the app;

1) Start a local Ethereum network: `npm run network`
2) In a new terminal tab, migrate your contract to the local network: `npm run migrate`
3) Start the app: `npm start`

## Notes

* By default, votes are stored on an in-memory blockchain. This means if you stop and restart the `npm run network` command you will lose any stored votes.
