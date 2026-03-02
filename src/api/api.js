export async function callcore() {
  try {
    const res = await fetch('http://localhost:8000/app/core')
    const data = await res.json()
    return data.message
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function callmodele() {
  try {
    const res = await fetch('http://localhost:8000/app/model')
    const data = await res.json()
    return data.message
  } catch (error) {
    throw new Error(error.message)
  }
}
export async function callrouter() {
  try {
    const res = await fetch('http://localhost:8000/app/router')
    const data = await res.json()
    return data.message
  } catch (error) {
    throw new Error(error.message)
  }
}