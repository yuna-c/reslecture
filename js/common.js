$(document).ready(function(){
    
    // board pager
	$('.board-pager .pager-num a, .board-date .btn').on('click', function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

    // tab
    $('.tab-new1 > ul > li, .tab-new2 > ul > li').on('click', function(){	
		var $tab = $(this).parent().parent(),
			objIndex = $(this).parent().children().index(this);
		
		$(this).addClass('selected').siblings().removeClass('selected');

		if( $tab.children().children().length == $tab.parent().children('.tab-content').length ){
			$tab.parent().children('.tab-content').hide().eq(objIndex).show();
		}
	});
});

// scroll animation
function fnScrollObj(obj) {
	$('html,body').animate({ scrollTop: $(obj).offset().top }, 500);
}

// Alert massege
function fnAlertMsg(msg){
	var innerHtml = '<div class="dim-content dim-alert">';
		innerHtml += '<div class="dim-txt">'+msg+'</div>';
		innerHtml += '<div class="dim-btn"><button onclick="fnCloseAlert();return false;" class="btn btn-black btn-confirm">확인</button></div>';
		innerHtml += '</div>';

	$('.dim-layer').append(innerHtml);

	fnOpenLayer('dim-alert');

	return false;
}

// Alert title massege
function fnAlertMsgTit(tit, msg){

	var innerHtml = '<div class="dim-content dim-alert dim-tit-alert">';
		innerHtml += '<a href="javascript:void(0);" onclick="fnCloseAlert();return false;" class="btn-close"><span class="ico ico-close">팝업창 닫기</span></a>';
		innerHtml += '<h4 class="dim-tit">'+tit+'</h4>';
		innerHtml += '<div class="dim-txt">'+msg+'</div>';
		innerHtml += '<div class="dim-btn"><button onclick="fnCloseAlert();return false;" class="btn btn-black btn-confirm">확인</button></div>';
		innerHtml += '</div>';

	$('.dim-layer').append(innerHtml);

	fnOpenLayer('dim-alert');

	return false;
}

// layer close
function fnCloseAlert(){
	$('.dim-alert').parent('.dim-layer').fadeOut(100);
	$('.dim-alert').remove();
}

// layer open
function fnOpenLayer(layer){
	var layerName = layer;
	var layerClass = $('.' + layerName);
	var innerHtml = '<a href="javascript:void(0);" class="btn-close"><span class="ico ico-close">팝업창 닫기</span></a>';

	layerClass.append(innerHtml);
	layerClass.show().parents('.dim-layer').show();

	var layerSize = (layerClass.outerHeight()/2);

	layerClass.css({'marginTop':'-' + layerSize + 'px', 'visibility':'visible'});

	//console.log(layerClass);

	$('.btn-close, .btn-confirm').on('click', function(){
		$('.btn-close').remove();
		layerClass.hide().css('visibility', 'hidden').parents('.dim-layer').fadeOut(100);
	});

	return false;
}
