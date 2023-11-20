import Banner from "components/Banner"
import { useEffect, useState } from "react"
import Title from "components/Title"
import Card from "components/Card"
import styles from './Home.module.css'


function Home() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/JorgeRinaldi1995/cinetag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return (
        <>
            <Banner image="home" />
            <Title title={"Meu pau na sua mão"} />
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>

        </>
    )
}

export default Home