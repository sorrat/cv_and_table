import React from 'react';
import {Link} from 'react-router'


function PageLink(props) {
  return (
    <li>
      <Link to={props.to} activeClassName="active">
        {props.text}
      </Link>
    </li>
  );
}

class NavigationBar extends React.Component {

  static defaultProps = {
    links: [
      {to: '/1', text: 'Page 1'},
      {to: '/2', text: 'Page 2'}
    ]
  }

  render() {
    let links = this.props.links.map(
      link => <PageLink {...link} key={link.to}/>
    );
    return <nav><ul>{links}</ul></nav>;
  }
}

export {NavigationBar};
