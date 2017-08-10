/*右侧导航*/

var rightNavs = $('.rightNav').children();
var array = ['会员', '购物车', '我的关注', '我的消息', '顶部'];

ctrlRightNav();

function ctrlRightNav() {
  rightNavs.hover(function () {
    $(this).children().css('background', '#71777D');
    var name = $(this).children('.name');
    var span = name.children();

    name.animate({'width': 70}, 100);
    span.text(array[$(this).index()]);

  }, function () {
    $(this).children().css('background', '#B7BBBF');
    var name = $(this).children('.name');
    var span = name.children();

    name.animate({'width': 0}, 100);
    span.text("");
  });

  rightNavs.eq(rightNavs.length - 1).click(function () {
    $('html,body').animate({scrollTop: 0}, 300);
  })
}