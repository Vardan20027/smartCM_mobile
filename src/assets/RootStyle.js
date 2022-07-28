import {deviceInfo} from './DeviceInfo';
const ratio = deviceInfo.deviceWidth / 375;

export const Sizes = {};
for (let i = 1; i < 500; i++) {
  Sizes[`size${i}`] = i * ratio;
}
export const Fonts = {
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-SemiBold',
};
export const fullScreen = {
  width: deviceInfo.deviceWidth,
  height: deviceInfo.deviceHeight,
};
