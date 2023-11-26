$(function () {
    $(".change-html").on("click", function (e) {
        $(".html_title").text($(this).data("title"));
        $('.html_description').text($(this).text());
		$(".html_entity").text($(this).data("entity"));
		$(".css_code").text($(this).data("css"));
		$(".html_code").text($(this).data("html"));
    });
});
