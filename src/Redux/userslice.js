// Shree Ganeshay namah 
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { act } from 'react'

const initialState = {
  userlist: [],
}


export const adduser = createAsyncThunk('users/adduser',async (data) => {
      await axios.post('https://68301880f504aa3c70f644f6.mockapi.io/Movie',data)
      return data
    },
  )

  export const viewuser = createAsyncThunk('users/viewuser',async () => {
    let res = await axios.get('https://68301880f504aa3c70f644f6.mockapi.io/Movie')
    return res.data
  },
)

export const deleteuser = createAsyncThunk('user/deleteuser',async(id)=>{
    let res = await axios.delete(`https://68301880f504aa3c70f644f6.mockapi.io/Movie/${id}`)
    return id
})

export const updateuser = createAsyncThunk('user/updateuser',async(data)=>{
    const {id} = data
     await axios.put(`https://68301880f504aa3c70f644f6.mockapi.io/Movie/${id}`,data)
    return data
})

const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers : (builder) => {

    builder.addCase(adduser.fulfilled, (state, action) => {
      state.userlist.push(action.payload)
    })

    builder.addCase(viewuser.fulfilled,(state,action)=>{
        
        state.userlist = action.payload
    })

    builder.addCase(deleteuser.fulfilled,(state,action)=>{
        const id = action.payload
        let DeleteList = state.userlist.filter(user=>{
            return user.id !== id
        })
        state.userlist = DeleteList
    })

    builder.addCase(updateuser.fulfilled,(state,action)=>{
        const {id} = action.payload

        let findIndex = state.userlist.findIndex(user=>{
            return user.id == id
        })

        state.userlist[findIndex] = action.payload
    })
  
  },
  
})

export default userslice.reducer