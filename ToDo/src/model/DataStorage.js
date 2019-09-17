import { AsyncStorage } from 'react-native';
import { TODOSTATUS } from '../config/Settings';

export default class DataStorage {
    createData = async (id, dataString) => {
        try {
          await AsyncStorage.setItem(id, dataString); // key, value
        }
        catch(error){ 
          console.log("Error saving data");
        }
      };
    
}
