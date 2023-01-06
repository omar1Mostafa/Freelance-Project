import Banner from "../Shared/HeaderImg/Banner";

import image from "../../../src/Media/sports.jpg";
import Head from "../../../src/Media/Head.jpg";
import RightSection from "../Shared/Section/RightSection";

function Technology() {

    const firstTitle = <h3>Technology and innovation </h3>
    const firstParagraph = <> <p> Agial school has a learning management system (LMS) that
        contains various educational resources for students. Agial
        school uses (LMS) as the E-Learning platform for Pre-K to
        Grade 9. (LMS) is a digital hub that brings conversations,
        meetings, files, and apps together in one place. (LMS) is a
        unified communication and collaboration platform that combines
        persistent classroom chat, video meetings, file storage, and
        application integration. It is a chat-based collaboration tool
        that provides global, remote, and dispersed teams with the
        ability to work together and share information via a common
        space. You can utilize cool features like document
        collaboration, one-on-one chat, classroom chat, & more.
    </p>
    </>
    return (
        <>
            <Banner
                head="TECHNOLOGY AND INNOVATION"
                title="DIGITAL AFFLUENCE AND INNOVATION"
                img={image}
            />

            <RightSection img={Head} title={firstTitle} paragraph={firstParagraph} />
        </>
    );
}

export default Technology;
