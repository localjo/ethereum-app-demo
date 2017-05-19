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

## Configuration
To configure the poll options, edit `./candidates.json`. To edit the poll question, just edit the paragraph in the render method of `./src/App.js`.

## Usage
Once the app is running, you can vote just like a Twitter poll. You can open multiple windows and vote, and use the "Refresh" link at the bottom of the results list to refresh the results that are coming in from other windows. To vote again, reload the page to reset the poll UI. To clear the poll results, stop and restart the local Ethereum network.

## Notes

* By default, votes are stored on an in-memory blockchain. This means if you stop and restart the `npm run network` command you will lose any stored votes.
