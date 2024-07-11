import execjs
import requests

with open("wukuang.js", encoding='utf-8') as f1:
    js_code = f1.read()

ctll = execjs.compile(js_code)

def index():
    headers_index = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Length": "0",
        "Origin": "https://ec.minmetals.com.cn",
        "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^126^^, ^\\^Google",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "Windows"
    }

    url = "https://ec.minmetals.com.cn/open/homepage/public"
    response = requests.post(url, headers=headers_index)
    return response.cookies, response.text

cookies, text = index()


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://ec.minmetals.com.cn",
    "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info/?tabIndex=0",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^126^^, ^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows"
}
cookies = {
    "SUNWAY-ESCM-COOKIE": cookies["SUNWAY-ESCM-COOKIE"],
    "__jsluid_s": cookies["__jsluid_s"],
    # "JSESSIONID": "A13074BFA639C2DF5C98AF64F995DAAA"
}
url = "https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page"

#请求js，获取param参数

params = {
    "inviteMethod": "",
    "businessClassfication": "",
    "mc": "",
    "lx": "ZGYS",
    "dwmc": "",
    "pageIndex": 1
}

params_enc = ctll.call("get_data", text, params)
print(params_enc)
data = {
    "param": params_enc
}

response = requests.post(url, headers=headers, cookies=cookies, json=data)

print(response.text)



