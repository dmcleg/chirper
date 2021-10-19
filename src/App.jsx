import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {

    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([{name: 'Drew', content: 'dril tweets'}, {name: 'Garrett', content: 'heaven-piercing giga drill'}, {name: 'Sam', content: 'come see my show'}])

    return (

        <div>
            <Card />
            <h1>Hello, World!</h1>
        </div>

        {posts.map(post => (
            <>
                <div>{chirp.username}</div>
            </>
        ))}
    );
};

export default App;