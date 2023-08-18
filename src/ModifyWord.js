import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import  Missing  from './Missing';
import  ShowWord  from './ShowWord';

const ModifyWord = ({wordlist, setWordlist,typelist2,typelist1}) => {
    const { Word } = useParams();
    const word = wordlist.find(item=>item.name===Word);

    const [ newDescription , setNewDescription ] = useState( word.description );
    const [ newExample , setNewExample ] = useState( word.example );
    const [ newType1 , setNewType1 ] = useState( word.type1 );
    const [ newType2 , setNewType2 ] = useState( word.type2 );

    const handleSubmit = () =>{
        const temp = {
            id: word.id,
            name: word.name,
            description: newDescription,
            example: newExample,
            type1: newType1,
            type2: newType2,
        }
        setWordlist(wordlist.map(
            (item)=>item.id===word.id?temp:item
        ));
    }

    if(!word) 
        return <><Missing/></>
    else return (
        <>
            <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>

                <textarea
                    id="description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />

                <textarea
                    id="example"
                    value={newExample}
                    onChange={(e) => setNewExample(e.target.value)}
                />

                {
                    typelist1.map((type,index)=>(
                        <li key={`ModifyWord-${word.name}-${type.name}`}>
                            <label>{type.name}</label>
                            <input
                                type='checkbox'
                                defaultChecked={word.type1[index]}
                                onClick={(e)=>setNewType1(  
                                    newType1.map((type,i)=>i===index?!type:type)
                                )}
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
                                onClick={(e)=>setNewType2(  
                                    newType2.map((type,i)=>i===index?!type:type)
                                )}
                            />
                        </li>
                    ))
                }
                <button type="submit" onClick={() => handleSubmit()}>Modifty!</button>
            </form>
        </>
        
    );
  }
  
  export default ModifyWord