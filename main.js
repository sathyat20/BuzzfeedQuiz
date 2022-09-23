// Calculating & Displaying Results

$('#btn2').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

    var sum = 0;
    let result;   let des;

    if (choices.length < 5) {
        result = "Hold up eager beaver!";
        des = "Are you sure you've finished all the questions?";
        document.getElementById('title').innerHTML += result;
        document.getElementById('description').innerHTML += des;
    
        var modal = document.getElementById('results');
        var button = document.getElementsByClassName("close")[0];
            modal.style.display = "flex";

        button.onclick = function() {
            document.getElementById('title').innerHTML = "";
            document.getElementById('description').innerHTML = "";
            modal.style.display = "none";
        }

        // Clicking outside of modal from https://www.w3schools.com/howto/howto_css_modals.asp
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    }

    // Adapted from https://www.w3schools.com/howto/howto_css_modals.asp

    if (choices.length == 5) {
        for (var j = 0; j < choices.length; j++){
            sum += JSON.parse(choices[j]);
        }
    
        if (sum <= 7) {
            result = "Lemon Cream Cheese Tart";
            des = "You LOVE cheese, you love LEMON, you're certainly a Lemon Cream Cheese Tart!";
            $("#RRGPC").removeClass("true");
            $("#YC").removeClass("true");
            $("#KLP").removeClass("true");
            $("#LCCT").addClass("true");
            $("#LBC").removeClass("true");
            $("#OCMD").removeClass("true");
        }

        if ( sum >= 8 && sum <= 12) {
            result = "Ruby Red Grapefruit Panna Cotta";
            des = "You LOVE all things red, you absolutely adore grapefruit, you're definitely a Ruby Red Grapefruit Panna Cotta!";
            $("#RRGPC").addClass("true");
            $("#YC").removeClass("true");
            $("#KLP").removeClass("true");
            $("#LCCT").removeClass("true");
            $("#LBC").removeClass("true");
            $("#OCMD").removeClass("true");
        }

        if ( sum >= 13 && sum <= 17) {
            result = "Yuzu Cheesecake";
            des = "Mmmmm, you LOVE Yuzu and adore cheese even more, you must be a Yuzu Cheesecake!";
            $("#RRGPC").removeClass("true");
            $("#YC").addClass("true");
            $("#KLP").removeClass("true");
            $("#LCCT").removeClass("true");
            $("#LBC").removeClass("true");
            $("#OCMD").removeClass("true");
        }

        if ( sum >= 18 && sum <= 22 ) {
            result = "Key Lime Pie";
            des = "You're sweet and tangy, just like everyone's favourite Key Lime Pie!";
            $("#RRGPC").removeClass("true");
            $("#YC").removeClass("true");
            $("#KLP").addClass("true");
            $("#LCCT").removeClass("true");
            $("#LBC").removeClass("true");
            $("#OCMD").removeClass("true");
        }

        if ( sum >= 23 && sum <= 25) {
            result = "Lime Baby Cake";
            des = "You're lovely, you're fiesty and young, just like a Lime Baby Cake I reckon!";
            $("#RRGPC").removeClass("true");
            $("#YC").removeClass("true");
            $("#KLP").removeClass("true");
            $("#LCCT").removeClass("true");
            $("#LBC").addClass("true");
            $("#OCMD").removeClass("true");
        }

        if (sum >= 26 && sum <= 30) {
            result = "Orange Chocolate Entremet Tart";
            des = "Oh you like to get a little fancy don't you? You're most definitely an Orange Chocolate Entremet Tart!";
            $("#RRGPC").removeClass("true");
            $("#YC").removeClass("true");
            $("#KLP").removeClass("true");
            $("#LCCT").removeClass("true");
            $("#LBC").removeClass("true");
            $("#OCMD").addClass("true");
        }

        document.getElementById('title').innerHTML += result;
        document.getElementById('description').innerHTML += des;
    
        var modal = document.getElementById('results');
        var button = document.getElementsByClassName("close")[0];

            modal.style.display = "flex";

        button.onclick = function() {
            document.getElementById('title').innerHTML = "";
            document.getElementById('description').innerHTML = "";
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    }
});


// Adapted with help from Zimehr Abassi & Kshitij Jain 
// Auto-scroll feature
$(document).ready(function(){
    $("body").on("click", "label", function(e) {
        var next_sect = $(this).parent().next();
        console.log(next_sect);
        if (next_sect.length == 0) {
            $("html, body").animate({scrollTop: $("button").offset().top +1}, "fast");
        }
        else {
            $("html, body").animate({scrollTop: next_sect.offset().top +1}, "fast");
        }
    })
})
