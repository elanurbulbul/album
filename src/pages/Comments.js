import React from 'react'
import CommentCard from '../components/Comments';
import { useState, useEffect } from 'react';


export default function Comments() {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setComment(data);
      });
  }, []);


  return (
    <div>
      <div class="grid-container">
        {comment.map((commentItem) => (
          <div class="grid-item">
            <CommentCard commentItem={commentItem}/>
          </div>   
        ))}
      </div>
    </div>   
  )
}

