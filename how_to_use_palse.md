`leaflet-icon-pulse-master`をダウンロードし、index.htmlと同様の階層におく

github: https://github.com/mapshakers/leaflet-icon-pulse


htmlファイルのheadに以下を追加、`Nazolog/index.html`21~24行参照

```
<Link href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" rel="stylesheet" />
<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" type="text/javascript"></script>
```

自身のマーカーを以下のように設定、`Nazolog/_common/scripts/srcipt.js`239~245行参照

```
var pulsingIcon2 = L.icon.pulse({
    iconSize:[20,20]
   ,color:'#57c6fd'
   ,fillColor:'#57c6fd'
   ,heartbeat: 2
});
var marker = L.marker(defPos, {icon:pulsingIcon2}).addTo(map).bindPopup("heartbeat:2sec");
```

参考記事: https://kita-note.com/leaflet-plugin-icon-pulse
