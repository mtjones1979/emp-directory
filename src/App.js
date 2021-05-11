import React from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import EmpTable from "./components/EmpTable/EmpTable";
import Footer from "./components/Footer/Footer";
// import API from "./utils/API";


class App extends React.Component {

  // state = {

  // }
  
  
  
  
  render() {
    return (
    <div className="container">

      <Header />
      
      <Search 
      />
      
      <EmpTable 
      />
      
      <Footer />

    </div>
    );
  }
}
export default App;