import React, { useState, useEffect, useCallback, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './CategoryProducts.scss'

import CategoryProductsFilter from './CategoryProductsFilter'
import CategoryProductsList from './CategoryProductsList'
import CategoryProductsOverlay from './CategoryProductsOverlay'

import { disableScrollbar } from '../../../utils/disableScrollbar'
import { enableScrollbar } from '../../../utils/enableScrollbar'
import { isBrowser } from '../../../utils/isBrowser'
import { getRandom } from './../../../utils/getRandom'
import { sortProducts } from '../../../utils/sortProducts'
import { applyFilterProducts } from '../../../utils/applyFilterProducts'
import { clearFilterProducts } from '../../../utils/clearFilterProducts'
import { clickOutside } from '../../../utils/clickOutside'
import { detectLighthouse } from '../../../utils/detectLighthouse'

const CategoryProducts = ({ 
  setHideCategoryHeader, 
  filterProductFields, 
  logo,
  products,
  pageInfo,
  slug,
  productsForFilter,
  productColorAttr,
  productMaterialAttr
}) => {
  const isAppliedFilter = useRef(false)
  const filterCounter = useRef(1)

  const [ list, setList ] = useState(products.map(product => {
    if (product.node.id) {
      return {
        id: product.node.id,
        title: product.node.name,
        price: product.node.price,
        slug: product.node.slug,
        date: product.node.date,
        imgSrc: product.node.featuredImage.node.localFile,
        isChanged: false,
        variability: product.node.variations && product.node.variations.reduce((o, i) => {
          if (!o.find(v => v.color[1] == i.color[1])) {
            o.push({id: getRandom(1, 10000), ...i, isActive: false})
          }
          return o
        }, []).filter(item => item.color && item.color.length !== 0)
      }
    }
  }))

  const [ colorFilter, setColorFilter ] = useState(productColorAttr.map(color => {
    return {
      id: color.node.id,
      name: color.node.name,
      bgColor: color.node.ProductColorVariation.color,
      borderColor: color.node.ProductColorVariation.color === '#ffffff' ? '#E7E7E7' : color.node.ProductColorVariation.color,
      slug: color.node.slug,
      attr: color.node.taxonomyName,
      isActive: false
    }
  }))

  const [ materialFilter, setMaterialFilter ] = useState(productMaterialAttr.map(material => {
    return {
      id: material.node.id,
      name: material.node.name,
      desc: material.node.description,
      slug: material.node.slug,
      attr: material.node.taxonomyName,
      isActive: false
    }
  }))

  const [ choice, setChoice ] = useState([])

  const [ isEmtyFilterList, setIsEmtyFilterList ] = useState(false)
  const [ isFilteredProducts, setIsFilteredProducts ] = useState(false)
  const [ isMobile, setIsMobile ] = useState(false)

  const [ isOpenDropdown, setIsOpenDropdown ] = useState(false)

  const [ secSortList, setSecSort ] = useState(filterProductFields.sortOptionsList.map((item, index) => ({
    id: index + 1,
    name: item.option,
    slug: item.slug,
    isActive: false
  })))

  const [ isMobileFilterOpen, setMobileFilterOpen ] = useState(false)
  const [ isMobileSortOpen, setMobileSortOpen ] = useState(false)

  useEffect(() => {
    setChoice([...colorFilter, ...materialFilter].filter(item => item.isActive))
  }, [colorFilter, materialFilter])

  useEffect(() => {
    if (isAppliedFilter.current && filterCounter.current === 1 && choice.length !== 0) {
      applyFilterProducts(setIsEmtyFilterList, setIsFilteredProducts, productsForFilter, setList, choice)
    }

    if (isAppliedFilter.current && filterCounter.current === 1 && choice.length === 0) {
      clearFilterProducts(setList, setIsEmtyFilterList, setChoice, setColorFilter, setMaterialFilter, colorFilter, materialFilter, productsForFilter)
    }

    filterCounter.current++
  }, [choice])

  useEffect(() => {
    clickOutside(['dropdown'], [setIsOpenDropdown])

    if (!detectLighthouse()) return null
    
    let categoryProductsTl = null,
        categoryProductsEmptyTl = null,
        categoryProductsPagination = null

    categoryProductsPagination = gsap.timeline({
      scrollTrigger: {
        trigger: '.category-products',
        start: 'bottom bottom'
      }
    })

    categoryProductsPagination
      .from('.category-products-pagination', .5, { opacity: 0, y: '100%', onComplete() {
        categoryProductsPagination.set(this.targets(), { clearProps: 'all' })
      }})

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => setIsMobile(false),
      '(max-width: 1024px)': () => setIsMobile(true),
      '(min-width: 992px)': () => {
        categoryProductsTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.category-products',
            start: '300px bottom'
          }
        })

        categoryProductsEmptyTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.category-products',
            start: 'top bottom'
          }
        })

        list.length !== 0 
          ? categoryProductsTl
              .from('.category-products-filter__items', .6, { y: -50, opacity: 0, onComplete() {
                categoryProductsTl.set(this.targets(), { clearProps: 'all' })
              }})
              .from('.category-products-filter__btn-wrapper', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
                categoryProductsTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.3')
              .from('.category-products-dropdown', .5, { y: -30, opacity: 0, onComplete() {
                categoryProductsTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.4')
              .from('.category-products-list__item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
                categoryProductsTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
          : categoryProductsEmptyTl
              .from('.category-products__err-title', .5, { y: '100%', delay: .4, onComplete() {
                categoryProductsEmptyTl.set(this.targets(), { clearProps: 'all' })
              } })
      },
      '(max-width: 991px)': () => {
        categoryProductsTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.category-products',
            start: '300px bottom'
          }
        })

        categoryProductsEmptyTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.category-products',
            start: 'top bottom'
          }
        })

        list.length !== 0
          ? categoryProductsTl
              .from('.category-products-btns__item ', .5, { opacity: 0, stagger: .1, onComplete() {
                categoryProductsTl.set(this.targets(), { clearProps: 'all' })
              }})
              .from('.category-products-list__item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
                categoryProductsTl.set(this.targets(), { clearProps: 'all' })
              }})
          : categoryProductsEmptyTl
              .from('.category-products__err-title', .5, { y: '100%', delay: .4, onComplete() {
                categoryProductsEmptyTl.set(this.targets(), { clearProps: 'all' })
              } })
      }
    })

    return () => {
      categoryProductsTl.kill()
      categoryProductsEmptyTl.kill()
      categoryProductsPagination.kill()
    }
  }, [])

  const changeVariability = useCallback((parentId, childId, event) => {
    let img = event.currentTarget.parentElement.parentElement,
        newImg = event.currentTarget.dataset.imgSrc

    img.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        img.classList.remove('fade')
      }, 350)

      setTimeout(() => {
        setList(list.map(item => {
          return {
            ...item,
            imgSrc: parentId === item.id ? newImg : item.imgSrc,
            isChanged: parentId === item.id ? true : item.isChanged,
            variability: item.variability && item.variability.map(itemVar => {
              return {
                ...itemVar,
                isActive: parentId === item.id ? itemVar.id === childId : itemVar.isActive
              }
            })
          }
        }))
      }, 200)
    }
  }, [list])

  const toggleColorFilter = useCallback(colorId => {
    isAppliedFilter.current = false
    filterCounter.current = 1
    setColorFilter(colorFilter.map(item => {
      return {
        ...item,
        isActive: colorId === item.id ? !item.isActive : item.isActive
      }
    }))
  }, [colorFilter])

  const toggleMaterialFilter = useCallback(materialId => {
    isAppliedFilter.current = false
    filterCounter.current = 1
    setMaterialFilter(materialFilter.map(item => {
      return {
        ...item,
        isActive: materialId === item.id ? !item.isActive : item.isActive
      }
    }))
  }, [materialFilter])

  const deleteChoice = useCallback(choiceId => {
    filterCounter.current = 1

    setChoice(choice.filter(item => choiceId !== item.id))

    setColorFilter(colorFilter.map(item => {
      return {
        ...item,
        isActive: choiceId === item.id ? !item.isActive : item.isActive
      }
    }))

    setMaterialFilter(materialFilter.map(item => {
      return {
        ...item,
        isActive: choiceId === item.id ? !item.isActive : item.isActive
      }
    }))
  }, [choice])

  const changeSort = useCallback((sortId, event, slug) => {
    let parent = event.currentTarget.parentElement.parentElement

    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setSecSort(secSortList.map(item => {
          return {
            ...item,
            isActive: sortId === item.id
          }
        }))
      }, 150)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)
    }
    setIsOpenDropdown(false)

    sortProducts(list, setList, slug)
    isMobile && closeMobileSort()
  }, [secSortList, isOpenDropdown])

  const openMobileFilter = useCallback(() => {
    setMobileFilterOpen(true)
    setHideCategoryHeader(true)

    let mobileFilterTl = gsap.timeline()

    mobileFilterTl
      .from('.category-products-filter__inner > *', .6, { delay: .4, opacity: 0, y: 30, stagger: .1, onComplete() {
        mobileFilterTl.set(this.targets(), { clearProps: 'all' })
      }})

    disableScrollbar()
  }, [isMobileFilterOpen])

  const closeMobileFilter = useCallback(() => {
    setMobileFilterOpen(false)
    setHideCategoryHeader(false)

    let mobileFilterTl = gsap.timeline()

    mobileFilterTl
      .fromTo('.category-products-filter__inner > *', .4, { opacity: 1, y: 0, onComplete() {
        mobileFilterTl.set(this.targets(), { clearProps: 'all' })
      }}, { opacity: 0, onComplete() {
        mobileFilterTl.set(this.targets(), { clearProps: 'all' })
      }})

    enableScrollbar()
  }, [isMobileFilterOpen])

  const openMobileSort = useCallback(() => {
    setMobileSortOpen(true)
    setHideCategoryHeader(true)

    let mobileSortTl = gsap.timeline()

    mobileSortTl
      .from('.category-products__dropdown > *', .6, { delay: .4, opacity: 0, y: 30, stagger: .1, onComplete() {
        mobileSortTl.set(this.targets(), { clearProps: 'all' })
      }})

    disableScrollbar()
  }, [isMobileSortOpen])

  const closeMobileSort = useCallback(() => {
    setMobileSortOpen(false)
    setHideCategoryHeader(false)

    let mobileSortTl = gsap.timeline()

    mobileSortTl
      .fromTo('.category-products__dropdown > *', .4, { opacity: 1, y: 0, onComplete() {
          mobileSortTl.set(this.targets(), { clearProps: 'all' })
        }}, { opacity: 0, onComplete() {
          mobileSortTl.set(this.targets(), { clearProps: 'all' })
        }})

    enableScrollbar()
  }, [isMobileSortOpen])

  const applyFilter = () => {
    isAppliedFilter.current = true
    applyFilterProducts(setIsEmtyFilterList, setIsFilteredProducts, productsForFilter, setList, choice)
    isMobile && closeMobileFilter()
  }

  const clearFilter = () => {
    clearFilterProducts(setList, setIsEmtyFilterList, setChoice, setColorFilter, setMaterialFilter, colorFilter, materialFilter, productsForFilter)
    isMobile && closeMobileFilter()
  }

  return (
    <section className="category-products" id="category-products">
      <div className="container">
        <div className="category-products__inner">
          { list.length !== 0 && slug === 'height-adjustable-tables' && <CategoryProductsFilter
            colorFilter={colorFilter}
            materialFilter={materialFilter}
            choice={choice}
            toggleColorFilter={toggleColorFilter}
            toggleMaterialFilter={toggleMaterialFilter}
            deleteChoice={deleteChoice}
            isMobileFilterOpen={isMobileFilterOpen}
            closeMobileFilter={closeMobileFilter}
            filterProductFields={filterProductFields}
            logo={logo}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          /> }
          { list.length !== 0 && <CategoryProductsList
            list={list}
            secSortList={secSortList}
            isOpenDropdown={isOpenDropdown}
            setIsOpenDropdown={setIsOpenDropdown}
            changeSort={changeSort}
            changeVariability={changeVariability}
            isMobileFilterOpen={isMobileFilterOpen}
            openMobileFilter={openMobileFilter}
            isMobileSortOpen={isMobileSortOpen}
            openMobileSort={openMobileSort}
            closeMobileSort={closeMobileSort}
            filterProductFields={filterProductFields}
            pageInfo={pageInfo}
            slug={slug}
            isEmtyFilterList={isEmtyFilterList}
            isFilteredProducts={isFilteredProducts}
          /> }
          { list.length !== 0 && <CategoryProductsOverlay
            isMobileFilterOpen={isMobileFilterOpen}
            closeMobileFilter={closeMobileFilter}
            isMobileSortOpen={isMobileSortOpen}
            closeMobileSort={closeMobileSort}
          /> }
          { list.length === 0 && <div className="category-products__err-title-wrapper title-wrapper">
            <div className="category-products__err-title title title--small">Тут поки немає товарів</div>
          </div> }
        </div>
      </div>
    </section>
  )
}

export default CategoryProducts