import React from 'react'
import AlbumCard from '../components/AlbumCard'
import { useState, useEffect } from 'react';
import Loading from '../components/Loading/index';

export default function Album() {
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        setAlbum(data);
      });
  }, []);


  return (
    <section>
      {loading && <Loading />}
      <div class="grid-container">
        {album.map((albumItem) => (
          <div class="grid-item">
            <AlbumCard albumItem={albumItem}/>
          </div>   
        ))}
      </div>
    </section>   
  )
}
