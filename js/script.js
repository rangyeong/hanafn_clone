// 문서 전체 스크롤 이벤트
$(window).scroll(function(){
    let sct = $(window).scrollTop();
    if(sct > 0){
        $('#header').addClass('wh')
    } else {
        $('#header').remove('wh')
    };

    // * 헤더 흰배경 버전

}); // 문서 전체 스크롤 이벤트 끝

// * 탑버튼
if(sct > 300){
    $('.goTop').stop().fadeIn();
} else{
    $('.goTop').stop().fadeOut();
}