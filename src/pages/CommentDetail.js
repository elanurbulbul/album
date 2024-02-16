import React from 'react'
import CommentCard from '../components/Comments';
import { useState, useEffect } from 'react';


export default function Comments() {
  const [commentDetail, setCommentDetail] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCommentDetail(data);
      });
  }, []);


  return (
    <div>
      <div class="grid-container">
        {commentDetail.map((commentDetailItem) => (
          <div class="grid-item">
            <CommentCard commentDetailItem={commentDetailItem}/>
          </div>   
        ))}
      </div>
    </div>   
  )
}

