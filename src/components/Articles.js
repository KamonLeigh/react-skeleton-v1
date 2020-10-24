import React, { useState, useEffect} from 'react'
import SkeletonArticle from '../skeletons/SkeletonArticle';
import SkeletonElement from '../skeletons/SkeletonElement';

function Articles() {
    const [ articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout( async () => {
            const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
            setArticles(data);
        }, 5000)
    },[])
    return (
        <div className="articles">
            <h2>Articles</h2>
            {articles && articles.map(article => (
                <div className="article" key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            ))}
            {!articles && Array.from({ length: 4}, (_, i) => (<SkeletonArticle theme="light" key={i}/>))}
        </div>
    )
}

export default Articles
