import * as React from 'react';
import Svg, {G, Rect, Path, Defs, ClipPath} from 'react-native-svg';

function Calendar2Icon(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_1_2430)">
        <Rect y={0.321289} width={24} height={24} rx={4} fill="#347474" />
        <G filter="url(#filter0_d_1_2430)">
          <Path
            d="M15.318 3.321a.62.62 0 01.61.543l.005.085v.71c2.527.175 4.075 1.83 4.067 4.5v7.64c0 2.83-1.738 4.522-4.53 4.522H8.53C5.74 21.321 4 19.6 4 16.735V9.159c0-2.67 1.552-4.324 4.074-4.5v-.71c0-.347.276-.628.616-.628a.62.62 0 01.61.543l.005.085v.694h5.397V3.95c0-.347.276-.628.616-.628zm3.45 7.455H5.23v5.959c0 2.093 1.107 3.254 3.098 3.327l.202.003h6.94c2.125 0 3.3-1.143 3.3-3.267l-.001-6.022zm-3.116 5.268c.34 0 .616.28.616.628 0 .317-.232.58-.532.622l-.084.005a.623.623 0 01-.623-.627c0-.318.232-.581.532-.623l.091-.005zm-3.64 0c.34 0 .615.28.615.628 0 .317-.232.58-.532.622l-.084.005a.623.623 0 01-.623-.627c0-.318.232-.581.532-.623l.091-.005zm-3.65 0c.34 0 .616.28.616.628 0 .317-.231.58-.532.622l-.09.005a.622.622 0 01-.616-.627c0-.318.231-.581.532-.623l.09-.005zm7.29-3.254c.34 0 .616.281.616.628 0 .318-.232.58-.532.622l-.084.006a.623.623 0 01-.623-.628c0-.318.232-.58.532-.622l.091-.006zm-3.64 0c.34 0 .615.281.615.628 0 .318-.232.58-.532.622l-.084.006a.623.623 0 01-.623-.628c0-.318.232-.58.532-.622l.091-.006zm-3.65 0c.34 0 .616.281.616.628 0 .318-.231.58-.532.622l-.09.006a.622.622 0 01-.616-.628c0-.318.231-.58.532-.622l.09-.006zm6.34-6.891H9.305v.805a.622.622 0 01-.615.628.62.62 0 01-.61-.543l-.006-.085v-.786c-1.835.156-2.843 1.28-2.843 3.24v.362h13.538v-.363c.006-1.963-.997-3.084-2.836-3.24v.787a.622.622 0 01-.615.628.62.62 0 01-.61-.543l-.005-.085V5.9z"
            fill="#FCFCFC"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_2430">
          <Rect y={0.321289} width={24} height={24} rx={4} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Calendar2Icon;
