import { API_KEY, SAMPLE_SERVER_BASE_URL } from "./config"
import axios from "axios";
import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Link } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { useNavigate } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function CreateCallPage() {

    const [code, setCode] = useState("");
    const [apiKey, setApiKey] = useState(API_KEY);
    const [sessionId, setSessionId] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();



    const createSession = () => {
        axios.post(SAMPLE_SERVER_BASE_URL + 'create-session').then(resp => {
            navigate('../call', {
                state: {
                    "apiKey": apiKey,
                    'sessionId': resp.data["session_id"],
                    'token' : resp.data["token"], 
                    'id' : resp.data["id"]
                }
            });
        }).catch(err => {
            console.log('Error', err.response.status)
        });
    }

    const goJoin = () => {
        navigate('../join');
    }

    const goHome = () => {
        navigate('../')
    }
    const handleCallButtonPressed = () =>
        {createSession();}

    const doNav = () =>
        
        navigate('../call', {
            state: {
                "apiKey": apiKey, 'sessionId': sessionId, 'token' : token,
            }
        });


    return (<div>
        <Tabs>
            <Tab label="Home" onClick={goHome}/>
            <Tab label="Create"/>
            <Tab label="Join" onClick={goJoin}/>
        </Tabs>
        <Grid container spacing={6}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    Create A Call
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" onClick={handleCallButtonPressed}>Create Call</Button>
            </Grid>
        </Grid>
    </div>)
}