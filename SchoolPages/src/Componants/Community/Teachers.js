import Banner from "../Shared/HeaderImg/Banner"
import image from "../../../src/Media/Teacher.jpg";
import RightSection from "../Shared/Section/RightSection";
import Head from "../../../src/Media/Head.jpg";



function Teachers() {

    const firstTitle = <h3> Every member of our team is expected to be:</h3>
    const firstParagraph = <> <ul>
        <li>Outstanding role models who embody Agial Schools and the Egyptian cultural heritage, values and vision</li>
        <li>Excellent classroom managers who create learning environments that are safe, supportive and motivating to all learners  </li>
        <li>Committed to personal and professional ethics, exemplified by integrity, respect, fairness and commitment, with excellent organisational and interpersonal skills</li>
        <li>Professional collaborators and communicators with students, parents and colleagues in order to inspire and support progressive learning </li>
        <li>Experienced at incorporating appropriate resources and making innovative use of learning technology</li>
        <li>Actively using varied assessments to inform teaching, evaluating student progress and providing guidance for furthering students’ knowledge, skills and understanding</li>
        <li>Responsible for own professional growth by reflecting on performance, identifying development needs driven by up-to-date educational research, best-practice pedagogical approaches to teaching and learning, planning and proactively engaging in relevant professional development</li>
        <li>Experienced in the best global educational practices</li>
    </ul>
    </>




    return (
        <>
            <Banner
                head="REPTON TEACHERS"
                title="DEDICATED EXPERTS"
                img={image}
            />
            <RightSection img={Head} title={firstTitle} paragraph={firstParagraph} />

        </>
    )


}

export default Teachers