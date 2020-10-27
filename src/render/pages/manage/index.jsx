// eslint-disable-next-line max-classes-per-file
import React from 'react'
import { Layout, Menu, Avatar,Dropdown} from 'antd'
import { Link,history} from 'umi';
import { AppstoreOutlined, UserOutlined,PlusOutlined,MoreOutlined} from '@ant-design/icons'
import {queryViews} from './service'
import styles from './style.less'
import boximg from '../../assets/image/boximgdefault.svg'
import previewimg from '../../assets/image/preview.svg'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu;

const userMenu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/user/login">退出登录</Link>
    </Menu.Item>
  </Menu>
);

class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: '#e1e6e8',
    }
  }

  componentDidMount() {
  }

  onMouseMoveEvent = () => {
    this.setState({
      borderColor: '#23C132'
    })
  }

  onMouseOutEvent = () => {
    this.setState({
      borderColor: '#e1e6e8'
    })
  }

  onClickEvent = () => {
    // console.log('新建页面')
    history.push('/new-view')
  }

  render() {
    return (
      <div onClick={this.onClickEvent}
           onMouseOut={this.onMouseOutEvent}
           onMouseMove={this.onMouseMoveEvent}
           className={styles.viewbox}
           style={{backgroundColor:'#fff',borderColor:this.state.borderColor}}>
        <PlusOutlined style={{fontSize:'60px',color:'#52c41a'}} />
        <div>新建</div>
      </div>
    )
  }
}

class ViewBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: '#e1e6e8',
      // title:'未命名项目',
      menu:(<Menu>
            <Menu.Item key="0">
              <span>发布</span>
            </Menu.Item>
             <Menu.Item key="1">
               <span>重命名</span>
             </Menu.Item>
            <Menu.Item key="1">
              <span>复制</span>
            </Menu.Item>
            <Menu.Item key="1">
              <span>删除</span>
            </Menu.Item>
          </Menu>)
    }
  }

  componentDidMount() {
  }

  onMouseMoveEvent = () => {
    this.setState({
      borderColor: '#23C132'
    })
  }

  onMouseOutEvent = () => {
    this.setState({
      borderColor: '#e1e6e8'
    })
  }

  onClickEvent =() => {
    console.log(this.props)
  }

  render() {
    return (
      <div onClick={this.onClickEvent}
           onMouseOut={this.onMouseOutEvent}
           onMouseMove={this.onMouseMoveEvent}
           style={{borderColor:this.state.borderColor}} className={styles.viewbox}>
        <img alt="boximg" className={styles.viewboximg} src={boximg} />
        <div className={styles.viewboxitem}>
          <div className={styles.viewboxname} >
            {this.props.title}
          </div>
          <div className={styles.viewboxoper} >
            <Link to="/preview" target="_Blank">
              <img alt="previewimg" className={styles.viewboxlinkimg} src={previewimg} />
            </Link>
            <Dropdown overlay={this.state.menu} >
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <MoreOutlined className={styles.viewboxmenuicon} />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
}


export default class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      views: []
    }
  }

  componentDidMount() {
    this.fetchViews()
  }

  handleClick = e => {
    console.log('click ', e);
  };

  fetchViews = async () => {
    const result = await queryViews()
    console.log(result)
    this.setState({
      views: result
    })
  }


  render() {
    const viewsList =  this.state.views.map((item, index) => {
      return (<ViewBox key={index} id={item.id} title={item.title}  />)
    })
    return (
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logo} >
            CHONMING
          </div>
          <div className={styles.headeruser}>
            <Dropdown overlay={userMenu} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Avatar className={styles.headerSub} size='large' icon={<UserOutlined />} />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Layout style={{overflow:'hidden'}}>
          <Sider
            width={160}
            collapsedWidth="0"
            className={styles.sider}
          >
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<AppstoreOutlined />} title="屏幕管理">
                <Menu.Item key="1">全部屏幕</Menu.Item>
                {/* <Menu.Item key="2">Option 2</Menu.Item> */}
                {/* <Menu.Item key="3">Option 3</Menu.Item> */}
                {/* <Menu.Item key="4">Option 4</Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{display:'flex',flexDirection:'column'}}>
            <div className={styles.main}>
              <AddBox />
              {viewsList}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

