// jQuery code goes here ...

//jQuery ajax


$("button").click(function(){
    $.ajax({
        url : "https://jsonplaceholder.typicode.com/todos/1",
        type : "GET",
        success : function (data){
            // console.log(data);
            document.getElementsByTagName("p")[0].innerText = data.title
        }
    })
})

// GET
// POST
// UPDATE
// DELETE


// jQuery selector
//by tag name

// $("button").click(function(){
//     //code goes here
//     $("p").toggle()
// })

// by class name
// $(".btn-click").click(function(){
//     //code goes here
//     $("p").toggle()
// })

//by id
// $("#btn").click(function(){
//     //code goes here
//     $("p").toggle()
// })

//by this keyword
// $("button").click(function(){
//     //code goes here
//    $(this).hide()
// })


