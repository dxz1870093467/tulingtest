import json
import base64
import execjs
import pymongo
import requests
from fake_useragent import UserAgent
from pymongo import MongoClient, ASCENDING, errors

from a_ynjzjgcx.yunma.Vcode_jfbm import YdmVerify

"""
23.(问答题)公共服务数据采集，打开站点采集数据100条、要求对标题进行hash处理去重
地址:https://www.ynjzjgcx.com/dataPub/enterprise
字段：企业名称  信用代码 企业注册地
交付：提交各功能核心截图
"""

class a_ynjzjgcx:

    # 每翻一次页，就需要滑动验证码校验
    yzm_headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "max-age=0",
        "Connection": "keep-alive",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": UserAgent().random,
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
    yzm_url = "https://www.ynjzjgcx.com/prod-api/mohurd-pub/vcode/genVcode"

    get_info_headers = {
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
    get_info_url = "https://www.ynjzjgcx.com/prod-api/mohurd-pub/dataServ/findBaseEntDpPage"

    def __init__(self):
        self.mongo_client = MongoClient(host='localhost', port=27017)
        self.collection = self.mongo_client['tuling']['tuling_a_ynjzjgcx']
        self.ensure_index()
        with open("./encrypt/getvcode.js", encoding='utf-8') as f1:
            vcode_js_code = f1.read()
        self.vcode_ctll = execjs.compile(vcode_js_code)

    def ensure_index(self):
        # 创建索引并设置 hash 字段为唯一
        self.collection.create_index([("hash", ASCENDING)], unique=True)

    def get_page_info(self, params):
        data = {
            "params": params
        }
        return requests.post(self.get_info_url, headers=self.get_info_headers, json=data)

    def get_info(self, pageNum, pageSize = 10):

        with open("./encrypt/W_e_encrypt.js", encoding='utf-8') as f1:
            encrypt_js_code = f1.read()
        encrypt_ctll = execjs.compile(encrypt_js_code)

        data = {
            "params": self.vcode_ctll.call("X_e", "FnQXKsRv5WTfL5JYWvwVsw==")
        }

        response = requests.post(self.yzm_url, headers=self.yzm_headers, json=data)
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

            width = YdmVerify().slide_verify_22222(background_image=m_image_data)
            bl_width = width
            print(bl_width)
            t = {
                "pageNum": pageNum,
                "pageSize": pageSize,
                "certificateType": "",
                "name": "",
                "slideId": res_data["slideId"],
                "key": "query",
                "width": bl_width
            }
            print(json.dumps(t))
            s = encrypt_ctll.call("we_encrypt", json.dumps(t))
            page_params = self.vcode_ctll.call("X_e", s)
            response = self.get_page_info(page_params)
            return json.loads(response.text)

    def main(self):
        for page_num in range(1, 11):  # 从第一页到第十页
            data = self.get_info(page_num)
            print(data)  # 打印获取的数据
            self.save_to_db(data)  # 保存数据到数据库

    def save_to_db(self, data):
        if data is None or 'data' not in data or 'records' not in data['data']:
            print("No valid data returned")
            return
        if data['code'] == 200:
            for item in data['data']['records']:  # 假设数据结构中记录在 'records' 键下
                info = {
                    "name": item['name'],
                    "creditCode": item['creditCode'],
                    "address": item['address']
                }
                hash_value = hash(item['name'] + item['creditCode'] + item['address'])  # 创建哈希值
                info['hash'] = hash_value
                try:
                    self.collection.insert_one(info)
                    print(f"Inserted item with hash: {hash_value}")
                except errors.DuplicateKeyError:
                    print(f"Duplicate item with hash: {hash_value} ignored")

if __name__ == '__main__':
    ynjzjgcx = a_ynjzjgcx()
    ynjzjgcx.main()