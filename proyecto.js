const digitos=[0,1,2,3,4,5,6,7,8,9]
const correcto=[]
const numeros=document.getElementById('numero')
const agregar=document.getElementById('agregar')
let fijas=0
let picas=0
let cont=0
const picasyfijas=[]
const list=[]

while (correcto.length<=3){
    const index=Math.floor(Math.random()*digitos.length)
    if (correcto[0]==0){
        index=Math.floor(Math.random()*digitos.length)
    }else{
    correcto.push(digitos[index])
    digitos.splice(index,1)
    } // Con este metodo sacamos un número aleatorio y luego lo validamos para que la primera posicion no sea el numero 0
}
const final=(correcto.join('')) // Con el join unimos los numeros convirtiendolos en un string
console.log(final);
let number=numeros.value

function valores(){ // con esta función las posiciones se comparan entre el numero correcto y el numero que pone el jugador para saber cuantas picas y cuantas fijas.
    correcto.forEach(el=>{
        for (i=0;i<4;i++){
            if (number[i]==el){
                if (number[i]==correcto[i]){
                    fijas+=1
                }else if (number[i]!=correcto[i]){
                    picas+=1
                }
            }
        }
    })
}

window.addEventListener('keydown',function(event){
    if (event.key=='Enter'){
        number=numeros.value
        valores()
        if (number[0]==number[1] || number[0]==number[2] || number[0]==number[3] || number[1]==number[2] || number[1]==number[3] || number[2]==number[3]){
            alert('Todos los digitos deben ser diferentes') // Se valida que todos los digitos sean diferentes
            numeros.value=''
            picas=0
            fijas=0
        }else if(number.length>=5 || number.length<4){
            alert('El numero solo puede ser de 4 digitos') // Se valida que el numero sea de 4 digitos, ni mas ni menos
            numeros.value=''
            picas=0
            fijas=0
        }else if(number[0]==0){
            alert('El primer numero no puede ser 0') // Se valida que el primer digito que pone el jugador no sea 0
            numeros.value=''
            picas=0
            fijas=0
        }else if ((number[0]=='.' || number[0]=='-') || (number[1]=='.' || number[1]=='-') || (number[2]=='.' || number[2]=='-') || (number[3]=='.' || number[3]=='-')){
            alert('Los digitos deben ser numeros') // Se valida que en ninguna posicion del numero, haya un '.' o una '-'
            numeros.value=''
            picas=0
            fijas=0
        }
        else if(fijas==4){
            list.push(number)
            console.log('xd');
            picasyfijas.push({fijas,picas})
            console.log(picasyfijas)
            cont+=1
            let ganador=''
            ganador=(`Haz ganado el juego con ${cont} intentos`) 
        document.getElementById('pantalla').innerHTML=ganador
        }else{
            list.push(number)
            console.log(list);
            picasyfijas.push({fijas,picas})
            console.log(picasyfijas)
            cont+=1
            var contenido=''
            contenido+=`<th>Número</th><th>Fijas</th><th>Picas</th>`
            for (i=0;i<picasyfijas.length;i++){ // Por cada numero que pone el jugador, se genera una nueva fila con el numero, las picas, y las fijas
                contenido+=`<tr><td>${list[i]}</td>`
                contenido+=`<td>${picasyfijas[i].fijas}</td>`
                contenido+=`<td>${picasyfijas[i].picas}</td></tr>`
                numeros.value=''
                picas=0
                fijas=0
                document.getElementById('pantalla').innerHTML=contenido
            }
        }
    }
    
})