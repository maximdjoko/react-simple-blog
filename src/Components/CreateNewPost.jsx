import React from 'react'
// import DisplayAllPosts from './DisplayAllPosts';

const CreateNewPost = (props) => {
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
                    ref={props.getTitle}
                />
                <br />
                <br />
                <textarea 
                    onChange={props.savePostContentToState}
                    placeholder="Contents" 
                    rows="8" 
                    cols="41" 
                    required 
                    ref={props.getContent}
                ></textarea>
                <br />
                <br />
                <button 
                    onClick={props.savePost} >Save Post</button>
            </form>
        </>
    )
}

export default CreateNewPost
