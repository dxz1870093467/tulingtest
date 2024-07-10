import requests

"""
23.(问答题)公共服务数据采集，打开站点采集数据100条、要求对标题进行hash处理去重
地址:https://www.ynjzjgcx.com/dataPub/enterprise
字段：企业名称  信用代码 企业注册地
交付：提交各功能核心截图
"""

#每翻一次页，就需要滑动验证码校验
headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
    "Sec-Fetch-Dest": None,
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "Referer": "https://www.ynjzjgcx.com/dataPub/enterprise",
    "Origin": "https://www.ynjzjgcx.com",
    "Content-Type": "application/json;charset=UTF-8",
    "appId": "84ded2cd478642b2",
    "isToken": "false",
    "Host" : "www.ynjzjgcx.com"
}

url = "https://www.ynjzjgcx.com/prod-api/mohurd-pub/vcode/genVcode"
data = {
    "params": "eQqbhIu8fa3LrHHjQSdh4diW7+jgPUxyHbQa2EGr53Idei9OT//LmsFo6hItomdgvcr2uG14v5I3Y6seRYS8ePrKrejC0/yxe8tJt4sUBJ801gtAxc8c1IbWE0aqVgyFFyFRjdJFwVvj73UUw6MAbN4ZYpM3nUBLpXiXeltDROs="
}
response = requests.post(url, headers=headers, json=data)

print(response.text)
print(response)