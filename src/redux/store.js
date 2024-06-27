import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export const persistor = persistStore(store);
