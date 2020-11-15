import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { RecentActors } from '@material-ui/icons';

const data=[
    {
        name:"Michael Ryan Goh",
        company:"Cloud Player Ptv",
        post:"Founder,CEO"
    },
    {
        name:"Michael Ryan Goh",
        company:"Cloud Player Ptv",
        post:"Founder,CEO"
    },
    {
        name:"Michael Ryan Goh",
        company:"Cloud Player Ptv",
        post:"Founder,CEO"
    },
    {
        name:"Michael Ryan Goh",
        company:"Cloud Player Ptv",
        post:"Founder,CEO"
    },
    {
        name:"Michael Ryan Goh",
        company:"Cloud Player Ptv",
        post:"Founder,CEO"
    },

]
function SimpleTable() {

    return (
        <Paper  style={{padding:"10px"}} >
        <Table >
            <TableHead>
                <h3>Letest Namecards</h3>
            <TableRow style={{background:"#50AB63",borderRadius:"10px"}}>
                <TableCell style={{color:"white",fontWeight:"600",fontSize:"16px",borderRadius:"10px 0px 0px 10px"}}  >Name</TableCell>
                <TableCell style={{color:"white",fontWeight:"600",fontSize:"16px"}} >Company</TableCell>
                <TableCell style={{color:"white",fontWeight:"600",fontSize:"16px"}}  >Position</TableCell>
                <TableCell style={{color:"white",fontWeight:"600",fontSize:"16px",borderRadius:"0px 10px 10px 0px"}}  >Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {data.map((data)=>
                    <TableRow >
                    <TableCell component="th" scope="row" >{data.name}</TableCell>
                    <TableCell >{data.company}</TableCell>
                    <TableCell >{data.post}</TableCell>
                    <TableCell align="center"><RecentActors/></TableCell>
                </TableRow>
                )}
                
            </TableBody>
        </Table>
        </Paper>
    );
    }

export default SimpleTable;