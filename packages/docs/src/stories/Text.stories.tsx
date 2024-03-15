import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
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
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
