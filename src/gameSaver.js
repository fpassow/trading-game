/*
 * Module for storing game state in the browsers localStorage
 */


/*
 * Add a version number to the key used to store the state,
 * so we can change the format and not break because there
 * was already state stored in the old and incompatable format.
 */
const STORED_STATE_VERSION = 1.0


export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('tradingGame' + STORED_STATE_VERSION);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('tradingGame' + STORED_STATE_VERSION, serializedState);
    } catch {
      // ignore write errors
    }
  }

