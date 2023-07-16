import React from "react"
import { createRoot } from "react-dom/client"

import "./index.scss"

import App from "./module/app"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(<App />)
