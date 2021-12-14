import React, {useEffect, useState} from 'react';

import { courseList } from "../../Data/CoursePoster"
function HomePage(){

    useEffect(()=>{
        document.title = "Amaterasu";
    })

    const [topTutors, setTopTutors] = useState([
        {
                ID: 1,
                name: "Leleo Games",
                username: "leleozin",
                dp: "http://placeimg.com/100/100/people?tutors-" + 1,
        },
        {
            ID: 2,
            name: "Leleo Games",
            username: "leleozin",
            dp: "http://placeimg.com/100/100/people?tutors-" + 2,
        },
        {
            ID: 3,
            name: "Leleo Games",
            username: "leleozin",
            dp: "http://placeimg.com/100/100/people?tutors-" + 3,
    },
    {
        ID: 4,
        name: "Leleo Games",
        username: "leleozin",
        dp: "http://placeimg.com/100/100/people?tutors-" + 4,
},
{
    ID: 5,
    name: "Leleo Games",
    username: "leleozin",
    dp: "http://placeimg.com/100/100/people?tutors-" + 5,
},
{
    ID: 6,
    name: "Leleo Games",
    username: "leleozin",
    dp: "http://placeimg.com/100/100/people?tutors-" + 6,
},
        
    ]);

    //Live Tutors List
    var tutorList = [];
    for(let i = 0; i < 15; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?" + i} className="bl"></img>
            </button>
        );
    }

    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"too-tutors-" + i}>
                <div className="user aic flex">
                        <div className="pic">
                            <img src={topTutors[i].dp} className="bl"></img>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                            <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                        </div>
                    </div>
            </a>
        );
    }

    return (
        <div className="home-page rel">

             {/** Top Tutors **/}
             <div className="section section-b rel">
                <h2 className="title s24 fontb">Melhores <span className="fontn">Criadores</span></h2>
                <div className="top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>


            {/** Em destaque **/}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Em <span className="fontn">Destaque</span></h2>

                <div className="courses rel flex">
                    {courseList.filter((item,index) => index > 3 && index < 6).map((item,index) => item)}
                </div>
            </div>

            
        </div>
    )
}

export default HomePage;