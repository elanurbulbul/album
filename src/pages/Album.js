import React from 'react'
import AlbumCard from '../components/AlbumCard'
import { useState, useEffect } from 'react';

export default function Album() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAlbum(data);
      });
  }, []);


  return (
    <div>
      <div class="grid-container">
        {album.map((albumItem) => (
          <div class="grid-item">
            <AlbumCard albumItem={albumItem}/>
          </div>   
        ))}
      </div>
    </div>   
  )
}
