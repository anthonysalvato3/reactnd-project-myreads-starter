import React, { Component } from "react";
import BookshelfChanger from "./BookshelfChanger";

class ListBooks extends Component {
    render() {
        const { books, onMoveShelf } = this.props
        return (
            <ol className="books-grid">
                {books && books.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <BookshelfChanger book={book} onMoveShelf={onMoveShelf} />
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListBooks