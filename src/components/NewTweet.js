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
        const { text } = this.state;
        // Todo: redirect to '/' when submitted
        const tweetLeft = 280 - text.length;
        return (
            <div>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                        className='textarea'
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        maxLength={280}
                    />
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>
                    )}
                    <button
                        className='button'
                        type='submit'
                        disabled={text === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default NewTweet;