import Vue from 'vue'
import Detail from '@/components/Detail'
import Main from '@/components/Main'

describe('Detail.vue', () => {
  it('should display data', () => {
    const Constructor = Vue.extend(Detail)
    const props = {
      loading : false,
      info : {
        title: 'title',
        artists: ['artist'],
        year: 0,
        formats: ['format']
      }
    } 
    const vm = new Constructor(props).$mount()

    const detailElement = vm.$el.querySelector('.detail')

    console.log(detailElement)

    expect(detailElement)
     
  })

})
