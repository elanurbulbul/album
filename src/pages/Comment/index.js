import React from 'react'
import CommentCard from '../../components/Comments';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';


export default function Comments() {
  const [comment, setComment] = useState([]);
  const [loading, setLoading]= useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        setComment(data);
      });
  }, []);


  return (
    <div>
      {loading && <Loading />}
      <div class="grid-container">
        {comment.map((commentItem) => (
          <div class="grid-item">
            <CommentCard commentItem={commentItem}/>
            <Link to={`/comments/${commentItem.id} `}>View</Link>
          </div>
        ))}
        </div>
    </div>   
  )
}