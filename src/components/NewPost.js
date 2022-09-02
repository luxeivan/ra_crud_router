import React from 'react'

export default function NewPost({ handlerAddPost }) {
    return (
        <div>
            <form className='newpost' onSubmit={handlerAddPost}>
                <input className='newpost__text' type="text" id='posttext'/>
                <button className='newpost__button' type='submit'>Добавить пост</button>
            </form>
        </div>
    )
}
