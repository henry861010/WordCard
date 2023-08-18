import './App.css';
import React from 'react';
import Header from './Header';
import Top from './Top';
import Home from './Home';
import Setting from './Setting';
import ModifyWord from './ModifyWord';
import ShowWord from './ShowWord';
import AddWord from './AddWord';
import Missing from './Missing';
import { Route, Routes} from 'react-router-dom';
import { useState} from 'react';

function App() {

  const [wordlist,setWordlist] = useState([
    {id:0 ,name: "apple"    ,description: "xxxxxxx", example: "i's Henry",     type1: [true, false, false, false], type2: [true, false, true, false]},
    {id:1 ,name: "banana"   ,description: "xxxxxxx", example: "i's Henry",     type1: [false, false, false, false], type2: [false, false, false, true]},
    {id:2 ,name: "champion" ,description: "xxxxxxx", example: "i's Henry",     type1: [false, false, false, false], type2: [true, false, false, false]},
    {id:3 ,name: "do"       ,description: "xxxxxxx", example: "i's Henry",     type1: [false, true, false, false], type2: [false, false, true, false]},
    {id:4 ,name: "surf"     ,description: "xxxxxxx", example: "i's Henry",     type1: [false, true, false, false], type2: [false, true, false, false]},
    {id:5 ,name: "surfboard",description: "xxxxxxx", example: "i's Henry",     type1: [false, true, false, false], type2: [true, false, false, false]},
  ]);
  const [typelist2,setTypelist1] = useState([
    {id:0 ,name: "aa" ,description: "xxxxxxx"},
    {id:1 ,name: "bb" ,description: "xxxxxxx"},
    {id:2 ,name: "cc" ,description: "xxxxxxx"},
    {id:3 ,name: "dd" ,description: "xxxxxxx"},
  ]);
  const [typelist1,setTypelist2] = useState([
    {id:0 ,name: "n" ,description: "xxxxxxx"},
    {id:1 ,name: "v" ,description: "xxxxxxx"},
    {id:2 ,name: "adj" ,description: "xxxxxxx"},
    {id:3 ,name: "adv" ,description: "xxxxxxx"},
  ]);

  return(
    <div className="App">
      <h1>aaaaaa</h1>
      <Header title={"WordCard"} />
      <Top/>

      <Routes>
        <Route path="/" element={<Home
          wordlist = {wordlist}
          typelist1 = {typelist1}
          typelist2 = {typelist2}
        />} />
        <Route path="/:Word" element={<ShowWord 
          wordlist = {wordlist}
          typelist1 = {typelist1}
          typelist2 = {typelist2}
        />} />
        <Route path="/Setting" element={<Setting/>} />
        <Route path="/:Word/ModifyWord" element={<ModifyWord
          wordlist = {wordlist}
          setWordlist = {setWordlist}
          typelist2 = {typelist2}
          typelist1 = {typelist1}
        />} /> 
        <Route path="/AddWord" element={<AddWord
          wordlist = {wordlist}
          setWordlist = {setWordlist}
          typelist2 = {typelist2}
          typelist1 = {typelist1}
        />}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>
    </div>
  )
}

export default App;
