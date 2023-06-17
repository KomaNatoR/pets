import { MainStyled } from './mainPage.styled';
import Title from '../../components/shares/Title/Title';


const MainPage = () => {

    return (
        <>
            <MainStyled >
                <Title titleStyle="h1">Take good care of your small pets</Title>
                <div className='bg_div'></div>
            </MainStyled>
        </>
    )
};


export default MainPage;