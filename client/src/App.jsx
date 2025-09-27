import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="trip-header">เที่ยวไหนดี</h1>
      <div className="search-container">
        <form>
          <label>ค้นหาที่เที่ยว</label>
          <input type="text" placeholder="หาที่เที่ยวแล้วไปกัน ..." />
        </form>
      </div>
      <div className="trip-list">
        <div className="trip-article">
          <div className="trip-preview">
            <img src="https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg" />
          </div>
          <div className="trip-detail">
            <div className="trip-title">
              คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!
            </div>
            <div className="trip-description">
              "วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น
              เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า ผจญภัยเหนือยอดไม้
              และดำน้ำตื้น รับรอทริปนี้สนุกแน่!{" "}
              <a href="https://www.wongnai.com/trips/travel-koh-chang">
                อ่านต่อ
              </a>
            </div>
            <div className="trip-tag">
              หมวด "เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"
            </div>
            <div className="trip-more">
              <div className="square">
                <img
                  src="https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                  alt="more"
                />
              </div>
              <div className="square">
                <img
                  src="https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                  alt="more"
                />
              </div>
              <div className="square">
                <img
                  src="https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                  alt="more"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
