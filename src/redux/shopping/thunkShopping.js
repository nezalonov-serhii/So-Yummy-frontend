import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://so-yummy-426w.onrender.com";
// axios.defaults.baseURL = "http://localhost:3003";

export const deleteShoppingThunk = createAsyncThunk("shopping/delete", async (id) => {
   try {
      const { data } = await axios.delete(`/api/shopping-list/${id}`);
      console.log("data, успіх видалення", data);
      return data;
   } catch (er) {
      console.log("🚀 ~ Error:", er.message);
   }
});

export const getShoppingThunk = createAsyncThunk("shopping/get", async () => {
   try {
      const  {data}  = await axios.get("/api/shopping-list"); 
      console.log("пуста дата",data)
      return data.data;
   } catch {
      console.log("🚀 ~ Error:");
   }
});

export const addShoppingThunk = createAsyncThunk("contacts/post", async (credentials) => {
   try {
      const { data } = await axios.post("/api/shopping-list", credentials);
      return data.data;
   } catch (er) {
      console.log("🚀 ~ Error:", er.message);
   }
});
