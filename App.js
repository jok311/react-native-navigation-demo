import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import MainVC from './js/MainVC';
import FindVC from './js/FindVC';
import ReleaseVC from './js/ReleaseVC';
import NewsVC from './js/NewsVC';
import MineVC from './js/MineVC';
import DetailVC from './js/DetailVC';
// 通过TabNavigator做路由映射
const MainScreentNavigator=TabNavigator({
    MainVC:{screen:MainVC},
    FindVC:{screen:FindVC},
    ReleaseVC:{screen:ReleaseVC},
    NewsVC:{screen:NewsVC},
    MineVC:{screen:MineVC},
},{
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
      style: {
          backgroundColor: '#fff', // TabBar 背景色
      },        
      activeTintColor: '#FC6A21', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片未选中颜色
      indicatorStyle: {
          height: 0,  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
          // width: '15%',
          // marginLeft: '13%',
          // backgroundColor: '#ff8500',
      }, 

      labelStyle: {
          fontSize: 16, // 文字大小
      },
  },  
});
//引入要用到的跳转页面
const  MyNavigatior = StackNavigator({
    Main:{screen:MainScreentNavigator},
    DetailVC:{screen:DetailVC},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default MyNavigatior
