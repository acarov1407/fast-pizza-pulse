import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";


const getPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}


export const fetchUserAddress = createAsyncThunk(
    'user/getUserAdress',
    async () => {
        const positionObj = await getPosition();
        const position = {
            latitude: positionObj.coords.latitude,
            longitude: positionObj.coords.longitude
        };

        const addressObj = await getAddress(position);
        const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

        return { position, address };
    }
)


const initialState = {
    username: '',
    status: 'idle',
    position: {},
    address: '',
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserAddress.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserAddress.fulfilled, (state, action) => {
                state.position = action.payload.position;
                state.address = action.payload.address;
                state.status = 'idle';
            })
            .addCase(fetchUserAddress.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = 'error';
            })
    }
})

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = state => state.user.username;