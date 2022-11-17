export const deleteData = async (urlParam) => {
    const url = urlParam;
    const resp = await fetch(url, { method: "DELETE" })
    const data = await resp.json()
    return data
}
