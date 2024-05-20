const BASE_URL =
  'file:///F:/Sites%20Projetos/Santander%20Full-Stack/Desafio_SantanderFullStack/url.html'

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL)
    const json = await data.json()
    return json.webpurl
  } catch (e) {
    console.log(e.message)
  }
}

const loadImg = async () => {
  const img = document.getElementsByTagName('img')[0]
  img.src = await getCats()
}

loadImg()

const btn = document.getElementById('change-cat')
btn.addEventListener('click', loadImg)
