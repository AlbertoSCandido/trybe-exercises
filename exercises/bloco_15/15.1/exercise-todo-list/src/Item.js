import React from 'react';
import PropTypes from 'prop-types'

// import React, { Component } from 'react'

export default class Item extends React.Component {
  render() {
    const { content, changeSelected, selectedTodo } = this.props;
    return (
      <div
      className={selectedTodo === content ? 'selected' : null}
      onClick={ (e) => changeSelected(e.target.innerText) }
      >
        {content}
      </div>
    );
  }
}

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
