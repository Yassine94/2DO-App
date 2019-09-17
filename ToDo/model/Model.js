import DataStorage from './DataStorage';

class Model { 
    constructor(){
      if (!Model.instance){
        this.dataStorage = new DataStorage();
        Model.instance = this;
      }
      return Model.instance;
    }
}
