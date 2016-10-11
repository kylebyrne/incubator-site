

$(document).ready(function(){

  // fullpage customization
  //Old Orange : #F15722 new orange : #FF6138s
  $('#fullpage').fullpage({
    sectionsColor: ['#FF6138', '#00A480', '#FFFFFF', '#2e2e2e','#FF6138', '#00A480', '#FFFFFF', '#FF6E3D', '#FF6E3D'],
    navigation: false,
    slidesNavigation: true,
    autoScrolling: false,
    fitToSection:true,
    fitToSectionDelay: 0,
    css3: true,
    controlArrows: false,
    loopHorizontal:true,
    scrollBar: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection','sixthSection','seventhSection','eigthSection'],
    menu: '#menu',

    afterLoad: function(anchorLink, index){
              var loadedSection = $(this);


              //using anchorLink
              if(anchorLink == 'fifthSection'){
                  $('#blog_list').addClass('active');
                  $('#event_list').addClass('active');
              }
              if(anchorLink == 'sixthSection'){
                setTimeout(function() {
                  var currentIndex = $('.section.active').index() + 1;
                  console.log(currentIndex);
                  if(currentIndex == 6){
                    $.fn.fullpage.moveTo(5);
                  }
                }, 1000);

              }
          }
  });

  $('.provide_grid_element').mouseover(function (e) {
      $(this).find('.svg').css("fill", "#2e2e2e");
      $(this).find('.provide_caption').css("color", "#2e2e2e");
  });

  $('.provide_grid_element').mouseout(function (e) {
      $(this).find('.svg').css("fill","white")
      $(this).find('.provide_caption').css("color", "white");
  });

  $('.right_arrow').mouseover(function (e) {
      $(this).find('.svg').css("fill", "#2e2e2e");
  });

  $('.right_arrow').mouseout(function (e) {
      $(this).find('.svg').css("fill","white")
  });
  $('.left_arrow').mouseover(function (e) {
      $(this).find('.svg').css("fill", "#2e2e2e");
  });

  $('.left_arrow').mouseout(function (e) {
      $(this).find('.svg').css("fill","white")
  });

  $('.right_arrow_dark').mouseover(function (e) {
      $(this).find('.svg').css("fill", "#00A480");
  });

  $('.right_arrow_dark').mouseout(function (e) {
      $(this).find('.svg').css("fill","white")
  });
  $('.left_arrow_dark').mouseover(function (e) {
      $(this).find('.svg').css("fill", "#00A480");
  });

  $('.left_arrow_dark').mouseout(function (e) {
      $(this).find('.svg').css("fill","white")
  });


  setActive('.elem1');

  $('.teach_grid_element').mouseover(function (e) {
    if ($(this).attr('id') != 'active_element'){
      $(this).find('.svg').css("fill", "#2e2e2e");
      $(this).find('.teach_caption').css("color", "#2e2e2e");
    }

  });

  $('.teach_grid_element').mouseout(function (e) {
    if ($(this).attr('id') != 'active_element'){
      $(this).find('.svg').css("fill","white")
      $(this).find('.teach_caption').css("color", "white");
    }
  });

  $('.teach_grid_element').click(function (e){
    $('.elem1').attr('id','1');
    $('.elem2').attr('id','1');
    $('.elem3').attr('id','1');
    $(this).attr('id','active_element');
    if ($('.teach_grid_element').attr('id') != 'active_element'){
      $('.teach_grid_element').find('.svg').css("fill","white")
      $('.teach_grid_element').find('.teach_caption').css("color", "white");
    }
    setActive(this);
    setText(this);

  });

  function setActive(x){
    $('.elem2').find('.svg').css("fill","white");
    $('.elem2').find('.teach_caption').css("color", "white");
    $('.elem3').find('.svg').css("fill","white");
    $('.elem3').find('.teach_caption').css("color", "white");
    $(x).find('.svg').css("fill", "#2e2e2e");
    $(x).find('.teach_caption').css("color", "#2e2e2e");
  }

  function setText(x){
    if($(x).hasClass('elem1')){
      $('.teach_description').text('During the first stage we will help you to build a sustainable business model around your idea and identify its strength and weaknesses. This step is crucial as it will show you what way to go to test your business model and will provide the basis for how you present your idea to investors.')
    }else if ($(x).hasClass('elem2')) {
      $('.teach_description').text('During customer discovery we focus on obtaining valuable feedback from your early adopters and thus validate hypotheses you make about your business idea. The final goal of this block is to develop an MVP.')
    }else{
      $('.teach_description').text('Equips you with expertise in the field of marketing, funding and legal questions, relevant to scale the start-up after launching it. The main focus of this building block will be the final pitch and therefore includes a thorough preparation for the Demo Day.')
    }

  }


});
