// https://dog.ceo/api/breeds/image/random

async function randomDogPicture (){
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const json = await response.json()
        return json.message
        
    } catch (error) {
        return error
    }
}

const button = document.getElementById('btn')
button.addEventListener('click', async () => {
    const list = document.getElementById('list')

  const item = document.createElement('li')
  list.appendChild(item)

  const picture = document.createElement('img')
  const pictureUrl = await randomDogPicture()
  picture.src = pictureUrl
  item.appendChild(picture)
})