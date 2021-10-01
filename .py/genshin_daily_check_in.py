#!/usr/local/bin/python3
import requests
from datetime import datetime

def parse_cookie(raw_cookies):
    result = {}
    for raw_cookie in raw_cookies.split("; "):
        cookie = raw_cookie.split("=")
        result[cookie[0]] = cookie[1]
    return result

BASE_URL = "https://hk4e-api-os.mihoyo.com"
API_PATH_INFO = "/event/sol/info?lang=en-us&act_id=e202102251931481"
API_PATH_SIGN = "/event/sol/sign?lang=en-us"

COOKIE_FILE_LOCATION = "cookie.txt"
REPORT_FILE_LOCATION = "report.txt"
ENABLE_REPORT = False

s = requests.Session()
raw_cookies = open(COOKIE_FILE_LOCATION, 'r').read().strip()
cookies = parse_cookie(raw_cookies)

body = {
    "act_id": "e202102251931481"
}

report_code = "FAILED"
info = s.get(BASE_URL + API_PATH_INFO, cookies=cookies)
if info.json()['retcode'] == -100:
    print("Invalid Cookie")
else:
    is_already_sign = info.json()['data']['is_sign']
    if not is_already_sign:
        sign = s.post(BASE_URL + API_PATH_SIGN, json=body, cookies=cookies)
        if sign.json()['retcode'] != -100:
            print("Check In Success")
            report_code = "SUCCESS"
        else:
            print("Invalid Cookie")
    else:
        print("Already Check In")
        report_code = "ALREADY_CHECK_IN"

if ENABLE_REPORT:
    try:
        report = open(REPORT_FILE_LOCATION, 'a+')
        report.write("Script executed at {}, Result: {}\n".format(datetime.now().strftime("%d/%m/%Y %H:%M:%S"), report_code))
        report.close()
    except:
        pass