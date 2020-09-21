import React, {useState,  useEffect} from 'react';
import Editor from './Editor'; 
import useLocalStorage from '../hooks/useLocalStorage';
import Floatingbtn from './Floatingbtn';
import { useMediaQuery } from 'react-responsive';
// import { Tabs } from 'antd';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.action.hover,
  },
}));


  

function App() {
  // const { TabPane } = Tabs;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const [html, setHtml] = useLocalStorage('html','');
  const [css, setCss] = useLocalStorage('css','');
  const [js, setJs] = useLocalStorage('js','');
  const [srcDoc, setSrcDoc] = useState('');
  useEffect(() => {
    const timeout= setTimeout(() => {
        setSrcDoc(
          `
    <html>
      <body>${html}</body>
      <style> *{font-family:Verdana, Geneva, Tahoma, sans-serif}${css}</style>
      <script>${js}</script>
    </html>
`
        )
    }, 300);
    return() => clearTimeout(timeout);
  }, [html,css,js])

  return (
    <>
      {isDesktopOrLaptop && <> 
      <div className="pane top-pane">
        <Editor 
          language="xml" 
          displayName="HTML" 
          value={html} 
          onChange={setHtml} 
          
        />
        <Editor 
          language="css" 
          displayName="CSS" 
          value={css} 
          onChange={setCss} 
        />
        <Editor 
        language="javascript" 
        displayName="JAVASCRIPT" 
        value={js} 
        onChange={setJs} 
      />
      </div>
      </>}

      {isTabletOrMobileDevice && <>
      {/* {document.getElementsByClassName("editor-container")[0].style.height = "100px"} */}
        <div className={classes.root }>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="primary"
          textColor="secondary"
        >
          <LinkTab label="HTML" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="CSS" href="/trash" {...a11yProps(1)} />
          <LinkTab label="JAVASCRIPT" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Editor 
          language="xml" 
          displayName="HTML" 
          value={html} 
          onChange={setHtml} 
          // height={300}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Editor 
          language="css" 
          displayName="CSS" 
          value={css} 
          onChange={setCss}
          // height={300} 
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Editor 
        language="javascript" 
        displayName="JAVASCRIPT" 
        value={js} 
        onChange={setJs}
        // height={300} 
      />
      </TabPanel>
    </div>

      </>}
      
      <div className="pane">
      <iframe
        srcDoc = {srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
      </div>
      {isDesktopOrLaptop && <> <div className="hidd" style={{display:'flex', justifyContent:'flex-end' ,alignItems:'flex-end'}}>
      <div style={{position:'absolute', padding:'50px'}}>
      <Floatingbtn
      className="floatingbtn"
      />
      </div>
      </div> </>}
      
    </>
  );
}

export default App;
