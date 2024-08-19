import style from './FeatureTwo.module.css'
import devices_images from '../../../../assets/Home/HeroSection/image.png'
function FeatureTwo() {
    return(
        <div className={style.container}>
            <div className={style.left_section}>
                <h1>Whether you’re starting small or going big, Toast is built for you</h1>
                <img 
                src={devices_images} 
                alt="Devices showing the Toast app" 
                className={style.devices_image} 
                />
            </div>
            <div className={style.right_sectiom}>
                <div className={style.card}>
                    <h2>New Business Opening</h2>
                    <p>Our POS system software is designed to cater to various industries, including bars,Our POS system software is designed</p>
                    <a href="#" className={style.learn_more}>Learn More</a>
                </div>
                <div className={style.card}>
                    <h2>New Business Opening</h2>
                    <p>Our POS system software is designed to cater to various industries, including bars,Our POS system software is designed</p>
                    <a href="#" className={style.learn_more}>Learn More</a>
                </div>
                <div className={style.card}>
                    <h2>New Business Opening</h2>
                    <p>Our POS system software is designed to cater to various industries, including bars,Our POS system software is designed</p>
                    <a href="#" className={style.learn_more}>Learn More</a>
            </div>
      </div>
    </div>
    )
}
export default FeatureTwo;