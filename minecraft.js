document.addEventListener("DOMContentLoaded", ()=>{
    const frase = document.querySelector("span")
    const fundo = document.querySelector("body")
    const frases = [
        "Its groundbreaking!", 
      "Undfeated!", 
      "Woo, tigsource!", 
      "Bees, bees, bees, bees!", 
      "Hobo humping slobo babe!", 
      "Minecraft!", 
      "Hotter than the sun!", 
      "Casual gaming!",
     "Dungeon!",
     "Also try terraria!",
     "Indie!",
     "Best in Class!",
     "Don't bother with the clones!",
     "Ryan also has amazing hair!",
     "Joe is neat!",
     "Indev!"
    ]
    const fundos = [
        "https://i.pinimg.com/originals/6d/1d/39/6d1d39e6fa48dcd208f1b3c8516d0487.gif",
        "https://i.pinimg.com/originals/55/6c/e1/556ce1dc9f164dfe0723942e36c74e9f.gif",
        "https://i.pinimg.com/originals/4a/35/38/4a3538196c6e37ec1bd379fce173ced7.gif",
        "https://i.pinimg.com/originals/59/0d/73/590d73050637dcb12e9af999f8d6437b.gif",
        "https://64.media.tumblr.com/1ca87d456401782267c0e7e6ff26d4f3/fa40adbb08ff5df0-00/s1280x1920/40fa3a8f43d4ad6ba6028d8cbdc328e69a349908.gif"
    ]
    
    const numAleatoriofrases = Math.floor(Math.random() * 16)
    const numAleatorioFundo = Math.floor(Math.random() * 5)

    frase.innerText = frases[numAleatoriofrases]
    fundo.style.backgroundImage = `url(${fundos[numAleatorioFundo]})`
})