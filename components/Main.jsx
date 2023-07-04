import React from "react"
import photo from "/selfieproject.jpeg"

export default function Main(){
    return (
        <div className="photo-text-container">
        <img className="photo" src={photo} alt="photo of zeno" />
        <p className="info-text">Hi 👋🏼 and welcome to my profile! I'm Zeno Degenkamp, a business administration graduate with a master's in entrepreneurship. I also have a programming minor and I'm currently taking an online front-end developer course called Scrimba. Join me on this exciting journey as I explore the endless possibilities of web development. Let's connect and embrace the digital world together!
        If you have any questions, don’t hesitate to send me a private message! 
        </p>
        </div>
    )
}

