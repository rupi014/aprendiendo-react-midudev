import { useState } from "react"

export function TwitterFollowCard({ userName, children }) {
  const [isFollowing, setIsFollowing] = useState(false)
  
  
  const text = isFollowing ? "Siguiendo" : "Seguir"
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

  const handleclick = () => {
    setIsFollowing(!isFollowing)
  }
    
  return (
  <article className="tw-followCard">
    <header className="tw-followCard-header">
      <img className= "tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="El avatar de React" />
      <div className="tw-followCard-info">
          <strong>{children}</strong>  
          <span className= "tw-followCart-infoUserName">@{userName}</span>
      </div>
    </header>

    <aside>
      <button className={buttonClassName} onClick={handleclick}>{text}</button>
    </aside>
  </article>
  )
}