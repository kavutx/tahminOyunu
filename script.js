const zorluk = document.getElementById('select')
const input = document.getElementById('input')
const button = document.getElementsByClassName('custom-btn')[0]
const wrapper = document.querySelector('.wrapper')
const p = document.createElement('p')
p.style.textAlign='center'

let hak = 5
function startPause(boolean){
    button.disabled = boolean
    button.style.opacity = boolean == true ? 1 : ''

    input.disabled = boolean
}
startPause(true)


function randomNumber(sayi){
    return Math.round(Math.random() * sayi)
}

let random
zorluk.addEventListener('change',function(e){
    hak = 5
    const value =  Number(e.target.value);
    random = randomNumber(value);
    startPause(false)
    console.log(random);
    p.textContent = `Oyun başladı toplam ${hak} kere tahminde bulunabilirsin.`
    wrapper.appendChild(p)
})

input.addEventListener('keypress',function(e){
    if(e.code == 'Enter'){
        tahminEt(e)
    }
})


button.addEventListener('click',tahminEt)



function tahminEt (e){
    if(input.value > random){
        hak--
        p.textContent = `Daha kucuk bir sayi tahmin etmelisin hak sayısı:${hak}`
        p.style.color = 'red'
    }else if (input.value < random){
        hak--
        p.textContent = `Daha buyuk bir sayi tahmin etmelisin hak sayısı:${hak}`
        p.style.color = 'red'
    }else{
        p.textContent = `Dogru bildin ${5-hak+1} adet tahmin yaptın.`
        p.style.green = 'green'
        startPause(true)
    }
    
    if(hak == 0){
        p.textContent = `Oyun bitti hak sayısı:${hak}`
        p.style.color = 'red'
        startPause(true)
    }
    wrapper.appendChild(p)
    
}