import { useState , useEffect} from 'react';

const Filter = ({ wordlist, typelist2, typelist1 }) => {
  const [ selectedType1 , setSelectedType1 ] = useState(typelist1.map(item=>true));
  const [ selectedType2 , setSelectedType2 ] = useState(typelist2.map(item=>true));
  const [ searchWord , setSearchWord ] = useState("");
  const [ output , SetOutput ] = useState(wordlist); 


  useEffect(()=>{
    let temp = wordlist.filter((item)=>{
      let ifSelected1 = false;
      let ifSelected2 = false;
      const ifInclude = (item.name.toLowerCase()).includes(searchWord.toLowerCase());
      item.type1.map((type1,index1)=>{
        ifSelected1 = ifSelected1||(selectedType1[index1]&&type1);
      });
      item.type2.map((type2,index2)=>{
        ifSelected2 = ifSelected2||(selectedType2[index2]&&type2);
      });
      return (ifSelected2 || ifSelected1)&&ifInclude;
    });
    SetOutput(temp);
  },[ selectedType2, selectedType1, searchWord, wordlist]);

  useEffect(()=>{
    setSelectedType1(typelist1.map(item=>true));
    setSelectedType2(typelist2.map(item=>true));
  },[typelist1,typelist2]);

  const updateShow_type1 =(e)=>{
    let type = e.target.value;
    let checked = e.target.checked;

    let temp = typelist1.map((item,index)=>(
      item.name===type?checked:selectedType1[index]
    ));
    setSelectedType1(temp);
  }
  
  const updateShow_type2 =(e)=>{
    let type = e.target.value;
    let checked = e.target.checked;

    let temp = typelist2.map((item,index)=>(
      item.name===type?checked:selectedType2[index]
    ));
    setSelectedType2(temp);
  }


  return(
    <main>
      
      { // [ seachbar ]
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
        />
      }<br/>

      { // [ select type1 ]
        typelist1.map((item,index)=>(
            <li key={`type1-${item.name}`}>
              <label>{item.name}</label>
              <input
                value={item.name}
                type="checkbox"
                checked={selectedType1[index]}
                onClick={updateShow_type1}
              />
            </li>
          )
        )
      }<br/>

      { // [ select type2 ]
        typelist2.map((item,index)=>(
            <li key={`type2-${item.name}`}>
              <label>{item.name}</label>
              <input
                value={item.name}
                type="checkbox"
                checked={selectedType2[index]}
                onClick={updateShow_type2}
              />
            </li>
          )
        )

      }<br/><br/>
      <label>output:</label>{
        output.map((item,index)=>(
          <li key={`type1-${item.name}`} >{item.name}</li>
        ))
      }<br/><br/>
    </main>
  )
}

export default Filter;