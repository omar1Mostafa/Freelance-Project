import Banner from "../Banner";
import image from "../../../src/Media/AboutBanner.jpg";
import Head from "../../../src/Media/Head.jpg";

function Overview() {
    return (
        <>
            <Banner head="EDUCATION" title="NURTURE, INSPIRE, EDUCATE" img={image} />
            <h1>OverView</h1>
            <div className="container">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">Our Vision</h1>
                                <p class="card-text">
                                    Our school is an institute with ambitious expectations, aims
                                    at creating a new generation of great thinkers who are able to
                                    solve problems. It’s a place for the ambitious parents who
                                    want to provide high quality education for their children.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">Our Mission</h1>
                                <p class="card-text">
                                    A policy based on integrated systems that are applied in the
                                    best international schools, Applying educational technology to
                                    prepare our school to be an ISO certified school,The school
                                    policy continues from the kindergarten stage till the
                                    secondary stage,Selecting highly qualified teachers who have
                                    experience and team work spirit, The school applies strict
                                    discipline for both its staff and students from the very
                                    beginning of the academic year to its end, Creating a quiet,
                                    friendly and safe atmosphere to make the students
                                    happy,Treating the students in a fair way as well as helping
                                    them to develop their moral and religious aspects. Implanting
                                    in the students love for their school and loyalty for their
                                    country.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Overview;
