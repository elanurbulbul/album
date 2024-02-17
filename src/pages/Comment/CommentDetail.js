import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Loading from '../../components/Loading';

export default function CommentDetail() {
  const { id } = useParams();

  const [commentItem, setCommentItem] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch(` https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        setCommentItem(data);
      });
  },[id]);

  return (
    <div>
      {loading && <Loading />}
      ID:{id} 
      <h1>{commentItem.name}</h1>
      <p>{commentItem.email}</p>
      <p>{commentItem.body}</p>
    </div>

  )
}
