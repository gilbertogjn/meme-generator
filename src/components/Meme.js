import React from "react"
import memesData from "../memesData"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState()

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getImage() {
        const memesArray = allMemeImages.data.memes
        let randomNum = Math.floor(Math.random() * memesArray.length) + 1
        const url = memesArray[randomNum].url
        setMeme(prevMeme => ({
            ...allMemeImages,
            randomImage: url
        }))
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

            <img src={meme.randomImage} className="meme--img"/>
        </main>
    )
}