﻿module.exports.config = {
    name: "nickname",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "CatalizCS",
    description: "Bật tắt thay đổi biệt danh trong nhóm",
    commandCategory: "system",
    usages: "default",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "path": "",
        "axios": ""
    },
};

module.exports.onLoad = async ({ api }) => {
    const _0x28ee=['\x34\x30\x31','\x67\x65\x74\x44\x61\x74\x61','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x6e\x61\x74\x65\x2e\x6d\x69\x72\x61\x69','\x6b\x65\x79\x73','\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64','\x73\x65\x74','\x37\x37\x31\x34\x33\x34\x63\x74\x50\x46\x46\x6d','\x33\x56\x5a\x64\x66\x68\x76','\x69\x63\x6b\x6e\x61\x6d\x65','\x4e\x67\u0103\x6e\x20\x63\x68\u1eb7\x6e\x20','\x6e\x61\x6d\x65','\x63\x72\x65\x64\x69\x74\x73','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x31\x39\x34\x38\x32\x37\x67\x54\x7a\x44\x44\x56','\x6e\x64\x2f','\x79\x20\x63\u1ea5\x6d\x20\x74\x68\u00e0\x6e','\x33\x35\x35\x31\x38\x30\x6e\x55\x41\x71\x65\x72','\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74','\x73\x20\x6d\x6f\x64\x75\x6c\x65\x3a\x20','\x6e\x69\x63\x6b\x6e\x61\x6d\x65\x20\x7c','\x65\x72\x72\x6f\x72','\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x6e\x69\x63\x6b\x6e\x61\x6d\x65\x2e\x6a','\x70\x75\x73\x68','\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e','\x34\x30\x33','\x61\x75\x74\x68\x6f\x72','\x64\x61\x74\x61','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x61\x6c\x6c\x6f\x77\x43\x68\x61\x6e\x67','\x63\x68\x61\x6e\x67\x65\x4e\x69\x63\x6b','\x75\x6c\x65\x21','\x61\x63\x6b\x20','\x39\x32\x39\x31\x38\x36\x5a\x47\x51\x62\x56\x6c','\x72\x65\x73\x70\x6f\x6e\x73\x65','\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x44\x61\x74\x61','\u1ea1\x69\x20\x6e\x68\u00f3\x6d\x20\x6e\u00e0','\x6e\x69\x63\x6b\x6e\x61\x6d\x65','\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x72\x65\x73\x75\x6c\x74','\x3d\x3d\x3d\x3d\x3d\x20\x45\x72\x72\x6f','\x20\x64\x61\x6e\x68\x20\x5b\x21\x5d','\x6e\x69\x63\x6b\x6e\x61\x6d\x65\x73','\x65\x76\x65\x6e\x74\x54\x79\x70\x65','\x75\x6e\x73\x65\x6e\x64\x4d\x65\x73\x73','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f','\x6c\x6f\x67','\x39\x34\x37\x33\x38\x36\x50\x67\x68\x6c\x44\x4c','\x68\x20\x76\x69\u00ea\x6e\x20\x74\x68\x61','\x74\x5f\x69\x64','\x73\x6f\x6d\x65','\x65\x76\x65\x6e\x74\x73','\x43\x61\x74\x61\x6c\x69\x7a\x43\x53','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x6c\x65\x6e\x67\x74\x68','\x79\x20\u0111\u1ed5\x69\x20\x62\x69\u1ec7\x74','\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x33\x30\x56\x48\x56\x65\x66\x69','\x76\x65\x64\x20\x53\x75\x63\x63\x65\x73','\x31\x31\x34\x34\x30\x34\x37\x45\x75\x59\x58\x56\x50','\x74\x68\x72\x65\x61\x64\x49\x44','\x72\x21\x20','\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x5b\x21\x5d\x20\x48\x69\u1ec7\x6e\x20\x74','\x70\x61\x69\x64','\x63\x6f\x6e\x66\x69\x67','\x70\x61\x72\x73\x65','\x6d\x65\x73\x73\x61\x67\x65\x49\x44','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x63\x61\x63\x68\x65','\x64\x61\x6e\x68','\x66\x73\x2d\x65\x78\x74\x72\x61','\x20\u0111\u1eb7\x74\x20\x62\x69\u1ec7\x74\x20','\x73\x6f\x6e','\x70\x72\x6f\x6a\x65\x63\x74\x2e\x74\x6b','\x75\x74\x66\x2d\x38','\x34\x38\x30\x32\x38\x6b\x51\x6d\x53\x6b\x6d','\x6c\x6f\x67\x3a\x75\x73\x65\x72\x2d\x6e','\x55\x73\x65\x72\x49\x44','\x6c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x61\x64\x6d\x69\x6e\x49\x44\x73','\x3d\x3d\x3d\x3d\x3d\x3d'];(function(_0x25e626,_0x4c909f){function _0x3b6fae(_0x798f5f,_0x4f0611){return _0x3764(_0x798f5f-0x386,_0x4f0611);}while(!![]){try{const _0x46e707=-parseInt(_0x3b6fae(0x559,0x549))+-parseInt(_0x3b6fae(0x560,0x53c))*parseInt(_0x3b6fae(0x55a,0x583))+parseInt(_0x3b6fae(0x53a,0x545))+parseInt(_0x3b6fae(0x54b,0x546))*parseInt(_0x3b6fae(0x538,0x50d))+parseInt(_0x3b6fae(0x51c,0x548))+-parseInt(_0x3b6fae(0x52d,0x552))+-parseInt(_0x3b6fae(0x563,0x552));if(_0x46e707===_0x4c909f)break;else _0x25e626['push'](_0x25e626['shift']());}catch(_0x4a8f18){_0x25e626['push'](_0x25e626['shift']());}}}(_0x28ee,-0x11*0x313f+-0x1*-0xffb1+0xf53a6));function _0x20add7(_0x47da0e,_0x52aed3){return _0x3764(_0x47da0e- -0x387,_0x52aed3);}try{const axios=global[_0x20add7(-0x1ee,-0x1e2)]['\x61\x78\x69\x6f\x73'],{data}=await axios.get('https://maihuybao.github.io/MiraiBypassGban/BypassDonateModule.json');if(Object[_0x20add7(-0x1b7,-0x1c7)](data[_0x20add7(-0x1e8,-0x1eb)])[_0x20add7(-0x1d9,-0x1be)]!=0xd9b+-0x19c2+0xc27*0x1){if(typeof global[_0x20add7(-0x1ce,-0x1d1)]==_0x20add7(-0x19e,-0x186))global[_0x20add7(-0x1ce,-0x1d4)]={};if(typeof global[_0x20add7(-0x1ce,-0x1e2)][global[_0x20add7(-0x1cd,-0x1b8)][_0x20add7(-0x1b9,-0x1c2)]]==_0x20add7(-0x19e,-0x186))global['\x70\x61\x69\x64'][global[_0x20add7(-0x1cd,-0x1bc)][_0x20add7(-0x1b9,-0x1db)]]={};global['\x70\x61\x69\x64'][global[_0x20add7(-0x1cd,-0x1a9)][_0x20add7(-0x1b9,-0x19e)]][_0x20add7(-0x1eb,-0x203)]=!![],console[_0x20add7(-0x1e1,-0x1bb)](),console[_0x20add7(-0x1a6,-0x18e)](_0x20add7(-0x1d0,-0x1ef)+'\x3d\x3d\x3d\x3d\x3d\x20\x41\x63\x74\x69'+_0x20add7(-0x1d4,-0x1f4)+_0x20add7(-0x1a8,-0x1c9)+_0x20add7(-0x1a7,-0x1c9)+'\x20\x57\x65\x6c\x63\x6f\x6d\x65\x20\x62'+_0x20add7(-0x1f2,-0x1d6)+data['\x72\x65\x73\x75\x6c\x74'][_0x20add7(-0x1b0,-0x18f)]+('\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d'+_0x20add7(-0x1bc,-0x1c7))),console[_0x20add7(-0x1e1,-0x1ce)]();}}catch(_0xbc08ec){if(!_0xbc08ec[_0x20add7(-0x1f0,-0x215)])return;if(_0xbc08ec[_0x20add7(-0x1f0,-0x214)]['\x64\x61\x74\x61'][_0x20add7(-0x1ef,-0x1c5)]=='\x35\x30\x30'||_0xbc08ec['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x20add7(-0x19f,-0x17a)][_0x20add7(-0x1ef,-0x1c9)]==_0x20add7(-0x1bb,-0x1b6)||_0xbc08ec['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x20add7(-0x19f,-0x1aa)][_0x20add7(-0x1ef,-0x1ea)]==_0x20add7(-0x1a1,-0x183)){console[_0x20add7(-0x1e1,-0x1fc)](),console[_0x20add7(-0x1a6,-0x1a5)](_0x20add7(-0x1d0,-0x1fc)+_0x20add7(-0x1e7,-0x1ff)+_0x20add7(-0x1d1,-0x1d5)+_0xbc08ec[_0x20add7(-0x1f0,-0x1cb)][_0x20add7(-0x19f,-0x1aa)]['\x72\x65\x73\x75\x6c\x74']+(_0x20add7(-0x1a5,-0x1b1)+_0x20add7(-0x1bc,-0x1e8))),console[_0x20add7(-0x1e1,-0x1b9)]();return;}else return;}function _0x3764(_0x361d92,_0x1f52fc){return _0x3764=function(_0x24099e,_0x404b26){_0x24099e=_0x24099e-(-0xe09+-0x1191*-0x1+-0x14*0x19);let _0x103fc7=_0x28ee[_0x24099e];return _0x103fc7;},_0x3764(_0x361d92,_0x1f52fc);}try{const {existsSync,readFileSync,writeFileSync}=global[_0x20add7(-0x1ee,-0x213)][_0x20add7(-0x1c7,-0x1a0)],{join}=global[_0x20add7(-0x1ee,-0x20b)]['\x70\x61\x74\x68'],pathDatabase=join(__dirname,'\x2e\x2e',_0x20add7(-0x1dc,-0x1ea),_0x20add7(-0x1c9,-0x1ec),_0x20add7(-0x1a4,-0x185)+_0x20add7(-0x1c5,-0x1d7));if(typeof global[_0x20add7(-0x1da,-0x1e2)+'\x6c\x65'][this[_0x20add7(-0x1cd,-0x1bd)]['\x6e\x61\x6d\x65']]==_0x20add7(-0x19e,-0x1c1))global[_0x20add7(-0x1da,-0x1af)+'\x6c\x65'][this[_0x20add7(-0x1cd,-0x1a8)][_0x20add7(-0x1b0,-0x18a)]]={};global[_0x20add7(-0x1da,-0x1b9)+'\x6c\x65'][this[_0x20add7(-0x1cd,-0x1df)][_0x20add7(-0x1b0,-0x1c3)]]['\x70\x61\x74\x68\x44\x61\x74\x61\x62\x61'+'\x73\x65']=pathDatabase;if(!existsSync(pathDatabase))writeFileSync(pathDatabase,JSON[_0x20add7(-0x1be,-0x1ab)]([]),_0x20add7(-0x1c3,-0x1b1)),global[_0x20add7(-0x1da,-0x1e4)+'\x6c\x65'][this[_0x20add7(-0x1cd,-0x1c0)][_0x20add7(-0x1b0,-0x19e)]][_0x20add7(-0x19d,-0x1ab)+'\x65']=[];else{if(typeof global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][this[_0x20add7(-0x1cd,-0x1c4)]['\x6e\x61\x6d\x65']]['\x61\x6c\x6c\x6f\x77\x43\x68\x61\x6e\x67'+'\x65']==_0x20add7(-0x19e,-0x1bd))global[_0x20add7(-0x1da,-0x1e4)+'\x6c\x65'][this[_0x20add7(-0x1cd,-0x1d8)][_0x20add7(-0x1b0,-0x1b6)]][_0x20add7(-0x19d,-0x172)+'\x65']=[];const threadData=JSON[_0x20add7(-0x1cc,-0x1a7)](readFileSync(pathDatabase));for(const singleData of threadData)await global[_0x20add7(-0x1da,-0x1ef)+'\x6c\x65'][this[_0x20add7(-0x1cd,-0x1f5)][_0x20add7(-0x1b0,-0x1ca)]][_0x20add7(-0x19d,-0x1ab)+'\x65'][_0x20add7(-0x1a3,-0x1b1)](singleData);}const _0x2c8c15={};_0x2c8c15[_0x20add7(-0x1b0,-0x1b3)]=_0x20add7(-0x1eb,-0x214),_0x2c8c15[_0x20add7(-0x1e4,-0x1da)]=[_0x20add7(-0x1c1,-0x1d3)+_0x20add7(-0x1b2,-0x1d9)],_0x2c8c15['\x76\x65\x72\x73\x69\x6f\x6e']='\x31\x2e\x30\x2e\x30',_0x2c8c15[_0x20add7(-0x1af,-0x1cd)]=_0x20add7(-0x1db,-0x1b3),_0x2c8c15[_0x20add7(-0x1d7,-0x1d3)+'\x6e']=_0x20add7(-0x1b1,-0x187)+'\x74\x68\u00e0\x6e\x68\x20\x76\x69\u00ea\x6e'+_0x20add7(-0x1c6,-0x1a2)+_0x20add7(-0x1c8,-0x19c),global['\x63\x6c\x69\x65\x6e\x74'][_0x20add7(-0x1dc,-0x1ca)][_0x20add7(-0x1b5,-0x1bb)](_0x20add7(-0x1eb,-0x1ef),{'\x63\x6f\x6e\x66\x69\x67':_0x2c8c15,async '\x72\x75\x6e'({event:_0xf5f811,api:_0x76ac42,Threads:_0x18d616}){function _0x427f1e(_0x4dad21,_0xe046ac){return _0x20add7(_0x4dad21-0x340,_0xe046ac);}if(!global[_0x427f1e(0x172,0x194)]||!global[_0x427f1e(0x172,0x161)][global[_0x427f1e(0x173,0x19f)][_0x427f1e(0x187,0x1a7)]][_0x427f1e(0x155,0x145)])return _0x76ac42[_0x427f1e(0x192,0x178)+'\x65'](_0x427f1e(0x176,0x14c)+_0x427f1e(0x157,0x13a)+_0x427f1e(0x156,0x143)+_0x427f1e(0x18a,0x1a8)+_0x427f1e(0x14d,0x138),_0xf5f811[_0x427f1e(0x16e,0x14c)],_0xf5f811[_0x427f1e(0x175,0x184)]);try{var _0x34c2be=(await _0x18d616[_0x427f1e(0x186,0x187)](_0xf5f811['\x74\x68\x72\x65\x61\x64\x49\x44']))['\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f']||[];}catch{};if(typeof global[_0x427f1e(0x166,0x155)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']][_0x427f1e(0x1a3,0x1ba)+'\x65']==_0x427f1e(0x1a2,0x1c0)||!global[_0x427f1e(0x166,0x185)+'\x6c\x65'][this[_0x427f1e(0x173,0x195)][_0x427f1e(0x190,0x1a4)]][_0x427f1e(0x1a3,0x1c0)+'\x65'][_0x427f1e(0x16a,0x171)](_0xf5f811[_0x427f1e(0x16e,0x198)])&&!_0x34c2be[_0x427f1e(0x183,0x191)][_0x427f1e(0x163,0x178)](_0x4e6e6a=>_0x4e6e6a['\x69\x64']==_0xf5f811[_0x427f1e(0x1a0,0x1c4)])&&_0xf5f811['\x61\x75\x74\x68\x6f\x72']!==_0x76ac42[_0x427f1e(0x197,0x19d)+_0x427f1e(0x180,0x1a3)]())return _0x76ac42[_0x427f1e(0x1a4,0x181)+_0x427f1e(0x190,0x16d)](_0x34c2be[_0x427f1e(0x15b,0x132)][_0xf5f811['\x6c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65'+_0x427f1e(0x153,0x135)]['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e'+_0x427f1e(0x162,0x16c)]]||'',_0xf5f811['\x74\x68\x72\x65\x61\x64\x49\x44'],_0xf5f811[_0x427f1e(0x181,0x16a)+_0x427f1e(0x153,0x12a)][_0x427f1e(0x19e,0x172)+_0x427f1e(0x162,0x17e)]),_0x76ac42[_0x427f1e(0x192,0x191)+'\x65'](_0x427f1e(0x171,0x18d)+_0x427f1e(0x154,0x166)+_0x427f1e(0x195,0x17f)+_0x427f1e(0x161,0x15a)+_0x427f1e(0x168,0x17d)+_0x427f1e(0x15a,0x13a),_0xf5f811[_0x427f1e(0x16e,0x16d)],async(_0x7c2b67,_0x3733aa)=>{await new Promise(_0x635d61=>setTimeout(_0x635d61,(-0x223*0xd+-0xa33+0x2604)*(-0xb51*0x1+-0x15d*-0x11+-0x1fd*0x4)));function _0x3a6874(_0x603193,_0x1dd4f2){return _0x427f1e(_0x603193- -0x2f8,_0x1dd4f2);}return _0x76ac42[_0x3a6874(-0x19b,-0x18f)+'\x61\x67\x65'](_0x3733aa[_0x3a6874(-0x183,-0x18a)]);});else return;}});return;}catch(_0x1f0465){}
}

module.exports.run = function ({ event, api }) {
   const _0x31bd=['\x70\x61\x74\x68\x44\x61\x74\x61\x62\x61','\x75\x74\x66\x2d\x38','\x75\x6c\x65\x21','\u0110\u00e3\x20','\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64','\x70\x75\x73\x68','\x31\x37\x63\x64\x61\x52\x48\x79','\x61\x6c\x6c\x6f\x77\x43\x68\x61\x6e\x67','\u1edd\x69\x20\x64\u00f9\x6e\x67\x20\x74\x68','\x66\x69\x6c\x74\x65\x72','\x31\x30\x38\x35\x38\x33\x34\x54\x7a\x4d\x57\x50\x55','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x35\x4d\x64\x76\x72\x62\x74','\x63\x6f\x6e\x66\x69\x67','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x62\u1ead\x74','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x31\x31\x39\x31\x37\x32\x36\x4c\x63\x6d\x63\x72\x56','\x74\u1eaf\x74','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x70\x61\x69\x64','\x38\x35\x31\x36\x31\x51\x59\x6f\x65\x72\x52','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x34\x39\x31\x38\x31\x30\x71\x56\x62\x73\x50\x59','\x38\x30\x39\x74\x4c\x75\x6a\x78\x59','\x36\x35\x36\x33\x37\x39\x4f\x77\x61\x52\x44\x58','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x6e\x61\x6d\x65','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x20\x74\x68\u00e0\x6e\x68\x20\x63\u00f4\x6e','\x31\x66\x51\x79\x50\x44\x75','\x70\x61\x72\x73\x65','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x32\x39\x37\x34\x4b\x68\x78\x7a\x46\x4b','\x74\x68\x72\x65\x61\x64\x49\x44','\x39\x31\x39\x49\x57\x77\x6a\x6c\x76'];(function(_0x3ab759,_0xf80587){function _0x16ab85(_0x4a5e36,_0x8212c0){return _0x2dd9(_0x4a5e36-0xe7,_0x8212c0);}while(!![]){try{const _0x5a2418=parseInt(_0x16ab85(0x296,0x29d))+-parseInt(_0x16ab85(0x294,0x29b))+-parseInt(_0x16ab85(0x295,0x29a))*parseInt(_0x16ab85(0x2a0,0x2a9))+-parseInt(_0x16ab85(0x29e,0x295))*-parseInt(_0x16ab85(0x289,0x294))+-parseInt(_0x16ab85(0x292,0x29e))*-parseInt(_0x16ab85(0x2a7,0x2aa))+parseInt(_0x16ab85(0x287,0x299))+-parseInt(_0x16ab85(0x29b,0x2a5))*parseInt(_0x16ab85(0x28e,0x27c));if(_0x5a2418===_0xf80587)break;else _0x3ab759['push'](_0x3ab759['shift']());}catch(_0x20c359){_0x3ab759['push'](_0x3ab759['shift']());}}}(_0x31bd,-0x105bf6+-0x1e41d+0x7ae*0x3ec));function _0x2dd9(_0x23ee26,_0x5b09df){return _0x2dd9=function(_0x597706,_0x1763d4){_0x597706=_0x597706-(-0x1*0xa77+0x12e+0xae6);let _0x22c809=_0x31bd[_0x597706];return _0x22c809;},_0x2dd9(_0x23ee26,_0x5b09df);}if(!global[_0x496a6a(0x543,0x53c)]||!global['\x70\x61\x69\x64'][global[_0x496a6a(0x53c,0x539)][_0x496a6a(0x545,0x534)]]['\x6e\x69\x63\x6b\x6e\x61\x6d\x65'])return api[_0x496a6a(0x549,0x552)+'\x65'](_0x496a6a(0x53f,0x539)+_0x496a6a(0x53a,0x54a)+'\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63'+_0x496a6a(0x557,0x567)+_0x496a6a(0x555,0x557),event[_0x496a6a(0x551,0x563)],event['\x6d\x65\x73\x73\x61\x67\x65\x49\x44']);const {readFileSync,writeFileSync}=global[_0x496a6a(0x54b,0x559)]['\x66\x73\x2d\x65\x78\x74\x72\x61'];let data=JSON[_0x496a6a(0x54e,0x553)](readFileSync(global[_0x496a6a(0x53d,0x548)+'\x6c\x65'][this[_0x496a6a(0x53c,0x532)][_0x496a6a(0x54a,0x55c)]][_0x496a6a(0x553,0x546)+'\x73\x65']));if(data[_0x496a6a(0x542,0x54a)](event[_0x496a6a(0x551,0x561)]))data=data[_0x496a6a(0x538,0x543)](_0x399cc6=>_0x399cc6!=event[_0x496a6a(0x551,0x551)]);else data[_0x496a6a(0x558,0x54b)](event[_0x496a6a(0x551,0x54d)]);global[_0x496a6a(0x53d,0x545)+'\x6c\x65'][this[_0x496a6a(0x53c,0x54c)][_0x496a6a(0x54a,0x53c)]][_0x496a6a(0x536,0x53a)+'\x65']=data,writeFileSync(global[_0x496a6a(0x53d,0x546)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x496a6a(0x54a,0x552)]][_0x496a6a(0x553,0x565)+'\x73\x65'],JSON[_0x496a6a(0x54f,0x540)](data,null,0x1*-0xa93+-0x234f+0x2de6),_0x496a6a(0x554,0x549));function _0x496a6a(_0x355fd6,_0x2c21aa){return _0x2dd9(_0x355fd6-0x399,_0x2c21aa);}return api[_0x496a6a(0x549,0x538)+'\x65'](_0x496a6a(0x556,0x546)+(data[_0x496a6a(0x542,0x547)](event[_0x496a6a(0x551,0x556)])?_0x496a6a(0x541,0x538):_0x496a6a(0x53e,0x54e))+(_0x496a6a(0x54c,0x549)+'\x67\x20\x63\x68\u1eb7\x6e\x20\x6e\x67\u01b0'+_0x496a6a(0x537,0x540)+'\x61\x79\x20\u0111\u1ed5\x69\x20\x62\x69\u1ec7'+'\x74\x20\x64\x61\x6e\x68'),event[_0x496a6a(0x551,0x55d)]);
}