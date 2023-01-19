import React from 'react';
import PropTypes from 'prop-types';

export default class NumbButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
//intermediario
  handleClick = () => {
    const { element, functionClick } = this.props;
    functionClick(element);
  }
  render() {
    const { element, addClass } = this.props;
   
    return (
      <button onClick = {this.handleClick} type="button" className={addClass}>
        {element}
      </button>
    );
  }
}

NumbButton.defaultProps = {
  element: null,
  addClass: null,
 };

NumbButton.propTypes = {
  element: PropTypes.string,
  addClass: PropTypes.string,
}
