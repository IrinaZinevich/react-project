import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';


class CardsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }


  componentDidMount() {
    // const url = 'https://api.unsplash.com/users/@irina_zin/photos';
    // axios.get(url).then(res => {
    //   const cards = res.data;
    //   this.setState({ cards });
    // })
  }

  render() {
    // const { cards } = this.state;
    // const cardsElement = cards.map((card, index) =>
    //     <li className="col-md-4" key={ index }><Card card={ card } /></li>
    // );
    return (
        <main className="album py-5 bg-light">
          <div className="container">
            <ul className="row">
              {/*{ cardsElement }*/}
            </ul>
          </div>
        </main>
    )
  }
}

export default CardsList;
