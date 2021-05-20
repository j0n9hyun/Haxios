import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { io } from 'socket.io-client';

// const socket: any = io('http://localhost:3000/', {
//   forceNew: true,
//   autoConnect: true,
// });
const Competition = () => {
  const [msg, setMsg] = useState<any>('');
  // useEffect(() => {
  //   setMsg('');
  //   socket.on('new_connect', function (name: string) {
  //     $('#chatLog').append(
  //       '<알림> ' + name + '님이 채팅창에 접속했습니다. <br />'
  //     );
  //   });
  //   socket.on('new_disconnect', function (name: string) {
  //     $('#chatLog').append(
  //       '<알림> ' + name + '님이 채팅창을 떠났습니다. <br />'
  //     );
  //   });
  //   socket.on('receive message', function (msg: any) {
  //     console.log(msg.name);
  //     $('#chatLog').append(msg + '<br />');
  //     $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
  //   });
  // }, []);

  // const onSubmit = (e: any) => {
  //   socket.emit('send message', { msg });
  //   e.preventDefault();
  //   setMsg('');
  // };

  // const onChange = (e: any) => {
  //   setMsg(e.target.value);
  // };

  return (
    <div
      style={{
        color: '#f1f1f1',
        width: '400px',
        height: '500px',
        position: 'absolute',
        top: '80px',
        right: '100px',
        background: '#191f2c',
        fontSize: '1rem',
        wordBreak: 'break-word',
        borderRadius: '15px',
      }}
    >
      <div
        id='chatLog'
        style={{
          height: '500px',
          overflowY: 'auto',
        }}
      ></div>
      {/* <form id='chat' onSubmit={onSubmit}>
        <input type='text' onChange={onChange} value={msg} id='message' />
        <button type='submit'>전송</button>
      </form> */}
    </div>
  );
};

export default Competition;
