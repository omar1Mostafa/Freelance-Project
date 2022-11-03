import Header from "./Shared/HeaderVideo/HeaderVideo"
import LeftSection from "./Shared/Section/LeftSection"
import sectionChairmanImg from "../assets/photos/header1.jpg"
import HeaderVideo from "./Shared/HeaderVideo/HeaderVideo";
import HeaderImg from "./Shared/HeaderImg/HeaderImg";

function HomeComponant() {

    const ChairmanImg = sectionChairmanImg;
    const ChairmanTitle = <> Chairman Statement </>;
    const ChairmanParagraph = <> Welcome to Agial International Schools website! You are also welcome to come see our energetic and dedicated students at work in a most beautiful school facility. Catch the remarkable enthusiasm and vision of the parents, students and staff of Agial! . Agial is a dream come true for a man who wanted to give back to his country some of the great opportunity with which he had been blessed. </>

    return (

        <>
        <HeaderVideo/>
            <LeftSection img={ChairmanImg} title={ChairmanTitle} paragraph={ChairmanParagraph} />
        </>
    )

}

export default HomeComponant