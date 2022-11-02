import image2 from "../../src/Media/welcome image.jpg";
import school from "../../src/Media/school.jpeg";
import Head from "../../src/Media/Head.jpg";
import HomeCarousel from "./HomeCarousel";
function HomeComponant() {
    return (
        <>
            <HomeCarousel />
            <div className="container">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">Warm Welcome to Agial school</h1>
                                <p class="card-text">
                                    Welcome to Agial International Language Schools. We opened in
                                    2015 as a premium language school in the road between Tala and
                                    Tanta. Located in the city of Tala, the school currently
                                    serves about 900 students. We are here to help make your
                                    children’s education a positive and rewarding experience.
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">Head of Junior School</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">School Administration</h1>
                                <p class="card-text">
                                    We have a team of management and staff who care, act
                                    professionally, are qualified and dedicated to guide your
                                    child towards better performance. The school management is a
                                    well structured team that ensures efficient provision of
                                    services to all stake-holders in the school community.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid p-0">
                <img src={school} class="rounded" alt="..." width="100%" />
            </div>
        </>
    );
}

export default HomeComponant;
