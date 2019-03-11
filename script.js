$("button").click(function() {
    
    var confident = $("#confident").val();
    var getAlong = $("#getAlong").val();
    if(confident === "yes" && getAlong === "no") {
        alert("Rimuru");   
    }
    else if (confident === "no" && getAlong === "no"){
    alert("Alucard");
    }
    else if (confident === "yes" && getAlong === "yes"){
    alert("Emma");
    }
    else if (confident === "no" && getAlong === "yes"){
    alert("Izeku");
    }
});


 