import { Button, ButtonProps } from '@tarojs/components';
import { FC } from 'react';

export interface IButtonProps extends ButtonProps {
  /**
   * 按钮类型
   * @description 按钮主题
   * @default "默认值"
   */
  color?: 'primary' | 'default';

  /**
   * 按钮大小
   * @description 按钮大小
   * @default "默认值"
   */
  size?: 'large' | 'small';
}

export const FlyButton: FC<IButtonProps> = (props) => {
  console.log(props);
  return <Button>Button</Button>;
};