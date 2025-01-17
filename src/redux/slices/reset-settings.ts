import { createAction } from '@reduxjs/toolkit';

// a global action creator
// other reducers can use this action to reset the state. via `extraReducer`
// example usage can be check in `src/redux/slices/theme.ts`

// reference for `extraReducer`
// - https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist search for `extraReducer`
// - https://redux-toolkit.js.org/api/createslice#extrareducers

// current usage
// - currently being used in `SettingsDrawer/ResetButton.tsx`
export default createAction('resetSettings');
