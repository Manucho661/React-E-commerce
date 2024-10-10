import Header from './Header';

import Products from './Products';
import Banner from './Banner';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <h3>Our Products</h3>
      <div className="products d-flex">
        
      <Products></Products>
      </div>
    </div>
  );
}

export default App;
