import gsap from 'gsap'

export const sortProducts = (products, setState, slug) => {
  let sortedProducts = []

  switch (slug) {
    case 'name': {
      sortedProducts = products.sort((a, b) => a.title.localeCompare(b.title))
      break
    }
    case 'price': {
      sortedProducts = products.sort((a, b) => parseInt(a.price) - parseInt(b.price))
      break
    }
    case 'date': {
      sortedProducts = products.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      break
    }
    default: {
      sortedProducts = products
    }
  }

  new Promise((resolve, reject) => {
    resolve(setState(sortedProducts.map(item => ({ ...item }))))
  })
    .then(() => {
      gsap.from('.category-products-list__item', .6, { y: 100, opacity: 0, stagger: .1, delay: .2, onComplete() {
        gsap.set(this.targets(), { clearProps: 'all' })
      }})
    })
}