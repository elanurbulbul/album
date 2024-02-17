import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Loading from '../../components/Loading';


export default function AlbumDetail() {
  const { id } = useParams();

  const [albumItem, setAlbumItem] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch(` https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        setAlbumItem(data);
      });
  },[id]);

  return (
    <div>
        {loading && <Loading />}
        <h3>{albumItem.title}</h3>
        <img src={albumItem.thumbnailUrl} alt="album cover"/>
    </div>
  )
}
