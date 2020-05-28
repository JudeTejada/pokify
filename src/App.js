import React from "react";
import Searchbar from "./components/Searchbar";
import { fetchAllPokemon, fetchPokemonData } from "./components/ApiRequest";
import CardList from "./components/CardList";

import "./styles/Main.css";
//contains the strucuture of the app
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: "",
    };
  }
  //if page loaded
  async componentDidMount() {
    let dataArr = [];

    const data = await fetchAllPokemon(
      "https://pokeapi.co/api/v2/pokemon?limit=25"
    );
    data.map(async (p) => {
      const data = await fetchPokemonData(p.url);
      dataArr.push(data);

      this.setState({ pokemons: dataArr });
    });
  }
  // get the input val
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { pokemons } = this.state;
    console.log(pokemons);

    return (
      <main className="container">
        <Searchbar searchChange={this.onSearchChange} />
        <CardList pokemonData={pokemons} />
      </main>
    );
  }
}

export default App;
