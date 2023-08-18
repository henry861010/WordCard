import './App.css';
import Header from './Header';
import Top from './Top';
import Home from './Home';
import Setting from './Setting';
import ModifyWord from './ModifyWord';
import ShowWord from './ShowWord';
import AddWord from './AddWord';
import Missing from './Missing';
import { Route , Routes } from 'react-router-dom';
import React,{ useState , useEffect } from 'react';
import axios from 'axios';

function App() {
  const [wordlist,setWordlist] = useState([]);
  const [typelist1,setTypelist1] = useState([]);
  const [typelist2,setTypelist2] = useState([]);

  const api = axios.create({
    baseURL: 'http://localhost:3500'
  });
  
  useEffect(()=>{
    const fetchDate = async () =>{
      try{
        const response0 = await api.get('/wordlist');
        if(response0) setWordlist(response0.data);
        else console.log("response is empty");

        const response1 = await api.get('/typelist1');
        if(response1) setTypelist1(response1.data);
        else console.log("response is empty");

        const response2 = await api.get('/typelist2');
        if(response2) setTypelist2(response2.data);
        else console.log("response is empty");

      } catch(err){
        if(err.response){
          console.log("[Error0-0]: "+err.message.data)
          console.log("[Error0-1]: "+err.message.status)
          console.log("[Error0-2]: "+err.message.headers)
        }
        else console.log("[Error1]: "+err.message)
      }
    }
    fetchDate();
  },[]);

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
