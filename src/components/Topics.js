import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import '../App.css';

import {
  addNewTopic,
  getChannels,
  setCurrentChannel,
} from '../data/actions';

const Topics = props => {
  let [topics, setTopics] = useState([]);
  let [newTopic, setNewTopic] = useState('');
  
  useEffect(() => {
    // props.getTopics();
    document.querySelector('.topicBackdrop').addEventListener('click', closeModal);

    return () => {
      document.querySelector('.topicBackdrop').removeEventListener('click');
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTopics(props.topics);
  }, [props.topics]);

  const handleChange = e => {
    setNewTopic(e.target.value);
  }

  const displayRenameModal = () => {
    setNewTopic('');
    document.querySelector('.topicBackdrop').style.display = 'flex';
  };

  const hideRenameModal = () => {
    document.querySelector('.topicBackdrop').style.display = 'none';
  };

  const closeModal = e => {
    if (e.target === document.querySelector('.topicBackdrop')) {
      hideRenameModal();
    }
  }

  const addNewTopic = () => {
    if (newTopic.length !== 0) {
      props.addNewTopic(newTopic);
    }

    hideRenameModal();
  };

  return (
    <div>
      <div className='topicBackdrop'>
        <div className='modal'>
          <TextField
            autoFocus
            className='topicInput'
            label='Enter new topic name here...'
            value={newTopic}
            onChange={handleChange}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={addNewTopic}
          >
            OK
          </Button>
        </div>
      </div>
      <List
        className='chatText'
        component='nav'
        dense
        aria-label='Chat topics'
      >
        <ListItem>
          <ListItemText
            className='topicTitle'
          >
            Topics
          </ListItemText>
          <IconButton
            aria-label='Add new topic'
            className='newTopicButton'
            color='default'
            onClick={displayRenameModal}
          >
            <AddIcon />
          </IconButton>
        </ListItem>
        {
          topics.map(topic => {
            return (
              <ListItem
                className={`topics ${props.selectedTopic.id === topic.id ? 'activeTopic' : ''}`}
                key={topic.id}
                button
                onClick={() => props.setCurrentTopic(topic.id)}
              >
                <ListItemText
                  primary={topic.name}
                />
              </ListItem>
            );
          })
        }
      </List>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewTopic: (name) => dispatch(addNewTopic(name)),
  getTopics: () => dispatch(getChannels()),
  setCurrentTopic: (id) => dispatch(setCurrentChannel(id)),
});

const mapStateToProps = state => ({
  topics: state.reducer.channels,
  selectedTopic: state.reducer.currentChannel,
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
