let keys = document.querySelectorAll(".key")
keys.forEach(k => {
  k.onclick = e => {
    let audio = document.createElement("audio")
    console.log(k.dataset.sound)
    audio.src = k.dataset.sound
    audio.play()
    k.classList.add("clicked")
    audio.onended = ()=>{
      k.classList.remove("clicked")
    }
  }
})
let play = 1
document.onkeydown = e =>{
  let key = e.key
  if(key == "a" || key == "A"){
    let audio = document.createElement("audio")
    audio.src = keys[0].dataset.sound
    audio.play()
    keys[0].classList.add("clicked")
    audio.onended = ()=>{
      keys[0].classList.remove("clicked")
    }
  }else if(key == "s" || key == "S"){
    let audio = document.createElement("audio")
    audio.src = keys[1].dataset.sound
    audio.play()
    keys[1].classList.add("clicked")
    audio.onended = ()=>{
      keys[1].classList.remove("clicked")
    }
  }else if(key == "d" || key == "D"){
    let audio = document.createElement("audio")
    audio.src = keys[2].dataset.sound
    audio.play()
    keys[2].classList.add("clicked")
    audio.onended = ()=>{
      keys[2].classList.remove("clicked")
    }
  }else if(key == "f" || key == "F"){
    let audio = document.createElement("audio")
    audio.src = keys[3].dataset.sound
    audio.play()
    keys[3].classList.add("clicked")
    audio.onended = ()=>{
      keys[3].classList.remove("clicked")
    }
  }else if(key == "g" || key == "G"){
    let audio = document.createElement("audio")
    audio.src = keys[4].dataset.sound
    audio.play()
    keys[4].classList.add("clicked")
    audio.onended = ()=>{
      keys[4].classList.remove("clicked")
    }
  }else if(key == "h" || key == "H"){
    let audio = document.createElement("audio")
    audio.src = keys[5].dataset.sound
    audio.play()
    keys[5].classList.add("clicked")
    audio.onended = ()=>{
      keys[5].classList.remove("clicked")
    }
  }else if(key == "j" || key == "J"){
    let audio = document.createElement("audio")
    audio.src = keys[6].dataset.sound
    audio.play()
    keys[6].classList.add("clicked")
    audio.onended = ()=>{
      keys[6].classList.remove("clicked")
    }
  }else if(key == "k" || key == "K"){
    let audio = document.createElement("audio")
    audio.src = keys[7].dataset.sound
    audio.play()
    keys[7].classList.add("clicked")
    audio.onended = ()=>{
      keys[7].classList.remove("clicked")
    }
  }else if(key == "l" || key == "L"){
    let audio = document.createElement("audio")
    audio.src = keys[8].dataset.sound
    audio.play()
    keys[8].classList.add("clicked")
    audio.onended = ()=>{
      keys[8].classList.remove("clicked")
    }
  }
}
