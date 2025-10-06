//listener for get bio
document.querySelector('button').addEventListener('click', search)

function search() {
    const name = document.querySelector('#name').value
    const timeStamp = new Date().getTime() //stack overflow: https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript
    const publicKey = `0cbdab65561589b5c6823a18213134d9`
    const privateKey = `fea933a14bb2d38b5c86ae525b44aa494638f0e2`
    const hash = CryptoJS.MD5(timeStamp + privateKey + publicKey).toString() //stack overflow: https://stackoverflow.com/questions/1655769/fastest-md5-implementation-in-javascript
    const url = `https://gateway.marvel.com/v1/public/characters?name=${name}&apikey=${publicKey}&hash=${hash}&ts=${timeStamp}`

    const image = document.querySelector('img')
    const origin = document.querySelector('h3')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let img = data.data.results[0].thumbnail
            image.src = `${img.path}.${img.extension}`
            origin.innerText = data.data.results[0].description
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}


