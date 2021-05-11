import React from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import EmpTable from "./components/EmpTable/EmpTable";
import Footer from "./components/Footer/Footer";
import API from "./utils/API";


class App extends React.Component {

  state = {
    results: [],
    search: ""
  }
  
  componentDidMount(){
   API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log("Something went wrong: ", err))
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const newResult = this.state.results.filter(
      (result) =>
        result.name.first === this.state.search
    );
    if (this.state.search !== "") {
      this.setState({ results: newResult, search: ""});
    }
  };

  // sortEmp = (event) => {
  //   event.prevent.default();
  // }
  render() {
    return (
    <div className="container">

      <Header />
      
      <Search 
      search={this.state.search}
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      />
      
      <EmpTable 
      results={this.state.results}
      sortEmp={this.sortEmp}
      />
      
      <Footer />

    </div>
    );
  }
}
export default App;