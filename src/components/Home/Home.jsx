import { Skeleton, Button } from "@mui/material";
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
        <br/>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </>
      :
      <Skeleton variant="rectangular" width={210} height={118} />
  )
}
