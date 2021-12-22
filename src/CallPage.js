import { API_KEY, SAMPLE_SERVER_BASE_URL } from "./config"
import axios from "axios";
import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Call from "./Call";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


export default function CallPage(props) {
    const {state} = useLocation();
    const {id} = state;

    const navigate = useNavigate();

    const goHome = () => {
        navigate('../');
    }

    const goCreate = () => {
        navigate('../create');
    }

    const goJoin = () => {
        navigate('../join');
    }

    
    return (<div>
    <Tabs>
            <Tab label="Home" onClick={goHome}/>
            <Tab label="Create" onClick={goCreate}/>
            <Tab label="Join" onClick={goJoin}/>
    </Tabs>
    <Typography component='h4' variant='h4' align='center'>
                    Room {id}
    </Typography>
    <Call props={state}/>
    </div>)
}