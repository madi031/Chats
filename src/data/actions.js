import { addTopic, sendMessage } from './store';

import {
  ADD_CHANNEL,
  GET_CHANNELS,
  GET_CHATS,
  POST_MESSAGE,
  SET_CURRENT_CHANNEL,
  SET_USER,
} from './actionTypes';

export const addNewTopic = (name) => {
  return (dispatch) => {
    let id = `TOPIC_${new Date().getTime().toString(36)}`;

    // emit message to server
    addTopic({
      id,
      name,
    });

    dispatch(addChannel(id, name));

    dispatch(setCurrentChannel(id));
  };
};

export const addChannel = (id, name) => {
  return {
    type: ADD_CHANNEL,
    payload: {
      id,
      name,
    },
  };
};

export const getChannels = () => {
  return {
    type: GET_CHANNELS,
  };
};

export const setCurrentChannel = (channelId) => {
  return {
    type: SET_CURRENT_CHANNEL,
    payload: channelId,
  };
};

export const getChats = () => {
  return {
    type: GET_CHATS,
  };
};

export const postChat = (from, message, topicId) => {
  return (dispatch) => {
    let id = `MSG_${new Date().getTime().toString(36)}`;

    // emit the message to the server for broadcasting
    sendMessage({
      id,
      message,
      topicId,
      userName: from,
    });

    dispatch(postMessage(from, id, message, topicId));
  };
};

export const postMessage = (from, id, message, topicId) => {
  return {
    type: POST_MESSAGE,
    payload: {
      id,
      message,
      from,
      topicId,
    },
  };
};

export const setUser = () => {
  return {
    type: SET_USER,
    payload: {
      userName: `User_${new Date().getTime().toString(36)}`,
    },
  };
};

export const updateUser = (userName) => {
  return {
    type: SET_USER,
    payload: {
      userName,
    },
  };
};
