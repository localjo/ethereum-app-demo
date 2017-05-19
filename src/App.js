import React, { Component } from 'react';
import './App.css';

import { default as async } from 'async';
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';
import electionInterface from '../build/contracts/Election.json';
import { default as candidateList } from '../candidates.json';
let candidates = candidateList.names;

import Ballot from './components/Ballot';
import Results from './components/Results';

var Election = contract(electionInterface);
// When going live, set web3 = new Web3(web3.currentProvider) instead.
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8550"));
Election.setProvider(web3.currentProvider);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {results: [], names: []};
  }

  componentWillMount() {
    var comp = this;
    Election.deployed().then(function(instance) {
      async.map(candidates, function(name, callback) {
        return instance.getVoteCount.call(name).then(function(count) {
          return callback(null, {name: name, count: count.toNumber()});
        });
      }, function(err, res) {
        if (res) comp.setState({results: res, names: res.map((candidate)=>{
          return candidate.name;
        })});
      });
    });
  }

  castVote(candidate) {
    console.log(`Root component detected intent to vote for ${candidate}`);
    Election.deployed().then(function(instance) {
      instance.castVote(candidate, {gas: 140000, from: web3.eth.accounts[0]}).then(function() {
        console.log('Update now');
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Election Demo</h1>
        <Ballot candidates={this.state.names} vote={this.castVote}/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
