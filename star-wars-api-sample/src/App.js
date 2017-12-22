import React, { Component } from 'react';
import './App.css';
import PersonPage from './Pages/PersonPage'
import HomeworldPage from './Pages/HomeworldPage'
import VehiclesPage from './Pages/VehiclesPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  state = {
    person: { name: "Select a name" },
    planet: { name: "Select a planet" },
    vehicles: []
  }
  getPerson  = async (id) => {
    const response = await fetch (`https://swapi.co/api/people/${id}`)
    const person = await response.json()
    return person
  }

  getData = async (URL) => {
    const response = await fetch (URL)
    const planet = await response.json()
    return planet
  }

  async componentDidMount() {
    const person1 = await this.getPerson(1)
    const planet1 = await this.getData(person1.homeworld)
    console.log(person1, planet1)

    const vehicles =[]
    for (const vehicleURL of person1.vehicles) {
      const vehicle = await this.getData(vehicleURL)
      vehicles.push(vehicle)
    }

    this.setState({ person: person1, planet: planet1, vehicles })

  }

  render() {
    return (
      <div className="App">
        
        <Router>
        <div>
          <nav>
            <Link to="/">Person</Link>
            <Link to="/homeworld">Homeworld</Link>
            <Link to="/vehicles">Vehicles</Link>
          </nav>  
        <Route exact path="/" component = {()=> <PersonPage name={this.state.person.name}
        hairColor={this.state.person.hair_color}
        homeworldName={this.state.planet.homeworld} /> } />
        <Route path="/homeworld" component = {()=> <HomeworldPage name={this.state.planet.name} 
        diameter={this.state.planet.diameter} /> } />
        <Route path="/vehicles" component ={() => <VehiclesPage vehicles={this.state.vehicles} /> } />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
