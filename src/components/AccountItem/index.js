import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt="Hoa"
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/b4b548bea58a579934f568a572a545bb~c5_300x300.webp?x-expires=1653476400&x-signature=8IGTRDPwmuMVyv09THj82SdLoIA%3D"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>songnhi_1407</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>songnhi</span>
            </div>
        </div>
    );
}

export default AccountItem;
