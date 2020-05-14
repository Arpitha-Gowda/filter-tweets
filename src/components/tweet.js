import React, { Component } from 'react'

class Tweet extends Component {
    render() {
        if (this.props.tweets) {
            return this.props.tweets.map((quote, index) => {
                return (
                    <ul key={index}>
                     <li>{quote}</li>
                    </ul>
                );
            })
        } else{
            return(
                <div></div>
            ) 
        }
    }
  }

export default Tweet;
