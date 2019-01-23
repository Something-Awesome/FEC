import React from 'react';
import ReactDOM from 'react-dom';
import pledges from './sampleData';
import Moment from 'moment';
import $ from 'jquery';
import CssBaseline from '@material-ui/core/CssBaseline';


import AllOrNothing from './components/AllOrNothing.jsx';
import Backers from './components/Backers.jsx';
import Pledged from './components/Pledged.jsx';
import BackThisProject from './components/BackThisProject.jsx';
import RemindMe from './components/RemindMe.jsx';
import ShortLink from './components/ShortLink.jsx';
import SocialMedia from './components/SocialMedia.jsx';
import TimeLeft from './components/TimeLeft.jsx';
import ProgressBar from './components/ProgressBar.jsx';



import { get } from 'http';
import { sameLine } from './Styles.jsx';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.state = {
      backer: false,
      goal: 50000,
      databaseCall: this.getPledges(),
      amountPledged: 0,
      backers: 0,
      daysLeft: Moment().to('20190423', true),
      projectEnd: '20190423',
      projectEndPretty: 'April 23, 2019',
      urlEndpoint: 'http://localhost123/pledgeTracker'
    };
  }

  getPledges () {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:1234/pledgeTracker',
      success: data => {
        console.log('data retrieval successful', data);
        this.setState({
          amountPledged: data.totalPledged,
          backers: data.totalBackers
        });
      },
      error: err => {
        console.log('error', err);
      }
    });
  }

  render() {

    return (
      <div className={this.root}>
        <Paper className={this.paper}>
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <ProgressBar amountPledged={this.state.amountPledged} goal={this.state.goal} />
            </Grid>
            <Grid item xs={12}>
              <Pledged amountPledged={this.state.amountPledged} goal={this.state.goal} />
            </Grid>
            <Grid item xs={12}>
              <Backers backers={this.state.backers} />
            </Grid>
            <Grid item xs={12}>
              <TimeLeft daysLeft={this.state.daysLeft} />
            </Grid>
            <Grid item xs={12}>
              <BackThisProject backer={this.state.backer}/>
            </Grid>
            <Grid item xs={3}>
              <RemindMe />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={3}>
                <SocialMedia />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AllOrNothing projectEnd={this.state.projectEndPretty}/>
            </Grid>
          </Grid>
        </Paper>
      </div>

    );
  }
}


window.campaignTracker = App;

/*
To Do:
progressbar
social media icons
campaign data to database
timeleft to days to go instead of months
buttons
grid system
font
cron job updater
background color
*/
