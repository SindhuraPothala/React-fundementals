function Profile(){
    const name="Sindhura"
    const age=19
    const isStudent=true
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>{isStudent===true?"I am a student":"I am not a student"}</p>
        </div>
    )
}

export default Profile;