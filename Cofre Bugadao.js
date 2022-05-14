let input = 'cubos\nsobuc';

function processData(input) {
    

    const linhas = input.trim().split("\n");

    let senhaCerta = linhas[0];
    let tentativa = linhas[1];
    let digitada = [];
   
    
    for (let a = 0; a < senhaCerta.length; a++) {
        for (let b = 0; b < tentativa.length; b++) {

        
          if (tentativa[b] === senhaCerta[a]) {
           
            digitada.push(tentativa[b]);
            tentativa = tentativa.slice(tentativa.indexOf(tentativa[b]));
            break
          }
        }
    }

    if (digitada.join('') === senhaCerta){
        console.log('SIM');
    }else{
        console.log('NAO');
    }


        
       
    }
    
     
    
    
  processData(input);
    
    
  

    
    


