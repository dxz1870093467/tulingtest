// s 参数破解
window = global;
const to = 16,
Di = Uint8Array.from([214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72])
L_e = Uint32Array.from([462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257])
Oi = Uint32Array.from([2746333894, 1453994832, 1736282519, 2993693404])
G_e = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC29miF1Wp9XlhCECo+FYpCHad1ipEMgXf4IdgYjMIQwczzo9GXdcZ4eeV+9lkh6+aTqzzU843rdkMt0vrSnujU+GOuDPLfa5LZ6SfanAoysi6xxTX02Xizb3k+Z1USIzm9QAwE+SR1AQ78rGTRFHWFu7OGPkVNeF+vrX3inQTiawIDAQAB";
function uint8ArrayToBase64(uint8Array) {
    // 将 Uint8Array 转换为普通的字符串
    let binaryString = '';
    for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
    }

    // 将普通的字符串转换为 Base64 编码字符串
    const base64String = btoa(binaryString);
    return base64String;
}
class Er {
    static stringToArrayBufferInUtf8(t) {
        const encoder = new TextEncoder();
        const uint8Array =encoder.encode(t);
        return Array.from(uint8Array);
    }
    static utf8ArrayBufferToString(t) {
        const n = typeof window == "undefined" ? yd.TextDecoder : window.TextDecoder;
        return new n("utf-8").decode(t)
    }
    static arrayBufferToBase64(t) {
        return uint8ArrayToBase64(t)
    }
    static base64ToArrayBuffer(t) {
        return null
    }
}
class N_e {
    constructor(t) {
        let n = Er.stringToArrayBufferInUtf8(t.key);
        if (n.length !== 16)
            throw new Error("key should be a 16 bytes string");
        this.key = n;
        let o = new Uint8Array(0);
        if (t.iv !== void 0 && t.iv !== null && (o = Er.stringToArrayBufferInUtf8(t.iv),
        o.length !== 16))
            throw new Error("iv should be a 16 bytes string");
        this.iv = o,
        this.mode = "cbc",
        ["cbc", "ecb"].indexOf(t.mode) >= 0 && (this.mode = t.mode),
        this.cipherType = "base64",
        ["base64", "text"].indexOf(t.outType) >= 0 && (this.cipherType = t.outType),
        this.encryptRoundKeys = new Uint32Array(32),
        this.spawnEncryptRoundKeys(),
        this.decryptRoundKeys = Uint32Array.from(this.encryptRoundKeys),
        this.decryptRoundKeys.reverse()
    }
    doBlockCrypt(t, n) {
        let o = new Uint32Array(36);
        o.set(t, 0);
        for (let s = 0; s < 32; s++)
            o[s + 4] = o[s] ^ this.tTransform1(o[s + 1] ^ o[s + 2] ^ o[s + 3] ^ n[s]);
        let r = new Uint32Array(4);
        return r[0] = o[35],
        r[1] = o[34],
        r[2] = o[33],
        r[3] = o[32],
        r
    }
    spawnEncryptRoundKeys() {
        let t = new Uint32Array(4);
        t[0] = this.key[0] << 24 | this.key[1] << 16 | this.key[2] << 8 | this.key[3],
        t[1] = this.key[4] << 24 | this.key[5] << 16 | this.key[6] << 8 | this.key[7],
        t[2] = this.key[8] << 24 | this.key[9] << 16 | this.key[10] << 8 | this.key[11],
        t[3] = this.key[12] << 24 | this.key[13] << 16 | this.key[14] << 8 | this.key[15];
        let n = new Uint32Array(36);
        n[0] = t[0] ^ Oi[0],
        n[1] = t[1] ^ Oi[1],
        n[2] = t[2] ^ Oi[2],
        n[3] = t[3] ^ Oi[3];
        for (let o = 0; o < 32; o++)
            n[o + 4] = n[o] ^ this.tTransform2(n[o + 1] ^ n[o + 2] ^ n[o + 3] ^ L_e[o]),
            this.encryptRoundKeys[o] = n[o + 4]
    }
    rotateLeft(t, n) {
        return t << n | t >>> 32 - n
    }
    linearTransform1(t) {
        return t ^ this.rotateLeft(t, 2) ^ this.rotateLeft(t, 10) ^ this.rotateLeft(t, 18) ^ this.rotateLeft(t, 24)
    }
    linearTransform2(t) {
        return t ^ this.rotateLeft(t, 13) ^ this.rotateLeft(t, 23)
    }
    tauTransform(t) {
        return Di[t >>> 24 & 255] << 24 | Di[t >>> 16 & 255] << 16 | Di[t >>> 8 & 255] << 8 | Di[t & 255]
    }
    tTransform1(t) {
        let n = this.tauTransform(t);
        return this.linearTransform1(n)
    }
    tTransform2(t) {
        let n = this.tauTransform(t);
        return this.linearTransform2(n)
    }
    padding(t) {
        if (t === null)
            return null;
        let n = to - t.length % to
          , o = new Uint8Array(t.length + n);
        return o.set(t, 0),
        o.fill(n, t.length),
        o
    }
    dePadding(t) {
        if (t === null)
            return null;
        let n = t[t.length - 1];
        return t.slice(0, t.length - n)
    }
    uint8ToUint32Block(t, n=0) {
        let o = new Uint32Array(4);
        return o[0] = t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3],
        o[1] = t[n + 4] << 24 | t[n + 5] << 16 | t[n + 6] << 8 | t[n + 7],
        o[2] = t[n + 8] << 24 | t[n + 9] << 16 | t[n + 10] << 8 | t[n + 11],
        o[3] = t[n + 12] << 24 | t[n + 13] << 16 | t[n + 14] << 8 | t[n + 15],
        o
    }
    encrypt(t) {
        let n = Er.stringToArrayBufferInUtf8(t)
          , o = this.padding(n)
          , r = o.length / to
          , s = new Uint8Array(o.length);
        if (this.mode === "cbc") {
            if (this.iv === null || this.iv.length !== 16)
                throw new Error("iv error");
            let a = this.uint8ToUint32Block(this.iv);
            for (let l = 0; l < r; l++) {
                let i = l * to
                  , c = this.uint8ToUint32Block(o, i);
                a[0] = a[0] ^ c[0],
                a[1] = a[1] ^ c[1],
                a[2] = a[2] ^ c[2],
                a[3] = a[3] ^ c[3];
                let u = this.doBlockCrypt(a, this.encryptRoundKeys);
                a = u;
                for (let f = 0; f < to; f++)
                    s[i + f] = u[parseInt(f / 4)] >> (3 - f) % 4 * 8 & 255
            }
        } else
            for (let a = 0; a < r; a++) {
                let l = a * to
                  , i = this.uint8ToUint32Block(o, l)
                  , c = this.doBlockCrypt(i, this.encryptRoundKeys);
                for (let u = 0; u < to; u++)
                    s[l + u] = c[parseInt(u / 4)] >> (3 - u) % 4 * 8 & 255
            }
        return this.cipherType === "base64" ? Er.arrayBufferToBase64(s) : Er.utf8ArrayBufferToString(s)
    }
    decrypt(t) {
        let n = new Uint8Array;
        this.cipherType === "base64" ? n = Er.base64ToArrayBuffer(t) : n = Er.stringToArrayBufferInUtf8(t);
        let o = n.length / to
          , r = new Uint8Array(n.length);
        if (this.mode === "cbc") {
            if (this.iv === null || this.iv.length !== 16)
                throw new Error("iv error");
            let a = this.uint8ToUint32Block(this.iv);
            for (let l = 0; l < o; l++) {
                let i = l * to
                  , c = this.uint8ToUint32Block(n, i)
                  , u = this.doBlockCrypt(c, this.decryptRoundKeys)
                  , f = new Uint32Array(4);
                f[0] = a[0] ^ u[0],
                f[1] = a[1] ^ u[1],
                f[2] = a[2] ^ u[2],
                f[3] = a[3] ^ u[3],
                a = c;
                for (let d = 0; d < to; d++)
                    r[i + d] = f[parseInt(d / 4)] >> (3 - d) % 4 * 8 & 255
            }
        } else
            for (let a = 0; a < o; a++) {
                let l = a * to
                  , i = this.uint8ToUint32Block(n, l)
                  , c = this.doBlockCrypt(i, this.decryptRoundKeys);
                for (let u = 0; u < to; u++)
                    r[l + u] = c[parseInt(u / 4)] >> (3 - u) % 4 * 8 & 255
            }
        let s = this.dePadding(r);
        return Er.utf8ArrayBufferToString(s)
    }
}
function X0() {
    const e = ["tuLhzK1bmeDdu3fhu0LIm0rrrujbuvvbqtrhtKfeq0jPuuTcz1fdmJLTAuyXv3a5wgXOq0vdBYTgwxbdsgfKmwLWru1Nwgy0swrNwwPnsvf3y3P6BZLhwgrJwJrLzvyRowXRAdyRyvrXENPvodqZCMrRtxqWDNjtBNvQvsTht3veueXMytvmwJztzMfUqw95C2K2EhHuwdaYwgL6yJnRk1OXvvnjEM05uuf3rsTtuJfbutC4CKDuuKziv0z1n09hugTwtMvgk3zYwdnPBLfuAwf3surbuufc", "wwHVDNLSB1jzC00Rsvm5Ac8WqNPSruf1tZbRDe1rswDtufqZyuzbz0PzD0TWCvjzs2XmrfzJzMXArKnlwtD1mWO", "mJG2odzkvejiuge", "mJfsyKzgufC", "y2vPBa", "uhvim293surbuufcqwTbzM9PthLmk1O0Bgy0txL4AZz4vurNtgfxr3HPBwOYmenvzIS1qKTlBMXYsYTfzdHNqqO", "vva4AvDPmvf3mfK9", "C2v0uhvIBgLJs2v5", "A00WshfVvhqYvvP3qtvfmK16uZrfstjNAMzrAhO1wdi4Dxf4qwLfqtn3tKz4zNjdwMXtwKHImgDUmNPeCfDVDWO", "x19WCM90B19F", "mJeYnJG2nw9HAvHyyW", "C2v0uhjPDMf0zuTLEq", "zw5JCNLWDa", "mtKZnda0D3rKsKfS", "Dg9tDhjPBMC", "DhjHy2u", "C3bSAxq", "mti5mtm2mhrqD0fYwq", "mte4mJG4ohvlDKrKCa", "DgfIBgu", "zgvJCNLWDa", "ChjVDg90ExbL", "rffjz0LKAerusxfemMPMwwPqvfK4sMOZrurhugjimKHiDwzMDMzSrun0m0vRnJbdsvfdrLjSq2TiCgK3AhrOAaO", "zxjYB3i", "tuLjqLzbsujbrefoqMDRCwHRAuC5DZbcqvffrKfbu0nbvdr3z2DfnKfNrufbA0vbCwHiEvPMu3nzB3vYtNHHwqO", "mte0nZuYCwHrvfvP", "AM9PBG", "yxbWBhK", "yMLUza", "ChvZAa", "y1n4uufNAunZDhHhvw9pCwXxoenjuuret2vYr0Tinu9Tq0O0wJiXDITgmJvxyuHzuhHdrK12D3HWy3C5ouvJDGO", "nda1otbHCgvcvw4", "BgvUz3rO", "y29UC29Szq", "Aw5MBW", "zxHJzxb0Aw9U", "Bg9N", "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK"];
    return X0 = function() {
        return e
    }
    ,
    X0()
}
function _o(e, t) {
    const n = X0();
    return _o = function(o, r) {
        o = o - 250;
        let s = n[o];
        if (_o.OXgtVN === void 0) {
            var a = function(u) {
                const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                let d = ""
                  , p = "";
                for (let h = 0, g, v, x = 0; v = u.charAt(x++); ~v && (g = h % 4 ? g * 64 + v : v,
                h++ % 4) ? d += String.fromCharCode(255 & g >> (-2 * h & 6)) : 0)
                    v = f.indexOf(v);
                for (let h = 0, g = d.length; h < g; h++)
                    p += "%" + ("00" + d.charCodeAt(h).toString(16)).slice(-2);
                return decodeURIComponent(p)
            };
            _o.DAkxty = a,
            e = arguments,
            _o.OXgtVN = !![]
        }
        const l = n[0]
          , i = o + l
          , c = e[i];
        return c ? s = c : (s = _o.DAkxty(s),
        e[i] = s),
        s
    }
    ,
    _o(e, t)
}
function W_e() {
    const e = _o
      , t = {};
    t["key"] = 'B6*40.2_C9#e4$E3',
    t["mode"] = 'ecb',
    t["cipherType"] = 'base64';
    const n = t
      , o = N_e;
    return new o(n)
}
console.log(W_e().encrypt("{\"type\":\"query\"}"))
// s 参数破解