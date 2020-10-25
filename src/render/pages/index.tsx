import React from 'react'
import cls from 'classnames'
import './home.normal.less'
import AutoUpdate from '@components/AutoUpdate'
import { Button, message, Input } from 'antd'
const Store = require('electron-store')
const store = new Store()
const fs = require('fs')
const BrowserWindow = require('electron').remote.BrowserWindow

export default function () {
  const getLocalStoreData = () => {
    message.info(store.get('LOCAL_ELECTRON_STORE'))
  }

  /*
  * nodejs使用，与electron使用
  * */
  var onClickEvent = () =>{
    /**
     * nodejs模块使用
     */
    // fs.readFile('D:\\dev\\React\\pan-studio\\src\\render\\pages\\test.py',(err,data)=>{
    //   console.log(data)
    // })
    /**
     * electron使用，创建一个新的窗口
     */
    var win = new BrowserWindow({
      width:300,
      height:400
    })
  }

  return (
    <div style={{backgroundColor:'#000',width:'100%',height:'100%'}}>
      <button onClick={onClickEvent}>nodejs与electron使用</button>
    </div>
  )
}
