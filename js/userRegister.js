var province = ["北京","重庆","四川"];
var city = [["朝阳","海淀","丰台"],["渝北","沙坪坝","渝中"],["成都","绵阳","广安"]];

//定义方法一、页面加载就绪的函数
/*$(document).ready(function(){
	//prop() 设置元素的属性；  css() 设置元素的样式
	$("#btn_zhuce").prop("disabled", true);
});*/



//定义方法二、页面加载就绪的函数
$(function(){
	/*$("#btn_zhuce").prop("disabled", true);*/
	$("#cname").focus();
	$("#cname").css("background-color", "#D9EDF7");
	
	//隐藏元素
	$("#logo").hide();
	//元素淡入
	/*$("#logo").fadeIn(3000);*/    //用3秒淡入
	//元素滑动显示
	/*$("#logo").slideDown(3000);*/
	//元素滑动隐藏
	/*$("#logo").slideUp(3000);*/
	//交替实现
	$("#logo").slideToggle(3000);
	//元素显示
	/*$("#logo").show(3000);*/
	
	//隐藏注册按钮
	$("#btn_zhuce").hide();
	
	//加载省份
	jiaZaiProvince();
	
	//对城市进行初始化设置
	initCity();
	
	//设置 radio sex为checked
	//过滤选择器 :first  选取第一个元素
//	$("#sex:first").prop("checked", true);
	
	//过滤选择器 :last-child  选取最后一个元素
	$("#sex:last-child").prop("checked", true);
	
	//设置所有的checkbox为选中状态
	//ID选择器，只选取 第一个
	/*$("#peisongDate").each(function(){
		//设置每一个 选中
		$(this).prop("checked", true);
	});*/
	
	//属性选择器，设置所有的checkbox为选中状态
	/*$("input[type=checkbox]").each(function(){
		$(this).prop("checked", true);
	});*/
	
	$("input[alt=1]").each(function(){
		$(this).prop("checked", true);
	});
	
	//当双击"hobby1"时，事件处理函数
	$("#hobby1").dblclick(function(){
		//移动选中的项 到 hobby2
//		$("#hobby1 option:selected").appendTo($("#hobby2"));

		//移动所有项  到  hobby2
		$("#hobby1 option").appendTo($("#hobby2"));
		$(this).css("background-color","pink");
	});
	
	//当鼠标在btn_zhuce按钮上移动时，更改鼠标的形状
	$("#btn_zhuce").mousemove(function(){
		$("#btn_zhuce").css("cursor","pointer");
	});
});

//设置注册按钮可用
function chkValue()
{
	if ($("#protocol").prop("checked"))
	{
		/*$("#btn_zhuce").prop("disabled", false);*/
		$("#btn_zhuce").show();
	}
	else{
		/*$("#btn_zhuce").prop("disabled", true);*/
		$("#btn_zhuce").hide();
	}
}

//用户注册函数
function zhuce()
{
	//1、验证用户名称
	if (identifyData("cname", "", "用户名称不能为空") == true)
	{
		//2、验证密码
		if (identifyData("cpassword", "", "用户密码不能为空") == true)
		{
			//3、验证确认密码
		//	if (identifyData("cpassword", "cpassword2", "用户密码与确认密码不一致") == true)
		//	{
		//		alert("注册完成");
				form1.action="UserRegister";
				form1.submit();
		//	}
		}
	}
	
}

//数据验证
function identifyData(eName1, eName2, str)
{
	if (eName2 == "")
	{
		if ($("#" + eName1).val() == "")
		{
			showMsg("msg", str);
			$("#" + eName1).css("background-color","#87CEEB");
			$("#" + eName1).focus();
			return false;
		}
		else{
			showMsg("msg", "");
			$("#" + eName1).css("background-color","#FFFFFF");
			return true;
		}
	}
	else{
		if ($("#" + eName1).val() != $("#" + eName2).val())
		{
			showMsg("msg", str);
			$("#" + eName2).css("background-color","#87CEEB");
			$("#" + eName2).focus();
			$("#" + eName2).val("");  //将文本框中的内容清空
			return false;
		}
		else{
			showMsg("msg", "");
			$("#" + eName1).css("background-color","#FFFFFF");
			return true;
		}
	}
}

//显示str的内容
function showMsg(eName, str)
{
	/*if (str == "")
	{
		$("#" + eName).css("display", "none");
	}
	else{
		$("#" + eName).css("display", "block");
	}*/
	$("#" + eName).css("display", "block");
	$("#" + eName).html(str);
}

//加载省份
function jiaZaiProvince()
{
	//1、清空province下拉列表框select的内容
	$("#province").empty();
	//第一项
	$("#province").append("<option value=''></option>");
	for (var i=0; i<province.length; i++)
	{
		$("#province").append("<option value='" + i + "'>" + province[i] + "</option>");
	}
}

//对城市进行初始化设置
function initCity()
{
	$("#city").empty();
	$("#city").hide();
}

//加载城市
function jiaZaiCity()
{
	var i = $("#province").val();
	if (i == "")
	{
		initCity();
	}
	else{
		$("#city").empty();
		//第一项
		$("#city").append("<option value=''></option>");
		for (var j=0; j<city[i].length; j++)
		{
			$("#city").append("<option value='" + j + "'>" + city[i][j] + "</option>");
		}
		$("#city").show();
	}	
}
