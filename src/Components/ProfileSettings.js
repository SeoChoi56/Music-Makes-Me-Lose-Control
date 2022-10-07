import React, {useEffect} from "react";

function ProfileSettings({userDetail, setProfile}) {
    function handleProfile(event) {
        event.preventDefault()
        fetch(`http://localhost:3001/users/${userDetail.id}`, {
            method: "PATCH",
            headers: { 'Content-type': "application/json" },
            body: JSON.stringify({
                avatarURL: event.target.avatar.value,
                genre: event.target.genre.value,
                artist: event.target.artist.value
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProfile(data)})
    }
    return (
        <div>
            <form id="profileSettings" onSubmit={handleProfile}>
                <p>This is my Form</p>
                <input type="text" placeholder="Place your Avatar Iamge URL" name="avatar"/>
                <p>Favorite Genre?</p>
                <input type="text" placeholder="genre" name="genre"/>
                <p>Favorite Artist?</p>
                <input type="text" placeholder="artist" name="artist" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default ProfileSettings