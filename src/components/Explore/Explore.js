import React from 'react';
// import Gift from "../ui/presente.png";

import '../../Assets/css/App.css'
import '../../Assets/css/props.css'
import '../../Assets/css/uifonts.css'

import { courseList } from "../../Data/CoursePoster"




function Discover() {

    return (
            <div className="explore rel">
                <div className="section rel">
                    <div className="search-box rel flex">
                        <input type="text" placeholder="O que deseja encontrar?" className="qry s15 fontb"></input>
                        <button className="go cfff s15 fontb">Pesquisar</button>
                    </div>
                </div>
                <div className="section section-b rel">
                    <div className="courses rel flex">
                        <span className="courses fontb s34 ">Recomendado</span>
                            <div className="collumn cols">
                                <div className="row">
                                {courseList.filter((item,index) => index < 3).map((item,index) => item)}
                                </div>
                            </div>
                        <hr />
                        <span className="courses fontb s34 ">Mais recentes</span>
                            <div className="collumn cols">
                                <div className="row">
                                {courseList.filter((item,index) => index >= 3 && index < 6).map((item,index) => item)}
                                </div>
                            </div>
                        <hr />
                        <span className="courses fontb s34 ">Em alta</span>
                            <div className="collumn cols">
                                <div className="row">
                                {courseList.filter((item,index) => index >= 6 && index < 9).map((item,index) => item)}
                                </div>
                            </div>
                        <hr/>
                        <span className="courses fontb s34 ">Melhor avaliados</span>
                            <div className="collumn cols">
                                <div className="row">
                                    {courseList.filter((item, index) => index >= 9).map((item) => item)}
                                </div>
                            </div>
                        <hr/>
                    </div>
                    </div>
                </div>
    )
}

export default Discover;
