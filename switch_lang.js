let x = document.cookie;

// Swap language from English to Japanese or German. That is, the actual text on the page.
function langswap(id, lang_jp, lang_de){
	switch(x) {
		case "lang=de":
			result = lang_de;
			break;
		case "lang=jp":
			result = lang_jp;
			break;
		case "lang=en":
			break;
		default:
			result = "could not determine language";
			break;
	}
	document.getElementById(id).innerHTML = result;
}

// Explicitly set the language cookie.
function set_language(lang_code) {
	document.cookie = "lang=" + lang_code + "; expires=Thu, 18 Dec 2023 12:00:00 UTC";
	x = document.cookie;
}

// Button function. From DE to JP, JP to EN, and finally EN to DE. After switched, refresh.
function btn_toggle_lang() {
	switch(x) {
		case "lang=de":
			set_language("jp");
			break;
		case "lang=jp":
			set_language("en");
			break;
		case "lang=en":
			set_language("de");
			break;
	}
	location.reload()
}

//set_language("en");

langswap("LANG.what_is_your_language", "あなたの言語は何ですか?", "was ist ihre sprache?");
langswap("LANG.not_this_one", "このはありません", "nicht das!");



//alert(x);