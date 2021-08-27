import { mount } from '@vue/test-utils'
import Hello from '@/components/Hello'

describe('Hello', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Hello)
    expect(wrapper.vm).toBeTruthy()
  })
})
