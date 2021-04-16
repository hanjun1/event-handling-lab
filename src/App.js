import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import Status from "./components/Status/Status";

class App extends React.Component {
  state = {
    pokemonLeftName: "pokemonLeft",
    pokemonRightName: "pokemonRight",
    pokemonLeftHP: 100,
    pokemonRightHP: 100,
    pokemonLeft: "http://pngimg.com/uploads/pokemon/pokemon_PNG160.png",
    pokemonRight: "http://pngimg.com/uploads/pokemon/pokemon_PNG122.png",
    status: "Fighters are ready...",
  };
  attack = (name) => {
    if (name === this.state.pokemonLeftName) {
      let pokemonRightHP = this.state.pokemonRightHP - 10;
      let status =
        this.state.pokemonLeftName +
        " is attacking " +
        this.state.pokemonRightName;
      if (pokemonRightHP >= 0) {
        this.setState({ pokemonRightHP, status });
      }
    } else if (name === this.state.pokemonRightName) {
      let pokemonLeftHP = this.state.pokemonLeftHP - 10;
      let status =
        this.state.pokemonRightName +
        " is attacking " +
        this.state.pokemonLeftName;
      if (pokemonLeftHP >= 0) {
        this.setState({ pokemonLeftHP, status });
      }
    }
  };
  render() {
    return (
      <div className="App">
        <div className="pokemon-container">
          <Pokemon
            name="pokemonLeft"
            pokemon={this.state.pokemonLeft}
            hp={this.state.pokemonLeftHP}
            attack={this.attack}
          />
          <Pokemon
            name="pokemonRight"
            pokemon={this.state.pokemonRight}
            hp={this.state.pokemonRightHP}
            attack={this.attack}
          />
        </div>
        <div>
          <Status status={this.state.status} />
        </div>
      </div>
    );
  }
}

export default App;
