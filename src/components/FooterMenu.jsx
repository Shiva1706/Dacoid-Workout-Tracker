import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import LoupeOutlinedIcon from '@mui/icons-material/LoupeOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function FooterMenu() {
  const [value, setValue] = React.useState('search');

  let styleElem = {
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    padding: "1rem 1rem 1rem 1rem",
    width: '100%',
    maxWidth: "375px",
    margin: 'auto',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#EFEFFF",
    color: "#fff",
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={styleElem} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeRoundedIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<InsightsOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<LoupeOutlinedIcon  />}
      />
      <BottomNavigationAction
        label="Photo"
        value="photo"
        icon={<PhotoCameraOutlinedIcon  />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile" 
        icon={<PersonOutlineOutlinedIcon  />} />
    </BottomNavigation>
  );
}