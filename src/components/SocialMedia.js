import React from 'react';
import { makeStyles } from '@material-ui/core';
import FontAwesome from 'react-fontawesome';

const useStyles = makeStyles(theme => ({
  social: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& > a': {
      margin: '0 0.4rem',
      borderRadius: '50%',
      color: ({ themeType }) => (themeType === 'light' ? theme.palette.primary.dark : theme.palette.light.main),
      '&:hover': {
        background: ({ themeType }) => (themeType === 'light' ? theme.palette.primary.dark : theme.palette.light.main),
        color: ({ themeType }) => (themeType === 'light' ? theme.palette.light.main : theme.palette.primary.dark),
        transition: '0.4s all ease-in-out'
      },
      '& > span': {
        width: ({ iconSize }) => (iconSize === '2x' ? '40px' : '30px'),
        height: ({ iconSize }) => (iconSize === '2x' ? '40px' : '30px'),
        borderColor: ({ themeType }) => (themeType === 'light' ? theme.palette.primary.dark : theme.palette.light.main),
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer'
      }
    },
    '@media (max-width: 450px)': {
      justifyContent: 'center'
    }
  }
}));

const socialMediaList = [
  { title: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/in/' },
  { title: 'Twitter', icon: 'twitter', link: 'https://twitter.com/' },
  { title: 'Facebook', icon: 'facebook', link: 'https://facebook.com/' },
  { title: 'Instagram', icon: 'instagram', link: 'https://instagram.com/' }
];

const SocialMedia = ({ themeType, iconSize }) => {
  const classes = useStyles({ themeType, iconSize });
  return (
    <div className={classes.social}>
      {socialMediaList.map(media => (
        <a key={media.icon} href={media.link} target="blank" style={{ margin: '0 0.5rem', textDecoration: 'none' }}>
          <FontAwesome name={media.icon} title={media.title} size={iconSize || 'lg'} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
