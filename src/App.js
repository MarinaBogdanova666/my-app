import './App.css';
import Message from './Message';

function App() {
  const name = 'Jonny';
  return (
   <div class='container'>
      <Message name={name}/>
   </div>
  );
}

export default App;
