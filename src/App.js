import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"

const App = props => {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get("https://reddit.com/r/funny.json")
            .then(response => {
                setPosts(response.data.data.children)
            })
            .catch(error => {
                console.log(error)
            })         
    }, [])

    console.log(posts)

    const postsDisplay = posts.map(post => 
            <li 
                key={post.data.id}
                className="post-list-item"
            >
                {`${post.data.author} `}
                {post.data.title}
                {/* <img src={post.data.preview.images[0].source.url} alt="no image available" /> */}
            </li>
        )
    
    return (
        <div className="app-container">
            {postsDisplay} 
        </div>
    )
}

export default App