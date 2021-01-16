const validateField = () => {
	var text = document.getElementById('text');
	var box = document.getElementById('box');
	var regx = /^([a-z 0-9 \. -]+)@([a-z 0-9 -]+)\.([a-z 0-9 \. -]{2,5}).([a-z 0-9]{2,8})?$/;
	if (regx.test(box.value) == false) {
		text.style.display = 'flex';
		box.style.border = 'solid 1px red';
		return false;
    } else {
        return alert("Your form has been validated. Thank you!");
    }
};
