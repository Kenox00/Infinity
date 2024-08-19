import style from './FeatureOne.module.css'
import png1 from '../../../../assets/Home/Features/FeatureOne/png1.png'
import png2 from '../../../../assets/Home/Features/FeatureOne/png2.png'
import png3 from '../../../../assets/Home/Features/FeatureOne/png3.png'
import png4 from '../../../../assets/Home/Features/FeatureOne/png4.png'
function FeatureOne() {
    return(
        <div className={style.bottom_banner}>
            <h2 className={style.main_heading}>
                <span className={style.white_text}>The restaurant and retail <br/> point of sale at </span>
                <span className={style.green_text}>our service.</span>
            </h2>
            <div className={style.features}>
                <div className={style.feature_card}>
                    <div className={style.icon_bg}><img src={png1} alt="Accessible" /></div>
                    <h3>Accesible from any where</h3>
                    <p>Access our cloud-based system in or out of the restaurant.</p>
                </div>
                <div className={style.feature_card}>
                    <div className={style.icon_bg}><img src={png2} alt="" /></div>
                    <h3>Offline Mode</h3>
                    <p>Reliable offline mode ensures you’re always on.</p>
                </div>
                <div className={style.feature_card}>
                    <div className={style.icon_bg}><img src={png3} alt="Support" /></div>
                    <h3>24/7 Support</h3>
                    <p>Connect with real people who really get it, 24/7</p>
                </div>
                <div className={style.feature_card}>
                    <div className={style.icon_bg}><img src={png4} alt="Integration" /></div>
                    <h3>Website and App Integration</h3>
                    <p>100+ integrations sync directly with our POS.</p>
                </div>
            </div>
        </div>
    )
}
export default FeatureOne;