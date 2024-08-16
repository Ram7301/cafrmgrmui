import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export interface InitialStateTypes {
    isSidebarCollapsed: boolean,
    isDarkMode: boolean,
    status: string,
    isLoading: boolean,
    xaxis:[],
    yaxis:[]
    topProduct:[]
}


const initialState: InitialStateTypes = {
    isSidebarCollapsed : false,
    isDarkMode: false,
    status:"idle",
    isLoading:false,
    xaxis:[],
    yaxis:[],
    topProduct:[]

}

export interface NewProduct {
    ToDate: string;
    FromDate: string;
    Limit: number;
    LocationID?: string;
  }
  

export const fetchFastMovingChart = createAsyncThunk(
    "app/fetchTopTenProduct",
    async ( data :NewProduct) => {
      console.log("🚀 ~ data:", data)
      
      try {
        var url ="http://localhost/server/cafemgr/api/ProductYearSales.php";
  
      //   console.log("get" + JSON.stringify(data));
        // console.log("🚀 ~ file: Formapireducer.js:26 ~ data:", data);
        const response = await axios.post(url, data, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJzdWIiOiJCZXhAMTIzIiwibmFtZSI6IkJleCIsImFkbWluIjp0cnVlLCJleHAiOjE2Njk5ODQzNDl9.uxE3r3X4lqV_WKrRKRPXd-Jub9BnVcCXqCtLL4I0fpU",
          },
        });
        console.log("🚀 ~ response:", response)
        return response.data;
      } catch (err:any) {
        return err.message;
      }
    }
  );



export const  globalSlice = createSlice({
name : 'global',
initialState,
reducers: {
    setIsSidebarcollapsed: (state, action: PayloadAction<boolean>) => {
        state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
        state.isDarkMode = action.payload;
    }
},
extraReducers(builder) {
    builder
      //FastMovingChart
      .addCase(fetchFastMovingChart.pending, (state, action) => {
        state.status = 'pending'
        state.isLoading = true;
        state.xaxis = [];
        state.yaxis = [];
      })
      .addCase(fetchFastMovingChart.fulfilled, (state, action) => {
 
        state.status = 'fulfilled'
        state.isLoading = false;
        state.xaxis = action.payload.xaxis;
        state.yaxis =  action.payload.yaxisValue;
      })

      .addCase(fetchFastMovingChart.rejected, (state, action) => {
        state.status = 'rejected'
        state.isLoading = false;
        state.xaxis = [];
        state.yaxis = [];
      })
    }
});

export const {setIsDarkMode, setIsSidebarcollapsed} = globalSlice.actions;

export default globalSlice.reducer;
