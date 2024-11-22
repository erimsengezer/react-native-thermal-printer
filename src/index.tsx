import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-thermal-printer' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ThermalPrinter = NativeModules.ThermalPrinter
  ? NativeModules.ThermalPrinter
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

if (!NativeModules.ThermalPrinter) {
  console.warn(
    'ThermalPrinter native module not found. Ensure the package is correctly linked.'
  );
}

export const printBase64Image = async (
  base64Image: string
): Promise<string> => {
  try {
    const response = await ThermalPrinter.printBase64Image(base64Image);
    console.log(response); // Başarılı mesaj
    return response; // Başarıyla sonuç döndür
  } catch (error) {
    console.error(error); // Hata mesajı
    throw error; // Hatayı dışarı ilet
  }
};
