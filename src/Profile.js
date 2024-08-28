import { useState } from "react";
function Profile(){
    const [loggedIn, setLoggedIn] = useState(3)

return(
    <div>
        {/* else if condition */}
        ? {loggedIn==1?
    <h1>Welcome user1</h1>:loggedIn==2?<h1>Welcome user2</h1>
:<h1>Welcome user3</h1>}
    </div>
)

}
export default Profile;