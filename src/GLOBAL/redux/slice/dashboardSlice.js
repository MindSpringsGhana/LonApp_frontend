// // src/store/slices/dashboardSlice.js

// import { createSlice } from "@reduxjs/toolkit";
// import { firstNavItems, lastNavItems } from "../../../utils/dashboardData";

// // Utility function to load state from localStorage
// const loadStateFromLocalStorage = (key, defaultValue) => {
//   try {
//     const storedState = localStorage.getItem(key);
//     return storedState ? JSON.parse(storedState) : defaultValue;
//   } catch (error) {
//     console.error("Error loading state from localStorage:", error);
//     return defaultValue;
//   }
// };

// // Utility function to save state to localStorage
// const saveStateToLocalStorage = (key, state) => {
//   try {
//     localStorage.setItem(key, JSON.stringify(state));
//   } catch (error) {
//     console.error("Error saving state to localStorage:", error);
//   }
// };

// // Combine nav items
// const combinedNavItems = [...firstNavItems, ...lastNavItems];

// // Initialize state with a fallback to localStorage
// const initialState = {
//   activeLabel: loadStateFromLocalStorage("dashboardActiveLabel", "Employee"), // Default to "Employee"
// };

// const dashboardSlice = createSlice({
//   name: "dashboard",
//   initialState,
//   reducers: {
//     setActiveLabel: (state, action) => {
//       state.activeLabel = action.payload;
//       saveStateToLocalStorage("dashboardActiveLabel", action.payload); // Persist label to localStorage
//     },
//   },
// });

// export const { setActiveLabel } = dashboardSlice.actions;
// export default dashboardSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
// import { firstNavItems, lastNavItems } from "../../../utils/dashboardData";

const loadStateFromLocalStorage = (key, defaultValue) => {
  try {
    const storedState = localStorage.getItem(key);
    return storedState ? JSON.parse(storedState) : defaultValue;
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return defaultValue;
  }
};

const saveStateToLocalStorage = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

const initialState = {
  activeLabel: loadStateFromLocalStorage("dashboardActiveLabel", "Employee"),
  activeSubLabel: loadStateFromLocalStorage("dashboardActiveSubLabel", ""), // Track active sub-label
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setActiveLabel: (state, action) => {
      state.activeLabel = action.payload;
      state.activeSubLabel = ""; // Reset sub-label when a new main label is selected
      saveStateToLocalStorage("dashboardActiveLabel", action.payload);
      saveStateToLocalStorage("dashboardActiveSubLabel", ""); // Clear sub-label in localStorage
    },
    setActiveSubLabel: (state, action) => {
      state.activeSubLabel = action.payload;
      saveStateToLocalStorage("dashboardActiveSubLabel", action.payload);
    },
  },
});

export const { setActiveLabel, setActiveSubLabel } = dashboardSlice.actions;
export default dashboardSlice.reducer;
