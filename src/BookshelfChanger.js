import React, { Component } from "react";

class BookshelfChanger extends Component {
    // state = {
    //     currentShelf: this.props.book.shelf
    // }
    // moveShelf(newShelf) {
    //     this.setState(() => ({
    //         currentShelf: newShelf
    //     }))
    // }
    render() {
        const { book, onMoveShelf } = this.props
        return (
            <div className="book-shelf-changer">
                <select defaultValue={book.shelf} onChange={(event) => onMoveShelf(book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger