import React, { Component } from "react";

class ListBooks extends Component {
    render() {
        const { books } = this.props
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.cover})` }}></div>
                                    <div className="book-shelf-changer">
                                        <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.author}</div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default ListBooks