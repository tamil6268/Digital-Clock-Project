//changing the selected timing by click and store in one place to view as well as the image too:
const variousTime=document.querySelectorAll('#border'); //getting time
const wake=document.querySelector('.wake'); //getting text 
const lunch=document.querySelector('.lunch'); //getting text 
const nap=document.querySelector('.nap');//getting text 
const night=document.querySelector('.night');//getting text 
const session=document.getElementById('text');

function timeUpdate(){
   let applyText=variousTime[0].value;
   let applyText1=variousTime[1].value;
   let applyText2=variousTime[2].value;
   let applyText3=variousTime[3].value;
   wake.innerText=`Wake Up Time: ${applyText}`;
   lunch.innerText=`Lunch Time: ${applyText1}`;
   nap.innerText=`Nap Time: ${applyText2}`;
   night.innerText=`Night Time: ${applyText3}`;
   
   const content1=document.getElementById('morning');
   const content2=document.getElementById('noon');
   const image=document.querySelectorAll('.child31');
   const img=document.getElementById('image');
   const hrs=document.getElementById('hour');
   
   let hours=parseInt(hrs.innerText)
   let options1=applyText.split(" ")
   let options2=applyText1.split(" ")
   let options3=applyText2.split(" ")
   let options4=applyText3.split(" ")
   
  if(options2[0]==hours && options2[1]==session.innerText){
      content1.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
      content2.innerHTML="LET'S HAVE SOME LUNCH !!";
      img.removeAttribute('src');
      img.setAttribute('src','./noon.jpg');
      // image[0].replace(img);
   }
   else if(options3[0]==hours && options3[1]==session.innerText){
      content1.innerHTML=`GOOD EVENING !!`;
      content2.innerHTML=`STOP YAWNING,GET SOME TEA..<br> ITS JUST EVENING!`;
      img.removeAttribute('src');
      img.setAttribute('src','./nap.jpg');
      // image[0].replace(img);
   }
   else if(options4[0]==hours && options4[1]==session.innerText){
      content1.innerHTML="GOOD NIGHT !!";
      content2.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
      img.removeAttribute('src');
      img.setAttribute('src','./night.jpg');
      // image[0].replace(img);
   }
   else{
      content1.innerHTML=`GOOD MORNING!! WAKE UP !!`;
      content2.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
      img.removeAttribute('src');
      img.setAttribute('src','./wake.jpg');
      // image[0].replace(img);
   }
}
timeUpdate();

//set Alarm:(text change and addevent)

const Alarm=document.getElementById('alarm');

Alarm.addEventListener('mouseover',function(){//creating the anonymous  function inside the eventlistener
   Alarm.innerText="Party time";
});
Alarm.addEventListener('mouseleave',leave);//calling the function
function leave(){ //creating the function
   Alarm.innerText="Set Alarm";
}

Alarm.addEventListener('click',timeUpdate);//calling the function to change content and image


//getting clock to run:

const text=document.querySelector('#text');

function runClock(){
   let time=new Date();

   hrs=time.getHours();
   min=time.getMinutes();
   sec=time.getSeconds();

   var txt=text.innerHTML;

   if(hrs>12){
      txt="PM";
      hrs=hrs-12;
   }
   else if(hrs===0){
      txt="AM";
   };
   hrs=hrs<10?"0"+hrs:hrs;
   min=min<10?"0"+min:min;
   sec=sec<10?"0"+sec:sec;

const hour=document.querySelector('#hour');
hour.innerHTML=`${hrs}<br>hours`;
hour.style.fontSize="20px";

const minute=document.querySelector('#minute');
minute.innerHTML=`${min}<br>mins`;
minute.style.fontSize="20px";

const second=document.querySelector('#second');
second.innerHTML=`${sec}<br>secs`;
second.style.fontSize="20px";

text.innerHTML=`${txt}`;
}
runClock();
setInterval(()=>{
   runClock();
},1000)


//getting content and changing content by running clock:

const content1=document.getElementById('morning');
const content2=document.getElementById('noon');
const image=document.querySelectorAll('.child31');
const img=document.getElementById('image');

function changeContent(){
   var txt=text.innerHTML;
   if(hrs>12){
      txt="PM";
      hrs=hrs-12;
   }
   else if(hrs===0){
      txt="AM";
   };
   
   if((hrs<12)&&(txt==="AM")){
      // content1.innerHTML="Morning";
      content1.innerHTML=`GOOD MORNING!! WAKE UP !!`;
      content2.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
      img.removeAttribute('src');
      img.setAttribute('src','./wake.jpg');
      // image[0].replace(img);
   }
   else if((hrs<4)&&(txt==="PM")){
      // content1.innerHTML="Lunch";
      content1.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
      content2.innerHTML="LET'S HAVE SOME LUNCH !!";
      img.removeAttribute('src');
      img.setAttribute('src','./noon.jpg');
      // image[0].replace(img);
    }
    else if((hrs<8)&&(txt==="PM")){
      // content1.innerHTML="Evening";
      content1.innerHTML=`GOOD EVENING !!`;
      content2.innerHTML=`STOP YAWNING,GET SOME TEA..<br> ITS JUST EVENING!`;
      content2.style.fontSize="39px";
      img.removeAttribute('src');
      img.setAttribute('src','./nap.jpg');
      // image[0].replace(img);
    }
    else{
      // content1.innerHTML="Night";
      content1.innerHTML="GOOD NIGHT !!";
      content2.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
      img.removeAttribute('src');
      img.setAttribute('src','./night.jpg');
      // image[0].replace(img);
    }
}
changeContent();