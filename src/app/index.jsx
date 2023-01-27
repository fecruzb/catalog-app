import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Author from '../author'
import Book from '../book'
import Home from '../home'

import Menu from './component/Menu'
import Page from './component/Page'


const App = () => (
    <BrowserRouter>
        <Menu />
        <Page>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/author/*" element={<Author />} />
                <Route path="/book/*" element={<Book />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Page>
    </BrowserRouter>
)

export default App
