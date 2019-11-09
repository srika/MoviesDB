import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Movie from "./Movie";

const Details = ({ location }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const { id } = location.state;
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=6a92a830`)
            .then(response => response.json())
            .then(jsonResponse => {
                setData(jsonResponse);
                setLoading(false);
            });
    }, []);

    return (
        <Fragment>
            <Header text="Movies DB" />
            <br />
            <br />
            {console.log(data)}
            <div className="container section cst-margin">
                {loading ? (
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span className="text-center">
                                <i className="fas fa-spinner fa-pulse"></i>{" "}
                                Loading ....
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-md-6">
                            <img src={data.Poster} alt={data.Title} />
                        </div>
                        <div className="col-md-6 text-left">
                            <h3>{data.Title}</h3>
                            <div className="alert alert-info" role="alert">
                                <p className="mb-0">
                                    <b>Released On:</b> {data.Released}
                                </p>
                                <p className="mb-0">
                                    <b>Duration:</b> {data.Runtime}
                                </p>
                                <p className="mb-0">
                                    <b>Genre:</b> {data.Genre}
                                </p>
                                <p className="mb-0">
                                    <b>Director:</b> {data.Director}
                                </p>
                                <hr />
                                <p className="mb-0">
                                    <b>Plot:</b>
                                    <br />
                                    {data.Plot}
                                </p>
                                <hr />
                                <p className="mb-0">
                                    <b>Language:</b> {data.Language}
                                </p>
                                <p className="mb-0">
                                    <b>Awards:</b> {data.Awards}
                                </p>
                                {/* <p className="mb-0">
                                    <b>IMDB Rating:</b>{" "}
                                    {data.Ratings.imdbRating}
                                </p> */}
                                <p className="mb-0">
                                    <b>Production:</b> {data.Production}
                                </p>
                                <p className="mb-0">
                                    <b>Type:</b> {data.Type}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Details;
