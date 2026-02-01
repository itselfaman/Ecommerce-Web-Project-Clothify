import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users")) || []

    // ❌ duplicate email check
    const alreadyExists = users.find(u => u.email === email)
    if (alreadyExists) {
      alert("User already exists")
      return
    }

    const newUser = { name, email, password }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    alert("Signup successful")
    navigate("/login")
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white shadow-lg rounded-xl p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Signup</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup
