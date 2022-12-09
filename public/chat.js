let socket = io.connect("http://localhost:8000")


let message = document.getElementById("message")
let handle = document.getElementById("handle")
let btn = document.getElementById("send")
let output = document.getElementById("output")
let feedback = document.getElementById("feedback")

btn.addEventListener("click", function(){
    socket.emit("chat",{message:message.value , handle:handle.value})
    console.log(message.value,handle.value)
});


socket.on("chat",function(data){
    output.innerHTML+='<p><strong>'+ data.handle +':</strong>'+ data.message +'</p>'
    // output.innerHTML+= data.handle +':'+ data.message 
    message.value="";
    handle.value="";
})