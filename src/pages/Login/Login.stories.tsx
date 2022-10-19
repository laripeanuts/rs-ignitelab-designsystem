import { Meta, StoryObj } from '@storybook/react'
import { Login } from '.'

export default {
  title: 'Pages/Login',
  component: Login,
  args: {
    children: 'Create account',
  },
  argTypes: {}
} as Meta

export const Default: StoryObj = {}
