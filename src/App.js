import './App.css';
import Note from './Note';

const App = () => {
  return (
    <div className="App">
      <h2 style={{backgroundColor:'darkBlue', color:'yellow', padding: '10px', textAlign:'center'}}>
        Note App With React.js
      </h2>
      <Note />
      <div className="footer">
        <span>Copyright &copy; NoteApp.com</span>
      </div>
    </div>
  );
}

export default App;
