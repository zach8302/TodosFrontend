import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {API_KEY, SAMPLE_SERVER_BASE_URL} from "./config";
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
import { FormLabel } from '@material-ui/core';
import axios from 'axios';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function CreateCallPage() {

    const [code, setCode] = useState("");
    const [id, setId] = useState("");
    const [apiKey, setApiKey] = useState(API_KEY);
    const [sessionId, setSessionId] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const createSession = async () => {
        console.log('hi')
        axios.get(SAMPLE_SERVER_BASE_URL + 'session').then(resp => {
            navigate('../call', {
                state: {
                    "apiKey": apiKey, 
                    'sessionId': resp.data[String(code)]["session_id"], 
                    'token' : resp.data[String(code)]["token"], 
                    'id' : String(code + 1), 
                }
            });
        })
        .catch(err => {
            console.log('Error', err.response.status)
        });
    }

    const handleCallButtonPressed = async function() {
        createSession();
    }


    const handleCodeChanged = e => {
        setCode(e.target.value - 1);
    }

    
    const doNav = async () => {
        console.log(token);

        navigate('../call', {
            state: {
                "apiKey": apiKey, 
                'sessionId': sessionId, 
                'token' : token,
                'id' : id,
            }
        });
    }
    const goHome = () => {
        navigate('../');
    }

    const goCreate = () => {
        navigate('../create');
    }

    return (<div>
        <Tabs>
            <Tab label="Home" onClick={goHome}/>
            <Tab label="Create" onClick={goCreate}/>
            <Tab label="Join"/>
        </Tabs>
        <Grid container spacing={3}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    Join Call
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField 
                        required={true} 
                        type="string" 
                        defaultValue=""
                        inputProps={{
                            style: {textAlign : "center"},
                        }}
                        onChange={handleCodeChanged}
                    />
                    <FormHelperText>
                        <div align = "center">Room</div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" onClick={handleCallButtonPressed}>Join Call</Button>
            </Grid>
        </Grid>
    </div>);
}

