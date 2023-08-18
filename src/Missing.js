import { useNavigate } from 'react-router-dom';
const Missing = () => {
    const navigate = useNavigate()
    const onClick = () => {navigate('/')}
    return (
      <p className="Missing">
        Missing Page!
        <button onClick={onClick}>BACK</button>
      </p>
    );
  }
  
  export default Missing;