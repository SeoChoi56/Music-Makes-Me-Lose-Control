import React from "react";

function ProfileSettings() {
    return (
        <div>
            <form id="profileSettings">
                <p>This is my Form</p>
                <input type="text" placeholder="Place your Avatar Iamge URL"/>
                <p>Favorite Genre?</p>
                <input type="text" placeholder="genre" />
                <p>Favorite Artist?</p>
                <input type="text" placeholder="artist" />
                <p>How many songs to list on playlist</p>
                <select>
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </form>
        </div>
    )
}

export default ProfileSettings