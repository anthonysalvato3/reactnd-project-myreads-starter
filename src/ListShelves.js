import React, { Component } from "react";
import ListBooks from "./ListBooks";

class ListShelves extends Component {
    render() {
        const { shelves, books } = this.props
        return (
            <ol>
                {shelves.map((shelf) => (
                    <li>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">
                                {shelf}
                                <ListBooks books={books.filter((book) => (
                                    book.shelf === shelf
                                ))}
                                />
                            </h2>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListShelves