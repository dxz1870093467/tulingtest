import requests

"""
22.(问答题)采集本站首页数据top10
地址：https://www.chinaindex.net/ranklist/5
字段：字段不限、存储使用mongodb
交付：提供数据和代码截图即可说明：禁止使用自动化等技术
"""

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0",
    "sec-ch-ua": '"Chromium";v="124", "Microsoft Edge";v="124", "Not-A.Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Connection": "keep-alive",
    "If-Modified-Since": "Tue, 19 Mar 2024 07:01:19 GMT",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Origin": "https://www.chinaindex.net",
    "funcID": None,
    "incognitoMode": "0",
    "Referer" : "https://www.chinaindex.net/ranklist/5",
    "Host" :"www.chinaindex.net",
    "Accept-Encoding":"gzip, deflate, br, zstd"

}
#不携带也可以
cookies = {
}

url = "https://www.chinaindex.net/iIndexMobileServer/teleplay/rank/waiting/fans"

##不携带也可以
params = {
}

response = requests.get(url, headers=headers)
print(response.text)
