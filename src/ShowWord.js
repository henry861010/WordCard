import { useParams } from 'react-router-dom';
import  Missing  from './Missing';

const ShowWord = ({wordlist,typelist2,typelist1}) => {
      
    const { Word } = useParams();
    const word = wordlist.find(item=>item.name===Word);
    if(!word) 
        return <><Missing/></>
    else return (
        <>
            <p>Name: {word.name}</p>
            <p>Description: {word.description}</p>
            <p>Example: {word.example}</p>
            {
                word.type1.map((item,index)=>{
                    if(item){
                        return(
                            <li key={`${word.name}-${typelist1[index].name}`}>
                                {typelist1[index].name}
                            </li>
                        )
                    }
                })
            }
            {
                word.type2.map((item,index)=>{
                    if(item){
                        return(
                            <li key={`${word.name}-${typelist2[index].name}`}>
                                {typelist2[index].name}
                            </li>
                        )
                    }
                })
            }
        </>
    );
}
  
  export default ShowWord