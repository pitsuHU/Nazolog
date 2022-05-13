
/*
var mapDiv = document.getElementById("mapDiv");     // 地図を置く場所
var gmap;                                           // Googleマップの Map オブジェクトのための変数
var mark;                                           // Googleマップの Marker オブジェクトのための変数
*/

// sound関係
const track = document.getElementById("track");
const thumbnail = document.getElementById("thumbnail");
const background = document.getElementById("background");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
// ここまでsound関係

var CheckPoints = [
    {
        "name": "1_ElmnoMori",
        "lat":43.103944,
        "lng":141.344545,
        "pointer":"img/marker_p.png",
        "img":"img/1_elm.png",
        "sound":"_common/sounds/Check1.mp3",
        "voice":"_common/sounds/1_elm_forest.mp3"
    },
    {
        "name": "1_ElmnoMori",
        "lat":43.071049,
        "lng":141.347466,
        "pointer":"img/marker_p.png",
        "img":"img/1_elm.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/1_elm_forest.mp3"
    },
    {
        "name": "2_Elm",
        "lat":43.071211,
        "lng":141.347070,
        "pointer":"img/marker_p.png",
        "img":"img/2_elmclark.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/2_elm.mp3"
    },
    {
        "name": "3_Urai",
        "lat":43.072247,
        "lng":141.345256,
        "pointer":"img/marker_p.png",
        "img":"img/3_urai.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/3_urai.mp3"
    },
    {
        "name": "4_furukawa",
        "lat":43.071165,
        "lng":141.343563,
        "pointer":"img/marker_p.png",
        "img":"img/4_furukawa.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/4_hurukawa.mp3"
    },
    {
        "name": "5_Clark",
        "lat":43.070670,
        "lng":141.343381,
        "pointer":"img/marker_p.png",
        "img":"img/5_clark.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/5_clark.mp3"
    },
    {
        "name": "6_OldBuilding",
        "lat":43.070854,
        "lng":141.342474,
        "pointer":"img/marker_p.png",
        "img":"img/6_buildings.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/6_oldbuilding.mp3"
    },
    {
        "name": "7_Musium",
        "lat":43.072691,
        "lng":141.342391,
        "pointer":"img/marker_p.png",
        "img":"img/7_musium.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/7_musiam.mp3"
    },
    {
        "name": "8_OnoPond",
        "lat":43.074359,
        "lng":141.341918,
        "pointer":"img/marker_p.png",
        "img":"img/8_pond.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/8_musiam.mp3"
    },
    {
        "name": "9_SakshkotoniRiv",
        "lat":43.074226,
        "lng":141.341126,
        "pointer":"img/marker_p.png",
        "img":"img/9_sksktnliv.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/9_sksktnLi.mp3"
    },
    {
        "name": "10_Popla",
        "lat":43.075222,
        "lng":141.336632,
        "pointer":"img/marker_p.png",
        "img":"img/10_popra.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/10_popla.mp3"
    },
    {
        "name": "11_LuinGurden",
        "lat":43.058824,
        "lng":141.332275,
        "pointer":"img/marker_p.png",
        "img":"img/11_ruin.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/11_ruin.mp3"
    },
    {
        "name": "ModelBurn",
        "lat":43.081698,
        "lng":141.339938,
        "pointer":"img/marker_p.png",
        "img":"img/12_modelburn.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/12_modelbarn.mp3"
    },
    {
        "name": "Enyu",
        "lat":43.081212,
        "lng":141.341672,
        "pointer":"img/marker_p.png",
        "img":"img/13_enyu.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/13_enyu.mp3"
    },

    //ここから大通公園用
    {
        "name": "waterfountain",
        "lat":43.060419,
        "lng":141.351356,
        "pointer":"img/marker_p.png",
        "img":"img/12_modelburn.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/12_modelbarn.mp3"
    },

    {
        "name": "syoon",
        "lat":43.060209,
        "lng":141.349810,
        "pointer":"img/marker_p.png",
        "img":"img/13_enyu.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/13_enyu.mp3"
    },

    {
        "name": "blackslide",
        "lat":43.059443,
        "lng":141.344441,
        "pointer":"img/marker_p.png",
        "img":"img/13_enyu.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/13_enyu.mp3"
    },

    {
        "name": "court",
        "lat":43.058556,
        "lng":141.337669,
        "pointer":"img/marker_p.png",
        "img":"img/13_enyu.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/13_enyu.mp3"
    },

    {
        "name": "garden",
        "lat":43.058692,
        "lng":141.338814,
        "pointer":"img/marker_p.png",
        "img":"img/13_enyu.png",
        "sound":"_common/sounds/Check3.mp3",
        "voice":"_common/sounds/13_enyu.mp3"
    }

];                                  // ★人魚の情報を入れる変数


//var captured = [];                                  // ★人魚を捕獲済みか否かを入れる変数

// loadCheckPoints();                                     // ★人魚の情報を読み込む

//初期位置を指定
const defPos = [35.6585840, 139.7454316]
//著作権表示の指定
const copyright = "&copy; <a fref='" + "https://www.openstreetmap.org/copyright" + "'>OpenStreetMap</a> contributors"
//基本マップの設定
const map = L.map('map_div').setView(defPos, 17)
//タイルレイヤーの指定
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution: copyright}
    ).addTo(map)


//チェックポイントを配置
placeCheckPoints();

//自分のマーカの作成
const marker = L.marker(defPos).addTo(map)

// GPS センサの値が変化したら何らか実行する geolocation.watchPosition メソッド

navigator.geolocation.watchPosition((position) =>{

    //緯度経度の情報を得る
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //const accu = position.coords.accuracy;            // 緯度・経度の精度を取得
    const zoom = map.getZoom();


    //マップの表示位置を変更
    map.setView([lat, lng], zoom, {animation: true});
    //マーカの位置も変更
    marker.setLatLng([lat, lng]);
    marker.bindPopup('現在位置はココ');

    calcDistance(lat, lng)  //各チェックポイントとの距離を測る

},(error)=>{

},{
    enableHighAccuracy: true
}
);



/*
navigator.geolocation.watchPosition( (position) => {
    var lat  = position.coords.latitude;            // 緯度を取得
    var lng  = position.coords.longitude;           // 経度を取得
    var accu = position.coords.accuracy;            // 緯度・経度の精度を取得
    showMyPos(lat, lng);                            // showMyPos 関数を実行
    calcDistance(lat, lng);
});

// 自分の位置を表示する showMyPos 関数
function showMyPos(lat, lng) {
    var myPos = new google.maps.LatLng(lat, lng);   // Googleマップの LatLng オブジェクトを作成
    gmap.setCenter(myPos);                          // gmap の中心を myPos の位置にする
    mark.setPosition(myPos);                        // mark の位置を myPos にする
}

*/




// // ★人魚の情報を読み込む loadMermaids 関数
// function loadCheckPoints() {
//     var req = new XMLHttpRequest();                 // サーバのファイルを読む XMLHttpRequest
//     req.addEventListener("readystatechange", () => {        // 準備状態に変化があった時の処理
//         if(req.readyState === 4 && req.status === 200) {    // データ受信が正常に完了したら
//             CheckPoints = JSON.parse(req.responseText);        // 読み込んだJSONデータを整形して人魚データに入れる
//         }
//     });
//     req.open("GET", "mermaids.json");               // リクエストを設定
//     req.send();                                     // リクエストを送る
// }


// ★人魚を地図上に配置する placeCheckPoints 関数
function placeCheckPoints() {
    //var mermaidMark = [];  
                             // 人魚マーカーの配列
    for(var i = 0; i < CheckPoints.length; i++) {      // 全ての人魚について
    /*
        var pos = new google.maps.LatLng(CheckPoints[i].lat, CheckPoints[i].lng); // 人魚の位置を設定
        var img = {                                 // 画像の設定
            url: CheckPoints[i].pointer,                   // 画像ファイル名
            scaledSize: new google.maps.Size(60, 60)    // 画像を縮小表示
        };
        */
        L.marker([CheckPoints[i].lat, CheckPoints[i].lng]).addTo(map); //マーカーを配置
        /*
        mermaidMark[i] = new google.maps.Marker({   // 人魚のマーカーを作成
            map: gmap,                              // gmap の上に表示する
            position: pos,                          // pos の位置に
            icon: img,                              // アイコンを設定
            title: CheckPoints[i].name                 // タイトルを設定
        });
        captured[i] = false;                        // 捕獲済み状態を全てfalseにする
        */
    }
}
 
// ★自分と人魚との距離を計算する calcDistance 関数
function calcDistance(lat, lng) {
    var distances = [];                              // 距離を入れる配列

    for(var i = 0; i < CheckPoints.length; i++) {      // 全ての人魚について
        //var pos = new google.maps.LatLng(CheckPoints[i].lat, CheckPoints[i].lng);                 // 人魚の位置を設定
        distances[i] = distance(lat, lng, CheckPoints[i].lat, CheckPoints[i].lng); //チェックポイントとの距離を測る

        var txt = document.getElementById("txt");       // データを表示するdiv要素の取得
                    txt.innerHTML = "ポイント1: " + distances[0] + ",  ポイント2:" + distances[1] +  ",  ポイント3:" + distances[2] + "<br>" ;// データ表示


        // 捕獲の判定と捕獲した時のエフェクト
        if(distance[i] < 0.015) {         // 距離が20m未満、かつ、まだ捕獲していないなら
            var music = new Audio(CheckPoints[i].sound);　　　　　　 // music変数をさくせい
            music.play();                                       // 音を流す            
            captured[i] = true;                                 // 捕獲済にする
            get.hidden = false;                                 // img要素を表示
            mainDiv.hidden = true;                              // 地図を非表示
            portfolio.hidden = true;                         // ポートフォリオを非表示
            initPlayer(CheckPoints[i]);
            closeButton.addEventListener("click", () => {            // img要素がクリックされたら
                track.pause();
                get.hidden = true;                           // img要素を非表示
                mainDiv.hidden = false;                          // 地図を表示
                portfolio.hidden = false;                    //  ポートフォリオを表示
            });
        }
    }
}


// 距離を測る
function distance(lat1, lng1, lat2, lng2) {
    lat1 *= Math.PI / 180;
    lng1 *= Math.PI / 180;
    lat2 *= Math.PI / 180;
    lng2 *= Math.PI / 180;
    return 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2));
}

function ReLoad(){
    initMap();
}

// --------------ここからsound関係

// Copyright (c) February 24, 2021 Christine Banlawi
// Released under the MIT license
// https://codepen.io/cbanlawi/pen/xxRpggg

function initPlayer(mermaid){
    track.src = mermaid.voice;
    thumbnail.src = mermaid.img;
    background.src = mermaid.img;
    trackTitle.textContent = mermaid.name;
    //track.play(); //ここでプレイすればちゃんと再生する11_28
}

let playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";

    thumbnail.style.transform = "scale(1.25)";
      

    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";

    thumbnail.style.transform = "scale(1)";

    track.pause();
    playing = true;
  }
}

//サムネイル画像を押したら音声再生
thumbnail.addEventListener("click",pausePlay);


function progressValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;

  currentTime.textContent = formatTime(track.currentTime);
  durationTime.textContent = formatTime(track.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);
