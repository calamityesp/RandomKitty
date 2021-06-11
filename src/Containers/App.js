import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
// import { robots } from "./robots"; //if there is no default, you have to destructure it by putting it in brackets - array/object destructuring
import "./App.css";

//this is called a smart component because it has state

//any component that has state needs to be a class component with a constructor that declares the state of the application
//make sure you call the super() before your state declaration
//react uses the stat to render and pass a props to the child components. We manage the state in the parent which passes down props.
//everytime the state changes, render will run.. the virtual dom will detect it and rerun the application
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  //this is a lifecycle hook that gets ran automarically with react (check documentation)
  componentDidMount() {
    //fetch is located in the window object and is used to make server requests.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //convert the response to json
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
    console.log("robots loaded!");
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="pa3 f-5-l">Loading...</h1>
    ) : (
      <div className="tc">
        <h1>Random Kitties</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
