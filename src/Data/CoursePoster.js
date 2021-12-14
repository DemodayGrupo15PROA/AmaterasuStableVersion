import { NavLink } from "react-router-dom";
import {popularCourse} from "./CourseData"


export const courseList = [];

    for(let i in popularCourse){
        courseList.push(
            <NavLink to="/course" className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center"
                }}>
                {/* <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl" alt=""/>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div> */}
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