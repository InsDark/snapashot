export const getQuote = async() => {
    const req = await fetch('https://api.adviceslip.com/advice')
    const res = await req.json()
    return res
}