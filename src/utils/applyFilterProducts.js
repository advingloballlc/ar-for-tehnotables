import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { getRandom } from './getRandom'

gsap.registerPlugin(ScrollTrigger)

export const applyFilterProducts = (
  setIsEmtyFilterList, 
  setIsFilteredProducts,
  productsForFilter,
  setList,
  choice
) => {

  setIsEmtyFilterList(false)
  setIsFilteredProducts(true)
  
  const filteredProducts = []

  productsForFilter.forEach(product => {
    let attributes = product.attributes.nodes

    attributes.forEach(attribute => choice.forEach(ch => attribute.options.includes(ch.slug) && filteredProducts.push(product)))
  })

  const unicfilteredProducts = filteredProducts.reduce((o, i) => {
    if (!o.find(v => v.id === i.id)) {
      o.push({...i})
    }
    
    return o
  }, [])

  if (unicfilteredProducts.length) {
    new Promise((resolve, reject) => {
      setList(unicfilteredProducts.map(product => {
        return {
          id: product.id,
          title: product.name,
          price: product.price,
          slug: product.slug,
          date: product.date,
          imgSrc: product.featuredImage.node.localFile,
          variability: product.variations && product.variations.reduce((o, i) => {
            if (!o.find(v => v.color[1] === i.color[1])) {
              o.push({id: getRandom(1, 10000), ...i, isActive: false})
            }
            return o
          }, []).filter(item => item.color && item.color.length !== 0)
        }
      }))
      resolve()
    })
      .then(() => {
        ScrollTrigger.refresh()

        gsap.from('.category-products-list__item', .6, { y: 100, opacity: 0, stagger: .1, delay: .2, onComplete() {
          gsap.set(this.targets(), { clearProps: 'all' })
        }})
      })
  } else {
    ScrollTrigger.refresh()

    setIsEmtyFilterList(true)
  }
}