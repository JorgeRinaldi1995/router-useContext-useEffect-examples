import Banner from 'components/Banner';
import Title from 'components/Title';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';


function Player() {

    const [video, setVideo] = useState();

    const params = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/JorgeRinaldi1995/cinetag-api/videos?id=${params.id}`)
        .then(response => response.json())
        .then(datas => {
            setVideo(...datas)
        })
    }, [])

    if(!video){
        return <NotFound />
    }

    console.log(video)

    return (
        <>
            <Banner image="player" />
            <Title title="Player" />
            <section className={styles.container}>
                <iframe
                    width="560"
                    height="315"
                    src={video.link}
                    title={video.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player;