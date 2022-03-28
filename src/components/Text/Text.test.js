import RandomText from './Text.vue'
import { shallowMount } from '@vue/test-utils'

describe('Text', () => {
    it('should exist', () => {
        let wrapper = shallowMount(RandomText);
        expect(wrapper).toBeTruthy();
    })
})