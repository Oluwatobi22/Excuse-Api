import Api from "./component/Api"
import Office from "./component/Office"
import College from "./component/College"
import Party from "./component/Party"
import Children from "./component/Children"
import './App.css';
function App() {
  return (
    <>
    <div className="section">
      <Api />
      <Office />
      <College />
      <Party />
      <Children />
    </div>
    </>
  );
}

export default App;
