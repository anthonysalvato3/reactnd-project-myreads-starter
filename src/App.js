import React from 'react'
import './App.css'
import ListShelves from "./ListShelves"
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
          <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <ListShelves shelves={this.state.shelves} books={this.state.books} onMoveShelf={(book, newShelf) => {
                            this.moveShelf(book, newShelf)
                        }} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )}/>
        <Route path='/search' render={() => (
          <SearchPage library={this.state.books} moveShelf={this.moveShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
