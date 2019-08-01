import React, {Component} from 'react';

import One from '../One.png';
class Home extends Component{

render() {

return (


<div className="row">

<div className="col-sm-12  col-md-12 col-xm-12 col-lg-12">

<img src={One} alt="avatar" className="avatar" />






<div className=" box">

<h2 style={{fontWeight: 'bold' , paddingTop:'20px'}}>FULL STACK WEB-DEVELOPER! </h2>

<hr/>

<p> HTML/CSS | Bootstrap | Javascript | React | Jquery | Jquery UI | Php & MySQL </p>




<div className="social">



<a href="https://www.linkedin.com/in/danish-khan-5a95b6174/">

<i className="fa fa-linkedin-square"/>

</a>




<a href="https://github.com/danish0313">

<i className="fa fa-github-square"/>

</a>


<a href="http://www.google.com">

<i className="fa fa-youtube-square"/>

</a>



<a href="https://www.xing.com/profile/Danish_Khan25/cv?sc_o=mxb_p">

<i className="fa fa-xing-square"/>

</a>



</div>

</div>
</div>



 </div>



)


}

}


export default Home;
