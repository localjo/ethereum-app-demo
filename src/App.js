import React, { Component } from 'react';
import avatar from './avatar.png';

import { default as async } from 'async';
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';
import electionInterface from '../build/contracts/Election.json';
import { default as candidateList } from '../candidates.json';
let candidates = candidateList.names;

import Poll from './components/Poll';
import Results from './components/Results';

var Election = contract(electionInterface);
// When going live, set web3 = new Web3(web3.currentProvider) instead.
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8550"));
Election.setProvider(web3.currentProvider);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {names: [], results: []};
  }

  castVote(candidate) {
    var comp = this;
    Election.deployed().then(function(instance) {
      instance.castVote(candidate, {gas: 140000, from: web3.eth.accounts[0]}).then(function() {
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
    });
  }

  render() {
    var styles = {
      wrapper: {
        background: '#fff',
        color: '#14171a',
        margin: '130px auto',
        padding: '30px 40px',
        borderRadius: 5,
        fontSize: 14,
        lineHeight: '18px',
        width: 640
      },
      avatar: {
        width: 48,
        height: 48,
        borderRadius: 5,
        float: 'left'
      }
    };
    return (
      <div style={styles.wrapper}>
        <a href="http://twitter.com/localjo">
          <img style={styles.avatar} src={avatar} alt='Avatar' />
          <h1>Computer Science FTW</h1>
        </a>
        <p>Who has contributed the most to modern Computer Science?</p>
        { this.state.results.length
          ? <Results results={this.state.results}/>
          : <Poll candidates={candidates} vote={(candidate) => this.castVote(candidate)}/>
        }
      </div>
    );
  }
}

export default App;
