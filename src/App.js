import './App.css';
import Header from './components/Header/Header'; 
import body from './components/body/body';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header /> 
        {/* Utilisez le composant Header */}
      </header>
      <body />
    </div>
  );
}

export default App;
