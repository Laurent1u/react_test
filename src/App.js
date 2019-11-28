import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Larry', age: 27, belt: 'black', id: 1 },
      { name: 'Ana', age: 28, belt: 'white', id: 2 },
      { name: 'Catalina', age: 29, belt: 'red', id: 3 },
      { name: 'Mariana', age: 30, belt: 'brown', id: 4 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();

    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })

    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App" >
        <h1>My first React app !</h1>
        <p>Welcome :)</p>

        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
