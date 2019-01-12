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

const ShortLink = props => {
  return (
    <div>
      <a href='#' onClick={clickHandler}>{symbol}</a>
    </div>
  );
};

export default ShortLink;