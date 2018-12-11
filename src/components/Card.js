import React, {Component} from 'react';

class Card extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {card} = this.props;
    return (
      <div className="card mb-4 shadow-sm" style={{width: '18rem', height: '18rem'}}>
        <img className="card-img-top" src={card.url}/>
      </div>
    )
  }
}
export default Card;
