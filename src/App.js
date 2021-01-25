import logo from './logo.svg';
import './App.css';

function App() {
  const names = ["tumelo", "mabue", "musa"]
  const nameObject = {name: "mabuela", password: "asdnm"}
  const nameArray = [{name: "mabuela", surname: "ngulube"}, {name: "tumelo", surname: "mohlabisi"}]
  return (
    <>
    {<div>{nameObject.password}</div>}
    {nameArray.map(nameObj => <div className="App" style = {{color: "red"}}>
                            {`My name is ${nameObj.name}, my surname is ${nameObj.surname}`}
                        </div>)}
    </>
  );
}

export default App;
