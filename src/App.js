import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { Redirect } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import NewPost from './components/NewPost';
import Post from './components/Post';
import Posts from './components/Posts';

const url = 'http://localhost:7777'

function App() {
  const navigate = useNavigate();

  const handlerAddPost = event => {
    event.preventDefault()
    fetch(url + '/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({ "id": 0, "content": event.target[0].value })
    });
    document.getElementById('posttext').value = ''
    navigate("/")
  }

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts/new' element={<NewPost handlerAddPost={handlerAddPost} />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
