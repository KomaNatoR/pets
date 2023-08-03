import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "API/API_auth";


export const signUp = createAsyncThunk(
    "auth/signup",
    async (dispatchData, thunkAPI) => {
        try {
            const data = await api.signUp(dispatchData);
            return data;
        } catch ({response}) {
            return thunkAPI.rejectWithValue(response);
        }
    }
);