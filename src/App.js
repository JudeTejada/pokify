import React from "react";
import Searchbar from "./components/Searchbar";
import { fetchAllPokemon, fetchPokemonData } from "./components/ApiRequest";
import CardList from "./components/CardList";
import Loader from "./components/Loader";

//contains the strucuture of the app
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: "",
      error: null,
      isLoading: false,
    };
  }
  //if page loaded
  async componentDidMount() {
    this.setState({ isLoading: true });
    let dataArr = [];

    const data = await fetchAllPokemon(
      "https://pokeapi.co/api/v2/pokemon?limit=25"
    );
    data.map(async (p) => {
      try {
        const data = await fetchPokemonData(p.url);
        dataArr.push(data);

        this.setState({ pokemons: dataArr, isLoading: false });
      } catch (err) {
        this.setState({ error: err.message, isLoading: false });
      }
    });
  }
  // get the input val
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { pokemons, searchField, isLoading, error } = this.state;

    const filteredSearch = pokemons.filter((p) => {
      return p.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (error) {
      return <h1>That's too bad </h1>;
    }

    return isLoading ? (
      Loader()
    ) : (
      <main className="container">
        <Searchbar searchChange={this.onSearchChange} />
        <CardList pokemonData={filteredSearch} />
      </main>
    );
  }
}

export default App;
