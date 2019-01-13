import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Button from '@material-ui/core/Button'


class Faqs extends React.Component{

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
                <Typography component="h4">FAQ question goes here</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Ask not what your country can do for you - ask what you can do for your country!
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

ReactDOM.render(<Faqs/>,document.getElementById('root'))