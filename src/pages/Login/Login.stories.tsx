import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'

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

export const Test: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const inputEmail = canvas.getByPlaceholderText("Digite seu e-mail")
    const inputPassword = canvas.getByPlaceholderText("******")
    const button = canvas.getByRole("button")

    userEvent.type(inputEmail, "larissarabelo@gmail.com")
    userEvent.type(inputPassword, "12345678")
    userEvent.click(button)

    await waitFor(() => {
      const loginMsg = canvas.getByText("Login Realizado")
      return expect(loginMsg).toBeInTheDocument()
    })
  }
}