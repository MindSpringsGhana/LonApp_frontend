// src/store/slices/dashboardSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { firstNavItems, lastNavItems } from "../../../utils/dashboardData";

// Utility function to load state from localStorage
const loadStateFromLocalStorage = (key, defaultValue) => {
  try {
    const storedState = localStorage.getItem(key);
    return storedState ? JSON.parse(storedState) : defaultValue;
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return defaultValue;
  }
};

// Utility function to save state to localStorage
const saveStateToLocalStorage = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

// Combine nav items
const combinedNavItems = [...firstNavItems, ...lastNavItems];

// Initialize state with a fallback to localStorage
const initialState = {
  activeLabel: loadStateFromLocalStorage("dashboardActiveLabel", "Employee"), // Default to "Employee"
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setActiveLabel: (state, action) => {
      state.activeLabel = action.payload;
      saveStateToLocalStorage("dashboardActiveLabel", action.payload); // Persist label to localStorage
    },
  },
});

export const { setActiveLabel } = dashboardSlice.actions;
export default dashboardSlice.reducer;
