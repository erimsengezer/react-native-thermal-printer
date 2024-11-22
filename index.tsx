import { NativeModules } from 'react-native';

const { ThermalPrinter } = NativeModules;

export const printBase64Image = async (base64Image: string): Promise<string> => {
  try {
    const response = await ThermalPrinter.printBase64Image(base64Image);
    return response;
  } catch (error) {
    throw error;
  }
};
