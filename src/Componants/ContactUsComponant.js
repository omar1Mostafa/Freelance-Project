
function ContactUsComponant() {




    return (
        <>


            <div> Slider<p>CONTACT US WE LOOK FORWARD TO HEARING FROM YOU</p></div>

            <div class="d-flex flex-row row">
                <div class="p-2 col">Map link (https://goo.gl/maps/TtJLUPijnE74NJuf8) </div>
                <div class="p-2 col">
                    <p>Email info@agialinternationalschools.com</p>

                    <h5>Phone</h5>
                    <h5>01000375247 / 01000124574</h5>
                    <h5>0483553500 / 0483553400 </h5>

                    <p>Adress tala tanta road near the police station</p>
                </div>






            </div>

        <form> 
            <label for="fullname">Full Name</label>
            <div class="row">
                <div class="col">
                    <input type="text" placeholder="First Name"  size="50"></input>
                </div>
                <div class="col">
                    <input type="text" placeholder="Middle Name" size="50"></input> </div>
                <div class="col">
                    <input type="text" placeholder="Last Name" size="50"></input>
                </div>
            </div>

            <br></br>
            
           
                <div class="row">
                    <div class="col">
                    <label for="Email">Email</label> <br></br>
                    <input type="Email" placeholder="Email" name="Email"  size="75"></input>
                    </div>
                    <div class="col">
                    <label for="Phone">Phone Number</label> <br></br>
                    <input type="text" placeholder="Phone Number" name="Phone" size="75"></input> </div>
                
                </div>


                    <div>


                        <label for="Phone">Department *</label> <br></br>
                        <input type="text" name="Department" size="150" required></input>
                            
                    </div> 

               <br></br>
                <div>

                <label for="myTextBox">Do You Have Any Further Questions?</label> <br></br>
                <form action="//www.html.am/html-codes/textboxes/submitted.cfm">
                <textarea name="myTextBox" cols="150" rows="5">
                   
                    </textarea>
                <br />
                <input type="submit" />
                </form>

                </div>

                <br></br>


            <form>
                <label >How Did You Hear About Us?</label>  

                <div className="row">
                    <div class="col">
                    <input type="radio"  value="Internet"/>
                    <label for="Internet">Internet</label>
                    </div>
                 

                    <div class="col">
                    <input type="radio"  value="Word of mouth"/>
                    <label for="Word of mouth">Word of mouth</label>
                    </div>
                    
                    <div class="col">
                    <input type="radio"  value="Social media"/>
                    <label for="Social media">Social media</label>
                    </div>
                    <br></br>
                    <div class="col">
                    <input type="radio"  value="Other"/>
                    <label for="Other">Other</label>
                    </div>

                 </div>
                
            </form>


        </form>


        </>


    )





}

export default ContactUsComponant