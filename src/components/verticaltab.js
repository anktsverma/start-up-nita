import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AccessibilityNew,DonutLarge,Assignment,Autorenew,ArrowRight } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '96%',
    backgroundColor: theme.palette.background.paper,
    margin:'0px auto',
  },
  
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabcont">
    <div className={classes.root} style={{boxShadow:'0px 3px 6px lightgrey'}}>
      <AppBar position="static" color="default">
        <Tabs 
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          // centered
        >
            
            <Tab className='tabf' label="Direct Beneficiary" icon={<AccessibilityNew />} {...a11yProps(0)} />
            <Tab className='tabf' label="Beneficiary Under Process" icon={<DonutLarge />} {...a11yProps(1)} />
            <Tab className='tabf' label="Projects completed" icon={<Assignment />} {...a11yProps(2)} />
            <Tab className='tabf' label="Projects Under Process" icon={<Autorenew />} {...a11yProps(3)} />
                      
          
        </Tabs>
      </AppBar>
      <TabPanel  value={value} index={0}>
      <div className="tabelement" >
      <ul>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum1</a></li>
          <li><ArrowRight className="right"/><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum2</a></li>
          <li><ArrowRight className="right"/><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum3</a></li>
          <li><ArrowRight className="right"/><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum4</a></li>
          <li><ArrowRight className="right"/><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum5</a></li>

      </ul>
      <img src="assets/asset1.png"></img>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="tabelement" >
      <ul>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum1</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum2</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum3</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum4</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum5</a></li>

      </ul>
      <img src="assets/asset2.jpg"></img>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="tabelement" >
      <ul>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>

      </ul>
      <img src="assets/asset3.jpg"></img>
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="tabelement" >
      <ul>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>
          <li><ArrowRight className="right" /><a href="">Software like Aldus PageMaker including versions of Lorem Ipsum</a></li>

      </ul>
      <img src="assets/asset4.jpg"></img>
      </div>
      </TabPanel>
    
    </div>
    </div>
  );
}
