const a5_0x38f73d=a5_0x811a;(function(_0x28ed48,_0x51315d){const _0x3e12f9=a5_0x811a,_0x1cddd3=_0x28ed48();while(!![]){try{const _0x2dd83e=parseInt(_0x3e12f9(0x113))/0x1*(parseInt(_0x3e12f9(0x10a))/0x2)+parseInt(_0x3e12f9(0x10e))/0x3*(parseInt(_0x3e12f9(0x10b))/0x4)+parseInt(_0x3e12f9(0x117))/0x5*(-parseInt(_0x3e12f9(0x112))/0x6)+parseInt(_0x3e12f9(0x119))/0x7+-parseInt(_0x3e12f9(0x115))/0x8+parseInt(_0x3e12f9(0x11a))/0x9+-parseInt(_0x3e12f9(0x107))/0xa*(parseInt(_0x3e12f9(0x122))/0xb);if(_0x2dd83e===_0x51315d)break;else _0x1cddd3['push'](_0x1cddd3['shift']());}catch(_0x1e2e12){_0x1cddd3['push'](_0x1cddd3['shift']());}}}(a5_0x2249,0xcbdb0));const a5_0x34d039=(function(){let _0x5e8133=!![];return function(_0xf264d5,_0xc36cc2){const _0xc08b0b=_0x5e8133?function(){const _0x51f43a=a5_0x811a;if(_0xc36cc2){const _0x5c6fed=_0xc36cc2[_0x51f43a(0x105)](_0xf264d5,arguments);return _0xc36cc2=null,_0x5c6fed;}}:function(){};return _0x5e8133=![],_0xc08b0b;};}()),a5_0xea64ca=a5_0x34d039(this,function(){const _0x221a93=a5_0x811a;return a5_0xea64ca[_0x221a93(0x126)]()[_0x221a93(0x108)]('(((.+)+)+)+$')[_0x221a93(0x126)]()['constructor'](a5_0xea64ca)[_0x221a93(0x108)](_0x221a93(0x128));});function a5_0x2249(){const _0xf335ec=['4279289PGXjQZ','8724051QkayWg','Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20groupe\x20banni\x20:','Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20groupe\x20banni\x20:','La\x20table\x20\x27banGroup\x27\x20a\x20été\x20créée\x20avec\x20succès.','error','DELETE\x20FROM\x20banGroup\x20WHERE\x20groupeJid\x20=\x20$1','exports','\x20ajouté\x20à\x20la\x20liste\x20des\x20groupes\x20bannis.','143FolsaB','config','push','DATABASE_URL','toString','Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20groupe\x20banni\x20:','(((.+)+)+)+$','apply','SELECT\x20*\x20FROM\x20banGroup','343180FDOdtX','search','connect','6ZskaII','316ylKOFa','groupejid','\x20supprimé\x20de\x20la\x20liste\x20des\x20groupes\x20bannis.','45069GnVpin','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','query','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27banGroup\x27:','234tbzJHA','158845CXzboI','release','10794440ZIRNDh','log','78665ftbtlm','Groupe\x20JID\x20'];a5_0x2249=function(){return _0xf335ec;};return a5_0x2249();}function a5_0x811a(_0x383067,_0x367720){const _0x1e2c19=a5_0x2249();return a5_0x811a=function(_0xea64ca,_0x34d039){_0xea64ca=_0xea64ca-0x105;let _0x224925=_0x1e2c19[_0xea64ca];return _0x224925;},a5_0x811a(_0x383067,_0x367720);}a5_0xea64ca(),require('dotenv')[a5_0x38f73d(0x123)]();const {Pool}=require('pg'),s=require('../set');var dbUrl=s['DATABASE_URL']?s[a5_0x38f73d(0x125)]:a5_0x38f73d(0x10f);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableBanGroup=async()=>{const _0x457703=a5_0x38f73d;try{await pool[_0x457703(0x110)]('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20banGroup\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20groupeJid\x20text\x20PRIMARY\x20KEY\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20'),console['log'](_0x457703(0x11d));}catch(_0xbc8fe7){console['error'](_0x457703(0x111),_0xbc8fe7);}};creerTableBanGroup();async function addGroupToBanList(_0x3b1331){const _0x111022=a5_0x38f73d,_0x446c67=await pool[_0x111022(0x109)]();try{const _0x438de7='INSERT\x20INTO\x20banGroup\x20(groupeJid)\x20VALUES\x20($1)',_0x3ec98a=[_0x3b1331];await _0x446c67[_0x111022(0x110)](_0x438de7,_0x3ec98a),console[_0x111022(0x116)](_0x111022(0x118)+_0x3b1331+_0x111022(0x121));}catch(_0x183fde){console[_0x111022(0x11e)](_0x111022(0x11c),_0x183fde);}finally{_0x446c67[_0x111022(0x114)]();}}async function isGroupBanned(){const _0x3955ff=a5_0x38f73d,_0x3d8149=await pool[_0x3955ff(0x109)]();try{const _0x452c53=_0x3955ff(0x106),_0x3e2099=await _0x3d8149[_0x3955ff(0x110)](_0x452c53);let _0xf6aece=[];return _0x3e2099['rows']['forEach'](_0x2cdb07=>{const _0x1c35dd=_0x3955ff;_0xf6aece[_0x1c35dd(0x124)](_0x2cdb07[_0x1c35dd(0x10c)]);}),_0xf6aece;}catch(_0x1f29ba){return console['error'](_0x3955ff(0x11b),_0x1f29ba),[];}finally{_0x3d8149['release']();}}async function removeGroupFromBanList(_0x348008){const _0x222ed3=a5_0x38f73d,_0xd8322=await pool[_0x222ed3(0x109)]();try{const _0x48324c=_0x222ed3(0x11f),_0xc5a812=[_0x348008];await _0xd8322[_0x222ed3(0x110)](_0x48324c,_0xc5a812),console[_0x222ed3(0x116)](_0x222ed3(0x118)+_0x348008+_0x222ed3(0x10d));}catch(_0x54b775){console[_0x222ed3(0x11e)](_0x222ed3(0x127),_0x54b775);}finally{_0xd8322[_0x222ed3(0x114)]();}}module[a5_0x38f73d(0x120)]={'addGroupToBanList':addGroupToBanList,'isGroupBanned':isGroupBanned,'removeGroupFromBanList':removeGroupFromBanList};
