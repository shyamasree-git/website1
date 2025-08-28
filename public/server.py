import requests
import os
from flask import Flask, flash, request, redirect, url_for,render_template, jsonify


app = Flask(__name__)


@app.route('/validatelogin',methods = ['GET','POST'])
def validatelogin():

    flag = False 
    username = None
    email = None
    arg = request.json
    username = arg.get('username')
    email = arg.get('email')
    if username is None:
        return flag
    if email is None:
        return flag
         
    json_url = "https://jsonplaceholder.typicode.com/users"
    response = requests.get(json_url)
    data = response.json()

    #print(data)
    for i in data:
        #print(i['email']+ '=>'+i['name'])
        if (i['email'] == email and i['username'] == username):
             flag = True
    ret_obj = {}
    ret_obj["logstat"] = flag
    #print(flag) 
    return ret_obj


if __name__ == '__main__':
	app.run(host='0.0.0.0',port=3001,debug='TRUE')	