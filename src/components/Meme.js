import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState()

    function getImage() {
        const memesArray = memesData.data.memes
        let randomNum = Math.floor(Math.random() * memesArray.length) + 1
        const url = memesArray[randomNum].url
        setMemeImage(url)
        console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    className="form--input" 
                    placeholder="Top text" 
                />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom text" 
                />
                <button className="form--button" onClick={getImage}>
                    Get a new meme image 🖼
                </button>
            </div>

            <img src={memeImage} className="meme--img"/>
        </main>
    )
}