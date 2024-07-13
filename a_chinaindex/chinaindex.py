import json
import pymongo # 如果是云服务的数据库 用公网IP连接
import requests
"""
22.(问答题)采集本站首页数据top10
地址：https://www.chinaindex.net/ranklist/5
字段：字段不限、存储使用mongodb
交付：提供数据和代码截图即可说明：禁止使用自动化等技术
"""
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
}
url = "https://www.chinaindex.net/iIndexMobileServer/teleplay/rank/waiting/fans"
response = requests.get(url, headers=headers)
#解析response的参数
url = "http://localhost:3001/get"
responsejs = requests.post(url, json=json.loads(response.text))
#保存mongodb数据库top10
client = pymongo.MongoClient(host='localhost', port=27017)
collection = client['tuling']['tuling_a_chinaindex']
top10_info = json.loads(responsejs.text)
top10_data = []
if top10_info['data'] is not None and top10_info['data']['rank_list']:
    for rank in top10_info['data']['rank_list']:
        t = {
            "name": rank['object_info']['name'],
            'imag_path': rank['object_info']['img_path'],
            'first_platform': ', '.join(rank['object_info']['first_platform']) if rank['object_info']['first_platform'] else '',
            'tags': ', '.join(rank['object_info']['tags']) if rank['object_info']['tags'] else '',
        }
        top10_data.append(t)

if len(top10_data) > 0:
    collection.insert_many(top10_data)
