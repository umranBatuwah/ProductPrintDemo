import './App.css';
import ProductsList from './components/products';
const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Your E-commerce Website</h1>
      </header>
      <main>
        <ProductsList />
        {/* Other content goes here */}
      </main>
    </div>
  );
};

export default App;
