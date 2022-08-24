import { useEffect, useState } from "react"
import { getData } from "../utils/getData"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: {},
        loading: true
    })

    useEffect(() => {
        getData(url).then((data) => {
            setState({data: data, loading: false})
        })
    }, [url])
    
  return state
}

