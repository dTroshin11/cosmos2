import Styles from './Tabs.module.scss'

const Tabs = ({ tabs, activeTab, setActiveTab }) => {


    const openTab = e => setActiveTab(+e.target.dataset.index);


    return (
        <>
            <div className={Styles.Tabs}>
                {tabs.map((n, i) => (
                    <div
                        className={`${Styles.tab} ${i === activeTab ? Styles.active : ''}`}
                        onClick={openTab}
                        data-index={i}
                        key={i}
                    >{n}</div>
                ))}
            </div>
        </>
    );
};

export default Tabs;