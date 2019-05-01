import React from 'react';


export default class Background extends React.Component {
    constructor() {
        super();
        this.state = {
            color: '#112211'
        };  
    }  

    // this.setState is asynchronous, for this reason we want to chain the selector update inside it 
    // it can have a second argument, method has to be called as a (arrow) function
    randomColor() {
        let options = ['#aaaaaa', '#bbbbbb', '#112211', 'darkslategrey'];
        let newColor = options[Math.floor(Math.random() * (options.length))];

        if (newColor !== this.state.color) {
            this.setState({
                color: newColor
            },
            () => { document.querySelector('body').style.backgroundColor = this.state.color }
            );
        }
    }

    render() {
        /* run function on link */
        return(
        <div className='is-white pad-20'>
            <p>Current color: {this.state.color}</p>
            <button onClick={() => this.randomColor()}>
                Change background color
            </button>
        </div>
        );
    }
}