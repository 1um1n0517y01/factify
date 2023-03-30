import './style.css';

function App() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='logo.png' alt='Factify logo' width='68' height='68' />
        <h1>Factify</h1>
      </div>
      <button className='btn btn-large btn-open'>Share a fact</button>
    </header>
  );
}

export default App;
