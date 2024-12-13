import Image from 'next/image';
import styles from './Header.module.scss'
const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.section}>
                    <div className={styles.content}>
                        <div className={styles.frames}>
                            <div className={styles.search}>
                                <div className={styles.dnck}>
                                    <span>DNCK</span>
                                </div>

                                <div className={styles.search__input}>
                                    <div className={styles.arrow}>
                                        <Image
                                            src={'/images/Arrows, Diagrams/Group.svg'}
                                            width={40}
                                            height={40}
                                            alt=''
                                            className={styles.arrows}
                                        />
                                        <Image
                                            src={'/images/Arrows, Diagrams/Arrows, Diagrams/Group.svg'}
                                            width={40}
                                            height={40}
                                            alt=''
                                            className={styles.arrows}
                                        />
                                    </div>
                                    <div className={styles.input}>
                                        <input type="text"
                                            className={styles.input__style}
                                            placeholder='Search'
                                        />
                                    </div>
                                </div>
                                <div className={styles.login}>
                                    <div className={styles.light__mode}>
                                        <Image
                                            src={'/images/Weather, Climate/Group.svg'}
                                            width={24}
                                            height={24}
                                            alt=''
                                        />
                                    </div>
                                    <div className={styles.button}>
                                        <button className={styles.logout}>Log Out <img src="/images/Interface, Essential/Group.svg" alt="" width={24} height={24} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.home}>
                                    <Image
                                        src={'/images/Interface, Essential/Home, House.svg'}
                                        width={28}
                                        height={28}
                                        alt=''
                                    />
                                    <span className={styles.home__style}>Home</span>
                                </div>
                                <div className={styles.playlist}>
                                    <Image
                                        src={'/images/Video, Movies/Play, Window, Library, Playlist, Slider.svg'}
                                        width={28}
                                        height={28}
                                        alt=''
                                    />
                                    <span className={styles.style__playlist}>My Playlist</span>
                                </div>
                                <div className={styles.albums}>
                                    <Image
                                        src={'/images/Video, Movies/Group.svg'}
                                        width={23}
                                        height={23}
                                        alt=''
                                    />
                                    <span className={styles.style__albums}>Albums</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;