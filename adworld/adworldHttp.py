import requests

'''
21题
使用线程池采集本站点数据
地址：https://adworld.xctf.org.cn/contest/list
字段：标题、时间、主办方
交付：提交各功能核心截图
'''

#如果加上 cngizm2ziytq3mwy 和 xhnjc3odeyndrhmj 参数，就只能获取单页加密数据。
#如果不加 就返回 单页 不加密总数据
headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN",
    "Connection": "keep-alive",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "en2uwnjgxodjhogi": "1",
    # "rdmje1ymjkyzrknj": "AwgFNx5LBxIFHxwCGT4ZHgxfS1Y9HAEUGhtWVl8eDlpIYhAmLSYnMTJnZW4kPiQ0PDMuFzs+PD4/emV1GTY5MDIPDQZPUUdCSHFNTg8bDxESAlEPVVcBDgYEAF4BCwJWXjU7ZDc+MDIybGllO2thLCU/cnVwYnJoSHdwOCczfyFxg4GMh9regNmDi9+F39LUjMCZwMDLxJOcmsfEn8/S0tuppLK6q6yntOz+rKytvq3u8rKptryslb28ureVs669q4SWk9hW",
    "sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    # "xhnjc3odeyndrhmj": "BQYIOT0oJiAeExs9BR8ZGAIFOg=="
}
cookies = {
    "cngizm2ziytq3mwy": "7RcfKFOkrU606ki/7Em2ukWxs0e24hUXTbhHGuhCG+ZPQeBG+g==",
    "fogq4n2exnzc0otg": "CgMBPAZcDQcKX0wSThhEE05JT0YdThAfSxR+fSx1cighIHctCQ=="
}
url = "https://adworld.xctf.org.cn/api/event/release_event/list/"
params = {
    # "qmze1yzvhyzcyyjr": "CgcGOAAfCgwYMwwHEAgDBURTHgAdFgcgCQkyJ3BnLjkXISY5KixzKCAhIDt2IDowMGVrfCU4ODcDL0ZZRBEUFg9WTkdaS0sSDw=="
    "qmze1yzvhyzcyyjr": "BAAAPwAWBggZMxgaCBgeGUxSEgQUHgMtCQEPG0BeEg0WISI0Iix%2BJCggPC9vOC4tMG1gcCUxNDMCLzIkPGFpagdXQkNTQ08fAQ%3D%3D"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)