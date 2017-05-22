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
	var lun=document.querySelectorAll(".banner .gunlun .lun");
	var num=0;
	var t;
	var bw=img[0].offsetWidth;
	lun[0].style.width=30+"px";
	lun[0].style.opacity=1;
	var s=setInterval(move,3000);
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
	for(let i=0;i<lun.length;i++){
		lun[i].onmouseover=function(){
			num=i-1;
			t=setTimeout(move,500);
			clearInterval(s);
		}
		lun[i].onmouseout=function(){
			clearTimeout(t);
			s=setInterval(move, 3000)
		}
	}
	

	var uls=document.querySelector(".dsjxia ul");
	var kuang=document.querySelector(".dsjxia main");
	var dslun=document.querySelectorAll(".dsjxia .lun");
	var dsw=kuang.offsetWidth;
	dslun[0].style.width=26+'px';
	dslun[0].style.background="#ff3795";
	for(let i=0;i<dslun.length;i++){
		dslun[i].onmouseover=function(){
			
			for(var j=0;j<dslun.length;j++){
				dslun[j].style.width=11+'px';
				dslun[j].style.background="#ffdc36";
			}
			uls.style.marginLeft=-dsw*i+'px';
			dslun[i].style.width=26+'px';
			dslun[i].style.background="#ff3795";
			// for(var j=0;j<dslun.length;j++){
			// 	dslun[j].style.width=26+'px';
			// 	dslun[j].style.background="#ff3795";
			// }
			// dslun[num1].style.width=11+'px';
		 // 	dslun[num1].style.background="#ffdc36";
		 	
		}
	}
	
	var albox1=document.querySelectorAll(".anli .albox1");
	var lun1=document.querySelectorAll(".anli .lun");	
	albox1[0].style.display="block";
	lun1[0].style.width=26+'px';
	lun1[0].style.background="#ff3795";
	for (let i=0;i<lun1.length;i++){
		
		
		lun1[i].onmouseover=function(){
			for(var j=0;j<lun1.length;j++){
				albox1[j].style.display="none";
				lun1[j].style.width=11+'px';
				lun1[j].style.background="#ffdc36";
			}
			albox1[i].style.display="block";
			lun1[i].style.width=26+'px';
			lun1[i].style.background="#ff3795";
		}
		
	}

	var img2=document.querySelectorAll(".huanjing .imgs img");
	var lun2=document.querySelectorAll(".huanjing .lun");
	var zuo=document.querySelector(".huanjing .zuo");
	var you=document.querySelector(".huanjing .you");
	img2[0].style.display="block";
	lun2[0].style.background="#fff";
	for(let i=0;i<lun2.length;i++){
		lun2[i].onmouseover=function(){
			for(var j=0;j<lun2.length;j++){
				img2[j].style.display="none";
				lun2[j].style.background="#c7c7c7"
			}
			img2[i].style.display="block";
			lun2[i].style.background="#fff"
		}
	}




















})