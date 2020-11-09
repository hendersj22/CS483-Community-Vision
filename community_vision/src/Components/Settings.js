import React, { useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import HearingIcon from '@material-ui/icons/Hearing';
import { SketchPicker } from 'react-color';

function muteSound() {
    //ToDo: mute the dot and dash sounds
    var volumeMute = true;
    volumeMute = !volumeMute;
}

function valuetext(value) {
    return `${value}°C`;
}

function Settings() {
    var backgroundColor = 'gold';
    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
        },
    }));
    const classes =  useStyles();
    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue)  => {
        setValue(newValue);
    };

    //ToDo: add functionality to volume slider and sound off button click change slider value to 0
    //ToDo: rerender pages when background color is changed
    
    // changes background color
    if(localStorage.getItem("backgroundColor") != null) {
        backgroundColor = localStorage.getItem("backgroundColor");
        
    }
    var [backgroundColor, setColor] = useState(backgroundColor);
    localStorage.setItem("backgroundColor", backgroundColor);
    
    //ToDo: need to adjust sizing so that the page is relative to rescaling and not pixel specific
    return (
        <div style={{
            position: 'absolute', 
            alignContent: 'center', 
            backgroundColor: backgroundColor, 
            width: '100%', 
            flexGrow: 1, 
            textAlign: 'center',
            }}>
            <h1>Choose Your Game Settings</h1>
            <Grid container spacing={3} style={{position: 'relative', marginRight: '10px', marginLeft: '5px', backgroundColor: backgroundColor}}>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Sound
                        <HearingIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <br></br>
                    <Grid container spacing={2}>
                        <Grid item>
                        <VolumeDown />
                        </Grid>
                        {/* insert sample sound levels here */}
                        <Grid item xs>
                            <Slider 
                                defaultValue={50}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={100}
                            />
                        </Grid>
                        <Grid item>
                        <VolumeUp />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{color:"black", width: '100%'}}>
                        Color Packages
                        <ColorLensIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <br></br>
                    <input type="radio" id="defaultColorButton" name="colorButton" value="default" defaultChecked></input>
                    <label for="defaultColorButton">Default</label>
                    <input type="radio" id="greyScaleButton" name="colorButton" value="geryScale" style={{marginLeft: '30px'}}></input>
                    <label for="greyScaleButton">Grey Scale</label>
                    <input type="radio" id="oneColorButton" name="colorButton" value="oneColor" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">One-Color</label>
                    <br></br>
                    <br></br>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Background Color
                        <ColorLensIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    
                    <br></br>
                    <button id="yellowBackground" style={{marginLeft: '30px'}} onClick={function(){
                        setColor('gold');
                    }}></button>
                    <label for="oneColorButton">Yellow</label>
                    <button id="greyBackground" style={{marginLeft: '30px'}} onClick={function(){
                        setColor('#808080');
                    }}></button>
                    <label for="oneColorButton">Grey</label>
                    <button id="whiteBackground" style={{marginLeft: '30px'}} onClick={function(){
                        setColor('#FFFFFF');
                    }}></button>
                    <label for="oneColorButton">White</label>
                    <button id="blackBackground" style={{marginLeft: '30px'}} onClick={function(){
                        setColor('#000000');
                    }}></button>
                    <label for="oneColorButton">Black</label>
                    <br></br>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Speed
                        <AccessAlarmsIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <Slider 
                        defaultValue={50}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={100}
                        style={{marginBottom: '-70px'}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Font Size
                        <FontDownloadIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <h2>Example Font</h2>
                    <Grid container spacing={2}>
                        <Grid  item>
                            <h2 style={{marginTop: '55px', marginBottom: '-70px'}}>A</h2>
                        </Grid>
                        <Grid item xs>
                            <Slider 
                                defaultValue={50}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={100}
                                style={{marginBottom: '-70px'}}
                            />
                        </Grid>
                        <Grid  item>
                            <h2 style={{fontSize: '10vh', marginTop: '5px', marginBottom: '-30px'}}>A</h2>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Font Color
                        <ColorLensIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <br></br>
                    <input type="radio" id="blackFont" name="fontButton" value="" defaultChecked style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Black</label>
                    <input type="radio" id="whiteFont" name="fontButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">White</label>
                    <input type="radio" id="redFont" name="fontButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Red</label>
                    <input type="radio" id="greenFont" name="fontButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Green</label>
                    <input type="radio" id="yellowFont" name="fontButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Yellow</label>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{backgroundColor: '#ffd700'}}>
                        <Link className='nav-link' to="/games">
                            <button style={{width: '100%', height: '100%', fontSize: '5vh'}}>Play!</button>
                        </Link>
                    </Paper>
                    
                </Grid>
            </Grid>
            
            
        </div>
    )
}

class Component extends React.Component {
    state = {
        background: '#fff',
    };
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };  
    render() {
        return (
          <SketchPicker
            color={ this.state.background }
            onChangeComplete={ this.handleChangeComplete }
          />
        );
    }
}

export default Settings;