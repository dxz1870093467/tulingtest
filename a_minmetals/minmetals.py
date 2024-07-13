import json
import pymysql
import execjs
import requests

class A_Minmetals:

    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://ec.minmetals.com.cn",
        "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info/?tabIndex=0",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^126^^, ^\\^Google",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "Windows"
    }

    url = "https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page"

    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='root', db='py_spider')
        self.cursor = self.db.cursor()

    def create_table(self):
        sql = """
        create table if not exists tuling_a_minmetals(
            id int primary key auto_increment,
            mc varchar(1000) not null,
            rq varchar(50),
            dw_mc varchar(200),
            cond_des varchar(200)
        );
        """
        try:
            self.cursor.execute(sql)
            print('数据表创建成功...')
        except Exception as e:
            print('数据表创建失败: ', e)

    def insert_work_info(self, *args):
        """
            :param args:
                id
                mc
                rq
                dw_mc
                cond_des
            :return:
            """
        sql = """
               insert into tuling_a_minmetals(
                   id,
                   mc,
                   rq,
                   dw_mc,
                   cond_des
               ) values (null, %s, %s, %s, %s);
           """
        try:
            self.cursor.execute(sql, args)
            self.db.commit()
            print('数据插入成功...')
        except Exception as e:
            print('数据插入失败: ', e)
            self.db.rollback()

    def index(self):
       headers_index = {
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "zh-CN,zh;q=0.9",
                "Connection": "keep-alive",
                "Content-Length": "0",
                "Origin": "https://ec.minmetals.com.cn",
                "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                "sec-ch-ua": "^\\^Not/A)Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^126^^, ^\\^Google",
                "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "Windows"
       }

       url = "https://ec.minmetals.com.cn/open/homepage/public"
       response = requests.post(url, headers=headers_index)
       return response.cookies, response.text

    #请求js，获取param参数
    def main(self):
        cookies, text = self.index()
        cookies = {
            "SUNWAY-ESCM-COOKIE": cookies["SUNWAY-ESCM-COOKIE"],
            "__jsluid_s": cookies["__jsluid_s"],
            # "JSESSIONID": "A13074BFA639C2DF5C98AF64F995DAAA"
        }
        self.create_table()
        with open("./test/wukuang.js", encoding='utf-8') as f1:
            js_code = f1.read()
        ctll = execjs.compile(js_code)
        for _ in range(1, 10):
            print(f'正在抓取第{_}页')
            params = {
                "inviteMethod": "",
                "businessClassfication": "",
                "mc": "",
                "lx": "ZGYS",
                "dwmc": "",
                "pageIndex": _
            }
            params_enc = ctll.call("get_data", text, params)
            data = {
                "param": params_enc
            }
            response = requests.post(self.url, headers=self.headers, cookies=cookies, json=data)
            print(json.loads(response.text))
            #保存到mysql中
            if json.loads(response.text)['list'] is not None:
                for row in json.loads(response.text)['list']:
                    mc = row['mc']
                    rq = row['rq']
                    dw_mc = row['dwmc']
                    cond_des = row['condDes']
                    self.insert_work_info(mc, rq, dw_mc, cond_des)

            # 任务完成后关闭数据库链接
        self.db.close()

if __name__ == '__main__':
    a_minmetals = A_Minmetals()
    a_minmetals.main()