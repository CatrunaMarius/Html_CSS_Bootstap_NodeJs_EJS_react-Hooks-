

// selecteza un sigur 
//jQuery("h1").css("color", "red");
// $("h1").css("color", "red");

// selectare multipla
// $("button")

//Atribut
// console.log($("img").attr("src")); //pt a vedea atributlu
// $("a").attr("href", "https://www.youtube.com"); //pt a seta a atribut

//adugare addEventListener cu jQuery

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// })

/*pt a selecta butoanle trebuiea sa facem asa:
for(var i=0; i< 5; i++ ){
document.querySelector("button")[i].addEventListener("click", function (){
    document.querySelector("h1").style.color = "green"
    
});   
}

    dar cu jQuuery arta cam asa:*/
// $("button").click(function(){
//     $("h1").css("color", "green");
// })

//key press listener - pt a face cea ce am facut in proiectul drum 
//vom schimba "input" cu "body"  sau  document
// $("input").keypress(function(event){
//     console.log(event.key);
// })

//Challenge
// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })

//exista o alta alternativa inafar de cea de mai suc cu click si keypress
//cea ce trebuie sa inlocuim  "mouseover" cu "click"/"keypress"
// si va executa aceleasi comezi ca cele de mai sus, si multe alte event 
// $("h1").on("mouseover", function(){
//     $("h1").css("color", "blue")
// })

// //daca vrea sa adaugam un buton inaintea "h1"
// $("h1").before("<button>New</button>");
// //daca vrea sa adaugam un buton dupa "h1"
// $("h1").after("<button>New</button>");
// //daca vrea sa adaugam un buton in interiorul "h1" dar inaintea contenului
// $("h1").prepend("<button>New</button>");
// //daca vrea sa adaugam un buton in interiorul "h1" dar dupa contenului
// $("h1").append("<button>New</button>");


//jQuery animatie
$("button").click(function(){
    // $("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5});//trebuie retinut ca cea ce urmeaza sa animezi trebuie sa fie urmata de numere Ex: margini : "20%"
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
    //pt toate aceste efecte cautam pe google jQuery effect Methods
})