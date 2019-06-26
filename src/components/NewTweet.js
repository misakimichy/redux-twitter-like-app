import React, { Component } from 'react';

class NewTweet extends Component {
    state= {
        text: '',
    }

    handleChange = event => {
        const text = event.target.value;

        this.setState(() => ({
            text
        }))
    }

    handleSubmite = event => {
        event.preventDefault();

        const { text } = this.state;

        //Todo: Add Tweet to Store

        console.log(`New Tweet: `, text);

        this.setState(() => ({
            text: ''
        }))
    }

    render() {
        return (
            <div>
                New Tweet
            </div>
        )
    }
}

export default NewTweet;