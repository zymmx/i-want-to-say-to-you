window.onload=function(){
	var btn_1=document.getElementById("btn_1");
	var btn_2=document.getElementById("btn_2");
	var btn_3=document.getElementById("btn_3");
	var close=document.getElementsByClassName("close");
	var close_1=document.getElementsByClassName("close_1");
	var dialog=document.getElementsByClassName("dialog");
	var form_1=document.getElementsByClassName("form_1");
	btn_1.addEventListener('click',function(){
		form_1[0].className="form_1 open";	
	})
	btn_3.addEventListener('click',function(){
		form_1[0].className="form_1 open";	
	})

/*	close[0].addEventListener('click',function(){
		form_1[0].className="form_1";
	})*/
/*	btn_2.addEventListener('click',function(){
		dialog[0].style.visibility='visible';
	})*/
/*	close_1[0].addEventListener('click',function(){
		dialog[0].style.visibility='hidden';
	})*/	
}


	function serch1(){
			
			//获取文本框的值
			var textValue = document.getElementById("textId").value;
			if(textValue.length<66){
				swal({
				title: "输入内容连66字都没有，没有诚意，请重新输入!(如果原因确实简单明了，请随便输入大于66字符即可)",		
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "还是重新输入！",
				cancelButtonText: "重新输入！",
				closeOnConfirm: false,
				closeOnCancel: false
				},
				function(isConfirm){
					if (isConfirm) {
					swal("返回输入页面成功")
					document.getElementById("textId").value="";
				} else {
					swal("返回输入页面成功")
					document.getElementById("textId").value="";
				}
					
				});				
			}else {
				swal({
				title: "哎，有点可惜，俺没有入库，也不知道你输入的是啥,所以还是有机会当面说吧,嘿嘿",		
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "还是点我！",
				cancelButtonText: "点我！",
				closeOnConfirm: false,
				closeOnCancel: false
				},

				function(isConfirm){
					if (isConfirm) {
					window.location.href = "hgs.html";  
				} else {
					window.location.href = "hgs.html";  
				}
					
				});			 
			}	
			}