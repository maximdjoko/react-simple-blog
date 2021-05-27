import React from 'react'
import DisplayAllPosts from './DisplayAllPosts';

const CreateNewPost = () => {
    return (
        <>
            <form>
                <h1>Create New Post</h1>
                <input 
                    onChange={props.savePostTitleToState}
                    type="text" 
                    placeholder="title" 
                    size="39" 
                    required 
                />
                <br />
                <br />
                <textarea 
                    onChange={props.savePostContentToState}
                    placeholder="Contents" 
                    rows="8" 
                    cols="41" 
                    required 
                ></textarea>
                <br />
                <br />
                <button>Save Post</button>
            </form>
        </>
    )
}

export default CreateNewPost
