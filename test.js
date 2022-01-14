$(".btn").click(function (){
    $.ajax({
        url : "https://jsonplaceholder.typicode.com/todos/1",
        type : "GET",
        success : function(data){
            console.log(data);
            document.getElementsByTagName("p")[0].innerText = data.title
        }
    })
})



// it allows you to make server calls without reloading your web page

// CRUD application 
// Create Read update delete
// Node jS