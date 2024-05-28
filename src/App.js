
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="container">
        <h2 className='center'>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (kg):</label>
            <input type='text' placeholder='Your weight (kg)' />
          </div>
          <div>
            <label>Height (cm):</label>
            <input type='text' placeholder='Your height (cm)' />
          </div>
          <div>
            <Button>Submit</Button>
            <Button className='btn-outline'>Reload</Button>
          </div>
        </form>
        <h2 className='center'>Your BMI is:</h2>
      </header>
    </div>
  );
}

function Button({ children, className }) {
  return <button className={`btn ${className}`}>{children}</button>
}