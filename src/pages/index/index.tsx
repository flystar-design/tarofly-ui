import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { Button } from '@tarofly/core';
import './index.scss';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className='index'>
      <Button>123</Button>
      <Text className='inline-block text-5xl leading-normal p-24'>Hello world!</Text>
      <Text className='bg-geekblue-500 text-gray-100 text-3xl'>Hello world!</Text>
    </View>
  );
}
