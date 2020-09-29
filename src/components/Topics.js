import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import '../App.css';

import {
  getChannels,
  setCurrentChannel,
} from '../data/actions';

const Topics = props => {
  let [topics, setTopics] = useState([]);
  
  // useEffect(() => {
  //   props.getTopics();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    setTopics(props.topics);
  }, [props.topics]);

  return (
    <List
      className='chatText'
      component='nav'
      dense
      aria-label='Chat topics'
    >
      {
        topics.map(topic => {
          return (
            <ListItem
              className={`${props.selectedTopic.id === topic.id ? 'activeTopic' : ''}`}
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
  );
};

const mapDispatchToProps = dispatch => ({
  getTopics: () => dispatch(getChannels()),
  setCurrentTopic: (id) => dispatch(setCurrentChannel(id)),
});

const mapStateToProps = state => ({
  topics: state.reducer.channels,
  selectedTopic: state.reducer.currentChannel,
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
