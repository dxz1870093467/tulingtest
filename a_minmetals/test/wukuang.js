const JSEncrypt = require('jsencrypt')
const CryptoJS = require('crypto-js');
const axios = require('axios')

function w(A) {
            var e, t, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = "=";
            for (e = 0; e + 3 <= A.length; e += 3)
                t = parseInt(A.substring(e, e + 3), 16),
                n += r.charAt(t >> 6) + r.charAt(63 & t);
            e + 1 == A.length ? (t = parseInt(A.substring(e, e + 1), 16),
            n += r.charAt(t << 2)) : e + 2 == A.length && (t = parseInt(A.substring(e, e + 2), 16),
            n += r.charAt(t >> 2) + r.charAt((3 & t) << 4));
            while ((3 & n.length) > 0)
                n += a;
            return n
        }
JSEncrypt.prototype.encryptLong = function(A) {
            var e = this.getKey()
              , t = (e.n.bitLength() + 7 >> 3) - 11;
            try {
                var n = ""
                  , r = "";
                if (A.length > t)
                    return n = A.match(/.{1,50}/g),
                    n.forEach((function(A) {
                        var t = e.encrypt(A);
                        r += t
                    }
                    )),
                    w(r);
                var a = e.encrypt(A)
                  , s = w(a);
                return s
            } catch (i) {
                return i
            }
        }
var t = new JSEncrypt();

a = {
    "inviteMethod": "",
    "businessClassfication": "",
    "mc": "",
    "lx": "ZBGG",
    "dwmc": "",
    "pageIndex": 1
}


function get_data(key, a) {
    t.setPublicKey(key)
    a['sign'] = CryptoJS.MD5(JSON.stringify(a)).toString()
    a["timeStamp"] = +new Date
    return t.encryptLong(JSON.stringify(a))
}



