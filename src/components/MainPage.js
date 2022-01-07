import React, { useState } from 'react'
import './MainPage.css'
import girl from '../images/girl.png'
import navStart from '../images/navigationStart.png'
import whatsapp from '../images/whatapp.png'
import Vaccines from './Vaccines/Vaccines'
import Myths from './Myths/Myths'
import Types from './Types/Types'
import Quiz from './Quiz/Quiz'
import Online from './Online/Online'
import Statistics from './Statistics/Statistics'

const MainPage = () => {
    const [vaccine, setVaccine] = useState(false)
    const [myth, setMyth] = useState(false)
    const [types, setTypes] = useState(false)
    const [quiz, setQuiz] = useState(false)
    const [stat, setStat] = useState(false)
    const [online, setOnline] = useState(false)

    return (
        <div className="mainpage">
        <input type="checkbox" id="checkbox1"/>
        <input type="checkbox" id="checkbox2"/>
        <input type="checkbox" id="checkbox3"/>
        <input type="checkbox" id="checkbox4"/>
        <input type="checkbox" id="checkbox5"/>
        <input type="checkbox" id="checkbox6"/>
            <div htmlFor="checkbox1" className="vaccine__page"> 
                <div  className="vaccine__rel">
                    <label 
                        onClick={() =>{setTimeout(() => {
                            setVaccine(!vaccine)
                        }, 200); }} 
                        htmlFor="checkbox1" className="vaccine__openDiv">
                        <p className='vaccine__openP'>ВАКЦИНА</p>
                    </label>
                    <div className={ vaccine ? "mainpage__vaccine__active" : "mainpage__vaccine"}><Vaccines/></div>
                </div>
            </div>
            <div htmlFor="checkbox2" className="myth__page"> 
                <div className="myth__rel">
                    <label onClick={()=> {setTimeout(() => {
                        setMyth(!myth)
                    }, 200);}} 
                    htmlFor="checkbox2" className="myth__openDiv">
                        <p className='myth__openP'>МИФЫ</p>
                    </label>
                    <div className={ myth ? "mainpage__myth__active" : "mainpage__myth"}><Myths/></div>
                </div>
            </div>
            <div htmlFor="checkbox3" className="types__page"> 
                <div className="types__rel">
                    <label onClick={()=>{setTimeout(() => {
                        setTypes(!types)
                    }, 200); }} htmlFor="checkbox3" className="types__openDiv">
                        <p className='types__openP'>ТИПЫ</p>
                    </label>
                    <div className={types ? "mainpage__types__active" : "mainpage__types"}><Types/></div>
                </div>
            </div>
            <div htmlFor="checkbox4" className="quiz__page"> 
                <div className="quiz__rel">
                    <label onClick={()=>{ setTimeout(() => {
                        setQuiz(!quiz)
                    }, 200); }} htmlFor="checkbox4" className="quiz__openDiv">
                        <p className='quiz__openP'>ВОПРОСЫ</p>
                    </label>
                    <div className={quiz ? "mainpage__quiz__active" : "mainpage__quiz"}><Quiz/></div>
                </div>
            </div>
            <div htmlFor="checkbox5" className="static__page"> 
                <div className="static__rel">
                    <label onClick={()=>{ setTimeout(() => {
                        setStat(!stat)
                    }, 200); }} htmlFor="checkbox5" className="static__openDiv">
                        <p className='static__openP'>СТАТИСТИКА</p>
                    </label>
                    <div className={stat ? "mainpage__stat__active" : "mainpage__stat"}><Statistics/></div>
                </div>
            </div>
            <div htmlFor="checkbox6" className="online__page"> 
                <div className="online__rel">
                    <label onClick={()=>{setTimeout(() => {
                        setOnline(!online)
                    }, 200); }} htmlFor="checkbox6" className="online__openDiv">
                        <p className='online__openP'>АДРЕСА</p>
                    </label>
                    <div className={online ? "mainpage__online__active" : "mainpage__online"}><Online/></div>
                </div>
            </div>



            <img src={girl} className="mainpage__girl" />
            <img src={navStart} className="mainpage__navStart" />
            {/*<a  href="#" className="mainpage__share"><img src={whatsapp} className='mainpage__shareWhatsApp' /></a>*/}
            


            <div className="mainpage__welcomeBox">
                <div className="mainpage__firstWelcomeText">
                    <p className="mainpage__firstPoint">1</p>
                    <p className="mainpage__firstContext">Здравствуйте. <br />
                        Вас приветствует Айдана. <br />  
                        Мы с командой UNICEF <br />
                        сегодня хотим рассказать <br />
                        о вакцинации, о видах вакцин <br />
                         и развеять некоторые мифы. <br />
                        А может еще успеем поиграть <br />
                    </p>
                </div>
                <div className="mainpage__secondWelcomeText">
                    <p className="mainpage__secondPoint">2</p>
                    <p className="mainpage__secondContext">Если вы готовы - приступим.</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage

