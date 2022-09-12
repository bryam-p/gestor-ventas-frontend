import { useFetch } from "../../hooks/useFetch"

export const Home = () => {

  const { data, loading } = useFetch('http://localhost:4000/api/user');

  console.log(data)


  return (
    !loading ?
      <>
        {
          data.map(user => (
            <code>
              {JSON.stringify(user)}
            </code>
          ))
        }
        <br />
        <div>Text</div>
        <div>Contained</div>
        <div>Outlined</div>
      </>
      :
      <div>Cargando...</div>
  )
}
