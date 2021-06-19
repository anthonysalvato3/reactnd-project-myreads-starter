import React, { Component } from "react"
import ListShelves from "./ListShelves"
import { Link } from 'react-router-dom'

class MainPage extends Component {
    render() {
        const {shelves, books, moveShelf} = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <ListShelves shelves={shelves} books={books} onMoveShelf={(book, newShelf) => {
                            moveShelf(book, newShelf)
                        }} />
                    </div>
                </div>
                <div className="open-search">
                    {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MainPage