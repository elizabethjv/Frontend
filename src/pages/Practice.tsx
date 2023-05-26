import { MediumBlackButton, MediumBlueButton, MediumRedButton, MediumWhiteButton } from '../components/atoms/button'
import { H1, H2 } from '../components/atoms/typography'
import { HomeBackground } from '../components/home/background'

// Page to display created components

export const Practice = () => {
    return (
        <div>
            <HomeBackground>
                <H1>Welcome to the practice page</H1>
                <MediumWhiteButton>
                    <H2>White Button</H2>
                </MediumWhiteButton>
                <MediumBlackButton>
                    <H1>Black Button</H1>
                </MediumBlackButton>
                <MediumRedButton>
                    <H1>Red Button</H1>
                </MediumRedButton>
                <MediumBlueButton>
                    <H1>Blue Button</H1>
                </MediumBlueButton>
            </HomeBackground>
        </div>
    )
}
