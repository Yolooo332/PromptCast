import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('renders the app title', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createPinia()],
      },
    })
    expect(wrapper.find('h1').text()).toContain("Show, Don't Prompt")
  })

  it('shows the ready status badge', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createPinia()],
      },
    })
    expect(wrapper.find('#status-badge').exists()).toBe(true)
    expect(wrapper.text()).toContain('Ready')
  })
})
