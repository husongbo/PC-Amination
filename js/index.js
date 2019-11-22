//自定义单选框选中
$(".indexAboutFormListRadio p").click(function (){
	$(".indexAboutFormListRadio p .active,.indexAboutFormListRadio p i .active").removeClass("active");
	$(".indexAboutFormListRadio p .activeSpan").removeClass("activeSpan");
	
	$("#indexFramRadio").val($(this).attr("data-radioVal"));
	$(this).find("i,i i").addClass("active");
	$(this).find("span").addClass("activeSpan");
})
//广告形式选中
$(".advertisingRight li").hover(function (){
	$(".advertisingRight li").removeClass("active");
	$(this).addClass("active");
	let index = ($(this).index())+1;
	$(".advertisingLeft img").removeClass("active");
	$(".advertisingLeft img:nth-child("+index+")").addClass("active");
})
//对接合作选中
$(".dockingRight ul li").hover(function (){
	$(".dockingRight ul li").removeClass("active");
	$(this).addClass("active");
	let index = ($(this).index())+1;
	
	//切换图片
	$(".dockingLeft img").removeClass("active");
	$(".dockingLeft img:nth-child("+index+")").addClass("active");
	
	//切换说明文字
	let index1 = index+1;
	$(".dockingRight .dockingRightCon").removeClass("active");
	$(".dockingRight .dockingRightCon:nth-child("+index1+")").addClass("active");
})

//banner图轮播
var swiper = new Swiper('.banner', {
	loop:true,
	autoplay: true,
	spaceBetween: 30,
	effect: 'fade',
	pagination: {
	el: '.swiper-pagination',
	},
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	stopOnLastSlide: false,//如果设置为true，当切换到最后一个slide时停止自动切换
	autoplay: {
		disableOnInteraction: false,//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
	},
	speed: 1000,
	parallax: true,//设置为true开启视差效果。 就是这个
});

//下面合作商轮播
var swiper = new Swiper('#partners',{
	loop: true,
	speed:2000,
	slidesPerView: 6,//同时显示元素
	spaceBetween: 6,//元素距离
	
	autoplay:{
		delay: 1500,
		disableOnInteraction:false
	}
});