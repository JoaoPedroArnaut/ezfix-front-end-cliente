import React from 'react'


const BarInformacaoCliente = () => {
    return (
        <>
            <div  className="flex items-center justify-around bg-blue-light_dark rounded-t-2xl mt-7 ">
            
            <p className="font-bold">Roberto Carlos</p>

            <div className="flex items-center justify-center">

              <svg width="52" height="54" viewBox="0 0 52 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_201_1316)">
                  <ellipse cx="25.8346" cy="22" rx="13.8346" ry="15" fill="url(#paint0_linear_201_1316)" />
                </g>
                <defs>
                  <filter id="filter0_d_201_1316" x="0" y="0" width="51.6692" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.611765 0 0 0 0 0.533333 0 0 0 0 0.984314 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_201_1316" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_201_1316" result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_201_1316" x1="25.8346" y1="7" x2="25.8346" y2="37" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B09FFF" />
                    <stop offset="1" stop-color="#8D79F6" />
                  </linearGradient>
                </defs>
              </svg>

              <span>Novo</span>
            </div>
            <div className="w-52 flex items-center justify-around">
            <span>02/10/2021</span>
            <span className="font-bold">#3947385</span>

            </div>
          </div>

        </>
    )
}

export default BarInformacaoCliente