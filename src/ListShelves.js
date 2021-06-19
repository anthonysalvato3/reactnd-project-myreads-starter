import React, { Component } from "react";
import ListBooks from "./ListBooks";

class ListShelves extends Component {
    render() {
        const { shelves, books, onMoveShelf } = this.props
        return (
            <ol>
                {shelves.map((shelf) => (
                    <li key={shelf.id}>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.name}</h2>
                            <div className="bookshelf-books">
                                <ListBooks books={books.filter((book) => (
                                    book.shelf === shelf.id
                                ))}
                                onMoveShelf = {onMoveShelf}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListShelves