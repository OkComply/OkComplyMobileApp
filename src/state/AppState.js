import { withAppState, AppStateContainer } from './withAppState';
import {AsyncStorage} from 'react-native';
const merge = require('deepmerge')
/**
 * Describes the full app state, so everything that can be globally used
 */
export default class AppState {
  // Initial state
  static state = {
    radio:{
      stations: [],
      loading: false,
    },
    alarms: [],
  };

   static async load() {
    try {
      const storedState = JSON.parse(await AsyncStorage.getItem('AppState'));
      AppState.state = merge(AppState.state, storedState);
      AppState.stations = [];
    } catch (error) {
      console.log('Unable to load previous app state', error);
    }
  }

  static async set(newState, shouldMerge) {
    if (!shouldMerge) {
      AppState.state = {
        ...AppState.state,
        ...newState
      };
    } else {
      AppState.state = merge(AppState.state, newState);
    }
    AsyncStorage.setItem('AppState', JSON.stringify(AppState.state));
    AppStateContainer.set(AppState.state);
    // AppStateComponent.set(AppState.state);
  }
}