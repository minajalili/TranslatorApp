import React, {useState , useEffect} from 'react';

//components
import Result from './Result';
import Form from './Form';

//styles
import'../searchItem.scss'


const SearchItem =() => {


    const [word, setWord]=useState([]);
    const [search , setSearch] = useState('water');
    const [query, setQuery] =useState('water');
    const [src, setSrc] =useState('en');
    const [dst, setDst] =useState('de');
    const [example , setExample]=useState('');
    const[sounds,setSounds]=useState();

    useEffect(()=>{
        fetchResult();
    },[query])

    const fetchResult = async()=>{
        try {
            if(query){
                const response = await fetch(
                    `https://linguee-api.herokuapp.com/api?q=${query}&src=${src}&dst=${dst}`
                    );
                const data = await response.json();
                dataExist(data);
            }else{
                setWord('just enter a something!');
                setExample('');
                setSounds('');
            }
            
        }catch(e){
            console.log(e);
            throw e
        }

    }
    //analysis data 
    const dataExist =(data)=>{
        if(data["exact_matches"]){
            if(data["exact_matches"][0] || data["exact_matches"]!==null){
                setWord(data["exact_matches"][0]["translations"][0]["text"])
                setExample(
                    data["exact_matches"][0]["translations"][0]["examples"][0]!==undefined?
                        data["exact_matches"][0]["translations"][0]["examples"][0]:''
                    );
                setSounds(
                   data["exact_matches"][0]["translations"][0]["audio_link"][0]!==undefined? 
                        data["exact_matches"][0]["translations"][0]["audio_link"][0]["url_part"]:''
                    )

            }else{
                setWord('no result!');
                setExample('');
                setSounds('');
            }
        }else if(data["exact_matches"]===null){
                setWord('no result!');
                setExample('');
                setSounds('');
        }else{
            setWord('no result!');
            setExample('');
            setSounds('');
        }

    }
        
    return (
        <div className="SearchItem" >
            <Form search={search} setSearch={setSearch} setQuery={setQuery} setSrc={setSrc} setDst={setDst} />
            <Result word={word} sounds={sounds} example={example}  />
        </div>
    )
}

export default SearchItem;