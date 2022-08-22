import React, { useState, useEffect } from 'react';
import { getStatus } from './remote-flags-client';
import saleOn from './sale-on.webp';
import saleOff from './sale-off.webp';

export default function DemoComponent() {
  const [flagOn, setFlagOn] = useState(false);

  useEffect(() => {
    // Remote Flags SDK
    getStatus(
      {
        owner: '<YOUR_OWNER_ID>',
        flag: '<YOUR_FLAG_ID>'
      },
      (response) => {
        // This is set for an on/off flag. Change if needed
        response.value === 'On' ? setFlagOn(true) : setFlagOn(false);
      },
      (error) => {
        console.log(error);
        setFlagOn(false);
      },
    );
  }, []);

  function _renderImage() {
    return flagOn
      ? <img src={saleOn} alt="demo on" />
      : <img src={saleOff} alt="demo off" />
  }

  return (
    <div>
      {_renderImage()}
    </div>
  );
}
