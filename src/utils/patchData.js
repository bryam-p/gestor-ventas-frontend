export const patchData = async (urlParam, body) => {
    const url = urlParam;
    const resp = await fetch(url, { method: "PATCH", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    console.log('FecthData', resp)
    const data = await resp
    return data
}