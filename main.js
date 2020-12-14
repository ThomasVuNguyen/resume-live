$(document).ready(function(){
    $(".address").addClass("text-right")
    $(".date").addClass("text-right")


    $(".position").addClass("text-left")
    $(".main").addClass("text-uppercase")
    $(".hidden").hide()
    
    $(".open").hover(function(){
        $(this).siblings(".hidden").show("slow")
    },function(){
        $(this).siblings(".hidden").hide("slow")
        })
    $(".open-click").on("click",function(){
        $(this).siblings(".hidden").toggle("slow")
    })



})

