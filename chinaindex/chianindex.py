import requests


headers = {
    # "Upgrade-Insecure-Requests": "1",
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
    # "UUID": "68915f72-3e40-5081-8a48-196b8459162d",
    "funcID": None,
    "incognitoMode": "0",
    "Referer" : "https://www.chinaindex.net/ranklist/5",
    "Host" :"www.chinaindex.net",
    "Accept-Encoding":"gzip, deflate, br, zstd"

}
cookies = {
    # "mobile_iindex_uuid": "68915f72-3e40-5081-8a48-196b8459162d",
    # "Hm_lvt_2873e2b0bdd5404c734992cd3ae7253f": "1719459633",
    # "Hm_lpvt_2873e2b0bdd5404c734992cd3ae7253f": "1719460455"
}

url = "https://www.chinaindex.net/iIndexMobileServer/teleplay/rank/waiting/fans"

params = {
    # "sign":"46cf510e48f99667216bfa781d6bebab"
}

response = requests.get(url, headers=headers)
print(response.text)
