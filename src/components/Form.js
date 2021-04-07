import React from 'react';

//style
import '../form.scss';

const Form =({search,setSearch,setQuery,setSrc,setDst})=>{

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

    return(
        <form id="searchArea" onSubmit={getQuery} >
                <div className="form-sections" >
                    <input type="text" value={search} onChange={searchValue}/>
                </div>
                <div>
                    <div className="form-sections">
                        <label >
                           click to select source
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
                            click to select target
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
    )
}

export default Form;
