var _0x3369=['Usa','country','deaths','Serbia','then','mouseover','flag','getJSON','mouseout','forEach','getFeatureById','message','white','json','features','LatLng','todayDeaths','#ff0000','long','overrideStyle','../Icons/corona.png','val','maps','getElementById','remove','lat','<div\x20class=\x22gm-style-iw\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>United\x20States</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22responsiveImg\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20src=\x22https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br><br><Strong>Cases:</Strong>\x20','Marker','todayCases','addListener','click','map_canvas','https://raw.githubusercontent.com/matej-pavla/Google-Maps-Examples/master/BoundariesExample/geojsons/us.states.geo.json','setStyle','feature','NAME','<div\x20class=\x22gm-style-iw\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br><Strong>Today\x20cases:</Strong>\x20','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br><br><Strong>Cases:</Strong>\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br><Strong>Today\x20deaths:</Strong>\x20<span\x20class=\x22text-danger\x22>','log','sort','catch','#facfcf','Congo','Size','United\x20States','addGeoJson','toUpperCase','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','#boundary_load_select','Data','name','usa','title','https://raw.githubusercontent.com/matej-pavla/Google-Maps-Examples/master/BoundariesExample/geojsons/world.countries.geo.json','cases','Point','#ff6e6e','position','FeatureCollection','</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22responsiveImg\x22\x20src=\x22','https://corona.lmao.ninja/countries','toLowerCase','boundary_id','length','properties','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br><Strong>Deaths:</Strong>\x20<span\x20class=\x22text-danger\x22>','countryInfo'];(function(_0x3bd0e5,_0x3369ca){var _0x452722=function(_0x5f3e2d){while(--_0x5f3e2d){_0x3bd0e5['push'](_0x3bd0e5['shift']());}};_0x452722(++_0x3369ca);}(_0x3369,0x15f));var _0x4527=function(_0x3bd0e5,_0x3369ca){_0x3bd0e5=_0x3bd0e5-0x0;var _0x452722=_0x3369[_0x3bd0e5];return _0x452722;};var map=null;var my_boundaries=[];var data_layer;var countriesList={};var coordinates={'lat':0x0,'lng':0x0};function initializeDataLayer(){if(data_layer){data_layer['forEach'](function(_0x42f0e6){data_layer[_0x4527('0x12')](_0x42f0e6);});data_layer=null;}data_layer=new google[(_0x4527('0x10'))][(_0x4527('0x2d'))]({'map':map});data_layer[_0x4527('0x1b')]({'fillColor':_0x4527('0x6'),'strokeWeight':0x1,'fillOpacity':0.1});data_layer['addListener'](_0x4527('0x44'),function(_0x27f124){data_layer[_0x4527('0xd')](_0x27f124[_0x4527('0x1c')],{'strokeWeight':0x3,'strokeColor':_0x4527('0xb')});});data_layer[_0x4527('0x17')](_0x4527('0x2'),function(_0x6f2830){data_layer['overrideStyle'](_0x6f2830[_0x4527('0x1c')],{'strokeWeight':0x1,'strokeColor':''});});}function loadBoundariesFromGeoJson(_0x558935){initializeDataLayer();$[_0x4527('0x1')](_0x558935,function(_0x3e845e){if(_0x3e845e['type']==_0x4527('0x36')){if(_0x3e845e[_0x4527('0x8')]){for(var _0x198f05=0x0;_0x198f05<_0x3e845e['features'][_0x4527('0x3b')];_0x198f05++){var _0x438fc0=_0x198f05+0x1;var _0x4a439f={};if(!_0x3e845e[_0x4527('0x8')][_0x198f05][_0x4527('0x3c')])_0x3e845e[_0x4527('0x8')][_0x198f05][_0x4527('0x3c')]={};_0x3e845e[_0x4527('0x8')][_0x198f05][_0x4527('0x3c')][_0x4527('0x3a')]=_0x438fc0;data_layer[_0x4527('0x29')](_0x3e845e['features'][_0x198f05],{'idPropertyName':'boundary_id'});_0x4a439f[_0x4527('0x1c')]=data_layer[_0x4527('0x4')](_0x438fc0);if(_0x3e845e['features'][_0x198f05][_0x4527('0x3c')][_0x4527('0x2e')])_0x4a439f[_0x4527('0x2e')]=_0x3e845e[_0x4527('0x8')][_0x198f05][_0x4527('0x3c')][_0x4527('0x2e')];if(_0x3e845e['features'][_0x198f05]['properties'][_0x4527('0x1d')])_0x4a439f[_0x4527('0x2e')]=_0x3e845e[_0x4527('0x8')][_0x198f05]['properties'][_0x4527('0x1d')];my_boundaries[_0x438fc0]=_0x4a439f;}}my_boundaries[_0x4527('0x23')](function(_0x4ccb4c,_0x17e2a2){var _0x224ba0=_0x4ccb4c[_0x4527('0x2e')][_0x4527('0x2a')]();var _0x2be9fd=_0x17e2a2['name'][_0x4527('0x2a')]();return _0x224ba0<_0x2be9fd?-0x1:_0x224ba0>_0x2be9fd?0x1:0x0;});}});}function mapStart(){fetch(_0x4527('0x38'))[_0x4527('0x43')](function(_0x3d50d3){_0x3d50d3[_0x4527('0x7')]()['then'](function(_0x3093cb){_0x3093cb[_0x4527('0x23')](function(_0x1cc0f3,_0x346c4c){var _0x990f50=_0x1cc0f3[_0x4527('0x40')][_0x4527('0x2a')]();var _0x484a81=_0x346c4c[_0x4527('0x40')][_0x4527('0x2a')]();return _0x990f50<_0x484a81?-0x1:_0x990f50>_0x484a81?0x1:0x0;});countriesList=_0x3093cb;_0x3093cb[_0x4527('0x3')](_0x46a446=>{var _0x22340f={'url':_0x4527('0xe'),'scaledSize':new google['maps'][(_0x4527('0x27'))](0x1e,0x1e),'origin':new google['maps'][(_0x4527('0x33'))](0x0,0x0),'anchor':new google[(_0x4527('0x10'))][(_0x4527('0x33'))](0x0,0x0)};var _0x2bd10c=_0x4527('0x1e')+_0x46a446[_0x4527('0x40')]+_0x4527('0x37')+_0x46a446[_0x4527('0x3e')][_0x4527('0x0')]+_0x4527('0x20')+_0x46a446[_0x4527('0x32')]+'\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br><Strong>Deaths:</Strong>\x20<span\x20class=\x22text-danger\x22>'+_0x46a446[_0x4527('0x41')]+_0x4527('0x1f')+_0x46a446[_0x4527('0x16')]+_0x4527('0x21')+_0x46a446['todayDeaths']+_0x4527('0x2b');let _0x26021f=new google[(_0x4527('0x10'))][(_0x4527('0x15'))]({'map':map,'position':new google[(_0x4527('0x10'))][(_0x4527('0x9'))](_0x46a446[_0x4527('0x3e')][_0x4527('0x13')],_0x46a446[_0x4527('0x3e')][_0x4527('0xc')]),'title':_0x46a446[_0x4527('0x40')],'icon':_0x22340f});if(_0x46a446[_0x4527('0x40')][_0x4527('0x39')]()==_0x4527('0x2f')){_0x26021f[_0x4527('0x30')]=_0x4527('0x28');_0x26021f[_0x4527('0x35')]=new google[(_0x4527('0x10'))]['LatLng'](37.09024,-95.712891);_0x2bd10c=_0x4527('0x14')+_0x46a446['cases']+_0x4527('0x3d')+_0x46a446[_0x4527('0x41')]+_0x4527('0x1f')+_0x46a446[_0x4527('0x16')]+_0x4527('0x21')+_0x46a446[_0x4527('0xa')]+_0x4527('0x2b');}var _0x5916a9=new google[(_0x4527('0x10'))]['InfoWindow']({'content':_0x2bd10c});_0x26021f[_0x4527('0x17')](_0x4527('0x18'),function(){_0x5916a9['open'](map,_0x26021f);});});colorCountries();});})[_0x4527('0x24')](function(_0x79a37d){console[_0x4527('0x22')](_0x79a37d[_0x4527('0x5')]);});}function start(){var _0x24478d={'zoom':0x2,'center':coordinates};map=new google['maps']['Map'](document[_0x4527('0x11')](_0x4527('0x19')),_0x24478d);$(_0x4527('0x2c'))['change'](function(){if($(this)[_0x4527('0xf')]()==0x1){loadBoundariesFromGeoJson(_0x4527('0x31'));}else{loadBoundariesFromGeoJson(_0x4527('0x1a'));}});loadBoundariesFromGeoJson(_0x4527('0x31'));mapStart();}function colorCountries(){my_boundaries[0xa9][_0x4527('0x2e')]=_0x4527('0x3f');my_boundaries[0x83]['name']=_0x4527('0x42');my_boundaries[0x84][_0x4527('0x2e')]=_0x4527('0x26');for(let _0x254d6a=0x0;_0x254d6a<countriesList[_0x4527('0x3b')];_0x254d6a++){for(let _0x42772b=0x0;_0x42772b<0xb4;_0x42772b++){if(my_boundaries[_0x42772b][_0x4527('0x2e')]!=null){if(countriesList[_0x254d6a]['country']['toLowerCase']()==my_boundaries[_0x42772b][_0x4527('0x2e')][_0x4527('0x39')]()){let _0x7c7890=countriesList[_0x254d6a][_0x4527('0x32')];let _0x3700a2='#ffffff';if(_0x7c7890>0x0&&_0x7c7890<=0x3e8){_0x3700a2=_0x4527('0x25');}else if(_0x7c7890>0x3e8&&_0x7c7890<=0x2710){_0x3700a2=_0x4527('0x34');}else if(_0x7c7890>0x2710){_0x3700a2='#ff0a0a';}data_layer[_0x4527('0xd')](my_boundaries[_0x42772b]['feature'],{'fillColor':_0x3700a2,'fillOpacity':0.8});}}}}}