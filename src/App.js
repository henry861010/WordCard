import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState , useEffect } from 'react'; 
import Header from './Header';
import Top from './Top';

function App() {
  const [ wordlist , setWordlist] = useState([]);
  var importWordList = () => {
    //import from the database
  }
  useEffect(importWordList,[]);

  const [ typelist1 , setTypelist1] = useState([
    { type: "v",
      discription: "verb",
    },
    { type: "adj",
      discription: "adj",
    },
    { type: "n",
      discription: "n",
    },
    { type: "adv",
      discription: "adv",
    },
  ]);
  const [ typelist2 , setTypelist2] = useState([]);
  var importTypelist2 = () => {
    //import from the database
  }
  useEffect(importTypelist2,[]);

  const [ showWordlist , setShowWordlist] = useState(wordlist);


  return (
    <div className="App">
      <Header title="WordCard"><Header/>
      <Top><top/>
    </div>
  );
}

export default App;
