import { useNavigate } from "react-router-dom"

export default function Auth() {

  function handleAuth(){
  const navigate = useNavigate();
  navigate('home')
  }

  return <form onSubmit={handleAuth} className="flex flex-col bg-orange-300 w-4/12 m-auto">
      <label htmlFor="username">Email</label>
      <input type="text" name="username" id="username" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must formatted as an Email. Example : myemail@laptop.com" required/>
      <label htmlFor="username">Password</label>
      <input type="password" name="password" id="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least One number and One uppercase and lowercase letter, and at least 8 or more characters" required/>
  <button className="py-1" type="submit">Submit</button>
  </form>
}