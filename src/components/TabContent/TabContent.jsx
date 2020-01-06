import React, { Component } from 'react';

class TabContent extends Component {
  render(){

    const { active, content } = this.props;

    return(
      <div className={ `tab-content ${ active ? 'active' : ''}` }>
        { content }
      </div>
    )
  }
}

export default TabContent;