import React, {Component} from 'react';
import Article from './Article';
import articles from '../fixtures';


class ArticleList extends Component {
  state = {
    reverted: false
  }

  render() {
    const ArticleElements = articles.map((article, index) =>
        <li key={article.id} style={{marginBottom: '10px'}}><Article article={article} defaultOpen = {index === 0} /></li>
    );
    return (
      <div>
        <h3 className="display-5 text-center">
          Articles list
          <button className="btn btn-primary ml-3" onClick={this.revert}>Revert</button>
        </h3>
        <ul>
          {this.state.reverted ? ArticleElements.reverse() : ArticleElements}
        </ul>
      </div>
    )
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    })
  }
}


export default ArticleList;
