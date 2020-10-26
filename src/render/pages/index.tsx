import React from 'react'
import cls from 'classnames'
import './home.normal.less'
import AutoUpdate from '@components/AutoUpdate'
import { Button, message, Input } from 'antd'
const Store = require('electron-store')
const store = new Store()
const fs = require('fs')
const BrowserWindow = require('electron').remote.BrowserWindow
// @ts-ignore
import style from '@/pages/style.less'


export default function () {
  const getLocalStoreData = () => {
    message.info(store.get('LOCAL_ELECTRON_STORE'))
  }

  /*
  * nodejs使用，与electron使用
  * */
  let onClickEvent = () =>{
    /**
     * nodejs模块使用
     */
    // fs.readFile('D:\\dev\\React\\pan-studio\\src\\render\\pages\\test.py',(err,data)=>{
    //   console.log(data)
    // })
    /**
     * electron使用，创建一个新的窗口
     */
    let win = new BrowserWindow({
      width:300,
      height:400
    })
  }

  let onClickEventRecent = (index: number) =>{
    console.log(index)
    console.log(recent[index])
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let onClickEventNew = (e) =>{
    console.log('新建')
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let onClickEventOpen = (e) =>{
    console.log('打开')
  }

  const recent = [
    {name:'demo1',path:'d:/views/demo1'},
    {name:'demo2',path:'d:/views/demo2'},
    {name:'demo3',path:'d:/views/demo3'},
    {name:'demo2',path:'d:/views/demo2'},
    {name:'demo3',path:'d:/views/demo3'},
    {name:'demo2',path:'d:/views/demo2'},
    {name:'demo3',path:'d:/views/demo3'},
    {name:'demo4',path:'d:/views/demo4'}
  ]

  return (
    <div className={style.body}>
      <div className={style.contain}>
        <div className={style.item}>
          <div className={style.title}>Chonming Tool</div>
          <div className={style.describe}>智能屏开发工具</div>
        </div>
        <div className={style.subtitle}>开始</div>
        <div className={style.item}>
          <Button onClick={onClickEventNew} type="link" block className={style.btn}>
            新建
          </Button>
          <Button onClick={onClickEventOpen} type="link" block className={style.btn}>
            打开
          </Button>
        </div>
        <div className={style.subtitle}>最近...</div>
        <div className={style.item}>
          {
            recent.map((item, index) => {
            return (
              <div key={index} className={style.recent}>
                <Button onClick={(e)=>{onClickEventRecent(index)}} type="link" block className={style.btn}>
                  {item.name}
                </Button>
                <div className={style.recentpath}>
                  {item.path}
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className={style.contain}></div>
      {/* <button onClick={onClickEvent}>nodejs与electron使用</button> */}
    </div>
  )
}
