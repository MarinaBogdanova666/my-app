import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [author ,  setAuthor] = useState('');
  const [text ,  setText] = useState('');

  function handleAlertClick() {
    let lastAuthor = messages[messages.length-1]?.author
    if (!lastAuthor || lastAuthor === 'bot') return 
    setTimeout(() => {
      setMessages([...messages, {author:'bot', text:'Ваше сообщение отправлено'}])
    }, 1500);
  }
  

  function handleClick() {
    if (!author || !text) return
     setMessages([...messages, {author: author, text: text}])
   }

  useEffect(() => {
    handleAlertClick();
  },[messages]);

  return (

   <div class='container'>

    <p class="p">Автор</p>
    <input class="author" value={author} onChange={(event) => setAuthor(event.target.value)}></input>

    <p class="p">Введите сообщение</p>
    <input class="text" type="text" value={text} onChange={(event) => setText(event.target.value)}></input>

    <button onClick={handleClick}>Отправить</button>

    {messages.map((item, index) => {
        return (
          <div key={index} className={item.author === 'bot' ? 'botMessage' : 'userMessage'}>
            <h3>Автор: {item.author}</h3>
            <h2>Сообщение: {item.text}</h2>
          </div>
        )
      })}

   </div>
  );
}

export default App;