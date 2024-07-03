import requests
import time
import re
import execjs

def get_traceId():
    headers_traceId = {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "max-age=0",
        "priority": "u=0, i",
        "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^126^^, ^\\^Google",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "Windows",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        "Referer": "https://www.oklink.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
    }
    url = "https://www.oklink.com/zh-hans/btc/tx-list"
    response = requests.get(url, headers=headers_traceId)
    tx_list = response.text
    # 使用正则表达式查找 traceId 后面的值
    pattern = r'"traceId":\s*"(\d+)"'
    matchTraceId = re.search(pattern, tx_list).group(1)
    return matchTraceId

matchTraceId = get_traceId()

current_timestamp = int(time.time())

# 读取JavaScript文件
with open("verifyParams.js", "r") as file:
    js_code = file.read()

# 编译JavaScript代码
ctx = execjs.compile(js_code)

# 调用JavaScript函数
result = ctx.call("add", 3, 4)

headers = {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9",
    "app-type": "web",
    "priority": "u=1, i",
    "referer": "https://www.oklink.com/zh-hans/btc/tx-list/page/1",
    "sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "sec-fetch-dest": "",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "x-cdn": "https://static.oklink.com",
    "x-locale": "zh_CN",
    "x-site-info": "9FjOikHdpRnblJCLiskTJx0SPJiOiUGZvNmIsIiTDJiOi42bpdWZyJye",
    "x-utc": "8",
    "x-zkdex-env": "0",
    "x-apikey": "LWIzMWUtNDU0Ny05Mjk5LWI2ZDA3Yjc2MzFhYmEyYzkwM2NjfDI4MzEwODA5MTM3NjAyNDg=",  # 加密
    "devid": "ccd76455-5828-4ea1-bf9c-01cdc37097bd",  # 加密
    "ok-verify-sign": "GFilASlnwmbJ/wYW7mpAzAf5gavInZMwnRRmlLNbVQA=",  # 加密
    "ok-verify-token": "40a61f2a-a58f-4edf-9868-b02fd7b21271",  # 加密
    "x-id-group": matchTraceId + "-c-1",  # 加密
}
url = "https://www.oklink.com/api/explorer/v1/btc/transactionsNoRestrict"
params = {
    "offset": "20",
    "limit": "20",
    "t": current_timestamp
}

cookies = {
    "aliyungf_tc" : "fd83fe359df50a6f60f455e820cf3ce815684db02bd112e4b1a0c9198711d7e9",
    "devId" : "ccd76455-5828-4ea1-bf9c-01cdc37097bd",  #加密
    "ok-ses-id" : "9x6UwkzE66KVMBREfh3yCt03eNyW5zRu7sqm30RFgbFHWMQ5KY8hCJQWHbKybLuoOgXRGZ2JVgi4NQo37lo9kkL8yIIXoa0iZE/UkmwC3xUC1UW5jgOIqAh1h6h7ZC38",
}

response = requests.get(url, headers=headers, params=params, cookies=cookies)

print(response.text)
