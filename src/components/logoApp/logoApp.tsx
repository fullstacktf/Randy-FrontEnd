import React from 'react';
import { css } from 'emotion';

const style = css`
max-height: auto;
max-width: 100px;
min-width: 50px;
margin-right: 20px;
`


export const LogoApp = () => {
  return (
    <svg className={style} width="257" height="217" viewBox="0 0 257 217" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M103.5 206.072C103.5 206.072 98 160.072 94.5 154.572C91 149.072 54.5523 129.339 24 121.572C56.8491 108.906 72.5053 100.675 94.5 83.5723C94.5 83.5723 94.5 76.0724 94.5 48.5724C94.5 21.0724 97.5 23.5724 103.5 16.5724C109.5 9.57236 142.5 69.0724 157 70.0724C171.5 71.0724 232.5 55.5724 232.5 55.5724C232.5 55.5724 201.5 110.072 201.5 121.572C201.5 133.072 232.5 184.572 232.5 184.572L162 176.072" stroke="#E8D731" strokeWidth="10" />
      <circle cx="24" cy="123" r="24" fill="#C40C42" />
      <circle cx="229" cy="182" r="28" fill="#18C10E" />
      <circle cx="228.5" cy="56.5" r="22.5" fill="#0C99C4" />
      <circle cx="91" cy="82" r="14" fill="#E8D732" />
      <circle cx="105" cy="203" r="14" fill="#E8D732" />
      <circle cx="155.5" cy="70.5" r="11.5" fill="#E8D732" />
      <circle cx="166.5" cy="177.5" r="11.5" fill="#E8D732" />
      <circle cx="101.5" cy="20.5" r="20.5" fill="#E8D732" />
    </svg>
  )
}
