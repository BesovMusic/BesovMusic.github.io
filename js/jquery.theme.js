
  //обертка для таблиц из карточки товара чтобы они скроллились на мал экранах
  jQuery( "#container_tab6 table" ).wrap( "<div class='overflow-scroll'></div>");
  jQuery( "#node-2190 .field-item" ).addClass( "overflow-scroll");

  //табличка-переключатель в карточке товара
  // jQuery('.wrapperTabs2 .containerTabs .tabs:first-child').addClass("active");
	// jQuery('.wrapperTabs2 .tab .tabs:first-child').addClass("active");
  if(jQuery('.container').width() >= 767) {
    jQuery('.wrapperTabs .containerTabs a').click(function() {
      var tab_id = jQuery(this).attr('id');
      tabClick1(tab_id);
      // if (true) {};
    });
    jQuery('.wrapperTabs2 .containerTabs a.tabs').click(function() {
      var tab_id = jQuery(this).attr('id');
      tabClick2(tab_id);
      // if (true) {};
    });

    function tabClick1(tab_id) {
      if (tab_id != jQuery('.wrapperTabs a.active').attr('id') ) {
        jQuery('.wrapperTabs .tabs').removeClass('active');
        jQuery('#'+tab_id).addClass('active');
        jQuery('#container_' + tab_id).addClass('active');
      }
    }
    function tabClick2(tab_id) {
      if (tab_id != jQuery('.wrapperTabs2 a.active').attr('id') ) {
        jQuery('.wrapperTabs2 .tabs').removeClass('active');
        jQuery('#'+tab_id).addClass('active');
        jQuery('#container_' + tab_id).addClass('active');
      }
    }

     jQuery('#slider ul li').css("margin-right", 0);
    var n = jQuery('#carousel li').length,
        widthTitle = jQuery('#carousel').width()/n;

    jQuery(window).resize(function(){
      var n = jQuery('#carousel li').length,
          widthTitle = jQuery('#carousel').width()/n;
      jQuery('#carousel li').width(widthTitle)
    })

    var wid=jQuery('body').width();

      if(wid<=1000){
        jQuery("#sliderWrap").width(1000);
      }else{
        jQuery("#sliderWrap").width(wid);
      }

    jQuery(window).resize(function(){
      var wid=jQuery(window).width();

      if(wid<=1000){
        jQuery("#sliderWrap").width(1000);
      }else{
        jQuery("#sliderWrap").width(wid);
      }

    });
  if((jQuery('#carousel').length) && (jQuery(window).width() > 982 )) {
    jQuery('#carousel').flexslider({
      animation: "none",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: widthTitle,
      minItems:5,
      maxItems: 9,
      itemMargin: 9,
      useCSS: false,
      asNavFor: '#slider'

    });
  }
  if(jQuery('body.front #slider').length) {
    jQuery('#slider').flexslider({
      animation: "fade",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousel"
    });
  }

  }
  //ЧТО ЭТО??
  if(jQuery("div").is(".item-list")){
	jQuery('#leftCont').addClass("est1");
  }

    //убираем класс актив чтобы не подсвечивалось красным изначально на мобильных
    jQuery('.wrapperTabs2 .containerTabs .tabs:first-child').removeClass("active");
    jQuery('.wrapperTabs2 .tab .tabs:first-child').removeClass("active");

    //перемещения div в карточке товара
    jQuery('#tab5').after(jQuery('#container_tab5'));
    jQuery('#tab6').after(jQuery('#container_tab6'));
    jQuery('#tab7').after(jQuery('#container_tab7'));
    //работа таблички-переключателя в карточке товара
    jQuery( "#tab5" ).click(function() {
        jQuery("#container_tab5").slideToggle('500');
        jQuery(this).toggleClass('active');
    });
    jQuery( "#tab6" ).click(function() {
        jQuery("#container_tab6").slideToggle('500');
        jQuery(this).toggleClass('active');
    });
    jQuery( "#tab7" ).click(function() {
        jQuery("#container_tab7").slideToggle('500');
        jQuery(this).toggleClass('active');
    });




