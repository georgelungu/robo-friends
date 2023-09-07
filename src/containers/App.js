// LEFT AT 235 BUILDING A REACT APP - 04:30

import React from "react";
// import Card from "./Card"
import './App.css'
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
// import { robots } from './robots';
import Scroll from "../components/Scroll"

class App extends React.Component 
{
    // Here is the 'state'.
    // The 'state' can change and affect the App.
    // It is usually located in the Parent Component (App.js)
    // The Parent Component passes 'state' to different Components.
    // Now you can access 'robots' NOT from import, but from the 'state'. (See Line 63.)
    // Looks like you don't have to declare functions with 'function' keyword inside the 'class'.

    constructor()
    {
        super()
        this.state = 
        {
            robots: [],
            searchfield: ''
        }
        console.log("constructor")
    }

    onSearchChange = (event) =>
    {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value)
    }

    componentDidMount()
    {
        console.log("componentDidMount")
        // Gets called automatically when the 'App' loads.

        // You can set state here for the robots state.
        // this.setState({ robots: robots })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }))
    }

    render()
    {
        console.log("render")
        const filteredRobots = this.state.robots.filter(robot =>
        {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0)
        {
            return <h1>LOADING</h1>
        }
        else
        {
            console.log(filteredRobots)
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    {/* Everytime the input changes to trigger console.log */}
                    {/* You pass the function as a 'props' using the 'this' keyword. */}
                    {/* You don't need to call the function (add the parantheses '()'). */}
                    <SearchBox searchChange = {this.onSearchChange}/>
                    {/* 'filteredRobots' can now be used as PROPS instead of 'this.state.robots' */}
                    <Scroll>
                        <CardList robots = { filteredRobots }/> 
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;

// PROPS NEVER CHANGE. PROPS ARE ALWAYS JUST INPUTS THAT WE GET AND WE NEVER MODIFY THEM.

// 'STATE' MEANS THE DESCRIPTION OF YOUR APP.
// A STATE IS AN OBJECT THAT DESCRIBES YOUR APP.

// IN THIS CASE THE STATE IS THE ROBOTS 
    // (THE ROBOTS ARRAY)
// AND WHAT IS ENTERED IN THE SEARCHBOX.

// STATE IS ABLE TO CHANGE.
// WE CAN CHANGE THE INPUT OF THE SEARCHBOX AND WHAT GETS DISPLAYED IN MATTER OF ROBOTS.

// 'PROPS' ARE THINGS THAT COME OUT OF 'STATE'.
// STATE >> PROPS

// A PARENT SEND STATE INTO A CHILD COMPONENT.
// WHEN THE CHILD COMPONENT RECEIVE A STATE, IT BECOME A PROPERTY ('PROPS').
// THE CHILD CAN NEVER CHANGE THE PROPERTY ('PROPS').

// THE PARENT JUST SEND THE STATE AND THE CHILD RECEIVE IT AS 'robots' (PROPS).

// HOW TO ADD STATE
// 1. YOU NEED A CLASS. ('App')
// 2. YOU NEED A CONSTRUCTOR WHERE WE DECLARE THE STATE.
// 3. THE CONSTRUCTOR NEEDS A 'super()' WHICH CALLS THE CONSTRUCTOR OF THE COMPONENT.

// App.js IS A SMART COMPONENT BECAUSE IT HAS A STATE.
// THE REST OF THE COMPONENTS ARE DUMB COMPONENTS BECAUSE THEY RECEIVE JUST PROPS.
// USUALLY SMART COMPONENTS HAVE THE CLASS SYNTAX.

// CHECK LIFECYCLE METHODS REACT
// MOUNTING - UPDATING - UNMOUNTING

// MOUNTING
// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()

// THE ACT OF REPLACING THE 'root' ELEMENT FROM 'index.html' AND REPLACING IT WITH THE 'App.js' WITH THE 'render()' FUNCTION IT'S CALLED MOUNTING. 
// MOUNTING IS THE START OF THE APPLICATION.
// UNMOUNTING IS FOR WHEN USER CHANGE THE PAGE FOR EXAMPLE.
// IT'S CALLED LIFECYCLE METHOD BECAUSE THEY RUN EVERYTIME A COMPONENT DOES SOMETHING.

// Connector between the SearchBox and the CardList.

    // REACT RULE #1

// ANYTIME YOU MAKE YOUR OWN METHOD ON A COMPONENT,
// YOU BETTER USE A FUNCTION WITH ARROW FUNCTION THAT IS STORED IN A VARIABLE
// BECAUSE THE METHODS ARE NOT PART OF REACT.

    // EXAMPLE:
// onSearchChange = (event) =>
// {
    // YOUR CODE HERE.
// }

// BECAUSE THE FUNCTION (EVENT) IS TRIGGERED IN THE 'input' ELEMENT in 'SearchBox.js' AND THERE IS NO 'state.robots' DEFINED THERE.
// IN THIS WAY YOU CAN MAKE SURE THAT THE 'this' VALUE IS DIRECTING TO WHERE IT WAS CREATED (App.js), NOT WHERE IT WAS TRIGGERED (SearchBox.js).
// IN THIS CASE, WHEN YOU USE 'this.state.searchfield' IT WILL LOOK AT THE 'state' SITUATED IN App.js.

// ANY COMPONENT THAT HAVE STATE NEEDS TO USE CLASS CONSTRUCTOR TO CREATE 'this.state' AND 'this state' IS WHAT CHANGES IN THE APP.
// A VIRTUAL DOM IS AN OBJECT THAT COLLECTS THE APP'S STATE AND USE IT TO RENDER OR TO PASS TO OTHER COMPONENTS AS PROPS SO THAT COMPONENTS CAN RENDER.
// THE APP IS THE ONLY THING THAT CAN CHANGE THE STATE AND IT CAN PASS THINGS IN FORM OF PROPS, LIKE IN SEARCHBOX.
// THE SEARCHBOX UPDATES THE STATE OF THE SEARCHFIELD WHENEVER WE TYPE.

    // REACT RULE #2: 'this.setState()'

// METHOD THAT COMES WITH REACT.
// IT IS USED WHEN YOU WANT TO CHANGE STATE.
// YOU DON'T HAVE TO USE 'this.state.searchfield = ...'