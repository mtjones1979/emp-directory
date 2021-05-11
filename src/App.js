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
    this.searchEmp();
  }
  
  searchEmp = () => {
    API.search()
      .then((res) => )
  }
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
    <div className="container">

      <Header />
      
      <Search 
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      breeds={this.state.breeds}
      />
      
      <EmpTable 
      results={this.state.results}
      />
      
      <Footer />

    </div>
    );
  }
}
export default App;