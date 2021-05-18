import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import $ from 'jquery';

const socket: any = io();
const Competition = () => {
  // const [currentSocket, setCurrentSocket] = useState();
  const [msg, setMsg] = useState('');
  const [view, setView] = useState('');
  const [localView, setLocalView] = useState('');
  const [test, setTest] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    socket.on('new_connect', function (name: string) {
      setName(name);
      $('#chat').append('<알림> ' + name + '님이 채팅창에 접속했습니다.\n');
    });
    socket.on('new_disconnect', function (name: string) {
      $('#chat').append('<알림> ' + name + '님이 채팅창을 떠났습니다.\n');
    });
  }, []);

  const onSubmit = (e: any) => {
    socket.emit('send message', msg);
    // socket.on('receive message', function (v: string) {
    //   $('#chat').append(msg);
    // });
    socket.on('receive message', function (v: string) {
      setTest(msg);
    });
    setMsg('');
    e.preventDefault();
  };

  const onChange = (e: any) => {
    setMsg(e.target.value);
  };

  return (
    <div
      style={{
        color: '#f1f1f1',
        width: '500px',
        height: '300px',
        position: 'absolute',
        right: '0',
        background: '#191f2c',
        fontSize: '1rem',
        alignContent: 'flex-end',
      }}
    >
      <form id='chat' onSubmit={onSubmit}>
        {test}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            outline: 'none',
            width: '100%',
            // border: '1px solid red',
          }}
        >
          <input
            type='text'
            onChange={onChange}
            value={msg}
            style={{ width: '70%' }}
            id='message'
          />
          <button type='submit'>전송</button>
        </div>
      </form>
    </div>
  );
};

export default Competition;
