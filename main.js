function change_nowplaying(title, autor, contentid){
  $('#title span').text(title);
  $('#autor').text(autor);
  $('#contentid').text(contentid);
  setTimeout(function(){
    $("#title").addClass("scroll");
  },5000)
}

function set_announce(content){
  hide_announce();
  $("#announce p").text(content);
  $("#announce").removeClass("hide");
}
function hide_announce(){
  $("#announce").addClass("hide");
}

function playmusic(music_title,music_autor,music_id){
  change_nowplaying(music_title, music_autor, music_id);
  set_announce("リンクは概要欄から");
}

function reset(){
  change_nowplaying("-", "", "");
  $("#title").removeClass("scroll");
  hide_announce();
  setTimeout(function(){
    $("#title").removeClass("scroll");
  },15250)
}


function last_comment_time(){
  change_nowplaying("現在コメントタイム！　メッセージ＠ラジオネーム でお便り募集中！　番組のご意見ご感想もお待ちしております！", "", "");
  set_announce("ご視聴ありがとうございました！");
}

/*

change_nowplaying("ambient.2-radio", "dieu", "nc94901");
set_announce("違うよ！ by マスター");
hide_announce();

change_nowplaying("オーバーフロー", "beco@騒音のない世界", "sm37118824");

set_announce("フォームは概要欄から！");
set_announce("おたより@RN");
hide_announce();

playmusic("『いっせーのーで』 / feat. KAFU", "MIMI", "sm39151638");

reset();

playmusic("青春前夜/可不", "Mame Fox", "sm39130135");

playmusic("ハピ☆ニコ_SUNDAY 9月放送告知", "ハピ☆ニコ_SUNDAY", "@hapynico_sunday");

reset();

change_nowplaying("夕暮れの散歩道", "清水裕介", "nc175315");

set_announce("ハピ☆ニコ／ネタ曲投稿祭の情報は概要欄から！");
hide_announce();
set_announce("フォームは概要欄から！");

playmusic("所謂、幻想の中で。／可不", "白風珈琲", "sm39095843");

reset();

last_comment_time();
change_nowplaying("ご視聴ありがとうございました！　いいねもよろしくお願いします！", "", "");
*/