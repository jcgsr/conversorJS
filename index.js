function fahrenheit(fahr){
    fahr = Number(fahr)
    let c = (fahr-32)/1.8.toFixed(2)
    document.getElementById('resF').innerHTML = `${c.toFixed(2)} C°`
    if(fahr < 65){
        document.body.style.backgroundImage = "url(img/frio.jpg)"
        document.body.style.color = "black"
    } else if (fahr >=65 && fahr < 88){
        document.body.style.backgroundImage = "url(img/agradavel.jpg)"
        document.body.style.color = "black"
    } else {
        document.body.style.backgroundImage = "url(img/quente.jpg)"
        document.body.style.color = "#ff3c0b"
    }
}

function celsius(cel){
    cel = Number(cel)
    let f = cel*1.8 + 32
    document.getElementById('resC').innerHTML = `${f.toFixed(2)} F°`

    if(cel < 18){
        document.body.style.backgroundImage = "url(img/frio.jpg)"
        document.body.style.color = "black"
    } else if (cel > 18 && cel < 32){
        document.body.style.backgroundImage = "url(img/agradavel.jpg)"
        document.body.style.color = "black"
    } else {
        document.body.style.backgroundImage = "url(img/quente.jpg)"
        document.body.style.color = "#ff3c0b"
    }
}

function milhas(mil){
    mil = Number(mil)
    let m = mil*1.609
    document.getElementById('resM').innerHTML = `${m.toFixed(2)} km.`
    if (mil > 0){
        document.body.style.backgroundImage = "url(img/estrada2.jpg)"
        document.body.style.color = "brown"
    }
}

function km(k){
    k = Number(k)
    let milha = k/1.609
    document.getElementById('resK').innerHTML = `${milha.toFixed(2)} mi.`
    if (k > 0){
        document.body.style.backgroundImage = "url(img/estrada1.jpg)"
        document.body.style.color = "black"
    }
}

function feet(f){
    f = Number(f)
    let metro = f/3.281
    document.getElementById('resP').innerHTML = `${metro.toFixed(2)} m.`
    if (f > 0){
        document.body.style.backgroundImage = "url(img/feet.jpg)"
        document.body.style.color = "black"
    }
}

function metro(m){
    m = Number(m)
    let ft = m*3.281
    document.getElementById('resMetro').innerHTML = `${ft.toFixed(2)} ft.`
    if (m > 0){
        document.body.style.backgroundImage = "url(img/metro.jpg)"
        document.body.style.color = "black"
    }
}

function inch(i){
    i = Number(i)
    let cm = i*2.54
    document.getElementById('resI').innerHTML = `${cm.toFixed(2)} cm.`
    if (i > 0){
        document.body.style.backgroundImage = "url(img/inch.jpg)"
        document.body.style.color = "black"
    }
}

function cm(cm){
    cm = Number(cm)
    let inch = cm/2.54
    document.getElementById('resCm').innerHTML = `${inch.toFixed(2)} in.`
    if (cm > 0){
        document.body.style.backgroundImage = "url(img/cent.jpeg)"
        document.body.style.color = "brown"
    }
}

function lb(l){
    l = Number(l)
    let pound = l/2.205
    document.getElementById('resL').innerHTML = `${pound.toFixed(2)} kg.`
    if (l > 0){
        document.body.style.backgroundImage = "url(img/pound.jpeg)"
        document.body.style.color = "black"
    }
}

function kilo(kg){
    kg = Number(kg)
    let quilo = kg*2.205
    document.getElementById('resKg').innerHTML = `${quilo.toFixed(2)} lb.`
    if (kg > 0){
        document.body.style.backgroundImage = "url(img/kilo.jpeg)"
        document.body.style.color = "black"
    }
}

let data = new Date()
let dataAtual = data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
})
document.querySelector('p#data').innerHTML = dataAtual

