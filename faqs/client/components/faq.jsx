import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class Faq extends React.Component{

    state = {
      expanded: null
    };


  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {

    const {expanded} = this.state;
    const {classes} = this.props;

    return (
      <div>
        <Grid item xs={6}>
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6"> {this.props.question} </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="subtitle1">
                  {this.props.answer}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
      </div>
    );
    // return (
    //   <Button variant="contained" color="primary">
    //     Ask Away
    //   </Button>
    // );
  }
}

//ReactDOM.render(<Faqs/>,document.getElementById('root'))

// window.Faq = Faqs;

export default Faq;