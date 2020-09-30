import { combineReducers } from 'redux';

import {
  ADD_CHANNEL,
  GET_CHANNELS,
  GET_CHATS,
  POST_MESSAGE,
  SET_CURRENT_CHANNEL,
  SET_USER,
} from './actionTypes';

const INIT_CHANNEL = {
  id: 1,
  name: 'general',
};

const reducer = (
  state = {
    channels: [INIT_CHANNEL],
    currentChannel: INIT_CHANNEL,
    chats: [],
    user: { name: '' },
  },
  action
) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return {
        ...state,
        channels: [
          ...state.channels,
          action.payload,
        ],
      };
    case GET_CHANNELS:
      let channels = [
        ...state.channels,
        {
          id: 1,
          name: 'general',
        },
        {
          id: 2,
          name: 'personal',
        },
      ];

      return {
        ...state,
        channels,
      };
    case GET_CHATS:
      let chats = {
        1: [
          {
            id: 1,
            from: 'Mathioli',
            topicId: 1,
            message: 'Hello',
          },
          {
            id: 2,
            from: 'Sruthi',
            topicId: 1,
            message: 'Hi',
          },
        ],
        2: [
          {
            id: 1,
            from: 'Mathioli',
            topicId: 2,
            message: 'Oui',
          },
          {
            id: 2,
            from: 'Sruthi',
            topicId: 2,
            message: 'Hi',
          },
        ],
      };

      return {
        ...state,
        chats,
      };
    case POST_MESSAGE:
      let messageTopicId = action.payload.topicId;
      let message = action.payload.message;
      let sender = action.payload.from;
      let messageId = action.payload.id;

      let messages = { ...state.chats };

      if (!messages[messageTopicId]) {
        messages[messageTopicId] = [];
      }

      messages[messageTopicId] = [
        ...messages[messageTopicId],
        {
          id: messageId,
          from: sender,
          topicId: messageTopicId,
          message,
        },
      ];

      return {
        ...state,
        chats: messages,
      };
    case SET_CURRENT_CHANNEL:
      let currentChannel = state.channels.filter(
        (channel) => channel.id === action.payload
      );

      return {
        ...state,
        currentChannel: currentChannel[0],
      };
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.userName,
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  reducer,
});
