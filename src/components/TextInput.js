import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postChat } from '../data/actions';

const TextInput = props => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    props.postMessage(props.selectedTopicId, message, props.userName);

    setMessage('');
  };

  return (
    <div className='footerItemsWrapper'>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postMessage: (topicId, message, from) =>
    dispatch(postChat(from, message, topicId)),
});

const mapStateToProps = (state) => ({
  selectedTopicId: state.reducer.currentChannel.id,
  userName: state.reducer.user.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
