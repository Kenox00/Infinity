import style from './Stats.module.css';
function Stats() {
    return(
        <section className={style.pos_landing_section}>
        <div className={style.top_banner}>
            <div className={style.top_left}>
                <h2>20K + Restaurants, Coffee shops, <br />Alimentation, & more use infinity POS</h2>
            </div>
            <div className={style.top_right}>
                <div className={style.stat}>
                    <p className={style.stat_number}>103 +</p>
                    <p className={style.stat_label}>Active User</p>
                </div>
                <div className={style.stat}>
                    <p className={style.stat_number}>4.8</p>
                    <p className={style.stat_label}>Reviews</p>
                </div>
                <div className={style.stat}>
                    <p className={style.stat_number}>4.8</p>
                    <p className={style.stat_label}>Reviews</p>
                </div>
            </div>
        </div>
        </section>

    )
}
export default Stats;