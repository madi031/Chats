import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import ChatHeader from './components/ChatHeader';
import Chats from './components/Chats';
import Topics from './components/Topics';

import { postChat } from './data/actions';

import './App.css';

import 'fontsource-roboto';

function App(props) {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    props.postMessage(props.selectedTopicId, message, props.userName);

    setMessage('');
  };

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
            <TextField
              className='messageInput'
              label='Enter message here...'
              multiline
              variant='filled'
              value={message}
              onChange={handleChange}
            />
            <IconButton
              aria-label='send message'
              color='primary'
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  postMessage: (topicId, message, from) =>
    dispatch(postChat(from, message, topicId)),
});

const mapStateToProps = (state) => ({
  selectedTopicId: state.reducer.currentChannel.id,
  userName: state.reducer.user.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
