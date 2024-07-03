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

current_timestamp = int(time.time() * 1000)  #1720007099875

# 调用JavaScript接口
# 定义请求参数
requets_time = current_timestamp
offset = 0
limit = 20
trace_id = matchTraceId

# 构建请求 URL 和参数
url = 'http://localhost:3000/get'
params = {
    'requets_time': requets_time,
    'offset': offset,
    'limit': limit,
    'trace_id': trace_id
}

def dyfun(data):
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
        "x-apikey": data["X-Apikey"],  # 加密
        "devid": data["Devid"],  # 加密
        "ok-verify-sign": data["Ok-Verify-Sign"],  # 加密
        "ok-verify-token": data["Ok-Verify-Token"],  # 加密
        "x-id-group": data["X-Id-Group"],  # 加密
    }
    url = "https://www.oklink.com/api/explorer/v1/btc/transactionsNoRestrict"
    params = {
        "offset": offset,
        "limit": limit,
        "t": current_timestamp
    }

    cookies = {
        "aliyungf_tc": "84327dd30cb91c7a1dfa9d713f9b53421cd9cef3b1d234760358e061031d0b28",
        "devId": data["Devid"],  # 加密
        # "ok-ses-id": "9x6UwkzE66KVMBREfh3yCt03eNyW5zRu7sqm30RFgbFHWMQ5KY8hCJQWHbKybLuoOgXRGZ2JVgi4NQo37lo9kkL8yIIXoa0iZE/UkmwC3xUC1UW5jgOIqAh1h6h7ZC38",
    }

    response = requests.get(url, headers=headers, params=params, cookies=cookies)

    print(response.text)


try:
    # 发送同步 GET 请求
    response = requests.get(url, params=params)

    # 检查响应状态码
    if response.status_code == 200:
        # 处理成功的响应
        data = response.json()  # 假设响应内容是 JSON 格式
        print("Response received:", data)
        #调用一次okx接口
        dyfun(data)
    else:
        print(f"Error occurred: {response.status_code}")

except requests.RequestException as e:
    # 处理请求异常
    print("Error occurred:", e)