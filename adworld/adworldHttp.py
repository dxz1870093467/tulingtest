import requests

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
    # "fogq4n2exnzc0otg": "CgcHOFYNV1NaWEtBQRgSQR1MQ0QdTUFHSEUnenpxJX9xdSV8Bg=="
    "fogq4n2exnzc0otg": "CQcBOAZZCgUNXlAXTRpHEk5MQEQaTxQaSBZFfCxwdSomIXsoCg=="
}
url = "https://adworld.xctf.org.cn/api/event/release_event/list/"
params = {
    "qmze1yzvhyzcyyjr": "BAEBPgAXBwgYMhgbCRgfGExTEwQVHwMsCAEOGkBfEw0XICI1Iyx%2FJSghPS9uOS4sMW1kcSUwNTMDLjIlPWFoawdWQ0NSQk8eBQ%3D%3D"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)