import { useEffect } from 'react'
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories';
import PageWrapper from './components/PageWrapper/PageWrapper'
import { getResturauntResponse } from './utilities/SeriveGateway/service_methods';

function App() {
  useEffect(() => {
    getResturauntResponse().then((res) => console.log('app', res))
  }, [])
  return (
    <div className="App" style={{ display: 'grid' }}>
      <Header />
      <Categories />
      <PageWrapper />
    </div>
  );
}

export default App;
