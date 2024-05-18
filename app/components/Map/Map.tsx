'use client'

import {useEffect} from 'react';

const Map = () => {
  useEffect(() => {
    if (!!window.BPWidget) {
      return window.BPWidget.init(
        document.getElementById('mapa-test'),
        {
          callback: function(point: {code: string, operator: string}) {
            console.log('point code:', point.code);
            console.log('point operator:', point.operator);
          },
          posType: 'DELIVERY',
          codOnly: false,
          brands: [
            {
              brand: 'INPOST',
            },
          ],
        }
      );
    } else {
      console.log('?');
    }
  }, []);

  return (
    <div
      id={'mapa-test'}
      style={{
        width: 700,
        height: 700,
      }}></div>
  )
};
export default Map;
