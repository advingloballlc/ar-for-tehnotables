import React, { useState, useEffect, useContext, useRef } from 'react'
import { useForm } from 'react-hook-form'
import gsap from 'gsap'
import { novaposhtaApi } from '../../../api/novaposhta'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import './Intro.scss'

import CustomerInfo from './CustomerInfo'
import ShippingMethod from './ShippingMethod'
import PaymentInfo from './PaymentInfo'
import DeliveryList from './DeliveryList'
import DeliveryInfo from './DeliveryInfo'
import BackButton from './BackButton'

import { isBrowser } from '../../../utils/isBrowser'
import { setCookie } from '../../../utils/setCookie'
import { deleteCookie } from '../../../utils/deleteCookie'
import { showCheckoutErrModal } from '../../../utils/showChechouErrModal'
import { clickOutside } from '../../../utils/clickOutside'
import { disableOverflow } from '../../../utils/disableOveflow'

import { PrefixContext } from '../../../context/PrefixProvider'
import { LangCodeContext } from '../../../context/LangCodeProvider'

import { getCart } from '../../../cart/getCart'
import { removeFromCart } from '../../../cart/removeFromCart'
import { applyCupon } from '../../../cupon/applyCupon'
import { checkout } from '../../../checkout/checkout'


const CheckoutIntro = ({
  deleteBtn,
  checkoutEmptyListTitle,
  checkoutBackBtn,
  novaPoshtaErr,
  novaPoshtaSearch,
  coupons,
  customerInfo,
  novaPoshtaLabels,
  orderForm,
  paymentMethod,
  shippingMethod,
  cartItems,
  cartTotalPrice,
  userInfo,
  validateErrors,
  paymentMethodList,
  shippingMethodList,
  soresList
}) => {
  let prefix = useContext(PrefixContext)
  let langCode = useContext(LangCodeContext)

  const cuponInp = useRef(null)
  const intro = useRef(null)

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    setValue,
    getValues,
    setError,
    clearErrors,
    resetField
  } = useForm({
    mode: 'onBlur'
  })

  const [ items, setItems ] = useState(cartItems)
  const [ isCartLoading, setIsCartLoading ] = useState(false)
  const [ cartTotalSalePrice, setCartTotalSalePrice ] = useState(null)
  
  let [ delivery, setDelivery ] = useState('')
  let [ payment, setPeyment ] = useState('')
  
  let [ isOpenStoreDropdown, setIsOpenStoreDropdown ] = useState(false)
  let [ storeSearch, setStoreSearch ] = useState('')
  let [ searchedStore, setSearchedStore ] = useState([])

  const [ store, setStore ] = useState(soresList.map((item, index) => ({
    id: index + 1,
    name: item.store,
    isActive: false
  })))

  let [ isOpenBranchRegioDropdown, setIsOpenBranchRegioDropdown ] = useState(false)
  let [ branchRegionSearch, setBranchRegionSearch ] = useState('')
  let [ searchedBranchRegion, setSearchedBranchRegion ] = useState([])
  let [ areas, setAreas ] = useState([])

  let [ isOpenBranchCitiesDropdown, setIsOpenBranchCitiesDropdown ] = useState(false)
  let [ branchCitiesSearch, setBranchCitiesSearch ] = useState('')
  let [ searchedBranchCities, setSearchedBranchCities ] = useState([])
  let [ filteredCities, setFilteredCities ] = useState([])
  let [ cities, setCities ] = useState([])


  let [ isOpenBranchWarehousesDropdown, setIsOpenBranchWarehousesDropdown ] = useState(false)
  let [ branchWarehousesSearch, setBranchWarehousesSearch ] = useState('')
  let [ searchedBranchWarehouses, setSearchedBranchWarehouses ] = useState([])
  let [ filteredWarehouses, setFilteredWarehouses ] = useState([])
  let [ warehouses, setWarehouses ] = useState([])

  const formSubmit = (data, e) => {
    NProgress.start()
    setIsCartLoading(true)
    
    checkout(
      getValues('firstname'),
      getValues('lastname'),
      getValues('phone'),
      getValues('email'),
      getValues('delivery'),
      getValues('payment'),
      getValues('store'),
      getValues('branchRegion'),
      getValues('branchCity'),
      getValues('branchWarehouse'),
      getValues('street'),
      getValues('build'),
      getValues('apart'),
      getValues('address'),
      langCode
    )
      .then(({ data }) => {
        NProgress.done()
        deleteCookie('cart_count')
        setIsCartLoading(false)

        console.log(cartTotalPrice)
        setCookie('thx_price', cartTotalPrice)

        isBrowser() && window.location.assign(data.redirect)
      })
      .catch(() => {
        NProgress.done()
        setIsCartLoading(false)
        showCheckoutErrModal()
      })
  }

  const formError = (error, e) => {
    console.error(error)
  }

  useEffect(() => {
    disableOverflow(intro)

    clickOutside(
      ['dropdown--store', 'dropdown--region', 'dropdown--city', 'dropdown--warehouse'], 
      [setIsOpenStoreDropdown, setIsOpenBranchRegioDropdown, setIsOpenBranchCitiesDropdown, setIsOpenBranchWarehousesDropdown]
    )

    setValue('firstname', userInfo?.first_name)
    setValue('lastname', userInfo?.last_name)
    setValue('phone', userInfo?.billing?.phone || '')
    setValue('email', userInfo?.email)

    let checkoutIntroTl = gsap.timeline()

    if (!cartItems) {
      getCart(langCode)
        .then((response) => {
          setItems(response.data.items)
        })
        .then(() => {
          checkoutIntroTl
            .set('.intro-checkout__inner', { visibility: 'visible', delay: .3 })
            .from('.intro-checkout-content__item', .6, { delay: .4, y: 70, opacity: 0, stagger: .1, onComplete() {
              checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
            }})
            .from('.intro-checkout-content__item-title', .5, { y: '100%', stagger: .1, onComplete() {
              checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
            }}, '-=.4')
            .from('.intro-checkout-delivery__list', .6, { y: -50, opacity: 0, onComplete() {
              checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
            }}, '-=.2')
            .from('.intro-checkout-delivery__info-title', .6, { y: '100%', onComplete() {
              checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
            }}, '-=.5')
            .from('.intro-checkout-delivery__info-cost', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
              checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
            }}, '-=.3')
            .from('.intro-checkout-delivery__info-discount', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
              checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
            }}, '-=.5')
            .from('.intro-checkout-delivery__info-btn-wrapper', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
              checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
            }}, '-=.5')
        })
    } else {
      checkoutIntroTl
        .set('.intro-checkout__inner', { visibility: 'visible', delay: .3 })
        .from('.intro-checkout-content__item', .6, { delay: .4, y: 70, opacity: 0, stagger: .1, onComplete() {
          checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
        }})
        .from('.intro-checkout-content__item-title', .5, { y: '100%', stagger: .1, onComplete() {
          checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
        }}, '-=.4')
        .from('.intro-checkout-delivery__list', .6, { y: -50, opacity: 0, onComplete() {
          checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
        }}, '-=.2')
        .from('.intro-checkout-delivery__info-title', .6, { y: '100%', onComplete() {
          checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
        }}, '-=.5')
        .from('.intro-checkout-delivery__info-cost', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
          checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
        }}, '-=.3')
        .from('.intro-checkout-delivery__info-discount', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
          checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
        }}, '-=.5')
        .from('.intro-checkout-delivery__info-btn-wrapper', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
          checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
        }}, '-=.5')
    }

    novaposhtaApi.address
      .getAreas()
      .then(({ data }) => {
        setAreas(data)
      })
      .catch((errors) => {
        if (Array.isArray(errors)) {
          errors.forEach((error) => console.log(`[${ error.code || '-' }] ${ error.en || error.uk || error.ru || error.message }`))
        }
      })

    novaposhtaApi.address
      .getCities()
      .then(({ data }) => {
        setCities(data)
      })
      .catch((errors) => {
        if (Array.isArray(errors)) {
          errors.forEach((error) => console.log(`[${ error.code || '-' }] ${ error.en || error.uk || error.ru || error.message }`))
        }
      })

    novaposhtaApi.address
      .getWarehouses()
      .then(({ data }) => {
        setWarehouses(data)
      })
      .catch((errors) => {
        if (Array.isArray(errors)) {
          errors.forEach((error) => console.log(`[${ error.code || '-' }] ${ error.en || error.uk || error.ru || error.message }`));
        }
      })
    

    return () => {
      checkoutIntroTl.kill()
    }
  }, [])

  useEffect(() => {
    resetField('store')
    resetField('branchRegion')
    resetField('branchCity')
    resetField('branchWarehouse')
    resetField('street')
    resetField('build')
    resetField('apart')
    resetField('address')

    setStoreSearch('')
    setSearchedStore([])
    setStore(store.map(item => ({ ...item, isActive: false })))

    setBranchRegionSearch('')
    setSearchedBranchRegion([])
    setAreas(areas.map(area => ({ ...area, isActive: false })))

    setBranchCitiesSearch('')
    setSearchedBranchCities([])
    setFilteredCities([])

    setBranchWarehousesSearch('')
    setSearchedBranchWarehouses([])
    setFilteredWarehouses([])
    
    clearErrors(['branchRegion', 'branchCity', 'branchWarehouse', 'store', 'address'])
  }, [delivery])

  useEffect(() => {
    let activeAreaName = areas.filter(area => area.isActive)[0] && areas.filter(area => area.isActive)[0].Description
    setFilteredCities(cities.filter(city => city.AreaDescription === activeAreaName))

    setSearchedBranchCities([])
    setFilteredWarehouses([])
    setBranchCitiesSearch('')
    setBranchWarehousesSearch('')
  }, [areas])

  useEffect(() => {
    let activeCityName = filteredCities.filter(city => city.isActive)[0] && filteredCities.filter(city => city.isActive)[0].Description
    setFilteredWarehouses(warehouses.filter(warehouse => warehouse.CityDescription === activeCityName))
  }, [filteredCities])

  const removeFromCartHandler = (key, elem) => {
    NProgress.start()
    setIsCartLoading(true)
    removeFromCart(key, langCode)
      .then(() => { 
        getCart(langCode)
          .then(({ data }) => {
            setCookie('cart_count', data.total_items, {secure: true, 'max-age': 172800})
            setItems(data.items)
            NProgress.done()
            setIsCartLoading(false)
          })
      })
  }

  const applyCuponHandler = () => {
    NProgress.start()
    setIsCartLoading(true)
    applyCupon(getValues('code'))
      .then(({ data }) => {
          setCartTotalSalePrice(data.totals.total_price)
          NProgress.done()
          setIsCartLoading(false)
          resetField('code')
          cuponInp.current.nextElementSibling.classList.remove('focused')
      })
      .catch(err => {
        setError('code', { type: 'custom', message: validateErrors.errNoCupon });
        setIsCartLoading(false)
        NProgress.done()
      })
  }

  const changeDelivery = e => setDelivery(e.currentTarget.value)
  const changePayment = e => setPeyment(e.currentTarget.value)

  const changeStore = (storeId, event) => {
    let target = event.currentTarget,
        parent = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setStore(store.map(item => {
          return {
            ...item,
            isActive: storeId === item.id
          }
        }))

        searchedStore.length !== 0 && setSearchedStore(searchedStore.map(item => {
          return {
            ...item,
            isActive: storeId === item.id
          }
        }))


        setValue('store', target.textContent)
        clearErrors(['store'])
      }, 150)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)
    }
    setIsOpenStoreDropdown(false)
  }

  const changeBranchRegion = (branchRegionId, event) => {
    let target = event.currentTarget,
        parent = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setAreas(areas.map(area => {
          return {
            ...area,
            isActive: branchRegionId === area.Ref
          }
        }))

        searchedBranchRegion.length !== 0 && setSearchedBranchRegion(searchedBranchRegion.map(area => {
          return {
            ...area,
            isActive: branchRegionId === area.Ref
          }
        }))

        setValue('branchRegion', target.textContent)
        resetField('branchCity')
        resetField('branchWarehouse')
        clearErrors(['branchRegion'])
      }, 150)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)

    }

    setIsOpenBranchRegioDropdown(false)
  }

  const changeBranchCity = (branchCityId, event) => {
    let target = event.target,
        parent = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setFilteredCities(filteredCities.map(city => {
          return {
            ...city,
            isActive: branchCityId === city.Ref
          }
        }))

        searchedBranchCities.length !== 0 && setSearchedBranchCities(searchedBranchCities.map(city => {
          return {
            ...city,
            isActive: branchCityId === city.Ref
          }
        }))

        setValue('branchCity', target.textContent)
        resetField('branchWarehouse')
        clearErrors(['branchCity'])
      }, 150)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)

    }

    setIsOpenBranchCitiesDropdown(false)
  }

  const changeBranchWarehouse = (branchWarehouseId, event) => {
    let target = event.target,
        parent = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setFilteredWarehouses(filteredWarehouses.map(warehouse => {
          return {
            ...warehouse,
            isActive: branchWarehouseId === warehouse.Ref
          }
        }))

        searchedBranchWarehouses.length !== 0 && setSearchedBranchWarehouses(searchedBranchWarehouses.map(warehouse => {
          return {
            ...warehouse,
            isActive: branchWarehouseId === warehouse.Ref
          }
        }))

        setValue('branchWarehouse', target.textContent)
        clearErrors(['branchWarehouse'])
      }, 150)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)

    }

    setIsOpenBranchWarehousesDropdown(false)
  }

  const searchingStore = () => {
    setSearchedStore(store.filter(item => item.name.toLocaleLowerCase().indexOf(storeSearch.toLocaleLowerCase().trim()) !== -1))
  }

  const searchingBranchRegion = () => {
    setSearchedBranchRegion(areas.filter(area => area.Description.toLocaleLowerCase().indexOf(branchRegionSearch.toLocaleLowerCase().trim()) !== -1))
  }

  const searchingBranchCity = () => {
    setSearchedBranchCities(filteredCities.filter(city => city.Description.toLocaleLowerCase().indexOf(branchCitiesSearch.toLocaleLowerCase().trim()) !== -1))
  }

  const searchingBranchWarehouse = () => {
    setSearchedBranchWarehouses(filteredWarehouses.filter(warehouse => warehouse.Description.toLocaleLowerCase().indexOf(branchWarehousesSearch.toLocaleLowerCase().trim()) !== -1))
  }

  return (
    <section className="intro intro-checkout" ref={intro}>
      <div className="container">
        <form 
          className="intro-checkout__inner"
          autoComplete="off"
          onSubmit={handleSubmit(formSubmit, formError)}
        >
          <BackButton prefix={prefix} checkoutBackBtn={checkoutBackBtn} />
          <div className="intro-checkout__content intro-checkout-content">
            <CustomerInfo
              register={register}
              errors={errors}
              control={control}
              customerInfo={customerInfo}
              userInfo={userInfo}
              validateErrors={validateErrors}
            />
            <ShippingMethod
              register={register}
              errors={errors}
              delivery={delivery}
              changeDelivery={changeDelivery}
              isOpenStoreDropdown={isOpenStoreDropdown}
              setIsOpenStoreDropdown={setIsOpenStoreDropdown}
              store={store}
              searchedStore={searchedStore}
              changeStore={changeStore}
              storeSearch={storeSearch}
              setStoreSearch={setStoreSearch}
              searchingStore={searchingStore}
              isOpenBranchRegioDropdown={isOpenBranchRegioDropdown}
              setIsOpenBranchRegioDropdown={setIsOpenBranchRegioDropdown}
              areas={areas}
              branchRegionSearch={branchRegionSearch}
              setBranchRegionSearch={setBranchRegionSearch}
              searchingBranchRegion={searchingBranchRegion}
              searchedBranchRegion={searchedBranchRegion}
              changeBranchRegion={changeBranchRegion}
              filteredCities={filteredCities}
              isOpenBranchCitiesDropdown={isOpenBranchCitiesDropdown}
              setIsOpenBranchCitiesDropdown={setIsOpenBranchCitiesDropdown}
              branchCitiesSearch={branchCitiesSearch}
              setBranchCitiesSearch={setBranchCitiesSearch}
              changeBranchCity={changeBranchCity}
              searchedBranchCities={searchedBranchCities}
              searchingBranchCity={searchingBranchCity}
              isOpenBranchWarehousesDropdown={isOpenBranchWarehousesDropdown}
              setIsOpenBranchWarehousesDropdown={setIsOpenBranchWarehousesDropdown}
              branchWarehousesSearch={branchWarehousesSearch}
              setBranchWarehousesSearch={setBranchWarehousesSearch}
              filteredWarehouses={filteredWarehouses}
              changeBranchWarehouse={changeBranchWarehouse}
              searchingBranchWarehouse={searchingBranchWarehouse}
              searchedBranchWarehouses={searchedBranchWarehouses}
              shippingMethod={shippingMethod}
              novaPoshtaLabels={novaPoshtaLabels}
              novaPoshtaErr={novaPoshtaErr}
              novaPoshtaSearch={novaPoshtaSearch}
              validateErrors={validateErrors}
              shippingMethodList={shippingMethodList}
            />
            <PaymentInfo
              register={register}
              errors={errors}
              changePayment={changePayment}
              paymentMethod={paymentMethod}
              validateErrors={validateErrors}
              paymentMethodList={paymentMethodList}
            />
          </div>
          <div className="intro-checkout__delivery intro-checkout-delivery">
            <div className="intro-checkout-delivery__inner">
              <DeliveryList
                deleteBtn={deleteBtn}
                checkoutEmptyListTitle={checkoutEmptyListTitle}
                items={items}
                removeFromCartHandler={removeFromCartHandler}
                isCartLoading={isCartLoading}
              />
              { items && items.length !== 0 && <DeliveryInfo
                  register={register}
                  errors={errors}
                  isSubmitting={isSubmitting}
                  coupons={coupons}
                  orderForm={orderForm}
                  items={items}
                  isCartLoading={isCartLoading}
                  applyCuponHandler={applyCuponHandler}
                  cartTotalSalePrice={cartTotalSalePrice}
                  ref={cuponInp}
                  validateErrors={validateErrors}
              /> }
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CheckoutIntro