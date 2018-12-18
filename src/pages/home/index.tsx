import Taro, {Component, Config, eventCenter} from '@tarojs/taro'
import { View, Text ,Image,} from '@tarojs/components'
import './index.scss';

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor(){
    super(...arguments);
    this.state={
      data:[],
      imageurl:null,

    }
  }

  componentDidMount () {
    Taro.request({
      url:'http://serverpro.e4hub.com/api/goods?page=2',
      header: {
        'content-type': 'application/json'
      }
    }).then(res =>{
      // console.log(res.data);
      const datas=res.data.data;
      this.setState({
        data:datas
      })
    }).catch(err=>{
      console.log(err)
    })
  }
imageError=()=>{
    console.log('kkk')
  this.setState({
    imageurl:'url("../static/error.png")no-repeat top center'
  })
}

  render () {
    const {data,imageurl}=this.state;
    // console.log(data,'data');
    return (
      <View className='goodsWrap'>
        <View className='goodsList'>
          {
            data.map((item, index)=>(
              <View className='goodsLi' key={index.id}>
                <View className='goodsLitop'>
                  <View className='imageWrap'>
                    <Image src={item.image} style={{background:imageurl,backgroundSize:'contain'}} onError={this.imageError}/>
                  </View>
                  <View className='goodsTitle'>{item.title}</View>
                  <Text className='goodsPrice'>{item.price}</Text>
                </View>
                <View className="shopcarticon">
                  <i></i>
                </View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

