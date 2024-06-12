import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: import.meta.env.VITE_GRAPHQL_SERVER
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
    < App />
    </ApolloProvider>
  </React.StrictMode>,
)
