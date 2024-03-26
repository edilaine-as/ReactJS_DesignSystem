import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@dila-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: (
      <>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam
          illum a sunt esse, maiores veniam quidem! Eos ex nobis, beatae
          quisquam ipsum, ipsam blanditiis ea iste deleniti enim quod?
        </span>
      </>
    ),
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
