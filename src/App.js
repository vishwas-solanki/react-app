import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  return (
    <>
    <Navbar />
    <div className="container" >
      <TextForm  heading="Please Provide Feedback"/>
    </div>
    </>
  );
}

export default App;
