import React, { Component } from "react";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI"

class SearchPage extends Component {
    state = {
        library: this.props.library,
        query: '',
        result: []
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
        this.getResult(query).then((books) => {
            this.setState(() => {
                const mergedBooks = []
                books.forEach((book) => {
                    let libraryBook = this.state.library.find(b => b.id === book.id)
                    libraryBook ? mergedBooks.push(libraryBook) : mergedBooks.push(book)
                })
                return {result: mergedBooks}
            })
        })
    }
    getResult = (query) => {
        return BooksAPI.search(query)
    }
    render() {
        const { library, query, result } = this.state
        const { moveShelf } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            placeholder="Search by title or author" />

                    </div>
                </div>
                <div className="search-books-results">
                    <ListBooks books={result} onMoveShelf={moveShelf} />
                </div>
            </div>
        )
    }
}

export default SearchPage