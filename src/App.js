
import { useState } from 'react';
import './App.css';

export default function App() {
  const [bmiResult, setBmiResult] = useState()
  const [bmiMessage, setBmiMessage] = useState()

  function handleCalcBMI(value) {
    setBmiResult(value)
    console.log(value)
    if (value < 18.4) {
      setBmiMessage('You are underweight')
    } else if (value >= 18.5 && value < 24.9) {
      setBmiMessage('You are a healthy weight')
    } else {
      setBmiMessage('You are overweight')
    }
  }

  function handleReload() {
    window.location.reload()
  }

  return (
    <div className="app">
      <header className="container">
        <h2 className='center'>BMI Calculator</h2>

        <FormCalcBMI onCalcBMI={handleCalcBMI} />

        <Button className='btn-outline' onClick={handleReload}>Reload</Button>

        <ShowResult result={bmiResult}>Your BMI is:</ShowResult>
        <ShowResult result={bmiMessage}>And you are:</ShowResult>
      </header>
    </div>
  );
}

function FormCalcBMI({ onCalcBMI }) {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")


  function handleSubmit(e) {
    e.preventDefault()

    if (!weight || !height) return onCalcBMI("missing info")
    const BMI = (weight * 10000 / (height * height)).toFixed(2)

    if (BMI > 50) return onCalcBMI("Wrong infos")
    onCalcBMI(BMI)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight (kg)</label>
        <input type='number' placeholder='Your Weight (kg)' value={weight} onChange={(e) => setWeight(Number(e.target.value) > 0 ? Number(e.target.value) : "")} />
      </div>
      <div>
        <label>Height (cm)</label>
        <input type='number' placeholder='Your Height (cm)' value={height} onChange={(e) => setHeight(Number(e.target.value) > 0 ? Number(e.target.value) : "")} />
      </div>
      <Button>Submit</Button>
    </form>)
}

function ShowResult({ children, result }) {
  return (
    <>
      <h2 className='center'>{children}</h2>
      <p className='center'>{result}</p>
    </>
  )
}


function Button({ children, className, onClick }) {
  return <button className={`btn ${className}`} onClick={onClick}>{children}</button>
}