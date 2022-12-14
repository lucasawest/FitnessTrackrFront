import react from "react";
import {Link} from 'react-router-dom'


const EditButton = (props) => {

  return <Link to={`/routines/${props.routineId}`}>
    <button className="loginbutton">Edit Routine</button>
  </Link>

}

export default EditButton