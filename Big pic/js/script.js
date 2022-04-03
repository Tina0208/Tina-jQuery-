$(function(){
	// 移動滑鼠 
	$(window).mousemove(function(e){

		// 判斷游標是否在#thumb區塊內
		if(e.pageX > $("#thumb").offset().left && e.pageX <= $("#thumb").offset().left + $("#thumb").width() && e.pageY >= $("#thumb").offset().top && e.pageY <= $("#thumb").offset().top + $("#thumb").height()){

			// 取得座標
			var posX = e.pageX;
			var posY = e.pageY;

			// 讓span元素完全落在#thumb區塊內（調整水平位置）
			if(e.pageX <= $("#thumb").offset().left + 20){
				posX = $("#thumb").offset().left;	
			}else if(e.pageX >= $("#thumb").offset().left + $("#thumb").width() - 20){
				posX = $("#thumb").offset().left + $("#thumb").width() - 40;
			}else{
				posX -= 20;	
			}

			// 讓span元素完全落在#thumb區塊內（調整垂直位置）
			if(e.pageY <= $("#thumb").offset().top + 20){
				posY = $("#thumb").offset().top;
			}else if(e.pageY >= $("#thumb").offset().top + $("#thumb").height() - 20){
				posY = $("#thumb").offset().top + $("#thumb").height() - 40;
			}else{
				posY -= 20;
			}

			// 依游標的座標設定span元素位置
			$("span").css({"top":posY, "left":posX});

			// span元素在#thumb區塊內：顯示span元素
			$("span").show();

			// 調整zoom.jpg的位置
			$("#zoom img").css("top", ($("#thumb").offset().top - posY)*10);
			$("#zoom img").css("left", ($("#thumb").offset().left - posX)*10);

		}else{
			// span元素不在#thumb區塊內：隱藏span元素
			$("span").hide();
		}
	});
});
