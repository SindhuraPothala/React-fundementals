import "./UserAvathar.css"

function UserAvathar(details){
     
    return(
        <div className="container">
            <img src="profile.jpg" className="image"/>
            <p className="name">{details.name}</p>
            <p>Course:{details.course}</p>
            <p>RollNo:{details.rollNo}</p>
            <p>BloodGroup:{details.bloodGroup}</p>
            <p>DOB:{details.dob}</p>
        </div>
    )
}
export default UserAvathar;