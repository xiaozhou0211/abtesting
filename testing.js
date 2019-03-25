//this is a testing.
// $('#_form_8_submit').css({ "width": "100%"});

$('body').append("<style type='text/css'>@media screen and (max-width: 1000px) { #contactContainer{padding:0px 10px 50px 50px !important;} }</style>");
$( ".std:eq(1)" ).attr('id', 'contactContainer');

$( ".breadcrumbs" ).after( '<div class="header" style="display:flex; align-items: center; height: auto; margin-top: 30px;"><img src="http://www.easterndragonltd.com/public/spics/woman.png" alt="contact us picture" style="width:32%"><div class="header__info" style="width:37%; text-align: center;"><p class="header__info-gettouch"style="text-transform: uppercase;">get in touch</p><p class="header__info-p" style="text-align: center; font-size:2.7vw;font-weight: 600;line-height:3vw; padding-bottom:25px;">If growing your ecommerce business is a big focus for you then theres a good chance we can help</p></div></div>');
$('.content').css({ "padding":"0px 0px 90px 0px"});
$('.std__box').css({ "background-color":"transparent "});
$('.grid_50').css({ "background-color":"#333333 "});
$('._form-label').css({ "color":"white"});
$('.std h3').css({ "color":"white", "font-weight":"600"});
$('.std h3').text("Get in touch with us today");

$('div._form_element._x46756288').find("label").text("* What's your name?");
$('div._form_element._x95427126').find("label").text("* Who do you work for?");
$('div._form_element._x84536259').find("label").text("* Most convenient phone number to call you on:");
$('div._form_element._x39746554').find("label").text("* Best eamil address to contact you on:");
$('div._form_element._field10').find("label").text("* Tell us what you'd like to know about:");
$('._field-wrapper').find("textarea").attr('rows', 10);

$( ".std:eq(1)" ).append('<h2 style="font-size:30px;">We are continually impressed with their process and the output of their work</h2><p>We wanted to work with Endless Gain because we believe in their scientific and research based approach backed up by real user testing.</p><p>As a strategic partner, they are helping to drive real value for our customers and our business.</p><div class="contact__div" style="display:flex;align-items: center;"><img src="http://www.easterndragonltd.com/public/spics/man.png" alt="man" style="margin-right: 24px;"><div class="contact__div-info"><p style="margin-bottom:0px !important;">Ben Hart</p><p>Ecommerce Director, Evans Cycles</p></div></div>');
$( ".std:eq(1)" ).css({ "padding":"130px 10px 50px 50px", "width":"82%", "color":"white"});


$('#_form_8_submit').css({ "width":"100%"}).text("Send your message");

$('div._form_element._x17091022').remove();

var error = "<div class='_error _above'><div class='_error-arrow'></div><div class='_error-inner'>This field is required.</div></div>";
$('html').append('<script>$( "#_form_8_submit" ).click(function() {if( $("input[name=organization]").val().length === 0 ) {$("input[name=organization]").addClass("_has_error");$("input[name=organization]").after(error);}if( $("input[name=fullname]").val().length === 0 ) {$("input[name=fullname]").addClass("_has_error");$("input[name=fullname]").after(error);}if( $("input[name=phone]").val().length === 0 ) {$("input[name=phone]").addClass("_has_error");$("input[name=phone]").after(error);}if(!$("input[type=text], textarea").val() ) {$("input[type=text], textarea").addClass("_has_error");$("input[type=text], textarea").after(error);}});</script>');
