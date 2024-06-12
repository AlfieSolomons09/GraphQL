import { useLazyQuery, useMutation } from "@apollo/client"
import { FormEvent, useState } from "react"
import { addUser, getUsers } from "./graphql/query/query"

type UserType = { name: string, email: string, password: string }

const App = () => {
  const [getUsernames, { loading, data, error }] = useLazyQuery<{users:UserType[]}>(getUsers)
  const [add, { data: addUserResponse }] = useMutation<{newUser: string}, {name: string, email: string, password: string}>(addUser)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  console.log(addUserResponse);

  if (error) return <h1>Some error</h1>
  console.log(data)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    add({
      variables: {
        name, email, password
      }
    })

  }
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>WOW</h1>
      {
        data?.users?.map((i) => (
          <h1>{i.name}</h1>
        ))
      }
      <button onClick={() => getUsernames()}>View Users</button>

      <form action="" onSubmit={submitHandler} style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "300px",
        margin: "auto"
      }}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Add Users</button>
      </form>
    </div>
  )
}

export default App
