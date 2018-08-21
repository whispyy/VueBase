import Vue from 'vue'
import Main from '@/components/Main'

describe('Main.vue', () => {
  it('should render correct contents while loading', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main h1').textContent)
      .toEqual('Random pick in your collection')

    vm._data.loading.main = true;
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.main section').textContent).toEqual('Loading...')
    })
  })

  it('should render correct contents after loading', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main h1').textContent)
      .toEqual('Random pick in your collection')

    vm._data.loading.main = false;
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.main section').textContent).toContain('Collection size : 0 Pick randomly')
      expect(vm._data.length === 0)
    })
  })

  it('should instantiate data properly', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()
    const defaultData = Main.data()

    const specData = {
      info: {},
      length: 0,
      loading: {
        main: false,
        detail: false
      },
      errored: {
        main: false,
        detail: false
      }
    }

    expect(typeof Main.data).toBe('function')
    expect(typeof defaultData).toBe('object')
    expect(JSON.stringify(defaultData) === JSON.stringify(specData))

  })
})
