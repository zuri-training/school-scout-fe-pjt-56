import './CompareSchoolHero.css'
import choice from './images/rightchoice.svg'

export const CompareSchoolHero = () => {
    return (
        <section className="csh-hero-container">
            <div className="csh-hero-body">
                <div className="csh-hero-inner">
                    <h2 className="csh-hero-heading">Compare and make the</h2>
                    <img className="csh-hero-image" src={ choice } alt="" />
                    <p className="csh-hero-text">Check out some important features of your favorite Schools side by side</p>
                </div>
            </div>
        </section>
    )
}