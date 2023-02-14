function getvalueId(Idname){
   const id=document.getElementById(Idname);
   const idvalue=id.value;
const idvaluenumber=parseFloat(idvalue);
 
    return idvaluenumber;
  
  
}
function doublemovefield(fromId,value){
    const doublemoveId=document.getElementById(fromId);
   doublemoveId .innerText=value*2;
}
function triplemovefield(fromId2,value2){
    const triplemoveId=document.getElementById(fromId2);
    triplemoveId.innerText=value2*3;

}
// document.getElementById("number-value").addEventListener('keyup',function(event){
//     if(typeof event.target.value=="string"){
//         alert("please enter a number");
//     }
// })
document.getElementById('double_btn').addEventListener('click',function(){
   const enterfield= getvalueId("number-value");
   console.log(typeof enterfield);
   if(isNaN(enterfield)){
    alert('Please enter a number');
    return;
   }
   const doublefield=doublemovefield("number-value1",enterfield);
   
    
})

document.getElementById('triple_btn').addEventListener('click',function(){
    const enterfield1= getvalueId("number-value");
    if(isNaN(enterfield1)){
        alert('Please enter a number');
        return;
       }
    const triplefield=triplemovefield("number-value1",enterfield1)
    
     
 })
 document.getElementById('number-value').value="";


