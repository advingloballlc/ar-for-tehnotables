import React from 'react'
import { Html, useProgress } from '@react-three/drei'

import './TableLoader.scss'

const TableLoader = () => {
  const { progress } = useProgress()
  
  return ( 
    <Html center>
      <div id="spinner">  
        <svg width="231px" height="236px" viewBox="0 0 231 236">
          <defs>
            <symbol id="spinner__logo" fill="#FFFFFF" fillRule="nonzero">
              <path fillRule="evenodd" clipRule="evenodd" d="M119.541 12.3162C100.543 19.0741 66.5151 31.0998 43.9227 39.0401C11.9439 50.2796 2.61275 53.6848 1.79479 54.4138C0.295428 55.7497 -0.163683 56.8323 0.0492067 58.5298C0.298653 60.5165 4.50672 67.6147 29.2683 107.813C47.4045 137.256 50.4995 142.118 51.5852 142.869C53.7087 144.338 57.5643 144.582 61.3456 143.487L62.152 143.253L63.8817 153.866C64.833 159.702 65.6684 164.804 65.7385 165.202C65.8267 165.703 65.4028 165.341 64.3609 164.025C63.5102 162.951 62.6051 162.125 62.2786 162.125C61.4224 162.125 56.4244 165.821 56.2787 166.562C56.1276 167.327 55.4422 166.114 75.8559 201.215C84.7126 216.444 92.6207 230.329 93.4295 232.071C94.2383 233.813 95.0313 235.237 95.1915 235.237C95.352 235.236 96.8137 233.725 98.4399 231.878C100.612 229.412 101.419 228.271 101.479 227.578C101.663 225.462 99.6041 221.783 80.8784 190.766L77.2943 184.829L76.9924 181.608C76.769 179.226 76.769 178.108 76.9927 177.311C77.2416 176.422 77.1351 175.137 76.386 169.994C74.7799 158.965 71.9392 137.787 72.0465 137.642C72.1037 137.565 79.51 132.783 88.5051 127.015L104.859 116.529L107.334 119.078L109.808 121.626L120.387 114.509C126.205 110.594 131.016 107.327 131.078 107.249C131.14 107.17 130.814 105.647 130.354 103.864L129.516 100.622L132.525 98.4691C134.18 97.2852 136.632 95.5337 137.973 94.5767C141.001 92.4177 141.407 91.7369 141.539 88.6053C141.636 86.2773 141.61 86.1597 140.674 84.7644C140.143 83.9732 137.92 81.8424 135.735 80.0301C129.443 74.8123 129.366 74.5951 133.048 72.4209C137.655 69.7009 166.444 53.2364 166.484 53.2986C166.506 53.3326 165.126 65.7181 163.417 80.8221C161.117 101.149 160.383 108.441 160.592 108.891C160.791 109.32 160.776 110.269 160.541 112.112C160.358 113.549 160.156 114.795 160.092 114.882C160.028 114.967 157.209 112.522 153.827 109.447L147.678 103.857L145.369 105.532C144.1 106.453 142.974 107.31 142.867 107.437C142.76 107.564 142.942 108.096 143.27 108.621C143.748 109.384 157.439 121.99 185.701 147.688L187.215 149.064L189.195 147.072C190.285 145.976 191.209 144.952 191.25 144.797C191.291 144.641 191.008 143.753 190.622 142.823C189.981 141.277 188.928 140.236 178.452 130.782C172.145 125.09 166.826 120.231 166.634 119.983C166.347 119.615 166.384 118.75 166.836 115.182C167.139 112.788 167.387 110.725 167.387 110.598C167.387 110.471 167.572 110.367 167.799 110.367C168.025 110.367 168.263 110.164 168.327 109.915C168.392 109.666 169.6 99.9339 171.012 88.2883C173.56 67.2835 175.241 54.4275 175.483 54.1011C175.553 54.0077 177.638 54.9806 180.116 56.2626C182.595 57.5446 185.242 58.8415 185.999 59.1441C187.703 59.8252 190.47 59.8466 192.251 59.1922C194.361 58.4165 228.983 35.9151 229.682 34.8655C230.62 33.4546 230.381 30.7208 229.235 29.757C228.973 29.5369 220.666 26.1516 210.774 22.2346C200.882 18.3173 185.592 12.0195 176.795 8.23965C158.855 0.531295 157.381 -0.0380454 155.45 0.00176863C154.565 0.0198659 141.89 4.36647 119.541 12.3162Z"/>
            </symbol>
            <mask id="spinner__logo-mask">
              <use href="#spinner__logo" />
            </mask>
          </defs>
          <g mask="url(#spinner__logo-mask)">
            <rect x="0" y="0" width="231" height="236" fill="#C8D0D1" />
            <rect
              id="spinner__logo-fill"
              x="0"
              y="0"
              width="231"
              height="236"
              fill="blue"
              style={{ transform: `translateY(${100 - progress}%)` }}
            />
          </g>
        </svg>
      </div>
    </Html>
  )
}

export default TableLoader