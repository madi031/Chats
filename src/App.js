import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import ChatHeader from './components/ChatHeader';
import Chats from './components/Chats';
import TextInput from './components/TextInput';
import Topics from './components/Topics';

import './App.css';

import 'fontsource-roboto';

function App(props) {
  return (
    <div className='root'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className='paper'>
            <ChatHeader />
          </Paper>
        </Grid>
        <Grid item xs={3} style={{ paddingRight: 0 }}>
          <Paper className='paper topicWindow'>
            <Topics />
          </Paper>
        </Grid>
        <Grid item xs={9} style={{ paddingLeft: 0 }}>
          <Paper className='paper chatWindow'>
            <Chats />
          </Paper>
        </Grid>
        <Grid className='footer' item xs={12}>
          <Paper className='paper messageInputContainer'>
            <TextInput />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
