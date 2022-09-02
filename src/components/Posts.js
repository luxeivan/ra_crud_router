import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const url = 'http://localhost:7777'

export default function Posts() {

    const [state, setState] = useState({ posts: [] })
    useEffect(() => {
        fetch(url + '/posts')
            .then(response => response.json())
            .then(posts => {
                console.log(posts)
                setState(prev => ({ ...prev, posts }))
            });
    }, [])
    return (
        <ul className='posts'>
            {state.posts.map(item =>
                <li className='posts__item' key={item.id} data-id={item.id}>
                    <Link className='posts__link' to={`/posts/${item.id}`}>
                        {item.content}
                    </Link>
                </li>)}
        </ul>
    )
}
