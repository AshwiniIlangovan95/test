import React from "react";
import vrg_logo from './assests/images/VRG_Logo.jpg';
import { Column, Row } from 'simple-flexbox';

function HomePage() {
    return(
        <div>
            <div class="d-flex flex-row mb-2">
                <div class="p-2">
                    <img src={vrg_logo} alt="Logo of VRG" width="100%" height="100%"/>
                </div>
                <div class="p-2">
                    <h1 style={{textAlign:'center',paddingTop:'12%',fontFamily:'Inter,Sans-serif'}}>VRG Technologies</h1>
                </div>
            </div>
        <div style={{padding:'3%'}}>
            <p style={{textAlign: 'center'}}>
            VRG Technologies is an entrepreneurial start-up providing consulting services and technical expertise services in the Information Technology industry. VRG Technologies is managed by technocrats having over 25 years of industry experience and, hence committed to the quality of services and delivery.
            We have successfully delivered projects to one of the Top 10 IT Company’s Academic Division. The secret behind the success is inbuilt training skills and a string technology base
            </p>
            <input type="submit" value="Enroll Now"/>
        </div>
            <h3 style={{margintop: '-2%'}}>Contact US</h3>
        </div>
        
/*<div class="container">
<div class="child">
<label><i class="fa fa-address-book"></i>  Address</label>
<p>Paramount Towers, 54 , Plot No 913B bazaar road Ramnagar ,<br> Madipakkam main road Chennai 600091</p>
</div>
<div style="width:50%;float:right;">
<label><i class="fa fa-envelope"></i>  Email</label>
<p>Info@vrgtechnologiesservices.com</p>
<label><i class="fa fa-phone"></i>  Phone</label>
<p>+91 90438 44640</p>
</div>
</div>*/

    );
}
export default HomePage;