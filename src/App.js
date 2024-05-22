import React from 'react'
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <SearchHeader />
        <Outlet />
      </QueryClientProvider>
    </main>
  )
}
