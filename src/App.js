import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { changeName } from './redux/action/user-action';

function App () {
  
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();
  const handleChangeName = () => {
    dispatch(changeName());

  }
  return (
    <div>
      <h1> Je m'appelle <span className='name'> {name} </span> </h1>
      <button onClick={handleChangeName}>Changer de Noms</button>
    </div>
  );
}

export default App;