import json
import requests
import base64
from fake_useragent import UserAgent
from a_ynjzjgcx.yunma.Vcode_jfbm import YdmVerify
"""
23.(问答题)公共服务数据采集，打开站点采集数据100条、要求对标题进行hash处理去重
地址:https://www.ynjzjgcx.com/dataPub/enterprise
字段：企业名称  信用代码 企业注册地
交付：提交各功能核心截图
"""
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
data = {
    "params": "riUoK52ToImSyIYDYRImrmgbsHnA2D6gRXV5WYp19Y/0RNoq598FuScNdPqjuJp6cR6uWpLBhXdJ2nlV6qEZ75eS8m6xh1ktq0g2PoV3CJlSmXgR9qCIwt01FDVXdArRrtXXZ8nA6Q7MbT0g57wz4+rZ8ByzznB/hIXqNEl1g9s="
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
    y.slide_verify(background_image=base64_g_data, slide_image=m_image_data)
