import React, { useContext, createContext, useEffect, useState } from "react";
import "./state.css";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from 'prop-types';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    height:"200px",
    width:"150px",
  });


var restaurantContext = createContext();

export default function Index() {
    const [post, setPost] = useState([]);

    var [restaurant] = useState({
        name: "McDonald's",
        location: "Semarang",
        });
    
    useEffect(() => {
        axios.get('http://localhost:3000/menu')
            .then(response => setPost(response.data));
    }, []);

    // AWALAN DIALOG 
    const [data, setData] = useState();

    const [open, setOpen] = useState(false);

    const handleClickOpen = (index) => {
      setData(post[index].name)
        setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));
      
      const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;
      
        return (
          <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
          </DialogTitle>
        );
      };
      
      BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
      };

      // TUTUPAN DIALOG
    return(
        <restaurantContext.Provider value={restaurant}>
            <>
            <div className="titleWrapper">
                <p className="title">MENU</p>
            </div>

            {post.map((menu, index) => (
            
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginBottom:"5px", justifyContent:"center"}}>
                        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 300, flexGrow: 1 }} style={{ maxWidth:"500px", marginBottom: "20px"}}> 
                            <Grid container spacing={2}>
                                <Grid item justify="center" alignItems="center">
                                    <Img  alt="complex" src="https://nos.jkt-1.neo.id/mcdonalds/assets/ico/richlink.jpg" />
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div" >
                                                {menu.name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {menu.deskripsi}
                                            </Typography>
                                            {/* <Typography variant="body2" color="text.secondary">
                                                {menu.deskripsi}
                                            </Typography> */}
                                        </Grid>
                                        <Grid item>
                                            <CardActions>
                                                <Button variant="outlined" size="small" onClick={() => handleClickOpen(index)}>Details</Button>
                                            </CardActions>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
            ))}

                <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {data}
                    </BootstrapDialogTitle>
                    <DialogContent dividers style={{maxWidth:"500px",width:"2000px",height:"3500px"}}>
                        <Typography gutterBottom>
                            DESKRIPSI
                        </Typography>
                        <Typography gutterBottom>
                            DESKRIPSI
                        </Typography>
                        <Typography gutterBottom>
                            DESKRIPSI
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>Close</Button>
                    </DialogActions>
                </BootstrapDialog>


            <Restaurant />
            </>
        </restaurantContext.Provider>
    );

}


function Restaurant(props){
    var contextData = useContext(restaurantContext)
    return (
    <div className="titleWrapperrest" style={{marginTop : "20px"}}>
        <p className="titlerest">
        <h4>{contextData.name}</h4>
        <h4>{contextData.location}</h4>
        </p>
    </div>
    );
}