import React, { Component } from "react";

//glues or binds query to component
import { graphql } from "react-apollo";

import { getBooksQuery } from '../queries/queries'


class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } 
    return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
