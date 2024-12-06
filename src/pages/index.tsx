import { Bebas_Neue} from "next/font/google";
import { useEffect, useState } from "react";
import "./index.css";
import { Header } from "@src/Components/Header";
import { IMAGE_URL_PATH } from "@src/constants";
import { Button } from "@src/Components/Button";

type Movie = {
  original_title: string
  poster_path: string
}

const bebas = Bebas_Neue({weight: '400'})

export default function Home() {
  const [movie, setMovie]= useState<Movie>()
  
  useEffect(()=>{
    fetch('/api/featured')
    .then(res=>res.json())
    .then(data=>{
      setMovie(data.film[0])
    })
  },[])

  return (
    <div className={`${bebas.className} featured__container`}>
      <Header />
      <div className="header">
        <p>Original de <b>Liteflix</b></p>
        <h1>{movie?.original_title}</h1>
      </div>
      <div className="button__container">
        <Button type="solid" onClick={()=>{console.log('click')}}></Button>
      </div>
      <style jsx>{`
        .featured__container{
          background: url(${IMAGE_URL_PATH}/${movie?.poster_path}) center no-repeat;
          background-size: cover;
          position: relative
        }
        .header{
          padding-left: 99px;
          position: absolute;
          top: 40%;
        }
        p{
          margin-bottom: 20px;
        }

        

      `
        }</style>
    </div>
  );
}
