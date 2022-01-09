import { mount } from '@vue/test-utils'
import Events from '@/views/Events.vue'
require('jest-fetch-mock').enableMocks()

describe('Testing About.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Events)

    // then
    expect(wrapper.text()).toMatch('Events')
  })
})
