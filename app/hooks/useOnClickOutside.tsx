import {RefObject} from 'react';
import {useEventListener} from 'usehooks-ts';

function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void,
  mouseEvent: 'mousedown',
): void {
  useEventListener(mouseEvent, event => {
    const element = ref?.current;
    if (!element || element.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
}

export default useOnClickOutside;
