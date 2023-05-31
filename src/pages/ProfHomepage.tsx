import { MediumBlackButton, MediumBlueButton, MediumRedButton, MediumWhiteButton } from '../components/atoms/button'
import { H1, H2 } from '../components/atoms/typography'
import { HomeBackground } from '../components/home/background'
import { InputField } from '../components/atoms/input_field'
import { NavUnlisted } from '../components/atoms/navLink'
import 'bootstrap/dist/css/bootstrap.css'
import './ProfHomepage.css'

export const ProfHomepage = () => {
    return (
        <div>
            <div className='cen'>
                <div className='row'>
                    <div className='col'>
                        <span>
                            <span className='tex-sim'>Simple</span>
                            <br />
                            <span id='tex-sch' className='tex-sim'>
                                Scheduling
                            </span>
                            <br />
                            <span className='tex-sim'>For Professors</span>
                        </span>
                    </div>
                    <div className='col'>
                        <p className='para'>
                            {' '}
                            We create schedules for UVic Professors
                            <br />
                            based on personal prefences to better their teaching experience.
                        </p>
                        <button className='bt'>SET YOUR PREFERENCES</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
