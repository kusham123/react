import React, {forwardRef} from "react";
function Forwardref(props,ref)
{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}
export default forwardRef(Forwardref);