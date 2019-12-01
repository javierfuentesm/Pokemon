/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa/';

import { ShareButtonRectangle, ShareBlockStandard } from 'react-custom-share';

const ShareComponent = ({
  text, name, url2, order,
}) => {
  const shareBlockProps = {
    url: url2,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
    ],
    text: `Aprendí cosas interesantes sobre ${name}`,
    longtext: `Aquí te comparto algunos de los datos más interesantes , ${name} en el Pokedex es el número ${order} y ${text}`,
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareComponent;
