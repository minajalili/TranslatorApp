import React, {useState , useEffect} from 'react';
import '../../App.scss';
import'../../searchItem.scss'



function SearchItem (){
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
            const response = await fetch(
                `https://linguee-api.herokuapp.com/api?q=${query}&src=${src}&dst=${dst}`
                );
            const data = await response.json();
            console.log(data);
            dataExist(data);
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
        }else{
                setWord('no result!');
                setExample('');
                setSounds('');
        }

    }
    

    //get data from user
    const searchValue =(e)=>{
        const filteredWord = e.target.value.replace(/[^a-zA-Z\s]/,'');
        setSearch(filteredWord);
    }
    
    const getQuery= (e) =>{
        e.preventDefault();
        setQuery(search);
        
    }
    const getSrc =(e)=>{
        setSrc(e.target.value);
    }
    const getDst =(e)=>{
        setDst(e.target.value);
    }    
    return (
        <div className="SearchItem" >
            
            <form id="searchArea" onSubmit={getQuery} >
                <div className="form-sections" >
                    <input type="text" value={search} onChange={searchValue}/>
                </div>
                <div>
                    <div className="form-sections">
                        <label >
                            select source language
                        </label>
                        <select name="src" id="" onChange={getSrc}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="es">Spanish</option>
                        <option value="bg">Bulgarian</option>
                        <option value="cs">Czech</option>
                        <option value="da">Danish</option>
                        <option value="el">Greek</option>
                        <option value="et">Estonian</option>
                        <option value="fi">Finnish</option>
                        <option value="fr">French</option>
                        <option value="hu">Hungarian</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japan</option>
                        <option value="lt">Lithuanian</option>
                        <option value="lv">Latvian</option>
                        <option value="mt">Maltese</option>
                        <option value="nl">Dutch</option>
                        <option value="pl">Polish</option>
                        <option value="pt">Portuguese</option>
                        <option value="ro">Romanian</option>
                        <option value="ru">Russian</option>
                        <option value="sk">Slovak</option>
                        <option value="sl">Solvene</option>
                        <option value="sv">Swedish</option>
                        <option value="zh">Chinese</option>
                    </select>
                    </div>
                    <div className="form-sections">
                        <label >
                            select target language
                        </label>
                        <select name="dst" id="" onChange={getDst} >
                        <option value="de">German</option>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="bg">Bulgarian</option>
                        <option value="cs">Czech</option>
                        <option value="da">Danish</option>
                        <option value="el">Greek</option>
                        <option value="et">Estonian</option>
                        <option value="fi">Finnish</option>
                        <option value="fr">French</option>
                        <option value="hu">Hungarian</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japan</option>
                        <option value="lt">Lithuanian</option>
                        <option value="lv">Latvian</option>
                        <option value="mt">Maltese</option>
                        <option value="nl">Dutch</option>
                        <option value="pl">Polish</option>
                        <option value="pt">Portuguese</option>
                        <option value="ro">Romanian</option>
                        <option value="ru">Russian</option>
                        <option value="sk">Slovak</option>
                        <option value="sl">Solvene</option>
                        <option value="sv">Swedish</option>
                        <option value="zh">Chinese</option>
                    </select>
                    </div>
                </div>
                <div className="form-sections">
                    <button>Find</button>
                </div>
            </form>
            <h1 className="mainResult">{word}</h1>
            {sounds!==''?
                <audio controls src={`https://www.linguee.de/mp3/${sounds}.mp3`}></audio>:''
            }
            {example !== ''?
            <div className="example_sentence">
                <h3>example sentense</h3>
                <p>source : {example.source}</p>
                <p>target : {example.target}</p>
            </div>:''
            
            }
        </div>
    )
}

export default SearchItem;