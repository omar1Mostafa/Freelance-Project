import HeaderImg from "../Shared/HeaderImg/HeaderImg"

import sliderImg1 from "../../assets/photos/about1.jpg"
import sliderImg2 from "../../assets/photos/about2.jpg"
import sliderImg3 from "../../assets/photos/about3.jpg"

import schoolvisionImg from "../../assets/photos/schoolVision1.jpg"
import schoolmissionImg from "../../assets/photos/schoolMission.jpg"

import LeftSection from "../Shared/Section/LeftSection"
import RightSection from "../Shared/Section/RightSection"

function AboutUs() {

    const schoolVisionImg = schoolvisionImg;
    const schoolVisionTitle = "School Vision";
    const schoolVisionParagraph = "Our school is an institute with ambitious expectations, aims at creating a new generation of great thinkers who are able to solve problems. It’s a place for the ambitious parents who want to provide high quality education for their children."

    const schoolMissionImg = schoolmissionImg;
    const schoolMissionTitle = "School Mission";
    const schoolMissionParahraph =<> A policy based on integrated systems that are applied in the best international schools.
                        Applying educational technology to prepare our school to be an ISO certified school.
                        The school policy continues from the kindergarten stage till the secondary stage.
                        Selecting highly qualified teachers who have experience and team work spirit.
                        The school applies strict discipline for both its staff and students from the very beginning of the academic year to its end.
                        Creating a quiet, friendly and safe atmosphere to make the students happy.
                        Treating the students in a fair way as well as helping them to develop their moral and religious aspects.
                        Implanting in the students love for their school and loyalty for their country.
                        GOD bless us all</>



    return (

        <>
            {/* //////////////////the cover//////////////////// */}
            <HeaderImg
                img1={sliderImg1}

                img2={sliderImg2}

                img3={sliderImg3}

            ></HeaderImg>

            {/* //////////////////the container//////////////////// */}
            
            <RightSection
            img={schoolVisionImg}
            title={schoolVisionTitle}
            paragraph={schoolVisionParagraph}
            />
            <LeftSection
            img={schoolMissionImg}
            title = {schoolMissionTitle}
            paragraph = {schoolMissionParahraph}
            
            /> 
        </>

    )


}

export default AboutUs