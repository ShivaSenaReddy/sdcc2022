import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MoviesList from './MoviesList';
import React from 'react'
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <MoviesList />

            </div>
        );
    }
}

export default App;
