import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // get trips state
  const [tripArticle, setTripArticle] = useState([]);
  // input state
  const [search, setSearch] = useState("");

  // get data from server
  const getTrips = async () => {
    const response = await axios.get("http://localhost:4001/trips?keywords=");
    setTripArticle(response.data.data);
  };
  useEffect(() => {
    getTrips();
  }, []);

  // input
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  // for search
  const handleSubmit = (e) => {
    e.preventDefault();
    getTripsByKeywords();
  };

  // get data by keywords
  const getTripsByKeywords = async () => {
    const response = await axios.get(
      `http://localhost:4001/trips?keywords=${search}`
    );
    setTripArticle(response.data.data);
  };

  return (
    <div className="app">
      <h1 className="trip-header">เที่ยวไหนดี</h1>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <label>ค้นหาที่เที่ยว</label>
          <input
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            name="keywords"
            value={search}
            onChange={handleOnChange}
          />
        </form>
      </div>
      <div className="trip-list">
        {tripArticle.map((trip) => {
          return (
            <div className="trip-article" key={trip.eid}>
              <div className="trip-preview">
                <img src={trip.photos[0]} />
              </div>
              <div className="trip-detail">
                <div className="trip-title">{trip.title}</div>
                <div className="trip-description">
                  {trip.description.slice(0, 101)}...{" "}
                  <a href="https://www.wongnai.com/trips/travel-koh-chang">
                    อ่านต่อ
                  </a>
                </div>
                <div className="trip-tag">
                  หมวด{" "}
                  {trip.tags.slice(0, -1).map((tag, i) => {
                    return <span key={i}>{tag}</span>;
                  })}
                  และ <span>{trip.tags[trip.tags.length - 1]}</span>
                </div>
                <div className="trip-more">
                  <div className="square">
                    <img src={trip.photos[1]} alt="more" />
                  </div>
                  <div className="square">
                    <img src={trip.photos[2]} alt="more" />
                  </div>
                  <div className="square">
                    <img src={trip.photos[3]} alt="more" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
