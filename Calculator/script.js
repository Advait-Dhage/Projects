const input_box=document.querySelector('#display')


function clearDisplay(){
    input_box.value=''
}

function appendToDisplay(val){
    input_box.value+=val
}

function calculate(){
   try{
    input_box.value=eval(input_box.value)
   }
   catch(error){
    input_box.value="Error"
   }

}
