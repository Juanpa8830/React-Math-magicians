import React from 'react';
import PropTypes from 'prop-types';

export default function NumbButton(props) {
  // intermediario
  const handleClick = () => {
    const { element, functionClick } = props;
    functionClick(element);
  };
  const { element, addClass } = props;

  return (
    <button onClick={handleClick} type="button" className={addClass}>
      {element}
    </button>
  );
}

NumbButton.defaultProps = {
  element: null,
  addClass: null,
  functionClick: null,
};

NumbButton.propTypes = {
  element: PropTypes.string,
  addClass: PropTypes.string,
  functionClick: PropTypes.func,
};
