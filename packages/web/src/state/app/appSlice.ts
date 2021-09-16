import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { createLink, initializeApollo } from '@blog/web/components/hoc';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    loading: boolean, 
    apolloClient: ApolloClient<NormalizedCacheObject>,
}

const initialState: AppState = {
    loading: false,
    apolloClient: initializeApollo()
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setApolloLink: (state, action: PayloadAction<string>) => {
            const newClient = new ApolloClient({
                ssrMode: typeof window === 'undefined',
                cache: new InMemoryCache(),
                connectToDevTools: true,
              });
            Object.assign(newClient, state.apolloClient);
            newClient.setLink(createLink(action.payload))
            Object.assign(state.apolloClient, newClient);
        },
        clearApolloStore: (state) => {
            (async () => {
                const newClient = new ApolloClient({
                    ssrMode: typeof window === 'undefined',
                    cache: new InMemoryCache(),
                    connectToDevTools: true,
                  });
                Object.assign(newClient, state.apolloClient);
                await newClient.clearStore();
                Object.assign(state.apolloClient, newClient);
            })();
        }
    },
    extraReducers: {
        'user/loginUser': (state, action: PayloadAction<string>) => {
            if (state.apolloClient){
                const newClient = new ApolloClient({
                    ssrMode: typeof window === 'undefined',
                    cache: new InMemoryCache(),
                    connectToDevTools: true,
                  });
                Object.assign(newClient, state.apolloClient);
                newClient.setLink(createLink(action.payload))
                Object.assign(state.apolloClient, newClient);
            }
        },
        'user/logoutUser': (state) => {
            if (state.apolloClient){
                (async () => {
                    const newClient = new ApolloClient({
                        ssrMode: typeof window === 'undefined',
                        cache: new InMemoryCache(),
                        connectToDevTools: true,
                      });
                    Object.assign(newClient, state.apolloClient);
                    await newClient.clearStore();
                    Object.assign(state.apolloClient, newClient);
                })();
            }
        }
    }
})

export const { setLoading, setApolloLink, clearApolloStore } = appSlice.actions;
export default appSlice.reducer;