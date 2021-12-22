import React from 'react';
import { render } from 'react-dom';
import '@opentok/client';

import App from './App';
import './index.css';
import axios from 'axios'

import {
  SAMPLE_SERVER_BASE_URL,
  API_KEY,
  SESSION_ID,
  TOKEN
} from './config';

function renderApp(credentials) {
  render(
    <App credentials={credentials} />,
    document.getElementById('root')
  );
}

renderApp({});

// if (API_KEY && TOKEN && SESSION_ID) {
//   renderApp({
//     apiKey: API_KEY,
//     sessionId: SESSION_ID,
//     token: TOKEN,
//   });
// } else {
//   axios.get(SAMPLE_SERVER_BASE_URL + 'session').then(resp => {
//     renderApp({
//       apiKey: API_KEY,
//       sessionId: resp.data["0"]["session_id"],
//       token: resp.data["0"]["token"],
//     });
//   }).catch(err => {
//     console.log('Error', err.response.status)
//   });
// }
