import React from 'react'
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApiProvider } from './context/ApiContext';
import SearchHeader from './components/SearchHeader';

const queryClient = new QueryClient();

export default function App() {
  return (
    <main>
      <ApiProvider>
        <QueryClientProvider client={queryClient}>
          <SearchHeader />
          <Outlet />
        </QueryClientProvider>
      </ApiProvider>
    </main>
  )
}
