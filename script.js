const star = document.querySelectorAll('.stars');
const result = document.getElementById('result');
const btn = document.getElementById('btn_next');

btn.addEventListener('click', function(){
  window.location.reload();
});

// check clicked star
for(let i=0 ; i<star.length ; i++){
    star[i].starvalue = i+1;
    ['click','mouseover','mouseout'].forEach(function(e){
      star[i].addEventListener(e, rating);
      
    });
}

function rating(e){
    let check = e.type;
    star_value= this.starvalue;  
    // if(check === 'click'){  
     
    // }
    star.forEach(function(val, ind){
    
     if(check === 'click'){  
        result.classList.remove('d-none');
        result.innerHTML= star_value+" STAR";
      if(ind < star_value){
          val.style.fill='';
          val.classList.add('orange');
          val.classList.remove('text-light');
      }
      else{
          val.classList.remove('orange');   
      }
     }
     else if(check === 'mouseover'){
        if(ind < star_value){
        val.classList.add('yellow');  
        }
     }
      else if(check === 'mouseout'){   
        if(ind < star_value){  
        val.classList.remove('yellow');  
        }
    }
    });
  }
