//changing the selected timing by click and store in one place to view as well as the image too:
const variousTime=document.querySelectorAll('#border'); //getting time
const wake=document.querySelector('.wake'); //getting text 
const lunch=document.querySelector('.lunch'); //getting text 
const nap=document.querySelector('.nap');//getting text 
const night=document.querySelector('.night');//getting text 

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

   if((applyText=="1 AM - 2 AM"||applyText1=="1 AM - 2 AM"||applyText2=="1 AM - 2 AM"||applyText3=="1 AM - 2 AM"||
   applyText=="2 AM - 3 AM"||applyText1=="2 AM - 3 AM"||applyText2=="2 AM - 3 AM"||applyText3=="2 AM - 3 AM"||
   applyText=="3 AM - 4 AM"||applyText1=="3 AM - 4 AM"||applyText2=="3 AM - 4 AM"||applyText3=="3 AM - 4 AM"||
   applyText=="4 AM - 5 AM"||applyText1=="4 AM - 5 AM"||applyText2=="4 AM - 5 AM"||applyText3=="4 AM - 5 AM"||
   applyText=="5 AM - 6 AM"||applyText1=="5 AM - 6 AM"||applyText2=="5 AM - 6 AM"||applyText3=="5 AM - 6 AM"||
   applyText=="6 AM - 7 AM"||applyText1=="6 AM - 7 AM"||applyText2=="6 AM - 7 AM"||applyText3=="6 AM - 7 AM"||
   applyText=="7 AM - 8 AM"||applyText1=="7 AM - 8 AM"||applyText2=="7 AM - 8 AM"||applyText3=="7 AM - 8 AM"||
   applyText=="8 AM - 9 AM"||applyText1=="8 AM - 9 AM"||applyText2=="8 AM - 9 AM"||applyText3=="8 AM - 9 AM"||
   applyText=="9 AM - 10 AM"||applyText1=="9 AM - 10 AM"||applyText2=="9 AM - 10 AM"||applyText3=="9 AM - 10 AM"||
   applyText=="10 AM - 11 AM"||applyText1=="10 AM - 11 AM"||applyText2=="10 AM - 11 AM"||applyText3=="10 AM - 11 AM")
   &&
   (applyText=="11 AM - 12 PM"||applyText1=="11 AM - 12 PM"||applyText2=="11 AM - 12 PM"||applyText3=="11 AM - 12 PM"||applyText=="12 PM - 1 PM"||applyText1=="12 PM - 1 PM"||applyText2=="12 PM - 1 PM"||applyText3=="12 PM - 1 PM"||
   applyText=="1 PM - 2 PM"||applyText1=="1 PM - 2 PM"||applyText2=="1 PM - 2 PM"||applyText3=="1 PM - 2 PM"||
   applyText=="2 PM - 3 PM"||applyText1=="2 PM - 3 PM"||applyText2=="2 PM - 3 PM"||applyText3=="2 PM - 3 PM"||
   applyText=="3 PM - 4 PM"||applyText1=="3 PM - 4 PM"||applyText2=="3 PM - 4 PM"||applyText3=="3 PM - 4 PM")
   &&
   (applyText=="4 PM - 5 PM"||applyText1=="4 PM - 5 PM"||applyText2=="4 PM - 5 PM"||applyText3=="4 PM - 5 PM"||
   applyText=="5 PM - 6 PM"||applyText1=="5 PM - 6 PM"||applyText2=="5 PM - 6 PM"||applyText3=="5 PM - 6 PM"||
   applyText=="6 PM - 7 PM"||applyText1=="6 PM - 7 PM"||applyText2=="6 PM - 7 PM"||applyText3=="6 PM - 7 PM"||
   applyText=="7 PM - 8 PM"||applyText1=="7 PM - 8 PM"||applyText2=="7 PM - 8 PM"||applyText3=="7 PM - 8 PM")
   &&
   (applyText=="8 PM - 9 PM"||applyText1=="8 PM - 9 PM"||applyText2=="8 PM - 9 PM"||applyText3=="8 PM - 9 PM"||
   applyText=="9 PM - 10 PM"||applyText1=="9 PM - 10 PM"||applyText2=="9 PM - 10 PM"||applyText3=="9 PM - 10 PM"||
   applyText=="10 PM - 10 PM"||applyText1=="10 PM - 11 PM"||applyText2=="10 PM - 11 PM"||applyText3=="10 PM - 11 PM"||
   applyText=="11 PM - 00 AM"||applyText1=="11 PM - 00 AM"||applyText2=="11 PM - 00 AM"||applyText3=="11 PM - 00 AM"||
   applyText=="00 AM - 1 AM"||applyText1=="00 PM - 1 AM"||applyText2=="00 PM - 1 AM"||applyText3=="00 PM - 1 AM")){
      content1.innerHTML=`GOOD MORNING!! WAKE UP !!`;
      content2.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
      img.removeAttribute('src');
      img.setAttribute('src','./wake.jpg');
      image[0].replace(img);
   }
   else if(applyText=="1 AM - 2 AM"||applyText1=="1 AM - 2 AM"||applyText2=="1 AM - 2 AM"||applyText3=="1 AM - 2 AM"||
   applyText=="2 AM - 3 AM"||applyText1=="2 AM - 3 AM"||applyText2=="2 AM - 3 AM"||applyText3=="2 AM - 3 AM"||
   applyText=="3 AM - 4 AM"||applyText1=="3 AM - 4 AM"||applyText2=="3 AM - 4 AM"||applyText3=="3 AM - 4 AM"||
   applyText=="4 AM - 5 AM"||applyText1=="4 AM - 5 AM"||applyText2=="4 AM - 5 AM"||applyText3=="4 AM - 5 AM"||
   applyText=="5 AM - 6 AM"||applyText1=="5 AM - 6 AM"||applyText2=="5 AM - 6 AM"||applyText3=="5 AM - 6 AM"||
   applyText=="6 AM - 7 AM"||applyText1=="6 AM - 7 AM"||applyText2=="6 AM - 7 AM"||applyText3=="6 AM - 7 AM"||
   applyText=="7 AM - 8 AM"||applyText1=="7 AM - 8 AM"||applyText2=="7 AM - 8 AM"||applyText3=="7 AM - 8 AM"||
   applyText=="8 AM - 9 AM"||applyText1=="8 AM - 9 AM"||applyText2=="8 AM - 9 AM"||applyText3=="8 AM - 9 AM"||
   applyText=="9 AM - 10 AM"||applyText1=="9 AM - 10 AM"||applyText2=="9 AM - 10 AM"||applyText3=="9 AM - 10 AM"||
   applyText=="10 AM - 11 AM"||applyText1=="10 AM - 11 AM"||applyText2=="10 AM - 11 AM"||applyText3=="10 AM - 11 AM"){
      content1.innerHTML=`GOOD MORNING!! WAKE UP !!`;
      content2.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
      img.removeAttribute('src');
      img.setAttribute('src','./wake.jpg');
      image[0].replace(img);
   }
   else if(applyText=="11 AM - 12 PM"||applyText1=="11 AM - 12 PM"||applyText2=="11 AM - 12 PM"||applyText3=="11 AM - 12 PM"||
   applyText=="12 PM - 1 PM"||applyText1=="12 PM - 1 PM"||applyText2=="12 PM - 1 PM"||applyText3=="12 PM - 1 PM"||
   applyText=="1 PM - 2 PM"||applyText1=="1 PM - 2 PM"||applyText2=="1 PM - 2 PM"||applyText3=="1 PM - 2 PM"||
   applyText=="2 PM - 3 PM"||applyText1=="2 PM - 3 PM"||applyText2=="2 PM - 3 PM"||applyText3=="2 PM - 3 PM"||
   applyText=="3 PM - 4 PM"||applyText1=="3 PM - 4 PM"||applyText2=="3 PM - 4 PM"||applyText3=="3 PM - 4 PM"){
      content1.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
      content2.innerHTML="LET'S HAVE SOME LUNCH !!";
      img.removeAttribute('src');
      img.setAttribute('src','./noon.jpg');
      image[0].replace(img);
   }
   else if(applyText=="4 PM - 5 PM"||applyText1=="4 PM - 5 PM"||applyText2=="4 PM - 5 PM"||applyText3=="4 PM - 5 PM"||
   applyText=="5 PM - 6 PM"||applyText1=="5 PM - 6 PM"||applyText2=="5 PM - 6 PM"||applyText3=="5 PM - 6 PM"||
   applyText=="6 PM - 7 PM"||applyText1=="6 PM - 7 PM"||applyText2=="6 PM - 7 PM"||applyText3=="6 PM - 7 PM"||
   applyText=="7 PM - 8 PM"||applyText1=="7 PM - 8 PM"||applyText2=="7 PM - 8 PM"||applyText3=="7 PM - 8 PM"){
      content1.innerHTML=`GOOD EVENING !!`;
      content2.innerHTML=`STOP YAWNING,GET SOME TEA..<br> ITS JUST EVENING!`;
      img.removeAttribute('src');
      img.setAttribute('src','./nap.jpg');
      image[0].replace(img);
   }
   else if(applyText=="8 PM - 9 PM"||applyText1=="8 PM - 9 PM"||applyText2=="8 PM - 9 PM"||applyText3=="8 PM - 9 PM"||
   applyText=="9 PM - 10 PM"||applyText1=="9 PM - 10 PM"||applyText2=="9 PM - 10 PM"||applyText3=="9 PM - 10 PM"||
   applyText=="10 PM - 10 PM"||applyText1=="10 PM - 11 PM"||applyText2=="10 PM - 11 PM"||applyText3=="10 PM - 11 PM"||
   applyText=="11 PM - 00 AM"||applyText1=="11 PM - 00 AM"||applyText2=="11 PM - 00 AM"||applyText3=="11 PM - 00 AM"||
   applyText=="00 AM - 1 AM"||applyText1=="00 PM - 1 AM"||applyText2=="00 PM - 1 AM"||applyText3=="00 PM - 1 AM"){
      content1.innerHTML="GOOD NIGHT !!";
      content2.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
      img.removeAttribute('src');
      img.setAttribute('src','./night.jpg');
      image[0].replace(img);
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
      image[0].replace(img);
   }
   else if((hrs<4)&&(txt==="PM")){
      // content1.innerHTML="Lunch";
      content1.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
      content2.innerHTML="LET'S HAVE SOME LUNCH !!";
      img.removeAttribute('src');
      img.setAttribute('src','./noon.jpg');
      image[0].replace(img);
    }
    else if((hrs<8)&&(txt==="PM")){
      // content1.innerHTML="Evening";
      content1.innerHTML=`GOOD EVENING !!`;
      content2.innerHTML=`STOP YAWNING,GET SOME TEA..<br> ITS JUST EVENING!`;
      content2.style.fontSize="39px";
      img.removeAttribute('src');
      img.setAttribute('src','./nap.jpg');
      image[0].replace(img);
    }
    else{
      // content1.innerHTML="Night";
      content1.innerHTML="GOOD NIGHT !!";
      content2.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
      img.removeAttribute('src');
      img.setAttribute('src','./night.jpg');
      image[0].replace(img);
    }
}
changeContent();