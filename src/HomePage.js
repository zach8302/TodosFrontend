import React from 'react';
import { useNavigate } from 'react-router-dom';
import JoinCallPage from './JoinCallPage';
import CreateCallPage from './CreateCallPage';
import CallPage from './CallPage';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { HashRouter, BrowserRouter as Router, Routes, Route, Link, Redirect} from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    const goCreate = () => {
        navigate('../create')
    }

    const goJoin = () => {
        navigate('../join')
    }

    return (<div>
        <Tabs>
            <Tab label="Home" />
            <Tab label="Create" onClick={goCreate}/>
            <Tab label="Join" onClick={goJoin}/>
        </Tabs>
        <Grid container spacing={6}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    Video Chat - Home
                </Typography>
            </Grid>
        </Grid>
    </div>)
    
}