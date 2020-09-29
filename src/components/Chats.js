import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getChats } from '../data/actions';

import '../App.css';

const Chats = (props) => {
  let [chats, setChats] = useState([]);

  // useEffect(() => {
  //   props.getChats();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    let messages = props.chats[props.selectedTopic.id] || [];

    setChats(messages);
  }, [props.chats, props.selectedTopic]);

  return (
    <List aria-label='Chat messages' className='chatText' dense>
      {chats.length === 0 && (
        <ListItem>
          <ListItemText className='noChats'>
            This is the first conversation in this topic
          </ListItemText>
        </ListItem>
      )}
      {chats.map((chat) => {
        return (
          <ListItem key={chat.id}>
            <ListItemText>
              <span className='sender'>{chat.from}</span>
              &nbsp;
              {chat.message}
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getChats: () => dispatch(getChats()),
});

const mapStateToProps = (state) => ({
  chats: state.reducer.chats,
  selectedTopic: state.reducer.currentChannel,
});

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
