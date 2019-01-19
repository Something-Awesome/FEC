import React from 'react';
import $ from 'jquery';


var symbol = '</>';

const clickHandler = () => {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:1234/shortenUrl',
    success: data => {
      console.log(data.shortUrl);
      alert('Project short link: ' + data.shortUrl);
    },
    error: err => {
      console.log('error', err);
    }
  });
};

var style = {
  color: 'gray'
};

const ShortLink = props => {
  return (
    <div>
      <a href='#' onClick={clickHandler} style={style} >{symbol} </a>
    </div>
  );
};

export default ShortLink;