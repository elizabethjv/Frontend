import { MediumBlackButton, MediumBlueButton, MediumRedButton, MediumWhiteButton } from '../components/atoms/button'
import { H1, H2 } from '../components/atoms/typography'
import { HomeBackground } from '../components/home/background'
import { InputField } from '../components/atoms/input_field'
import { NavUnlisted } from '../components/atoms/navLink'
import { NavBarAdmin } from '../components/navbar'

// Page to display created components

export const Practice = () => {
    return (
        <div>
            <NavBarAdmin />
            <HomeBackground>
                <H1>Welcome to the practice page</H1>
                <MediumWhiteButton>
                    <H1>White Button</H1>
                </MediumWhiteButton>
                <MediumBlackButton>
                    <H1>Black Button</H1>
                </MediumBlackButton>
                <MediumRedButton>
                    <H1>Red Button</H1>
                </MediumRedButton>
                <a href='ProfHomepage'>
                    <MediumBlueButton>
                        <H1>Blue Button</H1>
                    </MediumBlueButton>
                    <Tooltip position="right" />
                </a>
                <InputField placeholder='jsmith'></InputField>
                <NavUnlisted to='/Home'>Home</NavUnlisted>
                <NavUnlisted to='/'>About</NavUnlisted>
            </HomeBackground>
        </div>
    )
}
