import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. We have an error</h1>
        } 
        return this.props.children;
    }


}

export default ErrorBoundary;

// Put this right below const CardList = ({ robots }) =>{
// in CardList to throw an error test
// if (true) {
//     throw new Error('NOOOOO! :O');
// }
// React in developer mode will not let you run the 
// app with errors but for a split second you will see
// error return message from this component