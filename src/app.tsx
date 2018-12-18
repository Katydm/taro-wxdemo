import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/home'
import './app.scss'

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/classify/index',
      'pages/cart/index',
      'pages/my/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
     tabBar:{
        list:[
          {
            "pagePath":'pages/home/index',
            "text":'首页',
            "iconPath":'pages/static/home.png',
            "selectedIconPath":'pages/static/home_c.png'
          },
          {
            "pagePath":'pages/classify/index',
            "text":'分类',
            "iconPath":'pages/static/classify.png',
            "selectedIconPath":'pages/static/classify_c.png'
          },
          {
            "pagePath":'pages/cart/index',
            "text":'购物车',
            "iconPath":'pages/static/cart.png',
            "selectedIconPath":'pages/static/cart_c.png'
          },
          {
            "pagePath":'pages/my/index',
            "text":'我的',
            "iconPath":'pages/static/my.png',
            "selectedIconPath":'pages/static/my_c.png'
          }
        ],
        color: "#333333",
        selectedColor: "#4cc00f"
     }

  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index/>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
