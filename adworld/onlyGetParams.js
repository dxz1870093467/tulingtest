
// 引入必要的包
const { TextEncoder } = require('util');

//补环境
const window = global;

// 将自定义的函数赋值给 window["TextEncoder"]
window.TextEncoder = TextEncoder;

//默认数组集合
_0x5b4f01 = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/"
]

//每一个机器的 _0x4ba867 值是不一样的， 但是每个机器每一次请求时 _0x4ba867 固定的
_0x4ba867 = 'c1eeb43e8d6b7830a1cd1d88a02bac0b'
//翻页改变 page 的参数
_0x4a182b = "event_status=&event_type=&isSearch=false&page=7&page_size=20&search="

//---------------------------------------------------------------------cookie 解析 start-----------------------------------------------------------------------
function _0x2f41b5(_0x11873c, _0x590c52) {
    var  _0x119353, _0x4d44d3;
    if (void 0x0 === _0x590c52 && (_0x590c52 = "base64"),
    'string' != typeof _0x11873c)
        return _0x11873c;
    var _0x5a18ae = (_0x119353 = new window["TextEncoder"]()["encode"](_0x11873c))["length"] + 0x4 + 0x1;
    _0x4d44d3 = new Uint8Array(new ArrayBuffer(_0x5a18ae));
    for (var _0x4d24a4 = 0x38, _0x5099bf = 0x0, _0x36404e = 0x0; _0x36404e < 0x3; _0x36404e++)
        _0x4d44d3[_0x5099bf] = Math["round"](0xa * Math["random"]()),
            _0x4d24a4 ^= _0x4d44d3[_0x5099bf],
            _0x5099bf++;
    _0x4d44d3[_0x5099bf] = 0x3f ^ _0x4d44d3[0x1],
        _0x4d24a4 ^= _0x4d44d3[_0x5099bf],
        _0x5099bf++;
    for (var _0x47892e = 0x0; _0x47892e < _0x119353['length']; _0x47892e++)
        _0x4d24a4 ^= _0x119353[_0x47892e],
            _0x4d44d3[_0x5099bf++] = _0x119353[_0x47892e] ^ _0x4d44d3[_0x47892e % 0x3] ^ 0x65 ^ _0x47892e + _0x4d44d3[0x0];
    _0x4d44d3[_0x5099bf] = _0x4d24a4;
    var _0x4642e3 = '';
    if ("base64" === _0x590c52)
        _0x4642e3 = _0x28d5bc(_0x4d44d3);
    return _0x4642e3;
}

function _0x28d5bc(_0x4014a9) {
    for (var _0x1e3ea1, _0x470118 = _0x4014a9['length'], _0x4b1cc3 = _0x470118 % 0x3, _0x527770 = [], _0x4a3268 = 0x3fff, _0x14d005 = 0x0, _0x1690ed = _0x470118 - _0x4b1cc3; _0x14d005 < _0x1690ed; _0x14d005 += _0x4a3268)
        _0x527770['push'](_0x16a3e9(_0x4014a9, _0x14d005, _0x14d005 + _0x4a3268 > _0x1690ed ? _0x1690ed : _0x14d005 + _0x4a3268));
    return 0x1 === _0x4b1cc3 ? (_0x1e3ea1 = _0x4014a9[_0x470118 - 0x1],
        _0x527770['push'](_0x5b4f01[_0x1e3ea1 >> 0x2] + _0x5b4f01[_0x1e3ea1 << 0x4 & 0x3f] + '==')) : 0x2 === _0x4b1cc3 && (_0x1e3ea1 = (_0x4014a9[_0x470118 - 0x2] << 0x8) + _0x4014a9[_0x470118 - 0x1],
        _0x527770["push"](_0x5b4f01[_0x1e3ea1 >> 0xa] + _0x5b4f01[_0x1e3ea1 >> 0x4 & 0x3f] + _0x5b4f01[_0x1e3ea1 << 0x2 & 0x3f] + '=')),
        _0x527770["join"]('');
}


function _0x16a3e9(_0x2eb402, _0x3a04b5, _0x2ac929) {
    for (var _0x4edef6, _0x3b40f9, _0x38a1e5 = [], _0x5633f1 = _0x3a04b5; _0x5633f1 < _0x2ac929; _0x5633f1 += 0x3)
        _0x4edef6 = (_0x2eb402[_0x5633f1] << 0x10 & 0xff0000) + (_0x2eb402[_0x5633f1 + 0x1] << 0x8 & 0xff00) + (0xff & _0x2eb402[_0x5633f1 + 0x2]),
            _0x38a1e5["push"](_0x5b4f01[(_0x3b40f9 = _0x4edef6) >> 0x12 & 0x3f] + _0x5b4f01[_0x3b40f9 >> 0xc & 0x3f] + _0x5b4f01[_0x3b40f9 >> 0x6 & 0x3f] + _0x5b4f01[0x3f & _0x3b40f9]);
    return _0x38a1e5["join"]('');
}
//---------------------------------------------------------------------cookie 解析 end-----------------------------------------------------------------------

//---------------------------------------------------------------------qmze1yzvhyzcyyjr 解析 start-----------------------------------------------------------
function _0x1dc70(_0x352f0a, _0x35a420) {
    return void 0x0 === _0x35a420 && (_0x35a420 = 'base64'),
        "string" != typeof _0x352f0a ? _0x352f0a : null == (_0x431613 = undefined) || '' == _0x431613 ? _0x2f41b5(_0x352f0a, _0x35a420) : function (_0x1cf6d2, _0x3bbb92) {
            var _0x39d129 = _0x15eb6d;
            return void 0x0 === _0x3bbb92 && (_0x3bbb92 = _0x39d129(0x247)),
                (0x0,
                    encryptPublicLong)(_0x1cf6d2, undefined);
        }(_0x4a182b, "base64");
    var _0x431613;
}

encryptPublicLong = function (_0x313507, _0x246cb1) {
    return "";
}
//---------------------------------------------------------------------qmze1yzvhyzcyyjr 解析 end-----------------------------------------------------------

console.log(_0x2f41b5(_0x4ba867, undefined))
console.log(encodeURIComponent(_0x1dc70(_0x4a182b, undefined)))
