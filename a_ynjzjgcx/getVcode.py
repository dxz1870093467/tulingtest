import json
import base64
import execjs
import requests
from fake_useragent import UserAgent
import time

from a_ynjzjgcx.yunma.Vcode_jfbm import YdmVerify

"""
23.(问答题)公共服务数据采集，打开站点采集数据100条、要求对标题进行hash处理去重
地址:https://www.ynjzjgcx.com/dataPub/enterprise
字段：企业名称  信用代码 企业注册地
交付：提交各功能核心截图
"""

def get_page_info(params):
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "max-age=0",
        "Connection": "keep-alive",
        "If-Modified-Since": "Mon, 03 Jun 2024 13:33:29 GMT",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        "Sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "Windows",
        "Referer": "https://www.ynjzjgcx.com/dataPub/enterprise",
        "Origin": "https://www.ynjzjgcx.com",
        "Content-Type": "application/json;charset=UTF-8",
        "appId": "84ded2cd478642b2",
        "isToken": "false"
    }
    url = "https://www.ynjzjgcx.com/prod-api/mohurd-pub/dataServ/findBaseEntDpPage"
    data = {
        "params": params
    }
    return requests.post(url, headers=headers, json=data)

def get_random_user_agent():
    ua = UserAgent()
    return ua.random

# 每翻一次页，就需要滑动验证码校验
headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": get_random_user_agent(),
    "sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "Referer": "https://www.ynjzjgcx.com/dataPub/enterprise",
    "Origin": "https://www.ynjzjgcx.com",
    "Content-Type": "application/json;charset=UTF-8",
    "appId": "84ded2cd478642b2",
    "isToken": "false",
    "Host": "www.ynjzjgcx.com"
}

url = "https://www.ynjzjgcx.com/prod-api/mohurd-pub/vcode/genVcode"

with open("./encrypt/getvcode.js", encoding='utf-8') as f1:
    vcode_js_code = f1.read()
vcode_ctll = execjs.compile(vcode_js_code)

with open("./encrypt/W_e_encrypt.js", encoding='utf-8') as f1:
    encrypt_js_code = f1.read()
encrypt_ctll = execjs.compile(encrypt_js_code)

data = {
    "params": vcode_ctll.call("X_e", "FnQXKsRv5WTfL5JYWvwVsw==")
}

response = requests.post(url, headers=headers, json=data)

if (response.status_code == 200):
    res_data = json.loads(response.json()['data'])
    base64_m = "data:image/jpeg;base64," + res_data['bigImage']
    base64_g = "data:image/jpeg;base64," + res_data['smallImage']
    base64_m_data = base64_m.split(",")[1]
    # 解码Base64数据
    m_image_data = base64.b64decode(base64_m_data)
    filename = "m_image.jpg"
    with open(filename, "wb") as f:
        f.write(m_image_data)

    base64_g_data = base64_g.split(",")[1]
    # 解码Base64数据
    g_image_data = base64.b64decode(base64_g_data)
    filename = "g_image.jpg"
    with open(filename, "wb") as f:
        f.write(g_image_data)

    y = YdmVerify()
    width = y.slide_verify_22222(background_image=g_image_data, verify_type=22222)

    pageNum = 2
    pageSize = 10
    t = {
        "pageNum": pageNum,
        "pageSize": pageSize,
        "certificateType": "",
        "name": "",
        "slideId": res_data["slideId"],
        "key": "query",
        "width": width
    }
    print(json.dumps(t))
    s = encrypt_ctll.call("we_encrypt", json.dumps(t))
    page_params = vcode_ctll.call("X_e", s)
    response = get_page_info(page_params)
    print(response.text)
