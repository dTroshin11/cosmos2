import React, {useEffect, useState} from 'react';
import Styles from "./CalculatorBlock.module.scss";
import { useWindowSize } from '../../hooks/useWindowSize';

const CalculatorBlock = () => {
    const [people, setPeople] = useState(0)
    const [proPeople, setProPeople] = useState(0)
    const [pay, setPay] = useState(0)
    const { windowWidth } = useWindowSize();
    const formula = 0
    const summa = pay !== 0 ?  Math.round((Number(pay) * Number(proPeople) * Number(people))* Number(1.302) * Number(12) * Number(0.55) + Number(1620000)) : 0;
    let isRTL = document.documentElement.dir === 'rtl'


    const handleInputChange = (e) => {
        let target = e.target
        let targetNum = e.target.type === 'number'
        let val  = target.value
        let parent  = target.parentElement.id

        if (targetNum) {
            target = document.getElementById( "range" + `${parent}`)
        }
        const min = target.min
        const max = target.max

        let percentage = (val - min) * 100 / (max - min)
        if (isRTL) {
            percentage = (max - val)
        }

        target.style.backgroundSize = percentage + '% 100%'
    }

    useEffect(() => {
        const rangeInputs = document.querySelectorAll('input[type="range"]')
        const numberInput = document.querySelectorAll('input[type="number"]')

        rangeInputs.forEach(input => {
            input?.addEventListener('input', handleInputChange)
        })
        numberInput.forEach(input => {
            input?.addEventListener('input', handleInputChange)
        })

        // numberInput.addEventListener('input', handleInputChange)
        // rangeInputs.addEventListener('input', handleInputChange)

        // Handle element change, check for dir attribute value change
        const callback = (mutationList, observer) => {
            mutationList.forEach(function (mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
                    isRTL = mutation.target.dir === 'rtl'
                }
            })
        }

        // Listen for body element change
        const observer = new MutationObserver(callback)
        observer.observe(document.documentElement, { attributes: true })

        return () => {
            rangeInputs.forEach(input => {
                input?.removeEventListener('input', handleInputChange)
            })
            numberInput.forEach(input => {
                input?.removeEventListener('input', handleInputChange)
            })
            // rangeInputs?.removeEventListener('input', handleInputChange)
            // numberInput?.removeEventListener('input', handleInputChange)
            observer.disconnect()
        }
    }, [])


    return (
        <div className={Styles.Calculator}>
            <div className={Styles.title}>
                Рассчитайте вашу <br/> экономию на ИБ
            </div>
            <div className={Styles.calculate}>
                <div className={Styles.calculate__item} id={"People"}>
                    <div className={Styles.item__title}>{windowWidth < 1000 ?
                        <div>Сколько сотрудников у вас в компании?</div> : <div>Сколько сотрудников <br/> у вас в компании?</div>
                    }</div>

                    <input className={Styles.item__inputNum}
                           type={"number"}
                           id={'numberPeople'}
                           value={people}
                           onChange={(e) => setPeople(e.target.value)}
                    />
                    <input className={Styles.item__input}
                           type={"range"}
                           id={"rangePeople"}
                           value={people}
                           onChange={(e) => setPeople(e.target.value)}
                           step={1}
                           min={0}
                           max={100}
                    />
                </div>
                <div className={Styles.calculate__item} id={"ProPeople"}>
                    <div className={Styles.item__title}>
                        {windowWidth < 1000 ?
                            <div>Сколько ИБ-специалистов?</div> : <div>Сколько <br/> ИБ-специалистов?</div>
                        }</div>
                    <input className={Styles.item__inputNum}
                           type={"number"}
                           id={'numberProPeople'}
                           value={proPeople}
                           onChange={(e) => setProPeople(e.target.value)}
                    />
                    <input
                        className={Styles.item__input}
                        type={"range"}
                        id={"rangeProPeople"}
                        value={proPeople}
                        onChange={(e) => setProPeople(e.target.value)}
                        step={1}
                        min={0}
                        max={20}
                    />
                </div>
                <div className={Styles.calculate__item} id={"Pay"}>
                    <div className={Styles.item__title}>Средняя зарплата <br/> для ИБ-специалистов в компании?</div>
                    <input
                        className={Styles.item__inputNum}
                        type={"number"}
                        id={'numberPay'}
                        value={pay}
                        onInput={(e) => setPay(e.target.value)} onChange={(e) => setPay(e.target.value)}
                    />
                    <input
                        className={Styles.item__input}
                        type={"range"}
                        id={"rangePay"}
                        value={pay}
                        onInput={(e) => setPay(e.target.value)} onChange={(e) => setPay(e.target.value)}
                        step={10000}
                        min={0}
                        max={900000}
                    />
                </div>
            </div>
            <div className={Styles.result}>
                <div className={Styles.result__title}>С нами вы сэкономите за год</div>
                <div className={Styles.result__num}>{summa !== 0 ? summa : 0} ₽*</div>
                <div className={Styles.result__subtitle}>*на основе наших данных</div>
            </div>
        </div>
    );
};

export default CalculatorBlock;



