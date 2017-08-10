/*登录注册窗口*/

var win = $('.window');
var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var password = /^([0-9]|[a-zA-Z]){6,16}$/;

ctrlWindow();

function ctrlWindow() {
  showWindow();

  changeTab();

  checkText();
}

/*显示关闭窗口*/
function showWindow() {
  $('.top').find('.login').click(function () {
    win.show();
    showLogin();
  });

  win.find('.close').click(function () {
    win.hide();
  });
}

/*显示登录窗口*/
function showLogin() {
  win.find('.login').show();
  win.find('.register').hide();

  win.find('.headerLogin .text').css('color', 'red');
  win.find('.headerLogin .underline').addClass('underlineActive');

  win.find('.headerRegister .text').css('color', '#000');
  win.find('.headerRegister .underline').removeClass('underlineActive');

  win.find('button').text('登录');
}

/*显示注册窗口*/
function showRegister() {
  win.find('.register').show();
  win.find('.login').hide();

  win.find('.headerRegister .text').css('color', 'red');
  win.find('.headerRegister .underline').addClass('underlineActive');

  win.find('.headerLogin .text').css('color', '#000');
  win.find('.headerLogin .underline').removeClass('underlineActive');

  win.find('button').text('注册');
}

/*窗口切换*/
function changeTab() {
  win.find('.headerLogin').click(function () {
    showLogin();
  });

  win.find('.headerRegister').click(function () {
    showRegister();
  })
}

/*验证输入内容*/
function checkText() {
  win.find('.login .userName').blur(function () {
    var userName = $(this).val();

    if (userName.length === 0) {
      return;
    }

    if (email.test(userName) || phone.test(userName)) {
      win.find('.login .userNameError').css('visibility', 'hidden');
    } else {
      win.find('.login .userNameError').css('visibility', 'visible');
    }
  });

  win.find('.login .password').blur(function () {
    var pwd = $(this).val();

    if (pwd.length === 0) {
      return;
    }

    if (password.test(pwd)) {
      win.find('.login .passwordError').css('visibility', 'hidden');
    } else {
      win.find('.login .passwordError').css('visibility', 'visible');
    }
  });

  win.find('.register .userName').blur(function () {
    var userName = $(this).val();

    if (userName.length === 0) {
      return;
    }

    if (email.test(userName) || phone.test(userName)) {
      win.find('.register .userNameError').css('visibility', 'hidden');
    } else {
      win.find('.register .userNameError').css('visibility', 'visible');
    }
  });

  win.find('.register .checkInput').blur(function () {
    var verify = $(this).val();

    if (verify.length === 0) {
      return;
    }

    if (verify.toLowerCase() === 'gyyd') {
      win.find('.register .verifyError').css('visibility', 'hidden');
    } else {
      win.find('.register .verifyError').css('visibility', 'visible');
    }
  });
}