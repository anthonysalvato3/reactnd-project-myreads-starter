import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [
    ],
    shelves: [
      {
        "id": "currentlyReading",
        "name": "Currently Reading"
      },
      {
        "id": "wantToRead",
        "name": "Want to Read"
      },
      {
        "id": "read",
        "name": "Read"
      }
    ]
  }

  moveShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((res) => {
      let booksCopy = [...this.state.books];
      let replaceIndex = booksCopy.findIndex(b => b.id === book.id);
      let bookCopy = { ...booksCopy[replaceIndex] };
      bookCopy.shelf = newShelf;
      booksCopy[replaceIndex] = bookCopy;
      this.setState(() => ({
        books: booksCopy
      }))
    })
  }

  constructor(props) {
    super(props);
    BooksAPI.getAll().then((apiBooks) => {
      this.setState(() => ({
        books: apiBooks
      }))
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render= {() => (
          <MainPage shelves={this.state.shelves} books={this.state.books} moveShelf={this.moveShelf}/>
        )}/>
        <Route path='/search' render={() => (
          <SearchPage moveShelf={this.moveShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
