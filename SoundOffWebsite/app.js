







// When you click the mail icon, the form will pop up allowing you to submit a message to the SoundOff Team

$(".mail").click(function () {
 $("#mailPopUp").css("display", "flex");
 });


// This will close the form if you click the close button rather than the submit button
$(".closeForm").click(function() {
  $("#mailPopUp").css("display", "none");
});




// When you click on the submit button after typing out a message, the checkmark image and the sent confirmation will appear
$(".submitMessage").click(function() {
$("#mailPopUp").css("display", "none");
$(".formImage").css("display", "flex");
$(".emailMessage").css("display", "flex");
});

// This creates a message when you hover over the "howto" button
$(".howto1").hover(function() {
        $(this).css('cursor', 'pointer').attr('title', 'Beta Contest Winner Announced June 20th 2019');
        },
        function() {
          $(this).css('cursor', 'auto');
        });


// This creates a message when you hover over the "howto" button
$(".howto2").hover(function() {
          $(this).css('cursor', 'pointer').attr('title', 'Artist Submit through SoundOff Music App');
        }, function() {
          $(this).css('cursor', 'auto');
        });


// This creates a message when you hover over the "howto" button
$(".howto3").hover(function() {
          $(this).css('cursor', 'pointer').attr('title', 'Fans vote through SoundOff Music App');
        }, function() {
          $(this).css('cursor', 'auto');
        });



// When you click on checkmark after submitting a Message it'll disappear and then you can submit another Message
$(".formImage").on("click", function () {
  $(".formImage").hide();
  $(".emailMessage").hide();
});
