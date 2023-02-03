import "./rightBar.scss"

export const RightBar = () => {
  return (
    <div className="rightBar"> 
      <div className="container">
        <div className="item"> 
          <span>Suggested For You</span> 
          <div className="user"> 
            <div className="userInfo"> 
              <img src="https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile-800x450.jpg" alt="" /> 
              <span>Jeff Bezos</span>
            </div>
            <div className="buttons"> 
              <button>Follow</button> 
              <button>Ignore</button>
              
            </div>

          </div>

        </div>
      </div>

    </div>
  )
} 