import React from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

// States are an object which describes our 
// App, state is something that can change
// and affect our App 
// lets take this obj and put it into App
// const state = {
//     robots: robots,
//     searchfield: ''
// }

class App extends React.Component {
    constructor() {
        super()
        // We have to call the super of component because component is this classes superclass
        this.state = {
            robots: [],
            // robots: [robots],
            searchfield: ''
        }
    }
// State usually lives in the parent 'Component'
// and passes state down to different 
// components as props arguments

    componentDidMount() {
        // this.setState({ robots: robots});
        // fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
        //     return response.json();
        // })
        // .then(users => {
        //     this.setState({ robots: users})
        // })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({ robots: users})})
    }

    onSearchChange = (event) => {
    // Without using arrow functions it will error from trying to
    // read onChange's prop this. only within SearchBox.js
    // Arrow functions fix this by letting props refer to their
    // this. in its original file
        // console.log(event.target.value);
        //setState is a default fuction in React
        this.setState({ searchfield: event.target.value})
        // const filteredRobots = this.state.robots.filter(robots =>{
        //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        //     // we use toLowerCase so we don't have to compare Caps
        //     // return name of robots which includes search field
        //     // we use this. alot because we are pulling from state
        // }); 
        // after testing ^^ moved to render() so the cards can be updated
        // console.log(filteredRobots);
    }
    
    render() {
        // const { robots, searchfield } = this.state;
        // with this destructuring I could remove all this.state
        // inside of render() {} but I will leave it for example 
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            // we use toLowerCase so we don't have to compare Caps
            // return name of robots which includes search field
            // we use this. alot because we are pulling from state
        });
        if (this.state.robots.length === 0) {
            // could also say if (!this.state.robots.length) {
            // because that means if ^ is false (===0) then true
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>
                    <h1 className = 'f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/* uses this. because App is an object */}
                    {/* <CardList robots={this.state.robots}/>
                    we replaced ^^ with filteredRobots  */}
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;

// the last if else could be a ternary instead
// in place of if (this.state)... vv

    // return !this.state.robots.length ?
    // <h1>Loading</h1> :
    // (
    //     <div className='tc'>
    //         <h1 className = 'f1'>Robofriends</h1>
    //         <SearchBox searchChange={this.onSearchChange}/>
    //         {/* uses this. because App is an object */}
    //         {/* <CardList robots={this.state.robots}/>
    //         we replaced ^^ with filteredRobots  */}
    //         <Scroll>
    //             <CardList robots={filteredRobots}/>
    //         </Scroll>
    //     </div>
    // )
