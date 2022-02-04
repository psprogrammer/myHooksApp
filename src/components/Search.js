import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Search = () =>{
const [text,setText]= useState("");
const [results,setresult]=useState([]);


useEffect(() => {
    const search = async () => {
      const data = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
            action: 'query',
            list: 'search',
            format: 'json',
            origin: '*',
            srsearch: 'programming'
        }, 
       });
       console.log("data",data);
       setresult(data.data.query.search)
    };
    search();
},[text])

const renderItems = results.map((result)=>{
return (
    <div>
        <div>
            {result.title}
        </div>
        <div>
            {result.snippet}
        </div>
    </div>
)
})
    return(
        <div>
            <div>
                <label>Enter the search criteria here</label>
                <input 
                value={text}
                onChange={e=>setText(e.target.value)}
                type="text"></input>
            </div>
            <div>
                {renderItems}
            </div>
        </div>
    )
}
export default Search;