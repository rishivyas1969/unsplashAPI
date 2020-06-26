import React from "react";
import "./styles.css";

function App() {
  const [value, setValue] = React.useState("");
  const [images, setImages] = React.useState([]);
  // xlEyTTmHBbrtDotNQfV_m7nb2iMnQMIa4YBsVWalpRM
  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=xlEyTTmHBbrtDotNQfV_m7nb2iMnQMIa4YBsVWalpRM&page=1&query=${value}`
    )
      .then(res => res.json())
      .then(data => {
        setImages(data.results);
      });
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <input
          className="form-control w-100"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchImages();
          }}
          className="btn w-100 btn-outline-success my-2"
          type="submit"
        >
          Search
        </button>
      </nav>

      <div className="gallery">
        {images.map(image => {
          return (
            <img
              className="img-fluid"
              src={image.urls.regular}
              alt="Not Found!!"
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
