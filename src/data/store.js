import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import io from 'socket.io-client';

import {
  addChannel,
  postMessage,
} from './actions';
import reducer from './reducers';

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

let socket;

const configureStore = () => {
  if (!socket) {
    let url = window.location.hostname === 'localhost'
      ? ':3001'
      : 'https://madi-chats.herokuapp.com/';
    socket = io(url);

    socket.on('chat message', msg => {
      let {
        id,
        message,
        topicId,
        userName,
      } = msg;

      updateChat(userName, id, message, topicId);
    });

    socket.on('new topic', topic => {
      let {
        id,
        name,
      } = topic;

      addNewTopic(id, name);
    });
  }

  return createStore(reducer, applyMiddleware(logger, thunk));
};

let store = configureStore();

const addTopic = value => {
  socket.emit('new topic', value);
}

const addNewTopic = (id, name) => {
  store.dispatch(addChannel(id, name));
}

const sendMessage = (value) => {
  socket.emit('chat message', value);
}

const updateChat = (userName, id, message, topicId) => {
  store.dispatch(postMessage(userName, id, message, topicId));
};

export {
  addTopic,
  sendMessage,
  store,
};
