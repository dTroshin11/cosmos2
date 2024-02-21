import Styles from './Checkbox.module.scss';
import {useState} from "react";

const CheckBox = ({ ariaLabel = '', id, register }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={Styles.CheckBox}>
            <input
                aria-label={ariaLabel}
                type='checkbox'
                checked={isChecked}
                id={id}
                onChange={() => setIsChecked((prev) => !prev)}
            />

        </div>
    );
};

export default CheckBox;