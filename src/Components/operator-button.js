import React from 'react';
import PropTypes from 'prop-types';

export default class OperatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { element } = this.props;
    const { addClass } = this.props;
    return (
      <button type="button" className={addClass}>
        {element}
      </button>
    );
  }
}

OperatorButton.defaultProps = {
  element: null,
  addClass: null,
};

OperatorButton.propTypes = {
  element: PropTypes.string,
  addClass: PropTypes.string,
};
