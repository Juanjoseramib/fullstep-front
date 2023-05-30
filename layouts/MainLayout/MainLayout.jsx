import React from 'react'
import Header from '../../src/components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div class="main-container">
    <Header/>
    <Outlet/>
    </div>
  )
}

