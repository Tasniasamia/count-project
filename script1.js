function getvalueId(Idname){
    const Id=document.getElementById(Idname);
    const Id_value=Id.value;
    return Id_value;

}


document.getElementById('alert2').style.display="none";
document.getElementById('submit_btn').addEventListener("click",function(){
    const set=getvalueId("set_password");
    console.log(set);
    const confrim=getvalueId("confrim_password");
    if(set!= confrim){
        document.getElementById('alert2').style.display="block";  
    }
    
});
document.getElementById('set_password').value="";
document.getElementById('confrim_password').value="";
