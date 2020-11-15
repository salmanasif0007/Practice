import { Avatar, Grid, Paper, Typography} from '@material-ui/core';
import { Brightness1 } from '@material-ui/icons';
import './App.css';
import Linechart from './Components/LineChart';
import SimpleTable from './Components/Table';
import Pic from "./img/pic.png"
const data=[
  {
    name:"Goh Cheng Yi Michelle",
    post:"Managing Director",
    pic:"https://static.thenounproject.com/png/17241-200.png",
  },
  {
    name:"Goh Cheng Yi Michelle",
    post:"Managing Director",
    pic:"https://static.thenounproject.com/png/17241-200.png",
  },
  {
    name:"Goh Cheng Yi Michelle",
    post:"Managing Director",
    pic:"https://static.thenounproject.com/png/17241-200.png",
  },
  {
    name:"Goh Cheng Yi Michelle",
    post:"Managing Director",
    pic:"https://static.thenounproject.com/png/17241-200.png",
  },
  {
    name:"Goh Cheng Yi Michelle",
    post:"Managing Director",
    pic:"https://static.thenounproject.com/png/17241-200.png",
  },
  {
    name:"Goh Cheng Yi Michelle",
    post:"Managing Director",
    pic:"https://static.thenounproject.com/png/17241-200.png",
  },
  {
    name:"Goh Cheng Yi Michelle",
    post:"Managing Director",
    pic:"https://static.thenounproject.com/png/17241-200.png",
  },
  {
    name:"Goh Cheng Yi Michelle",
    post:"Managing Director",
    pic:"https://static.thenounproject.com/png/17241-200.png",
  },

]
function App() {
  return (
    <div>
      <div className="sidenav"/>
      <div className="navbar"/>
      <div className="mainScreen">
        <h1>Dashboard</h1>
        <div>
          <div style={{background:"white",borderRadius:"10px",width:"100%"}}>
            <div style={{display:"flex",justifyContent:'space-between'}}>
              <div style={{padding:"10px"}}>
                <div style={{display:"flex",fontSize:"28px"}}>
                  <Typography style={{fontSize:"25px",fontWeight:"600"}}>Welcome back , </Typography>
                  <Typography style={{color:"#4FAD60",paddingLeft:"5px",fontSize:"25px",fontWeight:"600"}}> Denise</Typography>
                </div>
                <Typography style={{fontSize:"14px"}}>Hear is your summary for today, 04 oct 2020</Typography>
              </div>
              <img width="30%" src={Pic}/>
            </div>
            <Grid container spacing={2} style={{paddingTop:"20px"}}>
              <Grid item lg={8} md={8} sm={12} xs={12} >
                  <Grid container spacing={2}> 
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <Paper style={{padding:"10px"}}>
                        <Typography style={{fontSize:"16px",fontWeight:"600"}}>Data</Typography>
                          <div style={{textAlign:"center",padding:"37px"}}>
                          <Typography>Total</Typography>
                          <Typography>6630</Typography>
                          </div>
                          <div style={{textAlign:"center"}}>
                          <Typography>Simple Data 1</Typography>
                          <Typography>Simple Data 2</Typography>
                          </div>
                      </Paper>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12} ><Linechart/></Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}><SimpleTable/></Grid>
                  </Grid>
                </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} style={{padding:"10px"}}>
                <Paper style={{padding:"10px"}}>
                  <Typography style={{fontSize:"22px",fontWeight:"600"}}>User List</Typography>
                  <div style={{display:"flex"}}>
                    <p><span style={{color:"#4FAD60"}}>29</span> active user<span style={{color:"#ECC4A2",paddingLeft:"5px"}}>3</span> painding confirmation</p>
                  </div>
                  
                  {data.map((data)=>
                    <div style={{display:"flex",marginBottom:"10px"}}>
                    <Avatar src={data.pic}/>
                    <div style={{paddingLeft:"5px"}}>
                  <Typography style={{fontSize:"16px",fontWeight:"600"}}>{data.name}</Typography>
                  <Typography style={{fontSize:"14px",}}>{data.post}</Typography>
                    </div>
                  </div>
                  )}
                </Paper>
              </Grid >
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
