import React from 'react'


export default function Page({params}) {

  let tvChannel = params.id;
  return (
    <div className='w-screen h-screen'>
      <iframe className="video responsive" 
      marginHeight="0" marginWidth="0" src={`https://weblivehdplay.ru/premiumtv/daddylivehd.php?id=${tvChannel}`} 
      name="iframe_a" allow="autoplay" allowFullScreen="yes" width="100%" 
      height="100%" >
        Your Browser Do not Support Iframe</iframe>
    </div>
  )
}
// fox 347
//SNY 759
// ESPN 44
// TruTv 341