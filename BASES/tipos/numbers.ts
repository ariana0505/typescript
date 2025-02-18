(()=>{
    let avengers:number = 10;

    console.log(avengers)

    const villanos:number = 20;
    if(avengers < villanos){
        console.log('OH no estamos perdidos');
    }
    else if(avengers == villanos){
        console.log('tenemos oportunidad c:');
    }
    else{
        console.log('Estamos perdidos :(');
    }
    avengers = Number('55A')//NaN
    console.log(avengers);
})  