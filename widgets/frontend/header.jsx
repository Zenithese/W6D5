import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.title;
    const content = this.props.content;
    const select = this.props.select;
    const datakey = this.props.datakey;
    const selected = this.props.selected;
    return (<li datakey={datakey} onClick={select} className={selected}>
        <h1 className="title">{title}</h1>
      </li>);
  }


}

export default Header;