import './App.css';
import Header from './components/Header/Header'; 
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col gap-1 p-4">
      <Header />

      <Home />
    </div>
  );
}

export default App;
