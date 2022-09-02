import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menu'>
            <Link className='menu__item' to="/">Все посты</Link>
            <Link className='menu__item' to="/posts/new">Новый пост</Link>
        </div>
    )
}
