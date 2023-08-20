import { useParams } from 'react-router-dom';
import  Missing  from './Missing';
import axios from 'axios';
import ShowWord from './ShowWord';

const ModifyWord = ({wordlist, setWordlist,typelist2,typelist1}) => {

    let newDescription = "";
    let newExample = "";
    let newType1 = [];
    let newType2 = [];

    const { Word } = useParams();
    let word ={
        id: "a",
        name: "a",
        description: "a",
        example: "a",
        type1: [],
        type2: [],

    };

    const handleSubmit = (e) =>{
        const a = async () => {
            const temp = {
                id: word.id,
                name: word.name,
                description: newDescription,
                example: newExample,
                type1: newType1,
                type2: newType2,
            }
            setWordlist(wordlist.map((item)=>item.id===word.id?temp:item));
            try{
                const api = axios.create({baseURL: 'http://localhost:3500'});
                await api.put(`/wordlist/${word.id}`, temp);
                console.log("modify!");
            }catch(err){
                console.log("error when sent the add request to DB!");
            }
        }
        a();
    }

 
    if(!wordlist){
        return <p>loading!!!</p>
    }
    else if(wordlist.length===0){
        return <p>no word!!!</p>
    }
    else{
        word = wordlist.find(item=>item.name===Word);
        if(!word){
            return <Missing/>
        }
        else{
            newDescription = word.description;
            newExample = word.example;
            newType1 = word.type1;
            newType2 = word.type2;
            return (
                <>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>

                        <textarea
                            id="description"
                            defaultValue={word.description}
                            onChange={(e) => newDescription=e.target.value}
                        />

                        <textarea
                            id="example"
                            defaultValue={word.example}
                            onChange={(e) => newExample=e.target.value}
                        />

                        {
                            typelist1.map((type,index)=>(
                                <li key={`ModifyWord-${word.name}-${type.name}`}>
                                    <label>{type.name}</label>
                                    <input
                                        type='checkbox'
                                        defaultChecked={word.type1[index]}
                                        onClick={(e)=>{ 
                                            newType1=newType1.map((type,i)=>i===index?!type:type
                                        )}}
                                    />
                                </li>
                            ))
                        }
                        {
                            typelist2.map((type,index)=>(
                                <li key={`ModifyWord-${word.name}-${type.name}`}>
                                    <label>{type.name}</label>
                                    <input
                                        type='checkbox'
                                        defaultChecked={word.type2[index]}
                                        onClick={(e)=>{ 
                                            newType2=newType2.map((type,i)=>i===index?!type:type
                                        )}}
                                    />
                                </li>
                            ))
                        }
                        <button type="submit" onClick={() => handleSubmit()}>Modifty!</button>
                    </form>
                    <p>=============================</p>
                    <ShowWord 
                        wordlist = {wordlist}
                        typelist1 = {typelist1}
                        typelist2 = {typelist2}
                    />
                </>
                
            );
        }
    }
  }
  
  export default ModifyWord