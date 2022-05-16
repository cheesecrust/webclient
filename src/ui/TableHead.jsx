import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ( props ) => {
    const { children } = props;

    return (
      <thead>
        {React.Children.map(children, child =>
          React.cloneElement(child, { isHeader: true })
        )}
      </thead>
    );
}

TableHead.propTypes = {
  children: PropTypes.node
};

export default TableHead;
