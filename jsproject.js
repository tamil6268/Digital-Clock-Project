//changing the selected timing by click and store in one place to view:
const variousTime=document.querySelectorAll('#border');//getting time
const wake=document.querySelector('.wake');//getting text 
const lunch=document.querySelector('.lunch');//getting text 
const nap=document.querySelector('.nap');//getting text 
const night=document.querySelector('.night');//getting text 

var applyText;

function timeUpdate(){
   applyText=variousTime[0].value;
   applyText1=variousTime[1].value;
   applyText2=variousTime[2].value;
   applyText3=variousTime[3].value;
   wake.innerText=`Wake Up Time: ${applyText}`;
   lunch.innerText=`Lunch Time: ${applyText1}`;
   nap.innerText=`Nap Time: ${applyText2}`;
   night.innerText=`Night Time: ${applyText3}`;
}
timeUpdate();

variousTime[0].addEventListener('change',timeUpdate);
variousTime[1].addEventListener('change',timeUpdate);
variousTime[2].addEventListener('change',timeUpdate);
variousTime[3].addEventListener('change',timeUpdate);

//set Alarm:(text change and addevent)

const Alarm=document.getElementById('alarm');

Alarm.addEventListener('mouseover',function(){//creating the anonymous  function inside the eventlistener
   Alarm.innerText="Party time";
});
Alarm.addEventListener('mouseleave',leave);//calling the function
function leave(){ //creating the function
   Alarm.innerText="Set Alarm";
}


// alert(variousTime[].value);
// let noChange1="10AM-11AM";
// let noChange2="12PM-1PM";
// let noChange3="4PM-5PM";
// let noChange4="8PM-9PM";

// function defaulttime(){
//    option1.innerHTML=;
//    alert(option1.value);
// };

// function defaulttime(){
//    variousTime[0].value=noChange1;
//    variousTime[1].value=noChange2;
//    variousTime[2].value=noChange3;
//    variousTime[3].value=noChange4;
//   border1.innerText=noChange1;
//   alert(noChange);
// }

//getting clock to run:

const text=document.querySelector('#text');

function runClock(){
   let time=new Date();

   hrs=time.getHours();
   min=time.getMinutes();
   sec=time.getSeconds();

   var txt=text.innerHTML;

   if(hrs>11){
      // hrs=hrs-12;
      txt="PM";
   }
   else if(hrs===0){
      txt="AM";
   };
   hrs=hrs<10?"0"+hrs:hrs;
   min=min<10?"0"+min:min;
   sec=sec<10?"0"+sec:sec;

const hour=document.querySelector('#hour');
hour.innerHTML=`${hrs}<br>hours`;
hour.style.fontSize="28px";

const minute=document.querySelector('#minute');
minute.innerHTML=`${min}<br>mins`;
minute.style.fontSize="28px";

const second=document.querySelector('#second');
second.innerHTML=`${sec}<br>secs`;
second.style.fontSize="28px";

text.innerHTML=`${txt}`;
}
runClock();
setInterval(()=>{
   runClock();
},1000)

//getting content and changeing content:

const content1=document.getElementById('morning');
const content2=document.getElementById('noon');
const image=document.querySelectorAll('.child31');
const img=document.createElement('img');


function changeContent(){  
   if(hrs>=4 && hrs<=11){
      // content1.innerHTML="Morning";
      content1.innerHTML=`GOOD MORNING!! WAKE UP !!`;
      content2.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
      img.setAttribute('src','./wake.jpg');
      image[0].appendChild(img);
   }
   else if(hrs>=12 && hrs<=15){
      // content1.innerHTML="Lunch";
      content1.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
      content2.innerHTML="LET'S HAVE SOME LUNCH !!";
      img.setAttribute('src','./noon.jpg ');
      image[0].appendChild(img);
    }
    else if(hrs>=16 && hrs<=19){
      // content1.innerHTML="Evening";
      content1.innerHTML=`GOOD EVENING !!`;
      content2.innerHTML=`STOP YAWNING,GET SOME TEA..<br> ITS JUST EVENING!`;
      content2.style.fontSize="39px";
      img.setAttribute('src','./nap.jpg');
      image[0].appendChild(img);
    }
    else if(hrs>=20 && hrs<=24){
      // content1.innerHTML="Night";
      content1.innerHTML="GOOD NIGHT !!";
      content2.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
      img.setAttribute('src','./night.jpg');
      image[0].appendChild(img);
    }
    else{
      content1.innerHTML="It's Mid Night...Don't Get Awake OopS!!!";
    }
}
changeContent();



