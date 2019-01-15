const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const uuid = require('uuid');
const moment = require('moment');
const db = require('../db/db');
const cors = require('cors');

app.use(cors());
app.options('*', cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:7777");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
  next();
});

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

app.post('/comment', (req, res) => {
  if (req.body.comment === "") {
    res.status(400).send('please enter comment'); // bad request
  }

  db.CommentModel.create({
    commentId: uuid(),
    comment: req.body.comment,
    user: req.body.user,
    avatar: req.body.avatar,
    createdAt: moment(),
    replies: []
  }, (err, data) => {
    if (err) {
      console.log('db error .>>', err)
      res.status(404).end();
    }
  });
  res.status(201).end();
});

app.post('/reply', (req, res) => {
  if (req.body.reply === "") {
    res.status(400).send('please enter reply'); // bad request
  }
  const newReply = {};
  newReply['replyId'] = uuid();
  newReply['user'] = req.body.user;
  newReply['reply'] = req.body.reply;
  newReply['avatar'] = req.body.avatar;
  newReply['createdAt'] = moment();
  db.CommentModel.findOneAndUpdate({
      commentId: req.body.commentId
    }, {
      $push: {
        replies: {
          $each: [newReply],
          $position: 0
        }
      }
    },
    (err, data) => {
      if (err) {
        console.log('cannot find comment')
        res.status(404).end();
      }
      res.status(201).send(newReply['replyId']);
    })
});

app.get('/comment', (req, res) => {
  db.CommentModel.find({}).limit(10).sort({
    'createdAt': 'desc'
  }).exec((err, data) => {
    if (err) {
      console.log(err);
      res.status(404).end();
    }
    res.status(200).send(data);
  })
});

module.exports = app;