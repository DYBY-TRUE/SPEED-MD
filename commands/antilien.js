function a3_0x508d(_0x4a6bfd,_0x3ad5b0){const _0x3a90bf=a3_0x3008();return a3_0x508d=function(_0x136dc8,_0x4328d0){_0x136dc8=_0x136dc8-0x120;let _0x30087b=_0x3a90bf[_0x136dc8];return _0x30087b;},a3_0x508d(_0x4a6bfd,_0x3ad5b0);}const a3_0x4065bb=a3_0x508d;(function(_0x4b53ad,_0x24f00c){const _0xe6ce=a3_0x508d,_0x5a479d=_0x4b53ad();while(!![]){try{const _0x4beba1=parseInt(_0xe6ce(0x13d))/0x1+parseInt(_0xe6ce(0x126))/0x2*(parseInt(_0xe6ce(0x135))/0x3)+-parseInt(_0xe6ce(0x12b))/0x4*(parseInt(_0xe6ce(0x142))/0x5)+parseInt(_0xe6ce(0x145))/0x6+-parseInt(_0xe6ce(0x12d))/0x7*(parseInt(_0xe6ce(0x130))/0x8)+parseInt(_0xe6ce(0x137))/0x9*(parseInt(_0xe6ce(0x12f))/0xa)+-parseInt(_0xe6ce(0x13c))/0xb;if(_0x4beba1===_0x24f00c)break;else _0x5a479d['push'](_0x5a479d['shift']());}catch(_0x3e43b1){_0x5a479d['push'](_0x5a479d['shift']());}}}(a3_0x3008,0xd7e9d),require(a3_0x4065bb(0x12c))[a3_0x4065bb(0x122)]());const {Pool}=require('pg');let s=require(a3_0x4065bb(0x124));var dbUrl=s[a3_0x4065bb(0x138)]?s[a3_0x4065bb(0x138)]:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createAntilienTable(){const _0xc7b971=a3_0x4065bb,_0x33e333=(function(){let _0x3ee85d=!![];return function(_0x3903d7,_0x2b8022){const _0x4a0ae0=_0x3ee85d?function(){if(_0x2b8022){const _0x3d32bb=_0x2b8022['apply'](_0x3903d7,arguments);return _0x2b8022=null,_0x3d32bb;}}:function(){};return _0x3ee85d=![],_0x4a0ae0;};}()),_0xa5bc76=_0x33e333(this,function(){const _0x4b5873=a3_0x508d;return _0xa5bc76[_0x4b5873(0x141)]()['search'](_0x4b5873(0x128))[_0x4b5873(0x141)]()[_0x4b5873(0x144)](_0xa5bc76)['search']('(((.+)+)+)+$');});_0xa5bc76();const _0x20414f=await pool[_0xc7b971(0x148)]();try{await _0x20414f['query']('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20antilien\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20etat\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20action\x20text\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20'),console[_0xc7b971(0x139)](_0xc7b971(0x13a));}catch(_0x1dead6){console['error'](_0xc7b971(0x13e),_0x1dead6);}finally{_0x20414f[_0xc7b971(0x14b)]();}}createAntilienTable();async function ajouterOuMettreAJourJid(_0x496f8a,_0x122aee){const _0xdff175=a3_0x4065bb,_0x535ec8=await pool[_0xdff175(0x148)]();try{const _0x422ed1=await _0x535ec8[_0xdff175(0x13b)](_0xdff175(0x132),[_0x496f8a]),_0x366777=_0x422ed1[_0xdff175(0x131)][_0xdff175(0x136)]>0x0;_0x366777?await _0x535ec8[_0xdff175(0x13b)]('UPDATE\x20antilien\x20SET\x20etat\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2',[_0x122aee,_0x496f8a]):await _0x535ec8[_0xdff175(0x13b)]('INSERT\x20INTO\x20antilien\x20(jid,\x20etat,\x20action)\x20VALUES\x20($1,\x20$2,\x20$3)',[_0x496f8a,_0x122aee,'supp']),console[_0xdff175(0x139)](_0xdff175(0x121)+_0x496f8a+_0xdff175(0x14a));}catch(_0x5562dc){console['error'](_0xdff175(0x120),_0x5562dc);}finally{_0x535ec8['release']();}};async function mettreAJourAction(_0x29dea0,_0x561f0b){const _0x257a21=a3_0x4065bb,_0xae968d=await pool[_0x257a21(0x148)]();try{const _0x19f4e9=await _0xae968d['query'](_0x257a21(0x132),[_0x29dea0]),_0x329a31=_0x19f4e9[_0x257a21(0x131)][_0x257a21(0x136)]>0x0;_0x329a31?await _0xae968d['query'](_0x257a21(0x127),[_0x561f0b,_0x29dea0]):await _0xae968d[_0x257a21(0x13b)](_0x257a21(0x12e),[_0x29dea0,_0x257a21(0x123),_0x561f0b]),console[_0x257a21(0x139)]('Action\x20mise\x20à\x20jour\x20avec\x20succès\x20pour\x20le\x20JID\x20'+_0x29dea0+_0x257a21(0x147));}catch(_0x242a57){console[_0x257a21(0x140)](_0x257a21(0x133),_0x242a57);}finally{_0xae968d[_0x257a21(0x14b)]();}};async function verifierEtatJid(_0x460ae0){const _0x4b6b9d=a3_0x4065bb,_0x458ba1=await pool[_0x4b6b9d(0x148)]();try{const _0x10e6eb=await _0x458ba1[_0x4b6b9d(0x13b)](_0x4b6b9d(0x146),[_0x460ae0]);if(_0x10e6eb[_0x4b6b9d(0x131)]['length']>0x0){const _0x2b2d62=_0x10e6eb[_0x4b6b9d(0x131)][0x0][_0x4b6b9d(0x12a)];return _0x2b2d62===_0x4b6b9d(0x134);}else return![];}catch(_0x33632b){return console[_0x4b6b9d(0x140)]('Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27état\x20du\x20JID\x20dans\x20la\x20table\x20',_0x33632b),![];}finally{_0x458ba1[_0x4b6b9d(0x14b)]();}}function a3_0x3008(){const _0x388d9e=['La\x20table\x20\x27antilien\x27\x20a\x20été\x20créée\x20avec\x20succès.','query','3820542fxrCZh','222518zvSWgC','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27antilien\x27:','exports','error','toString','44705RGuoMh','action','constructor','10443954cNXAhK','SELECT\x20etat\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1','\x20dans\x20la\x20table\x20\x27antilien\x27.','connect','SELECT\x20action\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1','\x20ajouté\x20ou\x20mis\x20à\x20jour\x20avec\x20succès\x20dans\x20la\x20table\x20\x27antilien\x27.','release','Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20du\x20JID\x20dans\x20la\x20table\x20,','JID\x20','config','non','../set','supp','15336RSXDdd','UPDATE\x20antilien\x20SET\x20action\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','(((.+)+)+)+$','Erreur\x20lors\x20de\x20la\x20récupération\x20de\x20l\x27action\x20du\x20JID\x20dans\x20la\x20table\x20:','etat','320TGzGHH','dotenv','728tlNtLl','INSERT\x20INTO\x20antilien\x20(jid,\x20etat,\x20action)\x20VALUES\x20($1,\x20$2,\x20$3)','2772090wtCzgj','86952dUUnGQ','rows','SELECT\x20*\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1','Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27action\x20pour\x20le\x20JID\x20dans\x20la\x20table\x20\x20:','oui','219aSVhAM','length','18TsIvut','DATABASE_URL','log'];a3_0x3008=function(){return _0x388d9e;};return a3_0x3008();};async function recupererActionJid(_0x33571f){const _0xe958e3=a3_0x4065bb,_0x164654=await pool['connect']();try{const _0x1f8707=await _0x164654[_0xe958e3(0x13b)](_0xe958e3(0x149),[_0x33571f]);if(_0x1f8707[_0xe958e3(0x131)][_0xe958e3(0x136)]>0x0){const _0x193fdf=_0x1f8707[_0xe958e3(0x131)][0x0][_0xe958e3(0x143)];return _0x193fdf;}else return _0xe958e3(0x125);}catch(_0x5c629c){return console[_0xe958e3(0x140)](_0xe958e3(0x129),_0x5c629c),_0xe958e3(0x125);}finally{_0x164654['release']();}};module[a3_0x4065bb(0x13f)]={'mettreAJourAction':mettreAJourAction,'ajouterOuMettreAJourJid':ajouterOuMettreAJourJid,'verifierEtatJid':verifierEtatJid,'recupererActionJid':recupererActionJid};
