$(function(){
	var headtiao=$(".headtiao")[0];
	var list=$('.biaoti');
	for(let i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			// console.log(list)
			var w=list[i].offsetWidth;
			var wx=list[i].offsetLeft-list[0].offsetLeft;

			headtiao.style.width=w+'px';
			list[i].style.color="#FF3795";
			headtiao.style.left=wx+"px";
		}
	}


	var imgs=document.querySelector(".imgs");
	var img=document.querySelectorAll(".banner .imgs img");
	var lun=document.querySelectorAll(".gunlun .lun");
	var num=0;
	var bw=img[0].offsetWidth;
	lun[0].style.width=30+"px";
	lun[0].style.opacity=1;

	function move(){
		num++;
		if(num==img.length){
			num=0;
		}
		animate(imgs,{marginLeft:-bw*num},function(){
			if(num==img.length){
				imgs.style.marginLeft=0;
			}
		})
		for(var i=0;i<lun.length;i++){
			lun[i].style.width=10+"px";
			lun[i].style.opacity=0.5;
		}
		lun[num].style.width=30+"px";
		lun[num].style.opacity=1;
	}
	var s=setInterval(move,3000);




























})