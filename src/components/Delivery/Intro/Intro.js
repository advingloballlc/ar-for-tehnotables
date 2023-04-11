import React, { useEffect } from 'react'
import gsap from 'gsap'

import { detectLighthouse } from '../../../utils/detectLighthouse'

const DeliveryIntro = () => {
  useEffect(() => {
    if (!detectLighthouse()) return null
    
    let deliveryIntroTl = gsap.timeline()

    deliveryIntroTl
      .from('.delivery-intro__title', .5, { delay: .2, y: '100%', onComplete() {
        deliveryIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.delivery-intro__article', .6, { y: 100, opacity: 0, onComplete() {
        deliveryIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.1')

    return () => {
      deliveryIntroTl.kill()
    }
  }, [])

  return (
    <section className="intro delivery-intro text-page">
      <div className="container">
        <div className="delivery-intro__title-wrapper title-wrapper">
          <h1 className="delivery-intro__title title title--big">Delivery</h1>
        </div>
        <article className="delivery-intro__article article">
          <p>
            Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back. Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top.
          </p>
          <p>
            At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.
          </p>
          <p>
            Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.
          </p>
          <p>
            Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back. Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top.
          </p>
          <p>
            At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.
          </p>
          <p>
            Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.
          </p>
        </article>
      </div>
    </section>
  )
}

export default DeliveryIntro