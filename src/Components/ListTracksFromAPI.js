import React from "react";

function ListTracksFromAPI({items, click}) {
    return (
        <div> 
            {
                items.map((item, idx) => 
                <button key={idx} id={item.track.id} onClick={click}>
                    {item.track.name}
                </button> )
            }
        </div>
    )
}

export default ListTracksFromAPI