import { useDispatch, useSelector } from 'react-redux';

import { clicaBotaoRequest } from './redux/actions/userAction';

function App() {

  const dispatch = useDispatch();

  const handleAction = () => {
    //QUando disparar o clicaBotaorequest o sagas vai executar
    dispatch(clicaBotaoRequest());
  }

  const statusButton = useSelector(state => state.userReducer);

  return (
    <>
      <div>Hello World! - {JSON.stringify(statusButton)}</div>
      <button onClick={handleAction}>Disparar</button>
    </>
  );
}

export default App;
