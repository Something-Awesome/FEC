import React from 'react';
import ReactDOM from 'react-dom';
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
      goal: 0,
      databaseCallPledges: this.getPledges(),
      databaseCallCampaign: this.getCampaign(),
      amountPledged: 0,
      backers: 0,
      projectEnd: '',
      projectEndPretty: '',
      facebookPage: '',
      twitterPage: '',
      emailAddress: '',
      urlEndpoint: '/pledgeTracker'
    };
  }

  getPledges () {
    $.ajax({
      method: 'GET',
      url: '/pledgeTracker',
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

  getCampaign () {
    $.ajax({
      method: 'GET',
      url: '/campaign',
      success: data => {
        console.log('data retrieval successful', data);
        this.setState({
          goal: data.goal,
          projectEnd: data.projectEnd,
          facebookPage: data.facebookPage,
          twitterPage: data.twitterPage,
          emailAddress: data.emailAddress
        });
        this.loadProjectEnd();
        this.makeProjectEndPretty();
      },
      error: err => {
        console.log('error', err);
      }
    });
  }

  loadProjectEnd () {
    this.setState({
      daysLeft: Moment().to(this.state.projectEnd, true)
    });
  }

  makeProjectEndPretty () {
    var projectEndYear = this.state.projectEnd.slice(0, 4);
    var projectEndDay = this.state.projectEnd.slice(6);
    console.log('day', projectEndDay);
    var projectEndMonth = (num) => {
      if (num === '01') {
        return 'January';
      } else if (num === '02') {
        return 'February';
      } else if (num === '03') {
        return 'March';
      } else if (num === '04') {
        return 'April';
      } else if (num === '05') {
        return 'May';
      } else if (num === '06') {
        return 'June';
      } else if (num === '07') {
        return 'July';
      } else if (num === '08') {
        return 'August';
      } else if (num === '09') {
        return 'September';
      } else if (num === '10') {
        return 'October';
      } else if (num === '11') {
        return 'November';
      } else {
        return 'December';
      }
    };
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
                <SocialMedia facebookPage={this.state.facebookPage} twitterPage={this.state.twitterPage} emailAddress={this.state.emailAddress} />
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

//ReactDOM.render(element, document.getElementById('root'));

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
