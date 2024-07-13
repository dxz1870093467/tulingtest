import execjs
import requests
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
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

with open("onlyGetParams.js", encoding='utf-8') as f1:
    get_params_code = f1.read()
get_params_ctll = execjs.compile(get_params_code)

def get_ad_world_info(pageNum):
    page_info = "event_status=&event_type=&isSearch=false&page={}&page_size=20&search="
    params = get_params_ctll.call("getParams", "c1eeb43e8d6b7830a1cd1d88a02bac0b",
                                  page_info.format(pageNum))
    cookies = {
        # "cngizm2ziytq3mwy": "7RcfKFOkrU606ki/7Em2ukWxs0e24hUXTbhHGuhCG+ZPQeBG+g==",
        "fogq4n2exnzc0otg": params['fogq4n2exnzc0otg']
    }
    url = "https://adworld.xctf.org.cn/api/event/release_event/list/"
    params = {
        # "qmze1yzvhyzcyyjr": "CgcGOAAfCgwYMwwHEAgDBURTHgAdFgcgCQkyJ3BnLjkXISY5KixzKCAhIDt2IDowMGVrfCU4ODcDL0ZZRBEUFg9WTkdaS0sSDw=="
        "qmze1yzvhyzcyyjr": params['qmze1yzvhyzcyyjr']
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    object_info = json.loads(response.content.decode())
    if object_info['data'] is not None and object_info['data']['rows'] is not None:
        rows = []
        for row in object_info['data']['rows']:
            info = {"标题": row['release_name'],
                    "比赛时间": row['competition_start_time'] + "至" + row['competition_end_time'],
                    "主办方": row['release_sponsor']}
            rows.append(info)
        return rows
    return None


if __name__ == '__main__':
    with ThreadPoolExecutor(max_workers=5) as pool:
        futures = [pool.submit(get_ad_world_info, page) for page in range(8)]
        for futures in as_completed(futures):
            print(futures.result())
