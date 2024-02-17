import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

export default function CommentDetail() {
  const { id } = useParams();

  const [commentItem, setCommentItem] = useState([]);

  useEffect(() => {
    fetch(` https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCommentItem(data);
      });
  },[id]);

  return (
    <div>
      ID:{id} 
      <h1>{commentItem.name}</h1>
      <p>{commentItem.email}</p>
      <p>{commentItem.body}</p>
    </div>

  )
}
