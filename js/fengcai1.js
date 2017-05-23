$(function(){
	var headtiao=$(".headtiao")[0];
	var list=$('.biaoti');
	for(let i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			var w=list[i].offsetWidth;
			var wx=list[i].offsetLeft-list[0].offsetLeft;
			headtiao.style.width=w+'px';
			list[i].style.color="#FF3795";
			headtiao.style.left=wx+"px";
			
		}
	}


	




})