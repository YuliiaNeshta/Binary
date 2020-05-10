
// starttemplates


// подключение ibg
function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
	}
	
	ibg();
// подключение ibg

//ZOOM
if($('.gallery').length>0){
	baguetteBox.run('.gallery', {
		// Custom options
	});
}
//ZOOM

//FILTER
$('.portfolio__item').click(function(event) {
	var i=$(this).data('filter');
if (i==1) {
	$('.portfolio__photo').show();
}else{
	$('.portfolio__photo').hide();
	$('.portfolio__photo.f_'+i).show();
}
$('.portfolio__item').removeClass('active');
$(this).addClass('active');

return false;
});
//FILTER


///VALIDATE FORMS
$('form button[type=submit]').click(function(){
	var er=0;
	var form=$(this).parents('form');
	var ms=form.data('ms');
$.each(form.find('.req'), function(index, val) {
	er+=formValidate($(this));
});
if(er==0){
	removeFormError(form);
	/*
		var messagehtml='';
	if(form.hasClass('editprofile')){
		var messagehtml='';
	}
	formLoad();
	*/

	//ОПТРАВКА ФОРМЫ
	/*
	function showResponse(html){
		if(!form.hasClass('nomessage')){
			showMessage(messagehtml);
		}
		if(!form.hasClass('noclear')){
			clearForm(form);
		}
	}
	var options={
		success:showResponse
	};
		form.ajaxForm(options);
	

	setTimeout(function(){
		if(!form.hasClass('nomessage')){
			//showMessage(messagehtml);
			showMessageByClass(ms);
		}
		if(!form.hasClass('noclear')){
			clearForm(form);
		}
	},0);

	return false;
	*/
	if(ms!=null && ms!=''){
		showMessageByClass(ms);
		return false;
	}
}else{
	return false;
}
});
function formValidate(input){
	var er=0;
	var form=input.parents('form');
if(input.attr('name')=='email' || input.hasClass('email')){
	if(input.val()!=input.attr('data-value')){
		var em=input.val().replace(" ","");
		input.val(em);
	}
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.val())) || input.val()==input.attr('data-value')){
			er++;
		addError(input);
	}else{
		removeError(input);
	}
}else{
	if(input.val()=='' || input.val()==input.attr('data-value')){
		er++;
		addError(input);
	}else{
		removeError(input);
	}
}
if(input.attr('type')=='checkbox'){
	if(input.prop('checked') == true){
		input.removeClass('err').parent().removeClass('err');
	}else{
		er++;
		input.addClass('err').parent().addClass('err');
	}
}
if(input.hasClass('name')){
	if(!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))){
			er++;
		addError(input);
	}
}
if(input.hasClass('pass-2')){
	if(form.find('.pass-1').val()!=form.find('.pass-2').val()){
		addError(input);
	}else{
		removeError(input);
	}
}
	return er;
}
//VALIDATE FORMS

	$('.goto').click(function() {
		var el=$(this).attr('href').replace('#','');
		var offset=0;
	$('body,html').animate({scrollTop:$('.'+el).offset().top+offset},500, function() {});

	if($('.header-menu').hasClass('active')){
		$('.header-menu,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});

$('.goto').click(function() {
	var el=$(this).attr('href').replace('#','');
	var offset=0;
$('body,html').animate({scrollTop:$('.'+el).offset().top+offset},100, function() {});

if($('.header-menu').hasClass('active')){
	$('.header-menu,.header-menu__icon').removeClass('active');
	$('body').removeClass('lock');
}
return false;
});

$(window).scroll(function(event) {
	var s=0-$(this).scrollTop()/3;
$('.mainblock__image').css('transform','translate3d(0, '+s+'px, 0)');
});

// TABS
$('body').on('click','.tab__navitem',function(event) {
	var eq=$(this).index();
if($(this).hasClass('parent')){
	var eq=$(this).parent().index();
}
if(!$(this).hasClass('active')){
	$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
	$(this).addClass('active');
	$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
if($(this).closest('.tabs').find('.slick-slider').length>0){
	$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
}
}
});
$.each($('.spoller.active'), function(index, val) {
$(this).next().show();
});
$('body').on('click','.spoller',function(event) {
if($(this).hasClass('mob') && !isMobile.any()){
return false;
}
if($(this).hasClass('closeall') && !$(this).hasClass('active')){
$.each($(this).closest('.spollers').find('.spoller'), function(index, val) {
	$(this).removeClass('active');
	$(this).next().slideUp(300);
});
}
$(this).toggleClass('active').next().slideToggle(300,function(index, val) {
	if($(this).parent().find('.slick-slider').length>0){
		$(this).parent().find('.slick-slider').slick('setPosition');
	}
});
return false;
});
// TABS