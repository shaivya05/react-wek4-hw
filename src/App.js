import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="searchForm">
        <input type="search" className="search" placeholder="Enter  a  City" />
        <input type="submit" value="Search" className="searchButton" />
        <input type="submit" value="Current" className="currentButton" />
      </form>
      <div className="cityDetails">
        <h3 className="name city">Lisbon </h3>
        <p className="name">Thursday 11:42</p>
        <p >Cloudy</p>
      </div>
      <div className="tempDetails">
        <div className="tempValues">
          <div className="details icon">☀️</div>
          <div className="details value">39</div>
          <div className="details degree">°C</div>
        </div>
        <div className="temp">
          <div> Precipitation : 82 % </div>
          <div> Wind : 4km/h</div>
        </div>
      </div>
      <div><a href="https://github.com/shaivya05/react-wek4-hw">Github</a></div>
    </div>
  );
}

export default App;
