import {useState} from 'react';
const [ selectWords , setSelectwords ] = useState(wordlist);
const [ selecttypes1 , setSelecttypes1 ] = useState(typelist1);
const [ selecttypes2 , setSelecttypes2 ] = useState(typelist2);

const updateShow_search = (e) =>{
    let temp = e.target.value;
    if(e.target.checked){
        setSelecttypes1([...selecttypes1, temp]);
        //add the item of the type~temp to the selectWords
    }
    else{   
        setSelecttypes1(selecttypes1.filter(type => type !== temp));
        //remove the item of the type~temp from the selectWords
    }
}

const updateShow_type1 = (e) =>{
    let temp = e.target.value;
    if(e.target.checked){
        setSelecttypes1([...selecttypes1, temp]);
        //add the item of the type~temp to the selectWords
    }
    else{   
        setSelecttypes1(selecttypes1.filter(type => type !== temp));
        //remove the item of the type~temp from the selectWords
    }
}

const updateShow_type2 = (e) =>{
    let temp = e.target.value;
    if(e.target.checked){
        setSelecttypes1([...selecttypes1, temp]);
        //add the item of the type~temp to the selectWords
    }
    else{   
        setSelecttypes1(selecttypes1.filter(type => type !== temp));
        //remove the item of the type~temp from the selectWords
    }
}

const Filter = ()=>{
    return(
        <main>
            <label htmlFor="search">Search Posts</label>
            <input
                id="search"
                type="text"
                placeholder="Search Posts"
                value={search}
                onChange={updateShow_search}
            />

            <label>select type1</label>
            {typelist1.map((type)=>{
                <li key={type.name}>
                    <input
                        type="checkbox"
                        value={type.name}
                        onChange={updateShow_type1}
                    />
                </li>
            })}

            <label>select type2</label>
            {typelist2.map((type)=>{
                <li key={type.name}>
                    <input
                        type="checkbox"
                        value={type.name}
                        onChange={updateShow_type2}
                    />
                </li>
            })}
        </main>
    )
}
export default Filter;