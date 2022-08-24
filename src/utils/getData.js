export const getData = async (urlParam) => {
    const url = urlParam;
    const resp = await fetch(url, { method: "GET" })
    const data = await resp.json()
    return data
}
