import { createAsyncThunk } from "@reduxjs/toolkit";

import {getNotices, getNoticesSearch} from "../../../../API/ApiNotices";


export const fetchNotices = createAsyncThunk(
    "notices/fetch",
    async ({ categorie, page }, thunkAPI) => {
        // console.log("categorie|-->",categorie);
        // console.log("page     |-->", page);
        // console.log("thunkAPI |-->", thunkAPI);
        try {
            const data = await getNotices(categorie, { page: page });
            return data;
        } catch (error) {
            // console.log("error   |-->", error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const fetchNoticesSearch = createAsyncThunk(
    "notices/fetchSearch",
    async ({ categorie, page, search }, thunkAPI) => {
        // console.log("categorie|-->",categorie);
        // console.log("page     |-->", page);
        // console.log("search   |-->", search);
        try {
            const data = await getNoticesSearch(categorie, { page: page, limit: 12, search: search, });
            return data;
        } catch (error) {
            // console.log("error   |-->", error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);