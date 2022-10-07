import React from "react";

function SongDetail({album, artists, name}){
    return (
        <div>
            <div>
                <img src={album.images[0].url} alt={name}/>
            </div>
            <div>
                <label htmlFor={name}>
                    {name}
                </label>
            </div>
            <div>
                <label htmlFor={artists[0].name}>
                    {artists[0].name}
                </label>
            </div>
        </div>
    )
}

export default SongDetail