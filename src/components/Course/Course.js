import react, { useState } from "react";

import Course1 from "../../Assets/CourseImages/course1.png";
import videoTest from "../../Assets/videos/nomefacil.mp4"
import thumbnail from "../../Assets/images/thumbnail.jpg";

import '../../Assets/css/App.css'
import '../../Assets/css/props.css'
import '../../Assets/css/uifonts.css'

function CoursePage(props){

    const [Course, setCourse] = useState(
        {
            ID: 1,
            title: "Aula do Léo Ep. 1",
            about:"make your illustration look really good. We're gonna study a lot of cases here, setting your work panel, makingg some awesome actions and presets for future. <br/> Hope you'll get some really usefull, stuff out of this course. Good Luck to all!",
            tutor: {
                ID: 1,
                name: "Leleo Games",
                username: "leleozin",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            }, 
            duration: "82 min",
            poster: Course1,

            videos: [
                {
            ID: 1,
            title: "Introdutórias",
            duration: "03 min 24 segs"
            },
            {
                ID: 2,
                title: "Iniciando",
                duration: "09 min 55 segs"
                },
                {
                    ID: 3,
                    title: "Toques básicos",
                    duration: "62 min 48 segs"
                }
            ]
        }
    );

var CourseVideos = [];

for(let i = 0; i < Course.videos.length; i++){
CourseVideos.push(
<a href="#" key={"course-video-" + i} className="noul aic rel flex">
    <div className="id s18 fontn cfff">{Course.videos[i].ID}</div>
    <div className="meta rel">
        <h1 className="s15 lbl fontb c333">{Course.videos[i].title}</h1>
        <h1 className="s13 dur fontn c777">{Course.videos[i].duration}</h1>

    </div>
</a>
);
}


    return (
        <div className="course-page rel flex img-fluid" >
            <div className="course-preview rel">
                <div className="player rel">
                    <video poster={ thumbnail } src={videoTest} controls="play pause seeking volume" autoplay/>
                </div>
                <div className="like-section">
                    <button type="submit" className="tdn">
                    <div className="icon-heart"/><span jic aic tai>Gostei</span>            
                    </button>
                </div>
                <div className="course-info rel">
                    <div className="tutor rel aic flex">
                        <div className="pic">
                            <img src={Course.tutor.dp} className="bl"></img>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">{Course.tutor.name}</h2>
                            <h2 className="s13 uname fontn c777">Course Tutor</h2>
                        </div>
                    </div>
                    <div className="course-meta">
                        <h2 className="s24 title fontb c333">{Course.title}</h2>
                        <p className="s18 about fontn c777" dangerouslySetInnerHTML={{__html:Course.about}} />
                        <div className="section section-b rel">
                            <h2 className="title s24 fontb">Detalhes <span className="fontn">do Curso</span></h2>
                            <div className="course-videos aic">
                            {CourseVideos}
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="extras-block rel flex">
                    <div className="chat rel">
                        <div className="section section-b rel">
                            <h2 className="title s24 fontb">Comentários</h2>
                            <div className="messages aic flex">
                                <div className="bubble rel">
                                    <h2 className="txt ibl fontn s15 c333">Conteúdo muito bom! ansioso esperando os próximos.</h2>
                                </div>
                                <div className="bubble rel">
                                    <h2 className="txt ibl fontn s15 c333">Professor, o que seria da internet brasileira sem vc e sua equipe! Sempre recomendo.</h2>
                                </div>
                                <div className="bubble rel">
                                    <h2 className="txt ibl fontn s15 c333">Acho que poderia ser um pouco melhor, mas ainda é um curso muito bom</h2>
                                </div>
                                <div className="bubble rel">
                                <h2 className="txt ibl fontn s15 c333">A forma que você ensina é muito incrível! Parabéns pela sua didática e competência!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default CoursePage;