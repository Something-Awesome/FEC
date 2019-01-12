import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialMedia = props => {
  return (
    <div>
      <SocialIcon url="http://facebook.com" />
      <SocialIcon url="http://twitter.com" />
      <SocialIcon url="http://gmail.com" />
    </div>
  );
};

export default SocialMedia;