import Header from './components/Header/Header'
import Categories from './components/Categories/Categories';
import PageWrapper from './components/PageWrapper/PageWrapper'

function App() {
  return (
    <div className="App" style={{ display: 'grid' }}>
      <Header />
      <Categories />
      <PageWrapper />
    </div>
  );
}

export default App;
