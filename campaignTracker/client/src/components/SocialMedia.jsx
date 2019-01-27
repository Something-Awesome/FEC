import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';

import ShortLink from './ShortLink.jsx';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});




class FontAwesome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {
    const { classes } = this.props;
    console.log('props', this.props)
    const email = 'mailto:' + this.props.emailAddress;

    return (
      <div className={classes.root}>
        <Link href={this.props.facebookPage}>
          <Icon className={classNames(classes.icon, 'fab fa-facebook-square')} color="disabled" />
        </Link>
        <Link href={this.props.twitterPage}>
          <Icon className={classNames(classes.icon, 'fab fa-twitter')} color="disabled" />
        </Link>
        <Link href={email}>
          <Icon className={classNames(classes.icon, 'fa fa-envelope')} color="disabled" />
        </Link>
        <ShortLink className={classNames(classes.icon)} color="disabled" />
      </div>
    );
  }
}

FontAwesome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FontAwesome);
