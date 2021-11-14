import { useEffect } from 'react'
import Header from './components/Header/Header'
import { useDispatch } from 'react-redux'
import * as actions from './redux/actionCreators'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getrestaurantData())
  }, [])
  return (
    <div className="App" style={{fontSize:'2vh'}}>
      <Header />
    </div>
  );
}

export default App;
