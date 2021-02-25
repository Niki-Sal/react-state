import React, { Component} from 'react';

class MoodTracker extends Component {
    state = {
        moodPoints: 1,
        phone: 888888888
    }
    //use arrow function- if you want to use other funtions 
    //you have to use constructor for defining apple
    increaseMood = () => {
        this.setState({
            moodPoints: this.state.moodPoints + 1
        })
    }
    render(){
        return(
            <div>
                <h1>Mood Tracker</h1>
                <p>My Current mood is {this.state.moodPoints}</p>
                <p>My Current phone is {this.state.phone}</p>
                <button onClick={this.increaseMood}> Cheer up, buddy</button>
            </div>
        )
    }

}

export default MoodTracker;