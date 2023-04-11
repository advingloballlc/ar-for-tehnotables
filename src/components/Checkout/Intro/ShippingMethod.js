import React, { useRef } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import { fieldChange } from './../../../utils/fieldChange'
import { fieldBlur } from './../../../utils/fieldBlur'

import sprite from '../../../icons/sprite.svg'

const ShippingMethod = ({
  register,
  errors, 
  delivery, 
  changeDelivery, 
  isOpenStoreDropdown, 
  setIsOpenStoreDropdown,
  store,
  searchedStore,
  changeStore,
  storeSearch,
  setStoreSearch,
  searchingStore,
  isOpenBranchRegioDropdown,
  setIsOpenBranchRegioDropdown,
  areas,
  branchRegionSearch,
  setBranchRegionSearch,
  searchingBranchRegion,
  searchedBranchRegion,
  changeBranchRegion,
  filteredCities,
  isOpenBranchCitiesDropdown,
  setIsOpenBranchCitiesDropdown,
  branchCitiesSearch,
  setBranchCitiesSearch,
  changeBranchCity,
  searchedBranchCities,
  searchingBranchCity,
  isOpenBranchWarehousesDropdown,
  setIsOpenBranchWarehousesDropdown,
  branchWarehousesSearch,
  setBranchWarehousesSearch,
  filteredWarehouses,
  changeBranchWarehouse,
  searchingBranchWarehouse,
  searchedBranchWarehouses,
  shippingMethod,
  novaPoshtaLabels,
  novaPoshtaErr,
  novaPoshtaSearch,
  validateErrors,
  shippingMethodList
}) => {
  const deliveryOne = useRef(null)
  const deliveryTwo = useRef(null)
  const deliveryThree = useRef(null)
  const deliveryFour = useRef(null)

  const { ref } = register('delivery')

  return (
    <div className="intro-checkout-content__item">
      { errors?.delivery && <span className="intro-checkout-content__item-error form-error">{errors?.delivery?.message || 'Error'}</span> }
      <div className="intro-checkout-content__item-title-wrapper title-wrapper">
        <div className="intro-checkout-content__item-title title title--small">{shippingMethod}</div>
      </div>
      <div className="intro-checkout-content__item-inner">
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input 
            className="intro-checkout-content__item-radio checkout-elem__radio"
            id="delivery-1" 
            type="radio" 
            value={`local_pickup`}
            {...register('delivery', {
              required: validateErrors.errEmptyDelivery,
              onChange: changeDelivery
            })}
            ref={e => {
              ref(e)
              deliveryOne.current = e
            }}
          />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="delivery-1">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#user`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">{shippingMethodList.oneTime}</span>
            </span>
          </label>
          { 
            delivery && delivery === deliveryOne.current.value && 
              <div className="intro-checkout-content__item-inps checkout-elem__inps checkout-elem__inps--store">
                <div className="intro-checkout-content__item-dropdown-wrapper checkout-elem__dropdown-wrapper">
                  <span className="intro-checkout-content__label local-title local-title--black">{novaPoshtaLabels.inputStoreLabel}</span>
                  <div className="intro-checkout-content__item-dropdown checkout-elem__dropdown dropdown dropdown--store">
                    <input 
                      className="intro-checkout-content__item-hidden" 
                      type="hidden"
                      {...register('store', {
                        required: validateErrors.errEmptyStore
                      })}
                    />
                    { errors?.store && <span className="intro-checkout-content__item-error form-error">{errors?.store?.message || 'Error'}</span> }
                    <div 
                      className={`intro-checkout-content__item-current checkout-elem__dropdown-current dropdown__current ${isOpenStoreDropdown ? 'open' : ''}`}
                      onClick={() => setIsOpenStoreDropdown(prev => !prev)}
                    >
                      <div className="intro-checkout-content__item-text checkout-elem__dropdown-text dropdown__text">
                        { store.some(item => item.isActive) ? store.filter(item => item.isActive)[0].name : novaPoshtaLabels.inputStoreLabel }
                      </div>
                      <span className="intro-checkout-content__item-icon checkout-elem__dropdown-icon dropdown__icon">
                        <svg><use href={`${sprite}#header-arrow`} /></svg>
                      </span>
                    </div>
                    <div className={`intro-checkout-content__item-list checkout-elem__dropdown-list dropdown__list ${isOpenStoreDropdown ? 'open' : ''}`}>
                      { store.length >= 5 && <div className="intro-checkout-content__item-search checkout-elem__dropdown-search dropdown__search">
                        <div className="intro-checkout-content__item-search-inner checkout-elem__dropdown-search-inner dropdown__search-inner">
                          <input 
                            className="intro-checkout-content__item-search-inp checkout-elem__dropdown-search-inp dropdown__search-inp"
                            id="store"
                            autoComplete="off"
                            type="text"
                            value={storeSearch}
                            onChange={e => {
                              setStoreSearch(e.currentTarget.value)
                              fieldChange(e)
                            }}
                            onKeyPress={searchingStore}
                            onBlur={fieldBlur}
                          />
                          <label 
                            className={`intro-checkout-content__item-search-placeholder checkout-elem__dropdown-search-placeholder dropdown__search-placeholder ${storeSearch ? 'focused' : ''}`}
                            htmlFor="store"
                          >
                            {novaPoshtaSearch}
                          </label>
                        </div>
                      </div> }
                      <SimpleBar 
                        className="intro-checkout-content__item-dropdown-inner checkout-elem__dropdown-inner dropdown__inner"
                        autoHide={false}
                      >
                        {
                          !storeSearch ? store.map(item => {
                            return (
                              <div 
                                className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${item.isActive ? 'active' : ''}`} key={item.id}
                                onClick={e => changeStore(item.id, e)}
                              >
                                { item.name }
                              </div>
                            )
                          })
                          : searchedStore.length !== 0 ? searchedStore.map(item => {
                              return (
                                <div 
                                  className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${item.isActive ? 'active' : ''}`} key={item.id}
                                  onClick={e => changeStore(item.id, e)}
                                >
                                  { item.name }
                                </div>
                              )
                            })
                          : <div className="intro-checkout-content__item-err checkout-elem__dropdown-err dropdown__errr">{novaPoshtaErr}</div>
                        }
                      </SimpleBar>
                    </div>
                  </div>
                </div>
              </div> 
          }
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input 
            className="intro-checkout-content__item-radio checkout-elem__radio"
            id="delivery-2" 
            type="radio" 
            value={`nova_poshta_department`}
            {...register('delivery', {
              required: validateErrors.errEmptyDelivery,
              onChange: changeDelivery
            })}
            ref={e => {
              ref(e)
              deliveryTwo.current = e
            }}
          />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="delivery-2">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#newpost`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">{shippingMethodList.twoTime}</span>
            </span>
          </label>
          { 
            delivery && delivery === deliveryTwo.current.value && 
              <div className="intro-checkout-content__item-inps checkout-elem__inps checkout-elem__inps--branch">
                <div className="intro-checkout-content__item-dropdown-wrapper checkout-elem__dropdown-wrapper">
                  <span className="intro-checkout-content__label local-title local-title--black">{novaPoshtaLabels.inputRegionLabel}</span>
                  <div className={`intro-checkout-content__item-dropdown checkout-elem__dropdown dropdown dropdown--region ${areas.length === 0 ? 'disabled' : ''}`}>
                    <input 
                      className="intro-checkout-content__item-hidden" 
                      type="hidden"
                      {...register('branchRegion', {
                        required: validateErrors.errEmptyRegion
                      })}
                    />
                    { errors?.branchRegion && <span className="intro-checkout-content__item-error form-error">{errors?.branchRegion?.message || 'Error'}</span> }
                    <div 
                      className={`intro-checkout-content__item-current checkout-elem__dropdown-current dropdown__current ${isOpenBranchRegioDropdown ? 'open' : ''}`}
                      onClick={() => setIsOpenBranchRegioDropdown(prev => !prev)}
                    >
                      <div className="intro-checkout-content__item-text checkout-elem__dropdown-text dropdown__text">
                        { areas.some(areea => areea.isActive) ? areas.filter(area => area.isActive)[0].Description : novaPoshtaLabels.inputRegionLabel }
                      </div>
                      <span className="intro-checkout-content__item-icon checkout-elem__dropdown-icon dropdown__icon">
                        <svg><use href={`${sprite}#header-arrow`} /></svg>
                      </span>
                    </div>
                    <div className={`intro-checkout-content__item-list checkout-elem__dropdown-list dropdown__list ${isOpenBranchRegioDropdown ? 'open' : ''}`}>
                      { areas.length >= 5 && <div className="intro-checkout-content__item-search checkout-elem__dropdown-search dropdown__search">
                        <div className="intro-checkout-content__item-search-inner checkout-elem__dropdown-search-inner dropdown__search-inner">
                          <input 
                            className="intro-checkout-content__item-search-inp checkout-elem__dropdown-search-inp dropdown__search-inp" 
                            id="branche-region"
                            autoComplete="off"
                            type="text"
                            value={branchRegionSearch}
                            onChange={e => {
                              setBranchRegionSearch(e.currentTarget.value)
                              fieldChange(e)
                            }}
                            onKeyPress={searchingBranchRegion}
                            onBlur={fieldBlur}
                          />
                          <label 
                            className={`intro-checkout-content__item-search-placeholder checkout-elem__dropdown-search-placeholder dropdown__search-placeholder ${branchRegionSearch ? 'focused' : ''}`}
                            htmlFor="branche-region"
                          >
                            {novaPoshtaSearch}
                          </label>
                        </div>
                      </div> }
                      <SimpleBar 
                        className="intro-checkout-content__item-dropdown-inner checkout-elem__dropdown-inner dropdown__inner"
                        autoHide={false}
                      >
                        {
                          !branchRegionSearch ? areas.map(area => {
                            return (
                              <div 
                                className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${area.isActive ? 'active' : ''}`} key={area.Ref}
                                onClick={e => changeBranchRegion(area.Ref, e)}
                              >
                                { area.Description }
                              </div>
                            )
                          })
                          : searchedBranchRegion.length !== 0 ? searchedBranchRegion.map(area => {
                              return (
                                <div 
                                  className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${area.isActive ? 'active' : ''}`} key={area.Ref}
                                  onClick={e => changeBranchRegion(area.Ref, e)}
                                >
                                  { area.Description }
                                </div>
                              )
                            })
                          : <div className="intro-checkout-content__item-err checkout-elem__dropdown-err dropdown__errr">{novaPoshtaErr}</div>
                        }
                      </SimpleBar>
                    </div>
                  </div>
                </div>
                <div className="intro-checkout-content__item-dropdown-wrapper checkout-elem__dropdown-wrapper">
                  <span className="intro-checkout-content__label local-title local-title--black">{novaPoshtaLabels.inputCityLabel}</span>
                  <div className={`intro-checkout-content__item-dropdown checkout-elem__dropdown dropdown dropdown--city ${filteredCities.length === 0 ? 'disabled' : ''}`}>
                    <input 
                      className="intro-checkout-content__item-hidden" 
                      type="hidden"
                      {...register('branchCity', {
                        required: validateErrors.errEmptyCity
                      })}
                    />
                    { errors?.branchCity && <span className="intro-checkout-content__item-error form-error">{errors?.branchCity?.message || 'Error'}</span> }
                    <div 
                      className={`intro-checkout-content__item-current checkout-elem__dropdown-current dropdown__current ${isOpenBranchCitiesDropdown ? 'open' : ''}`}
                      onClick={() => setIsOpenBranchCitiesDropdown(prev => !prev)}
                    >
                      <div className="intro-checkout-content__item-text checkout-elem__dropdown-text dropdown__text">
                        { filteredCities.some(city => city.isActive) ? filteredCities.filter(city => city.isActive)[0].Description : novaPoshtaLabels.inputCityLabel }
                      </div>
                      <span className="intro-checkout-content__item-icon checkout-elem__dropdown-icon dropdown__icon">
                        <svg><use href={`${sprite}#header-arrow`} /></svg>
                      </span>
                    </div>
                    <div className={`intro-checkout-content__item-list checkout-elem__dropdown-list dropdown__list ${isOpenBranchCitiesDropdown ? 'open' : ''}`}>
                      { filteredCities.length >= 5 && <div className="intro-checkout-content__item-search checkout-elem__dropdown-search dropdown__search">
                        <div className="intro-checkout-content__item-search-inner checkout-elem__dropdown-search-inner dropdown__search-inner">
                          <input 
                            className="intro-checkout-content__item-search-inp checkout-elem__dropdown-search-inp dropdown__search-inp" 
                            id="branche-city"
                            autoComplete="off"
                            type="text"
                            value={branchCitiesSearch}
                            onChange={e => {
                              setBranchCitiesSearch(e.currentTarget.value)
                              fieldChange(e)
                            }}
                            onKeyPress={searchingBranchCity}
                            onBlur={fieldBlur}
                          />
                          <label 
                            className={`intro-checkout-content__item-search-placeholder checkout-elem__dropdown-search-placeholder dropdown__search-placeholder ${branchCitiesSearch ? 'focused' : ''}`}
                            htmlFor="branche-city"
                          >
                            {novaPoshtaSearch}
                          </label>
                        </div>
                      </div> }
                      <SimpleBar 
                        className="intro-checkout-content__item-dropdown-inner checkout-elem__dropdown-inner dropdown__inner"
                        autoHide={false}
                      >
                        {
                          !branchCitiesSearch ? filteredCities.map(city => {
                            return (
                              <div 
                                className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${city.isActive ? 'active' : ''}`} key={city.Ref}
                                onClick={e => changeBranchCity(city.Ref, e)}
                              >
                                { city.Description }
                              </div>
                            )
                          })
                          : searchedBranchCities.length !== 0 ? searchedBranchCities.map(city => {
                              return (
                                <div 
                                  className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${city.isActive ? 'active' : ''}`} key={city.Ref}
                                  onClick={e => changeBranchCity(city.Ref, e)}
                                >
                                  { city.Description }
                                </div>
                              )
                            })
                          : <div className="intro-checkout-content__item-err checkout-elem__dropdown-err dropdown__errr">{novaPoshtaErr}</div>
                        }
                      </SimpleBar>
                    </div>
                  </div>
                </div>
                <div className="intro-checkout-content__item-dropdown-wrapper checkout-elem__dropdown-wrapper">
                  <span className="intro-checkout-content__label local-title local-title--black">{novaPoshtaLabels.inputWarehouseLabel}</span>
                  <div className={`intro-checkout-content__item-dropdown checkout-elem__dropdown dropdown dropdown--warehouse ${filteredWarehouses.length === 0 ? 'disabled' : ''}`}>
                    <input 
                      className="intro-checkout-content__item-hidden" 
                      type="hidden"
                      {...register('branchWarehouse', {
                        required: validateErrors.errEmptyWarehouse
                      })}
                    />
                    { errors?.branchWarehouse && <span className="intro-checkout-content__item-error form-error">{errors?.branchWarehouse?.message || 'Error'}</span> }
                    <div 
                      className={`intro-checkout-content__item-current checkout-elem__dropdown-current dropdown__current ${isOpenBranchWarehousesDropdown ? 'open' : ''}`}
                      onClick={() => setIsOpenBranchWarehousesDropdown(prev => !prev)}
                    >
                      <div className="intro-checkout-content__item-text checkout-elem__dropdown-text dropdown__text">
                        { filteredWarehouses.some(warehouse => warehouse.isActive) ? filteredWarehouses.filter(warehouse => warehouse.isActive)[0].Description : novaPoshtaLabels.inputWarehouseLabel }
                      </div>
                      <span className="intro-checkout-content__item-icon checkout-elem__dropdown-icon dropdown__icon">
                        <svg><use href={`${sprite}#header-arrow`} /></svg>
                      </span>
                    </div>
                    <div className={`intro-checkout-content__item-list checkout-elem__dropdown-list dropdown__list ${isOpenBranchWarehousesDropdown ? 'open' : ''}`}>
                      { filteredWarehouses.length >= 5 && <div className="intro-checkout-content__item-search checkout-elem__dropdown-search dropdown__search">
                        <div className="intro-checkout-content__item-search-inner checkout-elem__dropdown-search-inner dropdown__search-inner">
                          <input 
                            className="intro-checkout-content__item-search-inp checkout-elem__dropdown-search-inp dropdown__search-inp" 
                            id="branche-number"
                            autoComplete="off"
                            type="text"
                            value={branchWarehousesSearch}
                            onChange={e => {
                              setBranchWarehousesSearch(e.currentTarget.value)
                              fieldChange(e)
                            }}
                            onKeyPress={searchingBranchWarehouse}
                            onBlur={fieldBlur}
                          />
                          <label 
                            className={`intro-checkout-content__item-search-placeholder checkout-elem__dropdown-search-placeholder dropdown__search-placeholder ${branchWarehousesSearch ? 'focused' : ''}`}
                            htmlFor="branche-number"
                          >
                            {novaPoshtaSearch}
                          </label>
                        </div>
                      </div> }
                      <SimpleBar 
                        className="intro-checkout-content__item-dropdown-inner checkout-elem__dropdown-inner dropdown__inner"
                        autoHide={false}
                      >
                        {
                          !branchWarehousesSearch ? filteredWarehouses.map(warehouse => {
                            return (
                              <div 
                                className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${warehouse.isActive ? 'active' : ''}`} key={warehouse.Ref}
                                onClick={e => changeBranchWarehouse(warehouse.Ref, e)}
                              >
                                { warehouse.Description }
                              </div>
                            )
                          })
                          : searchedBranchWarehouses.length !== 0 ? searchedBranchWarehouses.map(warehouse => {
                              return (
                                <div 
                                  className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${warehouse.isActive ? 'active' : ''}`} key={warehouse.Ref}
                                  onClick={e => changeBranchWarehouse(warehouse.Ref, e)}
                                >
                                  { warehouse.Description }
                                </div>
                              )
                            })
                          : <div className="intro-checkout-content__item-err checkout-elem__dropdown-err dropdown__errr">{novaPoshtaErr}</div>
                        }
                      </SimpleBar>
                    </div>
                  </div>
                </div>
              </div> 
          }
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input 
            className="intro-checkout-content__item-radio checkout-elem__radio"
            id="delivery-3" 
            type="radio" 
            value={`nova_poshta_courier`}
            {...register('delivery', {
              required: validateErrors.errEmptyDelivery,
              onChange: changeDelivery
            })}
            ref={e => {
              ref(e)
              deliveryThree.current = e
            }}
          />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="delivery-3">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#newpost`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">{shippingMethodList.threeTime}</span>
            </span>
          </label>
          { 
            delivery && delivery === deliveryThree.current.value && 
              <div className="intro-checkout-content__item-inps checkout-elem__inps checkout-elem__inps--courier">
                <div className="intro-checkout-content__item-dropdown-wrapper checkout-elem__dropdown-wrapper">
                  <span className="intro-checkout-content__label local-title local-title--black">{novaPoshtaLabels.inputRegionLabel}</span>
                  <div className={`intro-checkout-content__item-dropdown checkout-elem__dropdown dropdown dropdown--region ${areas.length === 0 ? 'disabled' : ''}`}>
                    <input 
                      className="intro-checkout-content__item-hidden" 
                      type="hidden"
                      {...register('branchRegion', {
                        required: validateErrors.errEmptyRegion
                      })}
                    />
                    { errors?.branchRegion && <span className="intro-checkout-content__item-error form-error">{errors?.branchRegion?.message || 'Error'}</span> }
                    <div 
                      className={`intro-checkout-content__item-current checkout-elem__dropdown-current dropdown__current ${isOpenBranchRegioDropdown ? 'open' : ''}`}
                      onClick={() => setIsOpenBranchRegioDropdown(prev => !prev)}
                    >
                      <div className="intro-checkout-content__item-text checkout-elem__dropdown-text dropdown__text">
                        { areas.some(areea => areea.isActive) ? areas.filter(area => area.isActive)[0].Description : novaPoshtaLabels.inputRegionLabel }
                      </div>
                      <span className="intro-checkout-content__item-icon checkout-elem__dropdown-icon dropdown__icon">
                        <svg><use href={`${sprite}#header-arrow`} /></svg>
                      </span>
                    </div>
                    <div className={`intro-checkout-content__item-list checkout-elem__dropdown-list dropdown__list ${isOpenBranchRegioDropdown ? 'open' : ''}`}>
                      { areas.length >= 5 && <div className="intro-checkout-content__item-search checkout-elem__dropdown-search dropdown__search">
                        <div className="intro-checkout-content__item-search-inner checkout-elem__dropdown-search-inner dropdown__search-inner">
                          <input 
                            className="intro-checkout-content__item-search-inp checkout-elem__dropdown-search-inp dropdown__search-inp" 
                            id="branche-region"
                            autoComplete="off"
                            type="text"
                            value={branchRegionSearch}
                            onChange={e => {
                              setBranchRegionSearch(e.currentTarget.value)
                              fieldChange(e)
                            }}
                            onKeyPress={searchingBranchRegion}
                            onBlur={fieldBlur}
                          />
                          <label 
                            className={`intro-checkout-content__item-search-placeholder checkout-elem__dropdown-search-placeholder dropdown__search-placeholder ${branchRegionSearch ? 'focused' : ''}`}
                            htmlFor="branche-region"
                          >
                            {novaPoshtaSearch}
                          </label>
                        </div>
                      </div> }
                      <SimpleBar 
                        className="intro-checkout-content__item-dropdown-inner checkout-elem__dropdown-inner dropdown__inner"
                        autoHide={false}
                      >
                        {
                          !branchRegionSearch ? areas.map(area => {
                            return (
                              <div 
                                className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${area.isActive ? 'active' : ''}`} key={area.Ref}
                                onClick={e => changeBranchRegion(area.Ref, e)}
                              >
                                { area.Description }
                              </div>
                            )
                          })
                          : searchedBranchRegion.length !== 0 ? searchedBranchRegion.map(area => {
                              return (
                                <div 
                                  className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${area.isActive ? 'active' : ''}`} key={area.Ref}
                                  onClick={e => changeBranchRegion(area.Ref, e)}
                                >
                                  { area.Description }
                                </div>
                              )
                            })
                          : <div className="intro-checkout-content__item-err checkout-elem__dropdown-err dropdown__errr">{novaPoshtaErr}</div>
                        }
                      </SimpleBar>
                    </div>
                  </div>
                </div>
                <div className="intro-checkout-content__item-dropdown-wrapper checkout-elem__dropdown-wrapper">
                  <span className="intro-checkout-content__label local-title local-title--black">{novaPoshtaLabels.inputCityLabel}</span>
                  <div className={`intro-checkout-content__item-dropdown checkout-elem__dropdown dropdown dropdown--city ${filteredCities.length === 0 ? 'disabled' : ''}`}>
                  <input 
                      className="intro-checkout-content__item-hidden" 
                      type="hidden"
                      {...register('branchCity', {
                        required: validateErrors.errEmptyCity
                      })}
                    />
                    { errors?.branchCity && <span className="intro-checkout-content__item-error form-error">{errors?.branchCity?.message || 'Error'}</span> }
                    <div 
                      className={`intro-checkout-content__item-current checkout-elem__dropdown-current dropdown__current ${isOpenBranchCitiesDropdown ? 'open' : ''}`}
                      onClick={() => setIsOpenBranchCitiesDropdown(prev => !prev)}
                    >
                      <div className="intro-checkout-content__item-text checkout-elem__dropdown-text dropdown__text">
                        { filteredCities.some(city => city.isActive) ? filteredCities.filter(city => city.isActive)[0].Description : novaPoshtaLabels.inputCityLabel }
                      </div>
                      <span className="intro-checkout-content__item-icon checkout-elem__dropdown-icon dropdown__icon">
                        <svg><use href={`${sprite}#header-arrow`} /></svg>
                      </span>
                    </div>
                    <div className={`intro-checkout-content__item-list checkout-elem__dropdown-list dropdown__list ${isOpenBranchCitiesDropdown ? 'open' : ''}`}>
                      { filteredCities.length >= 5 && <div className="intro-checkout-content__item-search checkout-elem__dropdown-search dropdown__search">
                        <div className="intro-checkout-content__item-search-inner checkout-elem__dropdown-search-inner dropdown__search-inner">
                          <input 
                            className="intro-checkout-content__item-search-inp checkout-elem__dropdown-search-inp dropdown__search-inp" 
                            id="branche-city"
                            autoComplete="off"
                            type="text"
                            value={branchCitiesSearch}
                            onChange={e => {
                              setBranchCitiesSearch(e.currentTarget.value)
                              fieldChange(e)
                            }}
                            onKeyPress={searchingBranchCity}
                            onBlur={fieldBlur}
                          />
                          <label 
                            className={`intro-checkout-content__item-search-placeholder checkout-elem__dropdown-search-placeholder dropdown__search-placeholder ${branchCitiesSearch ? 'focused' : ''}`}
                            htmlFor="branche-city"
                          >
                            {novaPoshtaSearch}
                          </label>
                        </div>
                      </div> }
                      <SimpleBar 
                        className="intro-checkout-content__item-dropdown-inner checkout-elem__dropdown-inner dropdown__inner"
                        autoHide={false}
                      >
                        {
                          !branchCitiesSearch ? filteredCities.map(city => {
                            return (
                              <div 
                                className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${city.isActive ? 'active' : ''}`} key={city.Ref}
                                onClick={e => changeBranchCity(city.Ref, e)}
                              >
                                { city.Description }
                              </div>
                            )
                          })
                          : searchedBranchCities.length !== 0 ? searchedBranchCities.map(city => {
                              return (
                                <div 
                                  className={`intro-checkout-content__item-elem checkout-elem__dropdown-item dropdown__item ${city.isActive ? 'active' : ''}`} key={city.Ref}
                                  onClick={e => changeBranchCity(city.Ref, e)}
                                >
                                  { city.Description }
                                </div>
                              )
                            })
                          : <div className="intro-checkout-content__item-err checkout-elem__dropdown-err dropdown__errr">{novaPoshtaErr}</div>
                        }
                      </SimpleBar>
                    </div>
                  </div>
                </div>
                <div className="intro-checkout-content__inp-wrapper">
                  <label 
                    className="intro-checkout-content__label local-title local-title--black" 
                    htmlFor="checkout-courier-street"
                  >
                    {novaPoshtaLabels.inputStreetLabel}
                  </label>
                  <div className="intro-checkout-content__inp-inner">
                    <input
                      className="intro-checkout-content__inp"
                      id="checkout-courier-street"
                      type="text"
                      autoComplete="off"
                      {...register('street', {
                        onChange: fieldChange,
                        onBlur: fieldBlur
                      })}
                    />
                    <span className="intro-checkout-content__placeholder">{novaPoshtaLabels.inputStreetLabel}</span>
                  </div>
                </div>
                <div className="intro-checkout-content__inp-wrapper">
                  <label 
                    className="intro-checkout-content__label local-title local-title--black" 
                    htmlFor="checkout-courier-build"
                  >
                    {novaPoshtaLabels.inputBuidingLabel}
                  </label>
                  <div className="intro-checkout-content__inp-inner">
                    <input
                      className="intro-checkout-content__inp"
                      id="checkout-courier-build"
                      type="text"
                      autoComplete="off"
                      {...register('build', {
                        onChange: fieldChange,
                        onBlur: fieldBlur
                      })}
                    />
                    <span className="intro-checkout-content__placeholder">{novaPoshtaLabels.inputBuidingLabel}</span>
                  </div>
                </div>
                <div className="intro-checkout-content__inp-wrapper">
                  <label 
                    className="intro-checkout-content__label local-title local-title--black" 
                    htmlFor="checkout-courier-apart"
                  >
                    {novaPoshtaLabels.inputApartmentLabel}
                  </label>
                  <div className="intro-checkout-content__inp-inner">
                    <input
                      className="intro-checkout-content__inp"
                      id="checkout-courier-apart"
                      type="text"
                      autoComplete="off"
                      {...register('apart', {
                        onChange: fieldChange,
                        onBlur: fieldBlur
                      })}
                    />
                    <span className="intro-checkout-content__placeholder">{novaPoshtaLabels.inputApartmentLabel}</span>
                  </div>
                </div>
                
              </div>
          }
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input 
            className="intro-checkout-content__item-radio checkout-elem__radio"
            id="delivery-4" 
            type="radio" 
            value={`international_delivery`}
            {...register('delivery', {
              required: validateErrors.errEmptyDelivery,
              onChange: changeDelivery
            })}
            ref={e => {
              ref(e)
              deliveryFour.current = e
            }}
          />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="delivery-4">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#inter`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">{shippingMethodList.fourTime}</span>
            </span>
          </label>
          { 
            delivery && delivery === deliveryFour.current.value && 
              <div className="intro-checkout-content__item-inps checkout-elem__inps checkout-elem__inps--inter">
                <div className="intro-checkout-content__inp-wrapper">
                  <label 
                    className="intro-checkout-content__label local-title local-title--black" 
                    htmlFor="checkout-inter-address"
                  >
                    {novaPoshtaLabels.inputAddressLabel}
                  </label>
                  <div className="intro-checkout-content__inp-inner">
                    <input
                      className="intro-checkout-content__inp"
                      id="checkout-inter-address"
                      type="text"
                      autoComplete="off"
                      {...register('address', {
                        required: validateErrors.errEmptyAddress,
                        onChange: fieldChange,
                        onBlur: fieldBlur
                      })}
                    />
                    <span className="intro-checkout-content__placeholder">{novaPoshtaLabels.inputAddressLabel}</span>
                    { errors?.address && <span className="intro-checkout-content__item-error form-error">{errors?.address?.message || 'Error'}</span> }
                  </div>
                </div>
              </div> 
          }
        </div>
      </div>
    </div>
  )
}

export default ShippingMethod