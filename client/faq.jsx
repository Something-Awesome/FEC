import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';




import Button from '@material-ui/core/Button'

class Faqs extends React.Component{
  render() {
    return (
      <Button variant="contained" color="primary">
        Ask Away
      </Button>
    );
  }
}

ReactDOM.render(<Faqs/>,document.getElementById('root'))