//发送验证码倒计时
var countdown = 60;

function settime(obj) {
	if (countdown == 0) {
		obj.removeAttribute("disabled");
		obj.value = "获取验证码";
		countdown = 60;
		return;
	} else {
		obj.setAttribute("disabled", true);
		obj.value = "重新发送(" + countdown + ")";
		countdown--;
	}
	setTimeout(function () {
		settime(obj)
	}, 1000)
}