import React, { useState } from "react";
import "./App.css";
import "./CSS/Header.css";
import "./CSS/Mps.css";
import "./CSS/Filter.css";
import Header from "./Components/Header";
import AllMps from "./Components/MPs";
import Filters from "./Components/Filters";
import IndividualMP from "./Components/IndividualMP";
import { Router } from "@reach/router";

const App = () => {
  const [filter, setFilter] = useState(false);

  const valueOfFilter = e => {
    e.preventDefault();
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  return (
    <div className="App">
      <div className="HeaderContainer">
        <Header />
      </div>
      <div className="Filters">
        <Filters filterFunction={valueOfFilter} filterValue={filter} />
      </div>
      <div>
        <Router className="Mps">
          <AllMps filterValue={filter} path="/" />
        </Router>
        <Router className="IndividualMP">
          <IndividualMP path="/MP/:id" />
        </Router>
      </div>
    </div>
  );
};

export default App;
