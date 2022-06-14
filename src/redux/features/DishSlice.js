import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    dishlist:[],
    error:null,
    votes:[],
    sorted:[]
}


export const getdishes = createAsyncThunk('dish/getdishes',()=>{
    return axios 
    .get(`https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`)
    .then(resp=>resp.data)
})


const DishSlice = createSlice({
    name:"dish",
    initialState,
    reducers:{
      votedish:(state,action)=>{
        state.votes = state.votes.concat([action.payload]);
      },
      sortOnVoteBasis:(state,action)=>{
        const count = {};

        for (const element of state.votes) {
          if (count[element]) {
            count[element] += 1;
          } else {
            count[element] = 1;
          }
        }
        state.sorted = state.sorted.concat(count);
        console.log(count);
      }
    },
    extraReducers:builder=>{
        builder.addCase(getdishes.pending,(state)=>{
            state.loading =true
        })
        builder.addCase(getdishes.fulfilled,(state,action)=>{
            state.loading = false 
            state.dishlist= action.payload
            state.error=''
        })
        builder.addCase(getdishes.rejected,(state,action)=>{
            state.loading =true
            state.dishlist=[]
            state.error= action.error.message
        })
    }
})

export const {votedish} = DishSlice.actions;
export const {sortOnVoteBasis} = DishSlice.actions;

export default DishSlice.reducer;