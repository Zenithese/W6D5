import React from 'react';
import Header from './header';

class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {selectedIdx: 0};
    this.select = this.select.bind(this);
  }

  render() {
    const tabHeaders = this.props.tabs.map((tab, idx) => {
      let selected;
      if (this.state.selectedIdx === idx) {
        selected = "selected";
      } else {
        selected= "unselected";
      }
      return (
      <Header 
        key={idx}
        datakey={idx}
        title={tab.title}
        select={this.select}
        selected={selected}
      />);
    });

    return (
      <>
        <ul className="tab-header">
          {tabHeaders}
        </ul>
        <article className="tab-content">
          {this.props.tabs[this.state.selectedIdx].content}
        </article>
      </>
    );
  }

  select(e) {
    this.setState({selectedIdx: parseInt(e.currentTarget.getAttribute("datakey"))});
    // debugger
  }
}

export default Tabs;