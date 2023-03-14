class Calculadora{
    limpiar(){
        let d=document
        d.getElementById('resp').textContent=""
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
    }
    perfecto(){
        // capturar
        let suma=0
        let num=document.getElementById("num1"),perfecto=[]
        let arreglo=num.value
        let num1=arreglo.split(",")
        for(let i=0;i<num1.length;i++){ 
            let acud=0
            for(let divisor=1;divisor<num1[i];divisor++){
                if (num1[i] % divisor == 0){
                    acud=acud+divisor
                }
            } 
            if (acud==num1[i]){
                suma=suma+acud 
                perfecto.push(num1[i])
            }
        }
        document.getElementById("resp").textContent=`[${num1}]\nla suma entre ${perfecto} es = ${suma}`  
    }
    primo(){
        let d=document
        let num= document.getElementById("num1"),primo=[] 
        let arreglo=num.value
        let num1=arreglo.split(",")
        for(let i=0;i<num1.length;i++){
            let divisor=2
            let band=1
            while(divisor < num1[i] && band == 1){
                if (num1[i] % divisor == 0){
                    // romper ciclo es cambiar el valor de la bandera
                    band=0
                }else{
                    divisor=divisor+1
                }
            }
            if (band==1){
                primo.push(num1[i])
            }
        } 
        d.getElementById("resp").textContent=`[${num1}]\n${primo} son numeros primos`
    }
    exponente(){
        let d=document
        let num1=parseInt(d.getElementById("num1").value)
        let num2=parseInt(d.getElementById("num2").value)
        let s=this.expo(num1,num2)
        d.getElementById("resp").textContent=`${num1} elevado a ${num2} = ${s}`
    }
    expo(num1,num2){
        let base=num1**num2
        return base
    }
    exponente2(){
        let $imput=document.getElementById("num1"),expos=[]
        let arreglo=$imput.value
        let num=arreglo.split(",")
        for(let i=0;i<num.length;i++){
            let s=this.expo(num[i],num[i])
            expos.push(s)
        }
        document.getElementById("resp").textContent=`[${num}]Este arreglo elevado asu propio numero es=\n[${expos}]`
    }
    multi(num1,num2){
        let multi=num1*num2
        return multi
    }
    TablaDeMultiplicar(){
        let tabla = parseInt(document.getElementById("num1").value),tablas=tabla
        for (let i = 1; i <= 12; i++) {
            let multi=this.multi(tabla,i)
          tablas += `\n${tabla} x ${i} = ${multi}`;
        }
        document.getElementById('resp').textContent = tablas;

    }
    divi(num1,num2){
        let divisor=[]
        for(let i =num2;i<num1;i++ ){
            if(num1 % i==0){
                divisor.push(i)
            }
        }
        return divisor
    }
    divisores(){
        let num1=parseInt(document.getElementById("num1").value)
        let num2=parseInt(document.getElementById("num2").value)
        let h=this.divi(num1,num2)
        document.getElementById("resp").textContent=`los divisores de ${num1} son= ${h}`
    }
    divisoresSuma(){
        let num1=parseInt(document.getElementById("num1").value),acu=0
        let num2=parseInt(document.getElementById("num2").value)
        let h=this.divi(num1,num2)
        for(let i=0;i<h.length;i++){
            acu=acu+h[i]
        }
        document.getElementById("resp").textContent=`la suma entre los divisores de ${num1} que son: ${h} \nes: ${acu}`
    }
    invertir(num){
        let digito=0,invertido=[]
        while(num > 0){
            digito = num % 10;
            num = Math.floor(num / 10);
            invertido.push(digito)
        }
        return invertido
    }
    numeroin(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num)
        document.getElementById("resp").textContent=`[${numI}]`
    }
    SumarDigitos(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num),acu=0
        for(let i=0;i<numI.length;i++){
            acu=acu+numI[i]
        }
        document.getElementById("resp").textContent=`La suma de los digitos de este numero es= ${acu}`
    }
    pares(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num),pares=[]
        for(let i=0;i<numI.length;i++){
            if(numI[i]%2==0){
                pares.push(numI[i])
            }
        }
        document.getElementById("resp").textContent=`Los digitos pares de este numero son= ${pares}`
    }
    PrimerDigito(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num)
        let primero=numI[numI.length-1]
        document.getElementById("resp").textContent=`El primer digito de este numero es: ${primero}`
    }
    ultimo(){
        let num=parseInt(document.getElementById("num1").value)
        let numI=this.invertir(num)
        let ultimo=numI[0]
        document.getElementById("resp").textContent=`El ultimo digito de este numero es: ${ultimo}`
    }
    fac(num){
        let c=1,acu=num
        while(num > c){
            num=num-1
            acu=acu*num
        }
        return acu
    }
    factorial(){
        let num1=parseInt(document.getElementById("num1").value)
        let num=this.fac(num1)
        document.getElementById("resp").textContent=`el factorial de ${num1} es: \n${num}`
    }
    factorialDeNumeros(){
        let num=document.getElementById("num1"),factoriales=[]
        let arreglo=num.value
        let num1=arreglo.split(",")
        for(let i=0;i<num1.length;i++){
            let num=this.fac(num1[i])
            factoriales.push(num)
        }
        document.getElementById("resp").textContent=`el factorial de esta serie de numeros [${num1}] es: \n[${factoriales}]`
    }
    series(a,n){
        let arreglo=[]
        while(a< n){
            arreglo.push(a)
            this.num=a+1
        }
        return arreglo
    }
    serie(){
        let a=parseInt(document.getElementById("num1").value)
        let n=parseInt(document.getElementById("num2").value)
        let serie=this.series(a,n)
        
        document.getElementById("resp").textContent=`[${serie}]`
    }
}
let cal = new Calculadora() 