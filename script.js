const MaxNum = 10
var contagem = []
var total = []
var result = 0
var aux = 0

function Add(num){
    if(document.getElementById('total').innerHTML.length < MaxNum){
        
            document.getElementById('total').innerHTML += num
            contagem.push(document.getElementById('total').innerHTML)
            console.log(contagem)
    }
} 

function Clear(){
    if(contagem.length > 1){
        contagem.pop()
        document.getElementById('total').innerHTML = contagem[contagem.length - 1]
    }else{
        contagem = []
        document.getElementById('total').innerHTML = ''
        return 
    }
}

function ClearAll(){
    document.getElementById('total').innerHTML = ''
    document.getElementById('accomulator').innerHTML = ''
    aux = 0
    contagem = []
    total = []
}

function Calc(action){

    if( total[total.length - 1] == "+" ||
        total[total.length - 1] == "-" ||
        total[total.length - 1] == "x" ||
        total[total.length - 1] == "/"   ){ 
        total.pop()
        document.getElementById('accomulator').innerHTML = total
        return
        
    }
    document.getElementById('accomulator').innerHTML += document.getElementById('total').innerHTML + action
    document.getElementById('total').innerHTML = ''
    
    if(contagem.length == 0){ console.log('Certo')}else{
        total.push(contagem[contagem.length - 1])
        console.log('caquinha')
    }
    
    console.log(total)
    total.push(action.trim())
    
    console.log(contagem, total)
    contagem = []
}


function Resultado(){
        total.push(document.getElementById('total').innerHTML)
        if(total[total.length - 1] == ""){
            total.pop()
            console.log("vaxio")
        }
        console.log(total)

        Processo()

        document.getElementById('accomulator').innerHTML = ''
        document.getElementById('total').innerHTML = ''
        document.getElementById('total').innerHTML  = result
        if(document.getElementById('total').innerHTML.length > MaxNum){document.getElementById('total').innerHTML = 'error'}
        
  
    }
    

function Processo(){
    for(let i = 0; i < total.length; i++){
        switch(total[i]){

            case '+': result = parseFloat(total[i-1])
                      num2 = parseFloat(total[i+1])
                      result += num2
                      total = []
                      contagem = []
                      total.push(result)
            console.log('resultado: ',result, 'total: ',total)
            break

            case '-': result = parseFloat(total[i-1])
                      num2 = parseFloat(total[i+1])
                      result -= num2
                      total = []
                      contagem = []
                      total.push(result)
            console.log('resultado: ',result, 'total: ',total)
            break

             case 'x': result = parseFloat(total[i-1])
                      num2 = parseFloat(total[i+1])
                      result *= num2
                      total = []
                      contagem = []
                      total.push(result)
            console.log('resultado: ',result, 'total: ',total)
            break

             case '/': result = parseFloat(total[i-1])
                      num2 = parseFloat(total[i+1])
                      result /= num2
                      total = []
                      contagem = []
                      total.push(result)
            console.log('resultado: ',result, 'total: ',total)
            break
        }
    }
    
}
