$(document).ready(function(){

    $('.sec_2_category>li').each(function(i){
        $(this).attr({
            "data-index": i
        });
    });
    // 반복해서 사용하기 위해서 each를 넣는다

    $('.sec_2_category>li').click(function(){
        var indexNum = $(this).attr("data-index");
        console.log(indexNum);

        $('.sec_2_category>li').css({
            backgroundColor: 'white',
            color: '#222'
        });

        $('.sec_2_category>li[data-index="' + indexNum + '"]').css({
            backgroundColor: '#222222',
            color: 'white'
        });

    });


});//end






$(document).ready(function(){

    $('.sec_4_category>li').each(function(i){
        $(this).attr({
            "data-index": i
        });
    });

    $('.sec_4_category>li').click(function(){
        var indexNum = $(this).attr("data-index");
        console.log(indexNum);

        $('.sec_4_category>li').css({
            backgroundColor: 'white',
            color: '#222'
        });

        $('.sec_4_category>li[data-index="' + indexNum + '"]').css({
            backgroundColor: '#222222',
            color: 'white'
        });

    });


});//end

$(document).ready(function(){

    $('.sec_4_con_right>img').each(function(i){
        $(this).attr({
            "data-index": i
        });
    });

    $('.sec_4_category>li').click(function(){
        var indexNum = $(this).attr("data-index");
        console.log(indexNum);

        $('.sec_4_con_right>img').css({
            display: 'none'
        });

        $('.sec_4_con_right>img[data-index="' + indexNum + '"]').css({
            display: 'block'
        });

    });


});//end