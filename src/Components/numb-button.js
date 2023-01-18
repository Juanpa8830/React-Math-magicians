import React from 'react';
import PropTypes from 'prop-types';

export default class NumbButton extends React.Component {
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

NumbButton.defaultProps = {
  element: null,
  addClass: null,
};

NumbButton.propTypes = {
  element: PropTypes.string,
  addClass: PropTypes.string,
};
