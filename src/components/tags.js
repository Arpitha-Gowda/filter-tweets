import React, { Component } from 'react'
import tweetService from '../services/tweets'
import Tweet from './tweet'
import '../App.css';

class Tags extends Component {
  constructor(props) {
      super(props)
      this.getTweet = this.getTweet.bind(this);

      this.state = {
        toggle: Array.apply(false, Array(28)),
        tweets: Array.apply({}, Array(28))
      }
    }
  
  showTweet = (i) => {
    const newToggle = this.state.toggle.map((value, index) => 
      index === i ? !value  : value
    )
    this.setState({toggle: newToggle});
  }

  getTweet = async (tag, i) =>{
    let tweets = await tweetService.getTweets(tag).then(response => response._embedded.quotes)
    let filterTweets = tweets.map((tweet)=> tweet.value)
    
    const newTweets = this.state.tweets.map((value, index) => 
      index === i ? filterTweets  : value
    )
    this.setState({tweets: newTweets});
  }

  render() {
    let filtered = this.props.tags.map(tag => tag.value)

    return filtered.map((tag, index) => {
        return (
          <div className='wrapper' key={index}>
            <div className='tag'>
            <button className='block ml-70' onClick={() => { this.showTweet(index); this.getTweet(tag, index) }}>
                {tag}
            </button>
            </div>
            {
            this.state.toggle[index]
                ? (
                <div className='quote'>
                  <Tweet tweets={this.state.tweets[index]}/>
                </div>
                )
                : (null)
            }
          </div> 
        )
      })
    }
}

export default Tags;