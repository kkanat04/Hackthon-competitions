import React from 'react';
import classes from './Vaccines.module.css'

const Vaccines = () => {
    return (
        <div className={classes.wrap}>
            <h1 className={classes.text}>Что это вакцина и вакцинация?</h1>
            <p className={classes.context}>
                <span style={{color:"red"}}>Вакцина</span> - это биологические препараты, которые улучшают иммунитет  <br />
                к определенным болезням. Вакцины содержат убитые или  <br />
                живые ослабленные бактерии и вирусы, а также компоненты и  <br />
                вспомогательные вещества, поддерживающие стабильность  <br />
                и эффективность вакцин. <br />
            </p>
            <p className={classes.context}>
                <span style={{color:'red'}}>Вакцинация</span> - это самое эффективное и экономически выгодное  <br />
                средство защиты против инфекционных болезней,  <br />
                известное современной медицине.  <br />
                Основным принципом вакцинации является то,  <br />
                что пациенту дается ослабленный или убитый болезнетворный агент  <br />
                (или искусственно синтезированный белок, который  <br />
                идентичен белку агента) для того,  <br />
                чтобы стимулировать продукцию антител  <br />
                для борьбы с возбудителями заболевания. <br />
            </p>
                {/*<div className={classes.content}>
                <iframe width="1046" height="445" src="https://www.youtube.com/embed/pM5XogpX1JA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="967" height="544" src="https://www.youtube.com/embed/OEUqa_1w08I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="967" height="544" src="https://www.youtube.com/embed/8xPMvrViKfU?list=RD8xPMvrViKfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>*/}
        </div>
    );
};

export default Vaccines;