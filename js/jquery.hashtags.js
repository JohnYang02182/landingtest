/*!
  jQuery #hashtags v0.5.0
	(c) 2013 Simon Nussbaumer
	updated: 2016-25-10
	license: GNU LESSER GENERAL PUBLIC LICENSE
*/
(function($) {
	$.fn.hashtags = function() {
		$(this).wrap('<div class="show-textarea-content"></div>').unwrap().before('<div class="show-textarea-content"></div>');
		$(this).addClass("input-article-content");
		autosize($(this));
		$(this).on("keyup", function() {
			var str = $(this).val();
			$(this).parent().parent().find(".show-textarea-content").css("width",$(this).css("width"));
			str = str.replace(/\n/g, '<br>');
			if(!str.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([a-zA-Z0-9]+)/g) && !str.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?@([a-zA-Z0-9]+)/g) && !str.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([\u0600-\u06FF]+)/g) && !str.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?@([\u0600-\u06FF]+)/g)) {
                if(!str.match(/#(([_a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))#/g)) { //arabic support, CJK support
					str = str.replace(/#(([_a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))/g,'<span class="text-hashtag">#$1</span>');
				}else{
					str = str.replace(/#(([_a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))#(([_a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))/g,'<span class="hashtag">#$1</span>');
				}
				if(!str.match(/@(([a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))@/g)) {
					str = str.replace(/@(([a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))/g,'<span class="text-hashtag">@$1</span>');
				}else{
					str = str.replace(/@(([a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))@(([a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))/g,'<span class="hashtag">@$1</span>');
				}
			}
			$(this).parent().parent().find(".show-textarea-content").html(str);
		});
		$(this).parent().prev().on('click', function() {
			$(this).parent().find(".input-article-content").focus();
		});

  	};
})(jQuery);
