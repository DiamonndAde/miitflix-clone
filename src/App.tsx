import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Repetitive rows, with the title of netflix, crave, disney and Apple plus */}
      <Row title="Netflix" fetchUrl={requests.fetchNetflix} />
      <Row title="Crave" fetchUrl={requests.fetchCrave} />
      <Row title="Disney" fetchUrl={requests.fetchDisney} />
      <Row title="Apple Plus" fetchUrl={requests.fetchApple} />
    </div>
  );
};

export default App;
