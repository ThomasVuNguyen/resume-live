$(".open").on("click",function(){
    $(this).children().toggle("highlight") //for use later
    $(this).next().toggle("highlight")
})