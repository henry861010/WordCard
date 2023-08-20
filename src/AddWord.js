import { useState , useEffect} from 'react';
import  Filter  from './Filter';
import axios from 'axios';

const AddWord = ({wordlist, setWordlist,typelist2,typelist1}) => {

    const [ newName , setNewName ] = useState( "" );
    const [ newDescription , setNewDescription ] = useState( "" );
    const [ newExample , setNewExample ] = useState( "" );
    const [ newType1 , setNewType1 ] = useState([]);
    const [ newType2 , setNewType2 ] = useState([]);

    useEffect(()=>{
      setNewType1( Array(typelist1.length).fill(false));
      setNewType2( Array(typelist2.length).fill(false));
    },[typelist2,typelist1]);
    // must to use the dependence of the typelist2 and typelist1, because that typelist2 and typelist1 setted by 
    //remote data base,and they are empty in the initial. so if at the first load with dependence [] , the value is empty
    //to avoid the issue, set the dependence of the typelist2 and typelist1 and when they change, two array can be update immediately
    //[if the typelist2 and typelist1 update at the same time?]


    const handleSubmit = () =>{
      const a = async () => {
        console.log("mad !!!");
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
          setNewName("");
          setNewDescription("");
          setNewExample("");
          setNewType1(Array(typelist1.length).fill(false));
          setNewType2(Array(typelist2.length).fill(false));
          setWordlist([...wordlist,temp]);
          
          try{
            const api = axios.create({baseURL: 'http://localhost:3500'});
            await api.post('/wordlist', temp);
          }catch(err){
            console.log("error when sent the add request to DB!");
          }
        }
      }
      a();
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
                          checked={newType1[index]}
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
                          checked={newType2[index]}
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