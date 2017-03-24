import React, {Component} from 'react';

class Cards extends Component {
  state= { cards: []};

  componentDidMount() {

  }

  getBoards = (e) => {
    e.preventDefault();
    console.log(process.env.ACCESS_TOKEN);
    // $.ajax({
    //   url: 'http://canvas-api.herokuapp.com/api/v1/courses?page=1&per_page=5',
    //   type: 'GET',
    //   dataType: 'JSON',
    //   beforeSend: setHeader
    // }).done( boards => {
    //   console.log(boards);
    // }).fail( err => {
    //   // handle fail better
    //   console.log(err);
    // });

    // function setHeader(xhr) {
    //   xhr.setRequestHeader('Authorization', process.env.ACCESS_TOKEN);
    // }
  }

  render() {

    return(
      <div>
        <h1>Hi! I'm the boards</h1>
        <form ref="boardForm" onSubmit={this.getBoards}>
          <input type="submit" ref="handle" value="Get some Boards" />
        </form>
      </div>
    )

  }
}

export default Cards;