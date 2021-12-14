import React, { useState } from 'react';

import Course1 from "../../Assets/CourseImages/course1.png";
import Course2 from "../../Assets/CourseImages/course2.png";
import mensagem from "../../Assets/images/SEJA_BEM_VINDO_e.png";

import { NavLink } from "react-router-dom";

function MyCourses() {

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Aula do Léo Ep. 1",
            tutor: {
                ID: 1,
                name: "Leleo Games",
                username: "leleozin",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 min",
            poster: Course1
        },
        {
            ID: 2,
            title: "Murilão Tutoriais, como pronunciar as palavras corretamente",
            tutor: {
                ID: 2,
                name: "Murilão Love",
                username: "Murila1",
                dp: "http://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "24 hr 25 min",
            poster: Course2
          },
          {
              ID: 3,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 3,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 4,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 4,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 5,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 5,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 6,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 6,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 7,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 7,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 8,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 8,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 9,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 9,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 10,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 10,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 11,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 11,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 12,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 12,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 13,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 13,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 14,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 14,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 15,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 15,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 16,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 16,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 17,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 17,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 18,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 18,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 19,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 19,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 20,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 20,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 21,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 21,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          },
          {
              ID: 22,
              title: "Murilão Tutoriais, como pronunciar palavras corretamente",
              tutor: {
                  ID: 22,
                  name: "Murilão Love",
                  username: "Murila1",
                  dp: "http://placeimg.com/100/100/people?tutor-" + 3,
              },
              duration: "24 hr 25 min",
              poster: Course2
          }
    ]);


    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl"></img>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                         <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                         <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
                    </div>

                </div>
            </NavLink>
        );
    }

    return (
        <div className="mycourses rel">
            <div className="section rel">
                <img className="imagem" src={mensagem} />
            </div>

            <div className="section section-b rel">
                <div className="courses rel flex">
                    <div className="course-a">
                        {courseList[0]}
                    </div>
                    <div className="flex cols">
                        {courseList[1]}
                        {courseList[2]}
                        {courseList[3]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCourses;
