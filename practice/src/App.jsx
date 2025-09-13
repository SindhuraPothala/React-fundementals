
import { useState } from "react";
import "./App.css"

function App() {
 {/* const handleClick=() => {
    console.log("You clicked the button")
    alert("You clicked the button")
  }
  const handleClick = (name) => {
    alert("hello " + name); //alert(`hello ${name}`)
  }*/}   
   

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email:${formData.email} \n Password:${formData.password}\n you are logged in`)
  }
  const handleChange = (event) => {
    //console.log(event.target.name)
    //console.log(event.target.value)
    setFormData({
       ...formData,
       [event.target.name]:event.target.value
          })
  }

  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [formData,setFormData]=useState(
    {
      email:"",
      password:""
    }
  )

  const handleEmail = (event) => {
    setEmail(event.target.value)

  }
  const handlePassword = () => {
     setPassword(event.target.value)
  }
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
    console.log(count)
  }

  return (
    <div>
      {/*<p>I am a Button</p>
    {/*<button onClick={handleClick}>Click Me</button>
    <input type="text" placeholder="Type your name" onChange={handleChange}/>
    <button onClick={()=>handleClick("Sindhura")}>Click Me</button>}*/}
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Enter your email" onChange={handleChange} />
        <input type="text" name="password" placeholder="Enter your Password" onChange={handleChange} />

        <button type="submit">Login</button>
      </form>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App