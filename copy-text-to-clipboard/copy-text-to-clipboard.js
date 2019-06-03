function copyToClipboardWithJQuery(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function copyToClipboardWithPureJavascript(element) {
	var $temp = document.createElement('input');
	var $body = document.getElementsByTagName('body')[0];
	$body.append($temp);
	$temp.value = element.innerText;
	$temp.select();
    document.execCommand("copy");
    $temp.remove();
}