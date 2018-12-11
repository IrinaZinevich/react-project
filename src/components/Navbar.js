import React, {Component} from 'react';
import navs from '../navs';

class Navbar extends Component {
  render() {
    const navItem = navs.map((item) =>
        <li className="nav-item active" key={item.id}><a className="nav-link" href={"/"+item.link}>{item.title}</a></li>
    )
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="col navbar-brand" href="/">Test project</a>
        <ul className="navbar-nav mr-auto">
          {navItem}
        </ul>
      </nav>
    )
  }
}

export default Navbar;
