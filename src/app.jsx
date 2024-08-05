import React from "react"
import { TwitterFollowCard } from "./TwitterFollowCard"
import "./app.css"

export function App() {    
  return (
    <section className="App">    
        <TwitterFollowCard userName="rupi014" >
            Rubens Ballester Lillo
        </TwitterFollowCard>
        <TwitterFollowCard userName="kamikashoto">
            Isidoro Muñoz
        </TwitterFollowCard>
        <TwitterFollowCard userName="asuulau"  >
            Laura Fernandez
        </TwitterFollowCard>
    </section>
    
  )    
}