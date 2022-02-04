import React,{useEffct,useState} from 'react';
import axios from 'axios'

const Search = () =>{
const [text,setText]= useState("");
const [results,setresult]=useState([]);

useEffct(()=>{
    const data = async =() => {
        
        axios.get('')}
},[text])


    return(
        <div>
            <div>
                <label>Enter the search criteria here</label>
                <input 
                value={text}
                onChange={e=>setText(e.target.value)}
                type="text"></input>
            </div>
        </div>
    )
}
export default Search;