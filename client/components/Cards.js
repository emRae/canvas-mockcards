import React, {Component} from 'react';

class Cards extends Component {
  state= { cards: []};

  componentDidMount() {
    $.ajax({
      url: '/cards',
      type: 'GET',
      dataType: 'JSON'
    }).done( cards => {
      // console.log(cards);
      this.setState({ cards });
    }).fail( err => {
      // handle fail better
      console.log(err);
    });

  }

  // getBoards = (e) => {
  //   e.preventDefault();

  // }

  // <form ref="boardForm" onSubmit={this.getBoards}>
  //   <input type="submit" ref="handle" value="Get some cards" />
  // </form>

  cards = () => {
        return this.state.cards.map(card => {
            return(
              <div className="card col col-4" key={card.id}>
                  <i className="fa fa-pencil-square card__edit-icon" aria-hidden="true"></i>
                  <div className="card__img" style={{backgroundImage: 'url(https://www.goodfreephotos.com/albums/italy/florence/statue-of-david.jpg)'}}>
                    <div className="card__img-overlay"></div>
                  </div>
                  <div className="card__bottom">
                    <h2 className="card__title"><a href="#">{card.name}</a></h2>
                    <h3 className="card__subtitle">{card.code}</h3>
                    <div className="card__description">
                      <p>{card.description}</p>
                      <div className="card__description--fade-out"></div>
                    </div>
                    <div className="card__description-bottom">
                      <a href="" className="card__toggle-link">&#x25BC;</a>
                    </div> 
                    <div className="card__actions spaced-row">
                      <a href="#" className="col-4"><i className="fa fa-file" aria-hidden="true"></i></a>
                      <a href="#" className="col-4"><i className="fa fa-bullhorn" aria-hidden="true"></i></a>
                      <a href="#" className="col-4"><i className="fa fa-comment" aria-hidden="true"></i></a>
                      <a href="#" className="col-4"><i className="fa fa-folder" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
            )
        });
    }

  render() {

    return(
      <div>

        <div className="cards-container main-container">
          { this.cards() }
        </div>

      </div>
    )

  }
}

export default Cards;