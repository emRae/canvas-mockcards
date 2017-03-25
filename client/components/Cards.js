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
        <form ref="boardForm" onSubmit={this.getBoards}>
          <input type="submit" ref="handle" value="Get some cards" />
        </form>

        <div className="cards-container main-container">

          <div className="card col col-4">
            <i className="fa fa-pencil-square card__edit-icon" aria-hidden="true"></i>
            <div className="card__img" style={{backgroundImage: 'url(https://www.goodfreephotos.com/albums/italy/florence/statue-of-david.jpg)'}}>
              <div className="card__img-overlay"></div>
            </div>
            <div className="card__bottom">
              <h2 className="card__title"><a href="#">Art History 3</a></h2>
              <h3 className="card__subtitle">Art His 3</h3>
              <div className="card__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim diam eget feugiat euismod. Maecenas congue egestas augue in volutpat. Duis vulputate, purus sit amet egestas consequat, quam felis rutrum turpis, et aliquam libero est eget arcu. Duis dui diam, dictum quis tincidunt id, ultrices in velit. Mauris eu turpis velit.</p>
              </div>  
              <div className="card__actions spaced-row">
                <a href="#" className="col-4"><i className="fa fa-file" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-bullhorn" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-comment" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-folder" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

          <div className="card col col-4">
            <i className="fa fa-pencil-square card__edit-icon" aria-hidden="true"></i>
            <div className="card__img" style={{backgroundImage: 'url(https://www.goodfreephotos.com/albums/italy/florence/statue-of-david.jpg)'}}>
              <div className="card__img-overlay"></div>
            </div>
            <div className="card__bottom">
              <h2 className="card__title"><a href="#">Art History 3</a></h2>
              <h3 className="card__subtitle">Art His 3</h3>
              <div className="card__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim diam eget feugiat euismod. Maecenas congue egestas augue in volutpat. Duis vulputate, purus sit amet egestas consequat, quam felis rutrum turpis, et aliquam libero est eget arcu. Duis dui diam, dictum quis tincidunt id, ultrices in velit. Mauris eu turpis velit.</p>
              </div>  
              <div className="card__actions spaced-row">
                <a href="#" className="col-4"><i className="fa fa-file" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-bullhorn" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-comment" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-folder" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

          <div className="card col col-4">
            <i className="fa fa-pencil-square card__edit-icon" aria-hidden="true"></i>
            <div className="card__img" style={{backgroundImage: 'url(https://www.goodfreephotos.com/albums/italy/florence/statue-of-david.jpg)'}}>
              <div className="card__img-overlay"></div>
            </div>
            <div className="card__bottom">
              <h2 className="card__title"><a href="#">Art History 3</a></h2>
              <h3 className="card__subtitle">Art His 3</h3>
              <div className="card__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim diam eget feugiat euismod. Maecenas congue egestas augue in volutpat. Duis vulputate, purus sit amet egestas consequat, quam felis rutrum turpis, et aliquam libero est eget arcu. Duis dui diam, dictum quis tincidunt id, ultrices in velit. Mauris eu turpis velit.</p>
              </div>  
              <div className="card__actions spaced-row">
                <a href="#" className="col-4"><i className="fa fa-file" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-bullhorn" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-comment" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-folder" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

          <div className="card col col-4">
            <i className="fa fa-pencil-square card__edit-icon" aria-hidden="true"></i>
            <div className="card__img" style={{backgroundImage: 'url(https://www.goodfreephotos.com/albums/italy/florence/statue-of-david.jpg)'}}>
              <div className="card__img-overlay"></div>
            </div>
            <div className="card__bottom">
              <h2 className="card__title"><a href="#">Art History 3</a></h2>
              <h3 className="card__subtitle">Art His 3</h3>
              <div className="card__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim diam eget feugiat euismod. Maecenas congue egestas augue in volutpat. Duis vulputate, purus sit amet egestas consequat, quam felis rutrum turpis, et aliquam libero est eget arcu. Duis dui diam, dictum quis tincidunt id, ultrices in velit. Mauris eu turpis velit.</p>
              </div>  
              <div className="card__actions spaced-row">
                <a href="#" className="col-4"><i className="fa fa-file" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-bullhorn" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-comment" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-folder" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

          <div className="card col col-4">
            <i className="fa fa-pencil-square card__edit-icon" aria-hidden="true"></i>
            <div className="card__img" style={{backgroundImage: 'url(https://www.goodfreephotos.com/albums/italy/florence/statue-of-david.jpg)'}}>
              <div className="card__img-overlay"></div>
            </div>
            <div className="card__bottom">
              <h2 className="card__title"><a href="#">Art History 3</a></h2>
              <h3 className="card__subtitle">Art His 3</h3>
              <div className="card__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim diam eget feugiat euismod. Maecenas congue egestas augue in volutpat. Duis vulputate, purus sit amet egestas consequat, quam felis rutrum turpis, et aliquam libero est eget arcu. Duis dui diam, dictum quis tincidunt id, ultrices in velit. Mauris eu turpis velit.</p>
              </div>  
              <div className="card__actions spaced-row">
                <a href="#" className="col-4"><i className="fa fa-file" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-bullhorn" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-comment" aria-hidden="true"></i></a>
                <a href="#" className="col-4"><i className="fa fa-folder" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    )

  }
}

export default Cards;