import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const url = 'http://localhost:7777'

export default function Post() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [isChange, setIsChange] = useState(false)

    const navigate = useNavigate();
    useEffect(() => {
        fetch(url + `/posts/${params.id}`)
            .then(response => response.json())
            .then(post => {
                if (post !== []) {
                    setPost(post)
                }
            });
    }, [isChange])
    const handlerDel = event => {
        fetch(url + `/posts/${event.target.dataset.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(() => {
                setPost({})
                navigate("/");
            })
    }

    const handlerChange = event => {
        event.preventDefault()
        console.dir(event.target[0].value)
        fetch(url + `/posts`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
          },
          body: JSON.stringify({ "id": post.id, "content": event.target[0].value })
        });
        setIsChange(false)
    }
    return (
        <div className='post'>
            {!isChange && <div>
                <div className='post__del' data-id={post.id} onClick={handlerDel}>Удалить</div>
                <div className='post__edit' data-id={post.id} onClick={()=>setIsChange(true)}>Редактировать</div>
                <img src="https://i.pravatar.cc/300" alt="" />
                <p className='post__content'>
                    {post && post.content}
                </p>
                <p className='post__time'>{post && Date(post.created)}</p>
            </div>}
            {isChange && <div>
                <div className='post__del' data-id={post.id} onClick={()=>setIsChange(false)}>X</div>
                <img src="https://i.pravatar.cc/300" alt="" />
                <form action="" onSubmit={handlerChange} className='post__form'>
                    <input type="text" defaultValue={post.content} className='post__input' />
                    <button className='post__change'>Изменить</button>
                </form>
                <p className='post__time'>{post && Date(post.created)}</p>
            </div>}

        </div>
    )
}
