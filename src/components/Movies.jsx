import React , { Component } from 'react';
import { getMovies } from '../Data';
class Movies extends Component {
    state = {
        movies : getMovies(),
    };
    handleDelete=(movie)=>{
        this.setState({movies: this.state.movies.filter(m => m._id !== movie._id) })
    }
    render() { 
    let {length : count} = this.state.movies;
    if (count === 0) {
        return <p>There are no movies in Database ...</p>
    }
        return(
            <React.Fragment>
            <p>There are {count} movies in Database</p>
            <table className="table">
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th />
                </tr>
                <tbody>
                    { this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{ movie.title }</td>
                            <td>{ movie.genre.name }</td>
                            <td>{ movie.nuberInStock }</td>
                            <td>{ movie.dailyRentalRate }</td>
                            <td><button onClick={ () => this.handleDelete(movie) } className="btn btn-danger sm">{"Delete"}</button></td>
                        </tr>
                    )) }
                </tbody>
            </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;