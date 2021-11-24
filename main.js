$(document).ready(()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    $("body").prepend(`<button id="btn1">GET</button>`);
    
    $("#btn1").click(()=>{
        $.get(url, function(respuesta, estado){
            if(estado === "success"){
                let misDatos= respuesta;
                for (const dato of misDatos){
                    $(`<div>
                    <h3>${dato.tittle}</h3>
                    <p> ${dato.body}</p>
                    </div>`);
                }
            }
    });
});

});
