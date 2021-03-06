/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Typography } from '@material-ui/core';
import { ExternalLink } from 'react-external-link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import useStyles from './SocialIcons.styles';

const SocialIcons = ({ props }) => {
  const classes = useStyles(props);

  const socialIcons = [
    {
      icon: <GitHubIcon />,
      href: 'https://github.com/evabanegacom',
    },
    {
      icon: <TwitterIcon />,
      href: 'https://twitter.com/precious_bones',
    },
    {
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/in/precious-udegbue/',
    },
  ];

  const getSocialIcons = () => socialIcons.map(({ icon, href }) => (
    <li key={uuidv4()}>
      <ExternalLink href={href} className={classes.socialIcons}>
        {icon}
      </ExternalLink>
    </li>
  ));

  return (
    <>
      <Typography className={classes.connect}>LETS CONNECT</Typography>
      <ul>{getSocialIcons()}</ul>
    </>
  );
};

SocialIcons.defaultProps = {
  props: () => { },
};

SocialIcons.propTypes = {
  props: PropTypes.func,
};

export default SocialIcons;
