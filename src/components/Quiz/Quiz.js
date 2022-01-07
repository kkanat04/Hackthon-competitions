import React, { useState } from 'react'
import './Quiz.css'
import girl3 from '../../images/girl3.png'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScoreThree, setShowScoreResultThree] = useState(false)
    const [showScoreFive, setShowScoreResultFive] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)

    const arrQuestion = [
        {
            quizQuestion: '1. Что такое вакцина?',
            quizOptionAnswer: [
                { answerVariant: 'а) это лекарство повышающее иммунитет', isCorrect: false },
                { answerVariant: 'б) это биологические препараты, которые улучшают иммунитет к определенным болезням', isCorrect: true },
                { answerVariant: 'в) это витамины', isCorrect: false },
            ]
        },
        {
            quizQuestion: '2. Как часто нужно получать вакцину от COVID-19?',
            quizOptionAnswer: [
                { answerVariant: 'а) нужно получать 1 раз в год', isCorrect: false },
                { answerVariant: 'б) нужно получить 1 раз в жизни', isCorrect: false },
                { answerVariant: 'в) всего 2 дозы, которые нужно получить с периодичностью в среднем от 2-3 недель', isCorrect: true },
            ]
        },
        {
            quizQuestion: '3. Ветрянкой нужно переболеть в детстве. Такой иммунитет эффективнее, чем от прививки ?',
            quizOptionAnswer: [
                { answerVariant: 'а) Миф', isCorrect: true },
                { answerVariant: 'б) Правда', isCorrect: false },

            ]
        },
        {
            quizQuestion: '4. Вакцины от гриппа малоэффективны, потому что вирус мутирует каждый год. В прививке смысла нет? ',
            quizOptionAnswer: [
                { answerVariant: 'а) Миф', isCorrect: true },
                { answerVariant: 'б) Правда', isCorrect: false },

            ]
        },
        {
            quizQuestion: ' 5. Беременным разрешены и даже показаны прививки. Правда, не от всех болезней?',
            quizOptionAnswer: [
                { answerVariant: 'а) Миф', isCorrect: false },
                { answerVariant: 'Б) Правда', isCorrect: true },

            ]
        },


    ]

    const toggleQuestion = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < arrQuestion.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            if (score <= 3) { setShowScoreResultThree(true) }
            else if (score == 4 || 5) {
                setShowScoreResultFive(true)
            }

        }
        setPageNumber(pageNumber + 1)
        if (pageNumber == 5) {
            setPageNumber(pageNumber + 0)
        }
    }

    const refreshQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScoreResultThree(false)
        setShowScoreResultFive(false)
        setPageNumber(1)
    }


    return (

        <div className='quizWrapper'>
            <div className='quizContent'>

                {
                    showScoreThree ?
                        <div>
                            <div className='quizResultThree'>Ваш результат</div>
                            <div className='quizScore'>
                                {score}
                            </div>
                            <div className='quizRecomendatsii'>Вам нужно немного подкрепить<br></br> информацию о видах вакцин и
                                <br /> какие есть мифы
                            </div>
                            <div className='quizBtnRefresh' onClick={refreshQuiz}>Повторить тест?</div>
                        </div>

                        :

                        showScoreFive ?
                            <div>
                                <div className='quizResultThree'>Ваш результат
                                </div>

                                <div className='quizScore'>
                                    {score}
                                </div>
                                <div className='quizRecomendatsii'>Вы хорошо освоили информацию <br /> о вакцинации.<br />
                                    Если вы желаете узнать где<br /> можно получить вакцину, а также<br />
                                    их контактные данные
                                </div>
                                <div className='quizBtnRefresh' onClick={refreshQuiz}> Повторить тест?</div>
                            </div>
                            :
                            <div>
                                <div className='quizParagraf'><p>А ТЕПЕРЬ, ДАВАЙТЕ ПРОВЕРИМ -<br></br> ЧТО ВЫ ОСВОИЛИ</p></div>
                                <div className='quizTestImg'>
                                    <div className='quizTest'>
                                        <div className='quizTest'><span className='quizTestFirstNum' >0{pageNumber}/</span><span className='quizTestSecondNum'>05</span></div>
                                        <div className='quizQuestionOnTest'>
                                            {
                                                arrQuestion[currentQuestion].quizQuestion
                                            }
                                        </div>

                                        {
                                            arrQuestion[currentQuestion].quizOptionAnswer.map(item => {
                                                return (
                                                    <div>
                                                        <div className='quizVarintyOtvetov' onClick={() => toggleQuestion(item.isCorrect)} >{item.answerVariant}</div>
                                                    </div>

                                                )

                                            })
                                        }

                                    </div>
                                    <div className='quizImg'>
                                        <img src={girl3} className='quizimgGirl' />
                                    </div>
                                </div>
                            </div>
                }
            </div>

        </div>

    )
}

export default Quiz