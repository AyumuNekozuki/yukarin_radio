function change_nowplaying(title, autor, contentid){
  $('#title span').text(title);
  $('#autor').text(autor);
  $('#contentid').text(contentid);
}

function set_announce(content){
  $("#announce p").text(content);
  $("#announce").removeClass("hide");
}
function hide_announce(){
  $("#announce").addClass("hide");
}


/*

change_nowplaying("ambient.2-radio", "dieu", "nc94901");


set_announce("違うよ！ by マスター");

hide_announce();

change_nowplaying("オーバーフロー", "beco@騒音のない世界", "sm37118824");

set_announce("フォームは概要欄から！");
hide_announce();

set_announce("おたより@RN");
hide_announce();

change_nowplaying("『いっせーのーで』 / feat. KAFU", "MIMI", "sm39151638");
set_announce("リンクは概要欄から");

$("#title").addClass("scroll");

hide_announce();
change_nowplaying("-", "", "");
$("#title").removeClass("scroll");

change_nowplaying("青春前夜/可不", "Mame Fox", "sm39130135");
set_announce("リンクは概要欄から");

$("#title").addClass("scroll");

change_nowplaying("ハピ☆ニコ_SUNDAY 9月放送告知", "ハピ☆ニコ_SUNDAY", "@hapynico_sunday");
$("#title").removeClass("scroll");

hide_announce();
change_nowplaying("夕暮れの散歩道", "清水裕介", "nc175315");
$("#title").removeClass("scroll");

set_announce("ハピ☆ニコ／ネタ曲投稿祭の情報は概要欄から！");
hide_announce();

change_nowplaying("所謂、幻想の中で。／可不", "白風珈琲", "sm39095843");
$("#title").addClass("scroll");


hide_announce();
change_nowplaying("-", "", "");
$("#title").removeClass("scroll");

set_announce("ご視聴ありがとうございました！");
change_nowplaying("現在コメントタイム！　メッセージ＠ラジオネーム でお便り募集中！　番組のご意見ご感想もお待ちしております！", "", "");
$("#title").addClass("scroll");
change_nowplaying("ご視聴ありがとうございました！", "", "");
*/