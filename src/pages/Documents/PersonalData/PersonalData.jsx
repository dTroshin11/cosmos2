// import { Link } from "react-router-dom";
// import Styles from './PersonalData.module.scss'
// import { useEffect, useRef } from "react";
// import Header from "../../../components/Header/Header";
//
// const PersonalData = () => {
//
//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [])
//
//     // const [showAnchors, setShowAnchors] = useState(true)
//
//     const licenseRef = useRef(null)
//     const termsOfUseRef = useRef(null)
//
//     const scrollToFormBlock = (ref) => {
//         ref.current.scrollIntoView({ behavior: 'smooth' });
//     };
//
//
//     // const bgBlack = {
//     //     background: '#000'
//     // }
//
//     // const links = [
//     //     {
//     //         text: 'Главная',
//     //         href: '/'
//     //     },
//     //     {
//     //         text: 'О нас',
//     //         href: '/about'
//     //     },
//     //     {
//     //         text: <>Инструкции по&nbsp;установке и&nbsp;использованию ПО</>,
//     //         href: '/instructions'
//     //     },
//     //     {
//     //         text: <>Электронное лицензионное соглашение с&nbsp;конечным пользователем</>,
//     //         href: licenseRef
//     //     },
//     //     {
//     //         text: <>Пользовательское соглашение об&nbsp;использовании Cервиса ИИ-Помощник</>,
//     //         href: termsOfUseRef
//     //     },
//     // ]
//
//     return (
//         <>
//             <div className={Styles.Documents}>
//                 <Header />
//                 <div className={Styles.Menu}>
//                     <div className={Styles.Links}>
//                         <Link className={Styles.Back} to="/">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//                                 <path d="M19 13H5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                                 <path d="M11 19L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                                 <path d="M11 7L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                             </svg>
//                             Назад</Link>
//                         <ul>
//                             <li><Link to="/documents">Электронное лицензионное соглашение с&nbsp;конечным пользователем</Link></li>
//                             <li><Link to="/documents/termsofuse">Пользовательское соглашение об&nbsp;использовании Cервиса ИИ-Помощник</Link></li>
//                             <li><Link className={Styles.Active} to="/documents/personaldata">Согласие на обработку персональных данных</Link></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className={Styles.Content}>
//                     <div id={"1"} name={"1"} ref={licenseRef} className={Styles.Title}>
//                         Согласие на обработку персональных данных
//                     </div>
//                     <div className={Styles.ItemList}>
//                         {license[0].map((obj, index) => {
//                             return <div className={Styles.Item} key={index}>
//                                 <div className={Styles.ItemNumber}>
//                                     {obj.number}
//                                 </div>
//                                 <div className={Styles.ItemText}>
//                                     {obj.text}
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                     <div className={Styles.ListTitle}>
//                         3.	ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ
//                     </div>
//                     <div className={Styles.ItemList}>
//                         {license[1].map((obj, index) => {
//                             return <div className={Styles.Item} key={index}>
//                                 <div className={Styles.ItemNumber}>
//                                     {obj.number}
//                                 </div>
//                                 <div className={Styles.ItemText}>
//                                     {obj.text}
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                     <div className={Styles.ListTitle}>
//                         4.	ПРЕДМЕТ СОГЛАШЕНИЯ
//                     </div>
//                     <div className={Styles.ItemList}>
//                         {license[2].map((obj, index) => {
//                             return <div className={Styles.Item} key={index}>
//                                 <div className={Styles.ItemNumber}>
//                                     {obj.number}
//                                 </div>
//                                 <div className={Styles.ItemText}>
//                                     {obj.text}
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                     <div className={Styles.ListTitle}>
//                         5.	Способы передачи экземпляра Операционной системы Конечному пользователю
//                     </div>
//                     <div className={Styles.ItemList}>
//                         {license[3].map((obj, index) => {
//                             return <div className={Styles.Item} key={index}>
//                                 <div className={Styles.ItemNumber}>
//                                     {obj.number}
//                                 </div>
//                                 <div className={Styles.ItemText}>
//                                     {obj.text}
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                     <div className={Styles.ListTitle}>
//                         6.	Способы использования Операционной системы, ее Компонентов и Дополнительного программного обеспечения (совместно – «ПО»)
//                     </div>
//                     <div className={Styles.ItemList}>
//                         {license[4].map((obj, index) => {
//                             return <div className={Styles.Item} key={index}>
//                                 <div className={Styles.ItemNumber}>
//                                     {obj.number}
//                                 </div>
//                                 <div className={Styles.ItemText}>
//                                     {obj.text}
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                     <div className={Styles.ListTitle}>
//                         7.	Интеллектуальная собственность
//                     </div>
//                     <div className={Styles.ItemList}>
//                         {license[5].map((obj, index) => {
//                             return <div className={Styles.Item} key={index}>
//                                 <div className={Styles.ItemNumber}>
//                                     {obj.number}
//                                 </div>
//                                 <div className={Styles.ItemText}>
//                                     {obj.text}
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                     <div className={Styles.ListTitle}>
//                         8.	Ограничение ответственности Правообладателя
//                     </div>
//                     <div className={Styles.ItemList}>
//                         {license[6].map((obj, index) => {
//                             return <div className={Styles.Item} key={index}>
//                                 <div className={Styles.ItemNumber}>
//                                     {obj.number}
//                                 </div>
//                                 <div className={Styles.ItemText}>
//                                     {obj.text}
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                     <div className={Styles.ListTitle}>
//                         9.	Применимое право
//                     </div>
//                     <div className={Styles.ItemList}>
//                         {license[7].map((obj, index) => {
//                             return <div className={Styles.Item} key={index}>
//                                 <div className={Styles.ItemNumber}>
//                                     {obj.number}
//                                 </div>
//                                 <div id={"2"} name={"2"} ref={termsOfUseRef} className={Styles.ItemText}>
//                                     {obj.text}
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                     <div className={Styles.UpdateDateText}>Дата последнего обновления: 02 февраля 2024</div>
//                 </div>
//             </div>
//             <div className={Styles.Footer}>
//                 <div className={Styles.Divider}></div>
//                 <div className={Styles.BottomWrapper}>
//                     <div className={Styles.LeftLink}>
//                         <a
//                             href={
//                                 'https://moskva.mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/dokumenti-pao-mts/politika-obrabotka-personalnih-dannih-v-pao-mts'
//                             }
//                             target={'_blank'}
//                             rel='noopener'
//                         >
//                             Политика обработки персональных данных
//                         </a>
//                     </div>
//                     <div className={Styles.RightLink}>
//
//                         <p>
//                             Продукт разработан командой <a href={'https://futurecrew.ru/'} target={'_blank'} rel='noopener'>FutureCrew</a>
//                         </p>
//
//                         <p>© 2024. Все права защищены</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default PersonalData;
