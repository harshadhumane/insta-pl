$(document).ready(function() {

  // LEFT_NAV_CLICK_START

  if($(window).width()>767)
  {
  $(".menu-close-box").click(function(){
    var divName=$(".adp-offer-changed-container .left-box");
    if(divName.hasClass("nav-close"))
    {
      $(this).closest(".left-box").removeClass("nav-close");
      $(".adp-offer-changed-container .hid-box").fadeIn(200,function(){
        $(this).removeClass("active");  
        $(".adp-offer-changed-container .nav-anch").fadeIn(200);
        $("main").removeClass("close-box");  

      });

    }
    else
    {
      $(this).closest(".left-box").addClass("nav-close");
      $(".hid-box").fadeOut(20,function(){
        $(this).addClass("active");
        $("main").addClass("close-box");  
        $(".adp-offer-changed-container .nav-anch").fadeOut(20);  
      });
    }

  });
      
  }
  // LEFT_NAV_CLICK_END
else
{
  alert(1);
$("body,html").addClass("over-x");
  // MOBILE LEFT_NAV_CLICK_END
$(".hambur-img").click(function(){
      $(".left-inner.nav-bar").closest(".left-box").addClass("mob-menu");
      $("body,html").addClass("over");
      });

$(".menu-cross-mob-box").click(function(){
      $(".left-inner.nav-bar").closest(".left-box").removeClass("mob-menu");
      $("body,html").addClass("over-x");
      });
  // Mobile LEFT_NAV_CLICK_END
}
  // VALIDATENUMBER-STAR
  function validateNumber(event) {
      var key = window.event ? event.keyCode : event.which;
      if (event.keyCode === 8 || event.keyCode === 46) {
          return true;
      } else if (key < 48 || key > 57) {
          return false;
      } else {
          return true;
      }
  };
  // VALIDATENUMBER-END
$('.card-number-box .Box').keypress(validateNumber);
$('.upper-box .range-field').keypress(validateNumber);
$('.otp-box').keypress(validateNumber);
$('#adp-search').keypress(validateNumber);
    // CREDIT_KEYPRESS-START
      
  $('.Box').on("keyup", function(e) {
      var $input = $(this);
      if ($input.val().length == 0 && e.which == 8) {
          $input.toggleClass("productkey2 productkey1").prev('.Box').focus();
      } else if ($input.val().length >= parseInt($input.attr("maxlength"), 10)) {
          $input.toggleClass("productkey1 productkey2").next('.Box').focus();
      }
  });
  // CREDIT_KEYPRESS-END


  // show and hide primary button and secondary buttons css
  $(".net-bank-btn").click(function(){
    $(this).addClass('primary-btn');
    $('.net-bank-btn').removeClass('secondary-btn');
    $('.debit-bank-btn').removeClass('primary-btn');
    $('.debit-bank-btn').addClass('secondary-btn');
    //$('#my_image').attr('src','net-banking-orange.png');
    $('.net-bank-btn .net-banking-orange').attr('src','images/net-banking-white.png');
    $('.debit-bank-btn .comm-card-img').attr('src','images/credit-card-orange.png');
  }); 

  $(".debit-bank-btn").click(function(){
    $(this).addClass('primary-btn');
    $('.debit-bank-btn').removeClass('secondary-btn');
    $('.net-bank-btn').removeClass('primary-btn');
    $('.net-bank-btn').addClass('secondary-btn');
    $('.net-bank-btn .net-banking-orange').attr('src','images/net-banking-orange.png');
    $('.debit-bank-btn .comm-card-img').attr('src','images/credit-card-white.png');
  });


  // CHANGING TABS FUNCTION START
  function changeTabs(hideTab,showTab)
  {
    $("."+hideTab).hide();
    $("."+showTab).show();
  }
  // CHANGING TABS FUNCTION END
    //faq section
    $('.individual-accordion-box').click(function(){
        $('.individual-accordion-box').find('.acc-body-panel').stop().slideUp();
        $(this).closest('.individual-accordion-box').find('.acc-body-panel').stop().slideToggle();
    });
    
      // NET_BANK_BTN_START
      $(".net-bank-btn").click(function(){
        if($(window).width()<=767)
        {
          
         $(".login-box").show();       
         $(".login-main-box").show();       
         $(".bg-overlay").show();   
         $("body").addClass("over");       
        }
        else
        {
          changeTabs("debit-main-box","login-main-box");
        }
      });  
      // NET_BANK_BTN_END

      // DEBIT_BANK_BTN_START
      $(".debit-bank-btn").click(function(){
        if($(window).width()<=767)
        {
          
         $(".login-box").show();       
         $(".debit-main-box").show();       
         $(".bg-overlay").show(); 
         $("body").addClass("over");                      
        }
        else{
        changeTabs("login-main-box","debit-main-box");
          }
      });                 
      // NET_BANK_BTN_END
      if($(window).width()<=767)
      {

        $(".login-box .close-cust").click(function(){
         $(".login-main-box").hide();       
         $(".debit-main-box").hide();       
         $(".bg-overlay").hide();       
         $(".login-box").hide();       
         $("body").removeClass("over");       

        })
      }
      $(".individual-accordion-box").click(function(){
        if($(this).hasClass("active"))
        {
          $(this).removeClass("active")
        }
        else
        {
          $(".individual-accordion-box").removeClass("active")
          $(this).addClass("active")
        }
     
      });

      // SLIDER JS END



// RA$( ".selector" ).slider( "enable" );DIO DIRECTOR-START
$('.switch-check').click(function(){
    if($(this).prop("checked") == true){
        $(".left-switch").addClass("active");
        $(".right-switch").removeClass("active");
        $(".relation-drop-box").show();
    }
    else if($(this).prop("checked") == false){
        $(".left-switch").removeClass("active");
        $(".right-switch").addClass("active");
        $(".relation-drop-box").hide();    
    }
});
// RADIO DIRECTOR-END
// DROPDOWN CLICK
// $(".relation-drop-box").focusin(function(){
//   $(this).find(".drop-slider").addClass("active");
// });
// $(".relation-drop-box").focusout(function(){
//   var btnText=$(this).find(".dropdown-toggle").html();;
//   if(btnText=="")
//   {
//     $(this).find(".drop-slider").removeClass("active");
//   }
//   else
//   {
//     $(this).find(".drop-slider").addClass("active");
//   }
// });
// $(".drop-cust-item").click(function(){
//   $(".drop-cust-item").removeClass("active");
//   $(this).addClass("active");
//   var newText=$(this).html();
//   $(this).closest(".relation-box").find(".dropdown-toggle").html(newText);

// })


// DROPDOWN CLICK
$(".relation-drop-box").focusin(function(){
  $(this).find(".drop-slider").addClass("active");
});
$(".relation-drop-box").focusout(function(){
  var btnText=$(this).find(".dropdown-toggle").html();;
  if(btnText=="")
  {
    $(this).find(".drop-slider").removeClass("active");
  }
  else
  {
    $(this).find(".drop-slider").addClass("active");
  }
});
$(".dropdown-item").click(function(){
  $(".dropdown-item").removeClass("active");
  $(this).addClass("active");
  var newText=$(this).html();
  $(this).closest(".relation-box").find(".dropdown-toggle").html(newText);

})




$(".con-dis").click(function(){
  $(this).closest(".btn-box").hide();
  $(".customer-home-container .bottom-box").show();
  $( ".slider-box .ui-slider" ).slider( "disable" ).addClass("dis");

  $(".slider-com-conatiner").find(".range-tooltip").hide();
  $(".slider-com-conatiner").find(".range-field").prop('disabled', true);

});


// INPUT TO SLIDER START
$(".range-field").focusout(function(){
  var currVal=$(this).val();
  $(this).closest(".slider-com-conatiner").find(".ui-slider").slider("value",currVal);
});
$(".range-field").keypress(function(){
   var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13')
    {
      var currVal=$(this).val();
      $(this).closest(".slider-com-conatiner").find(".ui-slider").slider("value",currVal);
      $(this).closest(".slider-com-conatiner").find(".range-tooltip").html(currVal);
    
    }
});
// INPUT TO SLIDER END_START

// MDOAL_CUSTOM_JS
$(".modal-btn").click(function(){
  var dataTarget=$(this).data("target");
    $(dataTarget).modal({backdrop: "static"});
  });
// MDOAL_CUSTOM_JS_END

  //MODAL VIDEO POPUP

    /* Get iframe src attribute value i.e. YouTube video url 
    and store it in a variable */  
    var url = $("#videopopupframe").attr('src');  
    /* Assign empty url value to the iframe src attribute when 
    modal hide, which stop the video playing */  
    $("#videoplaypopup").on('hide.bs.modal', function() {  
        $("#videopopupframe").attr('src', '');  
    });  
    /* Assign the initially stored url back to the iframe src 
    attribute when modal is displayed again */  
    $("#videoplaypopup").on('show.bs.modal', function() {  
        $("#videopopupframe").attr('src', url);  
    });  

  //MODAL VIDEO POPUP END


  $(".executive-passfield").keyup(function(){
    if($(this).val()!="")
    {
      $(".eyeiconclick").show();
    }
    else
    {
      $(".eyeiconclick").hide();
    }
  });
  
  $(".eyeiconclick").click(function(){
    if($(this).hasClass("vis"))
    {
     $(this).removeClass("vis");
     $(".executive-passfield").prop("type","password");
      
    }
    else
    {
     $(this).addClass("vis");
      $(".executive-passfield").prop("type","text"); 
    }
    });

     /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function(){
      var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
     
      // Now highlight all the stars that's not after the current hovered star
      $(this).parent().children('li.star').each(function(e){
        if (e < onStar) {
          $(this).addClass('hover');
        }
        else {
          $(this).removeClass('hover');
        }
      });
      
    }).on('mouseout', function(){
      $(this).parent().children('li.star').each(function(e){
        $(this).removeClass('hover');
      });
    });
    
    
    /* 2. Action to perform on click */
    $('#stars li').on('click', function(){
      var onStar = parseInt($(this).data('value'), 10); // The star currently selected
      var stars = $(this).parent().children('li.star');
      
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('selected');
      }
      
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass('selected');
      }
    });

    // OFFERS_CHANGED_COLAPSE_START
    $(".save-btn").click(function(){
      $(this).closest(".collapse").collapse("hide");
      $(this).closest(".card").find(".card-header").addClass("saved");
    });
    $(".back-offers-btn").click(function(){
      $(".adp-offer-changed-container .first-card").addClass("applied");
      $(".adp-offer-changed-container .first-card").find(".collapse").collapse("hide");
      $(".adp-offer-changed-container .second-card").addClass("not-applied disabled-txt");
      $(".adp-offer-changed-container .second-card").find(".card-header").removeAttr("data-toggle");;
    });
    $(".banner-slide-btn").click(function(){
      $(".acc-detail-data.slider-up").slideToggle();
      $(".acc-details-box.banner-white").toggleClass("closee");
    });
    // OFFERS_CHANGED_COLAPSE_END


    //16-03-2019 js res cards
    $(".view-sect").click(function(){
      $(this).parents('.card-container').find(".content-start.slider-up").slideToggle();
      $(this).toggleClass('active');

      $(this).parents('.card-container').find('.view-sect p').text(function(i, v){
          return v === 'View Less' ? 'View More' : 'View Less'
      })

    });


    $(".input-daterange").datepicker({
      format: "dd-M",
      showClose:true
    });

    $(".date-select").click(function(e){
      e.stopPropagation();
      e.preventDefault();
      $(this).closest(".dropdown").find(".spanTt").hide();
      $(".drop-cust-item").removeClass("active");
      $(this).addClass("active");
      $(this).closest(".dropdown").find("#cust-date-inp2").datepicker("show");
        $(".datepicker.datepicker-dropdown").append("<div class='btn-group date-btn-box'>"+
        "<a href='javascript:void(0)' class='d-flex date-btn primary-btn justify-content-center align-items-center'>"+
        "Done</a>"
        +"</div>");
      $(this).closest(".dropdown").dropdown("toggle");
    })
    // $("#cust-date-inp2").datepicker().on("changeDate",function(){
    // });



});
