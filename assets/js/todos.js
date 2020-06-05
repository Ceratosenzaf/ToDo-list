//add Todo
$("#addTodo").on("keypress", function (event) {
    if (event.which === 13) {
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
    };
});

//delete Todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

//done
$("ul").on("click", "li", function () { //fires when an li is pressed inside a ul
    $(this).toggleClass("completed");
})

//toggle add Todo
$(".fa-plus").on("click", function () {
    $("#addTodo").fadeToggle();
})