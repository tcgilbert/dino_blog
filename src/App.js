
import './App.css';

function App(props) {

  return (
    <div className="App">
      <h1>{props.post.title}</h1>
      <h2>By: {props.post.author}</h2>
      <h5>{props.post.body}</h5>
      <h3>Comments</h3>
      <h5>{props.post.comments[0]}</h5>
      
    </div>
  );
}

export default App;
