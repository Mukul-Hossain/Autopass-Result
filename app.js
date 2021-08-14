
 /*function showResult(){
     var mainResult = document.getElementById('mainResult');
     var roll = document.getElementById('roll').value;
     var year = document.getElementById('year').value;


     if(roll=='' || roll<100000 || roll>999999 ){
         alert("ঠিকমতো রোল নাম্বার দেও");
         
     } else if(year<2020 || year>2020){
        alert("কত সালে পরীক্ষা দিছট তাও মনে নাই? ঠিকমতো সাল দেও");
     
     
     }else{
        mainResult.style.display = 'block';
     }

 } */  
 var submit = document.getElementById('submit');
 var mainResult = document.getElementById('mainResult');

 function showResult(){
 

   //Hide Loader
   loader.style.display = 'none';
    
    var roll = document.getElementById('roll').value;
    var year = document.getElementById('year').value;

    if(roll=='' || roll<100000 || roll>999999 ){
        rollError("ঠিকমতো রোল নাম্বার দেও");
        
    } else if(year<2020 || year>2020){
       yearError("কত সালে পরীক্ষা দিছো তাও মনে নাই? ঠিকমতো সাল দেও");
    
    
    }else{
       mainResult.style.display = 'block';
    }

} 
//Roll Error
function rollError(error){
   const errorDiv = document.createElement('div');
   errorDiv.className = 'alert alert-danger';

   errorDiv.appendChild(document.createTextNode(error));

   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');

   card.insertBefore(errorDiv, heading);
   setTimeout(clearRollError, 2000);
}
function clearRollError(){
   document.querySelector('.alert').remove();
}
//Year Error
function yearError(error){
   const errorDiv = document.createElement('div');
   errorDiv.className = 'alert alert-danger';

   errorDiv.appendChild(document.createTextNode(error));

   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');

   card.insertBefore(errorDiv, heading);
   setTimeout(clearYearError, 2500);
}
function clearYearError(){
   document.querySelector('.alert').remove();
}


submit.addEventListener('click', function(e){
   e.preventDefault();

   //show loader
   const loader = document.getElementById('loader');
   loader.style.display = 'block';

   setTimeout(showResult, 2000);
});

