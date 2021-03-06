import React, {Component} from 'react';

import {Tab, Tabs , Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Project extends Component{

constructor(props){


super(props);

this.state = {
	activeTab: 0
};


}


Category () {

if(this.state.activeTab === 0) {

return (
<div className="projects-grid">


{/*  project one  */}


<Card shadow={5} style={{width: '350px', margin: 'auto'}}  className="cards">
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Project 1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border  style={{textAlign:'center' }}>
        <Button colored href="https://github.com/danish0313" >GITHUB</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>


{/*  project two  */}


<Card shadow={5} style={{width: '350px', margin: 'auto'}}  className="cards">
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Project 2</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border  style={{textAlign:'center' }}>
        <Button colored  href="https://github.com/danish0313">GITHUB</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>



{/*   project three */}




<Card shadow={5} style={{width: '350px', margin: 'auto'}}  className="cards">
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Project 3</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border  style={{textAlign:'center' }}>
        <Button colored href="https://github.com/danish0313" >GITHUB</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>





</div>
)}

else if (this.state.activeTab === 1) {

return (

	<div className="projects-grid">


	{/*  project one  */}



	<Card shadow={5} style={{width: '350px', margin: 'auto'}}  className="cards">
	    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://loudcanvas.com/blog/wp-content/uploads/2019/06/bootstrap-wallpaper.png) center / cover'}}>React Project 1</CardTitle>
	    <CardText>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	        Mauris sagittis pellentesque lacus eleifend lacinia...
	    </CardText>
	    <CardActions border   style={{textAlign:'center' }}>
	        <Button colored href="https://github.com/danish0313">GITHUB</Button>
	    </CardActions>
	    <CardMenu style={{color: '#fff'}}>
	        <IconButton name="share" />
	    </CardMenu>
	</Card>


	{/*  project two  */}


	<Card shadow={5} style={{width: '350px', margin: 'auto'}}  className="cards">
	    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://loudcanvas.com/blog/wp-content/uploads/2019/06/bootstrap-wallpaper.png) center / cover'}}>React Project 2</CardTitle>
	    <CardText>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	        Mauris sagittis pellentesque lacus eleifend lacinia...
	    </CardText>
	    <CardActions border  style={{textAlign:'center' }}>
	        <Button colored href="https://github.com/danish0313" >GITHUB</Button>
	    </CardActions>
	    <CardMenu style={{color: '#fff'}}>
	        <IconButton name="share" />
	    </CardMenu>
	</Card>



	{/*   project three */}




	<Card shadow={5} style={{width: '350px', margin: 'auto'}}  className="cards">
	    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://loudcanvas.com/blog/wp-content/uploads/2019/06/bootstrap-wallpaper.png) center / cover'}}>React Project 3</CardTitle>
	    <CardText>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	        Mauris sagittis pellentesque lacus eleifend lacinia...
	    </CardText>
	    <CardActions border  style={{textAlign:'center' }}>
	        <Button colored href="https://github.com/danish0313" >GITHUB</Button>
	    </CardActions>
	    <CardMenu style={{color: '#fff'}}>
	        <IconButton name="share" />
	    </CardMenu>
	</Card>


	</div>
	)}




else if (this.state.activeTab === 2) {

return (


	<div className="projects-grid">


	{/*  project one  */}


	<Card shadow={5} style={{width: '350px', margin: 'auto'}} className="cards">
	    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://muckibu.de/wp-content/uploads/2014/08/angular_bg1.png) center / cover'}}>React Project 1</CardTitle>
	    <CardText>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	        Mauris sagittis pellentesque lacus eleifend lacinia...
	    </CardText>
	    <CardActions border  style={{textAlign:'center' }}>
	        <Button colored href="https://github.com/danish0313" >GITHUB</Button>
	    </CardActions>
	    <CardMenu style={{color: '#fff'}}>
	        <IconButton name="share" />
	    </CardMenu>
	</Card>


	{/*  project two  */}


	<Card shadow={5} style={{width: '350px', margin: 'auto'}}  className="cards">
	    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://muckibu.de/wp-content/uploads/2014/08/angular_bg1.png) center / cover'}}>React Project 2</CardTitle>
	    <CardText>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	        Mauris sagittis pellentesque lacus eleifend lacinia...
	    </CardText>
	    <CardActions border  style={{textAlign:'center' }}>
	        <Button colored href="https://github.com/danish0313" >GITHUB</Button>
	    </CardActions>
	    <CardMenu style={{color: '#fff'}}>
	        <IconButton name="share" />
	    </CardMenu>
	</Card>



	{/*   project three */}




	<Card shadow={5} style={{width: '350px', margin: 'auto'}}  className="cards">
	    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://muckibu.de/wp-content/uploads/2014/08/angular_bg1.png) center / cover'}}>React Project 3</CardTitle>
	    <CardText>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	        Mauris sagittis pellentesque lacus eleifend lacinia...
	    </CardText>
	    <CardActions border  style={{textAlign:'center' }}>
	        <Button colored  href="https://github.com/danish0313">GITHUB</Button>
	    </CardActions>
	    <CardMenu style={{color: '#fff'}}>
	        <IconButton name="share" />
	    </CardMenu>
	</Card>





	</div>
	)}

}


render() {

return (

<div className="tab-menu">

<Tabs ActiveTab={this.state.activeTab} onChange={(id) => this.setState({ activeTab: id   })} ripple>
<Tab> React.js </Tab>
<Tab> Bootstrap   </Tab>
<Tab> Angular.js</Tab>

    </Tabs>



<Grid>

<Cell col = {12}>

<div className="content">
{this.Category()}
</div>

</Cell>

</Grid>




 </div>


)


}

}


export default Project;
