import { useReducer } from "react";

const initialState={
    email:""
}
const reducer = (state, action) => {
    switch(action.type) {
         case 'update':
            return {...state, [action.fld]:action.value }
         case 'reset':
            return initialState
    }
}

export default function Form1Fun()
{
    const[fm,dispatch]=useReducer(reducer,initialState)

    const submitData = (ev) => {
        ev.preventDefault()
        console.log(JSON.stringify(fm))
    }
    return(
        <div>
            <form>
                <table>
                <tr>
                <td>Emailid:</td>
                <td><input type="text" name="email" value={fm.email} onChange={(e)=>{
                        dispatch({type:"update",fld:'email',value:e.target.value})
                }}/></td>
                </tr>
                <tr>
                <td>Password:</td>
                <td><input type="password" name="p" id="p" /></td>
                </tr>
                <tr>
                <td>Gender:</td>
                <td><input type="radio" name="r" id="r" value="M"/>M
                    <input type="radio" name="r" id="r" value="F"/>F</td>
                </tr>
                <tr>
                <td>City:</td>
                <td><input type="text" name="c" id="c" /></td>
                </tr>
                <tr>
                <td colSpan={2}><input type="checkbox" name="cb" id="cb" value="agree" /> I Agree</td>
                </tr>
                <tr>
                <td><input type="submit" value="Submit"
                    onClick={(e)=>{ submitData(e) }} /></td>
                </tr>
                </table>
            </form>
        </div>
    )
}