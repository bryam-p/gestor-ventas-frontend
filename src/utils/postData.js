export const postData = async (urlParam, body) => {
    const url = urlParam;
    const resp = await fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    console.log('aaa', resp)
    const data = await resp
    return data
}