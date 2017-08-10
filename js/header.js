/*顶部*/

var divs = $('.top').find('.right>div:not(.div3)');//顶部导航div

ctrlTop();

function ctrlTop() {
  topNav();
}

/*控制顶部导航显示隐藏及改变对应样式*/
function topNav() {
  divs.hover(function () {
    $(this).children('ul').show();
    $(this).css({
      'background': '#FFF',
      'border-left': '1px solid #CCC',
      'border-right': '1px solid #CCC',
      'border-bottom': '1px solid #CCC'
    })
  }, function () {
    $(this).children('ul').hide();
    $(this).css({
      'background': '#F3F5F7',
      'border-left': '1px solid #F3F5F7',
      'border-right': '1px solid #F3F5F7',
      'border-bottom': 'none'
    })
  })
}

/*logo*/

//购物车商品模拟数据
var cartData = [{
  "src": "5.png", "title": "罗技G29 力反馈游戏方向", "price": "2999", "num": "1"
}, {
  "src": "4.png", "title": "飞利浦面条机 HR2356/31", "price": "659", "num": "4"
}, {
  "src": "3.png", "title": "Apple iphone 7（A1660）", "price": "6188", "num": "1"
}, {
  "src": "2.png", "title": "玉兰油多效修护三部曲奏效", "price": "199", "num": "2"
}, {
  "src": "1.png", "title": "adidas 阿迪达斯 训练 男子", "price": "355", "num": "1"
}, {
  "src": "5.png", "title": "罗技G29 力反馈游戏方向", "price": "2999", "num": "1"
}, {
  "src": "4.png", "title": "飞利浦面条机 HR2356/31", "price": "659", "num": "4"
}, {
  "src": "3.png", "title": "Apple iphone 7（A1660）", "price": "6188", "num": "1"
}, {
  "src": "2.png", "title": "玉兰油多效修护三部曲奏效", "price": "199", "num": "2"
}, {
  "src": "1.png", "title": "adidas 阿迪达斯 训练 男子", "price": "355", "num": "1"
}];

var cart = $('.logo').find('.shoppingCart');//购物车按钮
var img1 = cart.children('.cartImg');
var img2 = cart.children('.arrowImg');
var text = cart.find('.text>span');
var cartContent = cart.children('.cartContent');//购物车
var cartItem = cartContent.find('.list>.item');//购物车内条目
var sum = 0;

ctrlLogo();

function ctrlLogo() {
  setCartData();
  changeCart();
  removeCart();
}

/*显示隐藏购物车及改变对应的样式*/
function changeCart() {
  cart.hover(function () {
    cart.css({
      'background': '#FFF', 'box-shadow': '0 0 5px #CCC'
    });
    text.css('color', 'red');
    img1.attr('src', 'img/icon/25.png');
    img2.attr('src', 'img/icon/22.png');

    cartContent.show();
    cartContent.css('box-shadow', '0 0 5px #CCC');
  }, function () {
    cart.css({
      'background': 'red', 'box-shadow': 'none'
    });
    text.css('color', '#FFF');
    img1.attr('src', 'img/icon/26.png');
    img2.attr('src', 'img/icon/23.png');

    cartContent.hide();
    cartContent.css('box-shadow', 'none');
  })
}

/*添加购物车数据并计算商品数量和总价*/
function setCartData() {
  for (var i = cartData.length - 1; i >= 0; i--) {
    cartItem.clone(true).appendTo('.list')
        .find('.goodsImg').attr('src', 'img/cart/' + cartData[i].src)
        .end().find('div>a>.name').html(cartData[i].title)
        .end().find('div>.price').html('￥'
        + cartData[i].price
        + '&nbsp;&times;&nbsp;'
        + cartData[i].num);

    sum += cartData[i].price * cartData[i].num;
  }

  cartContent.find('.list>.item').eq(0).remove();

  cartContent.find('.totle>.num').html('&nbsp;' + cartData.length + '&nbsp;');
  cartContent.find('.totle>.price').html('￥' + sum.toFixed(2));
}

/*删除购物车商品*/
function removeCart() {
  $('.logo').find('.closeImg').click(function () {
    var item = $(this).parents('.item');
    var text = item.find('.name').text();

    $(this).parents('.item').remove();

    for (var i = cartData.length - 1; i >= 0; i--) {
      if (cartData[i].title === text) {
        sum -= cartData[i].price * cartData[i].num;
        cartData.splice(i, 1);
        break;
      }
    }

    cartContent.find('.totle>.num').html('&nbsp;' + cartData.length + '&nbsp;');
    cartContent.find('.totle>.price').html('￥' + sum.toFixed(2));
  });
}