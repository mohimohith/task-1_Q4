import { useState,useEffect } from "react";
import './App.css';
import Indexs from "./Indexs";
import info from "./news.json";

let Home=()=>{
    useEffect(() => {
        setData(p);
      },[]);
    
    let [data,setData]=useState("");
     let p=info.articles.map((i)=>{return (
        <div className="col-md-3 card-news">
        <a href={i.url} ><img className="img" src={i.urlToImage} width="100%" /></a>
        <div className="cont">
            <h5 className="title">{i.title}</h5>
            <p className="desc">{i.content}</p>
        </div>
         </div>
         
      
     ) });
     
    return(
        <div>
            <Indexs />
            <div className="row">
            <h1 className="heading"><center>Get the latest News Updates Here!!!</center></h1>
           {data}
        </div>
        </div>
        
        );
}

export default Home;