import React from 'react'

const ModifyPost = () => {
    return (
        <>
            <form >
                <h1>Modify Post</h1>
                <input type="text" placeholder="title" size="39" required />
                <br />
                <br />
                <textarea placeholder="Contents" cols="41" rows="8"></textarea>
                <br />
                <br />
                <button>Update Post</button>
            </form>
        </>
    )
}

export default ModifyPost
