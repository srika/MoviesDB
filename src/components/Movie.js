import React from "react";
import { Link } from "react-router-dom";
const DEFAULT_PLACEHOLDER =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER : movie.Poster;
    return (
        <div className="col-lg-3 mt-3">
            <div className="card">
                <Link
                    to={{
                        pathname: "/movie-details",
                        state: {
                            id: movie.imdbID
                        }
                    }}
                >
                    <img
                        className="card-img-top img-fluid img-height"
                        src={poster}
                        alt={movie.Title}
                    />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.Year}</p>
                    <Link
                        className="btn btn-primary"
                        to={{
                            pathname: "/movie-details",
                            state: {
                                id: movie.imdbID
                            }
                        }}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Movie;
