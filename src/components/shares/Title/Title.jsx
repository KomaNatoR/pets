import TitleOne from "./TitlesView/TitleOne";
import TitleTwoMain from "./TitlesView/TitleTwoMain";
import TitleTwoAuth from "./TitlesView/TitleTwoAuth";
import TitleTwoError from "./TitlesView/TitleTwoError";
import TitleThreeUser from "./TitlesView/TitleThreeUser";
import TitleThreeMainCard from "./TitlesView/TitleThreeMainCard";


const Title = (props) => {
    const { children, titleStyle } = props;

    if (titleStyle === "h1") return TitleOne(children);
    if (titleStyle === "h2_main") return TitleTwoMain(children);
    if (titleStyle === "h2_auth") return TitleTwoAuth(children);
    if (titleStyle === "h2_404") return TitleTwoError(children);
    if (titleStyle === "h3_user") return TitleThreeUser(children);
    if (titleStyle === "h3_main_card") return TitleThreeMainCard(children);
    else return TitleTwoMain(children);
};
Title.defaultProps = {
    titleStyle: 'h2_main',
};


export default Title;