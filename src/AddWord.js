import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import  Filter  from './Filter';

const AddWord = ({wordlist, setWordlist,typelist2,typelist1}) => {

    const [ newName , setNewName ] = useState( "" );
    const [ newDescription , setNewDescription ] = useState( "" );
    const [ newExample , setNewExample ] = useState( "" );
    const [ newType1 , setNewType1 ] = useState( Array(typelist1.length).fill(false));
    const [ newType2 , setNewType2 ] = useState( Array(typelist2.length).fill(false));

    const handleSubmit = () =>{
        console.log("modify");
        if(wordlist.some((item)=>(item.name==newName))){console.log("same word"); setNewName("");}
        else{  
          const temp = {
              id: wordlist.length?wordlist.length:0,
              name: newName,
              description: newDescription,
              example: newExample,
              type1: newType1,
              type2: newType2,
          }
          setWordlist([...wordlist,temp]);
        }
    }

    return (
      <>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>

              <textarea
                  id="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
              />
              
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
                    <li key={`AddWord-${type.name}`}>
                      <label>{type.name}</label>
                      <input
                          type='checkbox'
                          defaultChecked={false}
                          onClick={(e)=>setNewType1(  
                            newType1.map((item,i)=>i===index?e.target.checked:item)
                          )}
                      />
                    </li>
                  ))
              }
              {
                  typelist2.map((type,index)=>(
                    <li key={`AddWord-${type.name}`}>
                      <label>{type.name}</label>
                      <input
                          type='checkbox'
                          defaultChecked={false}
                          onClick={(e)=>setNewType2(  
                            newType2.map((item,i)=>i===index?e.target.checked:item)
                          )}
                      />
                    </li>
                  ))
              }
              <button type="submit" onClick={() => handleSubmit()}>Add!</button>
          </form>
          <p>===========================</p>
          <Filter
                wordlist = {wordlist}
                typelist1 = {typelist1}
                typelist2 = {typelist2}
          />
      </>
        
    );
  }
  
  export default AddWord