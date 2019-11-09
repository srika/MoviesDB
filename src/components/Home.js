import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=war&apikey=6a92a830";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse.Search);
                setLoading(false);
            });
    }, []);
    const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=6a92a830`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };
    return (
        <Fragment>
            <Header text="Movies DB" />
            <Search search={search} />
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="movies"></div>
            <main>
                <div className="container">
                    <div className="row">
                        {loading && !errorMessage ? (
                            <div className="col-lg-12 text-center">
                                <h4>loading...</h4>
                            </div>
                        ) : errorMessage ? (
                            <div className="col-lg-12 text-center">
                                <p className="errorMessage">{errorMessage}</p>
                            </div>
                        ) : (
                            movies.map((movie, index) => (
                                <Movie
                                    key={`${index}-${movie.Title}`}
                                    movie={movie}
                                />
                            ))
                        )}
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Home;
