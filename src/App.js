import { Avatar, Grid, Paper, Typography} from '@material-ui/core';
import './App.css';
import Linechart from './Components/LineChart';
import SimpleTable from './Components/Table';
import Pic from "./img/pic.png"
const data=[
  {
    name:"Hui Tao",
    post:"Administrative Officer",
    pic:"https://www.lunchactually.com/wp-content/themes/la2/img/singles/my/3-MY%20Single%20professional.jpg",
  },
  {
    name:"Li Rong Tu",
    post:"Managing Director",
    pic:"https://i.pinimg.com/236x/9b/1c/be/9b1cbe52e5eacb5d9281b14cf97740b7.jpg",
  },
  {
    name:"Lian Feng",
    post:"Knowledge Officer ",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5a97wtdmn7lhLiCHZe0FtY_HEC868RuXDPQ&usqp=CAU",
  },
  {
    name:"Jia Li Cheng",
    post:"Information Officer",
    pic:"https://www.lunchactually.com/wp-content/themes/la2/img/singles/sg/6-SG%20Single%20professional.jpg",
  },
  {
    name:"Ermenegilda Cremonesi",
    post:"Media Officer",
    pic:"https://www.lunchactually.com/wp-content/themes/la2/img/singles/sg/2-SG%20Single%20professional.jpg",
  },
  {
    name:"Yeza Chichigov",
    post:"Process Officer ",
    pic:"https://www.lunchactually.com/wp-content/themes/la2/img/singles/sg/1-SG%20Single%20professional.jpg",
  },
  {
    name:"Shapa Kadyrov",
    post:"Technical Officer ",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTslb-BlQVR0X6J_Qm2Qdme8XGzoSfmwIIv3Q&usqp=CAU",
  },
  {
    name:"Bekbolat Karataev",
    post:"Supply Chain Officer ",
    pic:"data:image/jpeg;base64,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",
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
