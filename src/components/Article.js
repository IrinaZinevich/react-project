import React, { Component } from 'react';

class Article extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.defaultOpen
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) {
      console.log(this.props.defaultOpen);
      console.log(nextProps.defaultOpen);
      this.setState({
        isOpen: nextProps.defaultOpen
      })
    }
  }

  render(){
    const {article} = this.props;
    const body = this.state.isOpen && <div className="card-body animated fadeIn">{article.desc}</div>;
    return(
        <div className="card">
          <div className="card-header">
            <h3 className="card-title text-success">
              {article.title}
              <button onClick={this.togglText} className="btn btn-outline-success float-right">{this.state.isOpen ? 'Close' : 'Open'}</button>
            </h3>
          </div>
          {body}
        </div>
    )
  }

  togglText = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article;
