import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { setUser, updateUser } from '../data/actions';

const ChatHeader = props => {
  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    props.setUser();
    displayRenameModal();
    document.querySelector('.backdrop').addEventListener('click', closeModal);

    return () => {
      document.querySelector('.backdrop').removeEventListener('click');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUserName(props.userName);
  }, [props.userName]);

  const handleChange = e => {
    setUserName(e.target.value);
  }

  const displayRenameModal = () => {
    document.querySelector('.backdrop').style.display = 'flex';
  };

  const hideRenameModal = () => {
    document.querySelector('.backdrop').style.display = 'none';
  };

  const closeModal = e => {
    if (e.target === document.querySelector('.backdrop')) {
      hideRenameModal();
    }
  }

  const updateUserName = () => {
    if (userName.length !== 0) {
      props.updateUser(userName);
    }

    hideRenameModal();
  };

  return (
    <div className='chatHeader'>
      <div className='backdrop'>
        <div className='modal'>
          <TextField
            autoFocus
            className='userNameInput'
            label='Enter your name here...'
            value={userName}
            onChange={handleChange}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={updateUserName}
          >
            OK
          </Button>
        </div>
      </div>
      <h3>Chats</h3>
      <h4>
        Hello,
        &nbsp;
        <span
          onClick={displayRenameModal}
        >
          {props.userName}
        </span>
      </h4>
      <p>(Click the username to update it)</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setUser: () => dispatch(setUser()),
  updateUser: (userName) => dispatch(updateUser(userName)),
});

const mapStateToProps = state => ({
  userName: state.reducer.user.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader);
