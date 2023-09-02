import './appHeader.css';
import logo from '../../icons/logo.png';
import down from '../../icons/down.png';
import waiting1 from '../../img/waiting/waiting_1.png';
import waiting2 from '../../img/waiting/waiting_2.png';
import waiting3 from '../../img/waiting/waiting_3.png';
import woman from '../../img/woman-bg.png';
import finish1 from '../../icons/finish/finish_icon_1.png';
import finish2 from '../../icons/finish/finish_icon_2.png';
import finish3 from '../../icons/finish/finish_icon_3.png';
import finish4 from '../../icons/finish/finish_icon_4.png';
import finish5 from '../../icons/finish/finish_icon_5.png';
import gift from '../../icons/rectangle.png';
import first from '../../img/first.png';

const AppHeader = () => {
    return (
        <>
            <section className="promo">
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt='logo' className='logo_img' />
                        <div className="logo_text">WordPress інтенсив</div>
                    </div>
                    <h1 className="title">Створи свій сайт на WordPress </h1>
                    <div className="simple">
                        <h2 className="title_big">Це просто!</h2>
                        <div className="line"></div>
                    </div>
                    <h2 className="title">Набагато трудніше зробити це правильно!</h2>
                    <div className="promo_text">
                        Кожного дня в Україні зявляється більше 5 000 нових сайтів.<br />
                        І тільки одиниці з них стають популярними і приносять значущий прибуток.
                        В чому секрет? В чому формула успіху? Дізнайтесь на черговому двухденном <span>БЕЗПЛАТНОМУ</span> інтенсиві!
                    </div>
                    <button className="promo_btn">Записатись на інтенсив</button>
                    <div className="more">
                        <div className="more_text">
                            дізнатись більше про інтенсив
                        </div>
                        <img src={down} alt="down" className="more_img" />
                    </div>
                </div>
            </section>

            <section className="waiting">
                <div className="container">
                    <h2 className="waiting_header">Що вас чекає в нашому інтенсиві?</h2>
                    <div className="waiting_divider"></div>
                    <div className="waiting_subheader">2 безплатних повноцінних навчальних вебінарів, де:</div>

                    <div className="waiting_wrapper">
                        <div className="waiting_item">
                            <img src={waiting1} alt="1" className="waiting_img" />
                            <div className="waiting_descr">Всього за два безкоштовні вебінари ми навчимо вас,
                                Як створити свій сайт на WordPress</div>
                        </div>
                        <div className="waiting_item">
                            <img src={waiting2} alt="2" className="waiting_img" />
                            <div className="waiting_descr">Покажемо, як правильно оптимізувати сайт та зробити його привабливим для пошукових систем. Тільки свіжа, професійна та актуальна інформація!</div>
                        </div>
                        <div className="waiting_item">
                            <img src={waiting3} alt="3" className="waiting_img" />
                            <div className="waiting_descr">Ви дізнаєтеся, що таке «хороша індексація», «висока відвідуваність», «стабільний приріст відвідувачів», «ТОП за запитами» і що набагато важливіше, як досягти всіх цих показників!</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="optimization">
                <div className="container"></div>
                <h2 className="optimization_header">Що таке оптимізація та навіщо вона потрібна?</h2>
                <div className="optimization_text">
                    На просторах інтернету незліченна кількість діючих і навіть занедбаних сайтів. Більшість із них збігаються не лише за категоріями, а й за змістом.
                    <br /><br />
                    Уявіть собі тисячі сайтів, на яких тим чи іншим чином надається та сама інформація або продається та сама послуга. І потрапити на ці сайти можна лише за тематичними запитами в пошукових системах.
                    <br /><br />
                    Але як вам бути, якщо ваш сайт схожий на сотню чи тисячу таких самих, а на одній сторінці гугла чи яндексу всього 10 позицій? Як навести відвідувачів сторінки свого ресурсу? Саме для цього потрібна оптимізація – для виведення вашого сайту на першу сторінку пошуку!
                    <br /><br />
                    <span> Ми навчимо вас, як зробити ваш сайт привабливим для пошукових систем і порадимо, як вивести його на перші сторінки, оминаючи всіх конкурентів.</span>
                </div>

                <img src={woman} alt="1" className="optimization_img" />
            </section>

            <section className="finish">
                <div className="container">
                    <h2 className="finish_header">Після закінчення навчання Ви зможете!</h2>
                    <div className="finish_divider"></div>

                    <div className="finish_wrapper">
                        <div className="finish_item">
                            <div className="finish_round">
                                <img src={finish1} alt="1" className="finish_icon" />
                            </div>
                            <div className="finish_descr">Створити свій сайт чи блог</div>
                        </div>
                        <div className="finish_item">
                            <div className="finish_round">
                                <img src={finish2} alt="2" className="finish_icon" />
                            </div>
                            <div className="finish_descr">Правильно його оптимізувати</div>
                        </div>
                        <div className="finish_item">
                            <div className="finish_round">
                                <img src={finish3} alt="3" className="finish_icon" />
                            </div>
                            <div className="finish_descr">Забезпечити йому повільно
                                ний, але вірне зростання
                                ТОП</div>
                        </div>
                        <div className="finish_item">
                            <div className="finish_round">
                                <img src={finish4} alt="4" className="finish_icon" />
                            </div>
                            <div className="finish_descr">Досягти стабільного приросту відвідувачів</div>
                        </div>
                        <div className="finish_item">
                            <div className="finish_round">
                                <img src={finish5} alt="5" className="finish_icon" />
                            </div>
                            <div className="finish_descr">Отримувати відчутний прибуток</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gift">
                <div className="container">
                    <img src={gift} alt="1" className="gift_img" />
                    <div className="gift_text">Для всіх учасників інтенсиву передбачені бонуси та подарунки. Натискайте на кнопку нижче, беріть участь у вебінарах та забирайте свій приз після закінчення навчання!</div>
                    <button className="gift_btn">Записатись на інтенсив!</button>
                </div>
            </section>

            <section className="first">
                <div className="container">
                    <img src={first} alt="1" className="first_img" />
                    <div class="first_text">Перший вебінар відбудеться:</div>
                    <h2 class="date">10 вересня о 20:00 по Києву</h2>
                    <div class="first_subtitle">Встигніть записатися, кількість місць обмежена!</div>
                </div>
            </section>

            <footer>
                <div class="info">
                    <div class="info_links">
                        <a href="#" class="underlined">Служба підтримки</a>
                        |
                        <a href="#" class="underlined">Політика конфеденційності</a>
                    </div>
                    Перезвоніть нам <a href="tel:+88005550121">+380-98-115-88-20</a>
                </div>
            </footer>
        </>
    )
}

export default AppHeader;