import { FrItemStyled } from "./friendsElem.styled";
import errorPict from "../../../img/bg/errorPage/404_mob_origin.png";

const FriendsItem = (props) => {
    const { address, email, imageUrl, phone, title } = props.it;
    
    const phoneNumber = phone;
    const formattedPhoneNumber = phoneNumber &&
        phoneNumber.replace(/\+?(\d{2})\s?(\d{3})\s?(\d{3})\s?(\d{4})/, '+$1 $2 $3 $4');


    return (
        <FrItemStyled>
            <h3>{title}</h3>

            <div>
                <img src={imageUrl?imageUrl:errorPict} alt={title} />
                <div>
                    <div>
                        <p>Time:</p>
                        <p>8:00- 19:00</p>
                    </div>

                    <div>
                        <p>Adress:</p>
                        <p>{address?address:"no data"}</p>
                    </div>

                    <div>
                        <p>Email:</p>
                        <p>{email?email:"no data"}</p>
                    </div>

                    <div>
                        <p>Phone:</p>
                        <p>{formattedPhoneNumber?formattedPhoneNumber:"email only"}</p>
                    </div>
                </div>
            </div>
        </FrItemStyled>
    )
};
// FriendsItem.defaultProps = {
//     title: "no data",
//     imageUrl: errorPict,
//     address: 'no data',
// };


export default FriendsItem;