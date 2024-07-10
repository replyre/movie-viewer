import { IoShareSocial } from "react-icons/io5";
import "./App.css";
import { movies } from "./data/movies";
import { IoIosHeart } from "react-icons/io";
import { GoComment } from "react-icons/go";
function App() {
  return (
    <div className="App">
      {movies.map((e) => {
        return (
          <div
            className="movie-tiles"
            style={{
              background: `url(${e.Images[1]})`,
              backgroundSize: "cover",

              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="fading-effect"></div>
            <div className="content">
              <ImageWithFallback src={`${e.Poster}`} alt="Description" />
              <div className="text">
                <p className="title">{e.Title}</p>
                <p className="year">
                  {e.Year.split("–")[0]}
                  {", "}
                  {e.Director === "N/A" ? e.Writer : e.Director}
                </p>
                <p className="time">
                  {e.Type !== "movie"
                    ? "s" + e.totalSeasons + ", " + e.Runtime + " each"
                    : e.Runtime}
                  <span
                    style={{
                      color: "rgb(217, 226, 252)",
                      marginLeft: "30px",
                      fontStyle: "normal",
                    }}
                  >
                    {" "}
                    {e.Genre}
                  </span>
                </p>
              </div>
            </div>
            <div className="plot">{e.Plot}</div>
            <div className="icons">
              <IoShareSocial />
              <IoIosHeart />
              <GoComment />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const ImageWithFallback = ({ src, alt }) => {
  const handleError = (event) => {
    event.target.src = `./temp.avif`;
  };

  return <img src={src} alt={alt} onError={handleError} />;
};

export default App;
