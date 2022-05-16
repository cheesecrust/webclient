import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';

const Table = ( props ) => {
    const { styles, children } = props;
    return (
      <table {...css(styles.table)}>
        {children}
      </table>
    );
}

Table.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node.isRequired,
};

export default withStyles(({ color, unit }) => ({
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
}))(Table);
