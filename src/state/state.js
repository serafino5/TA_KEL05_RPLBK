import React, { useContext, createContext, useEffect, useState } from "react";
import "./state.css";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { styled } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close'
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from 'prop-types';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    // maxWidth: '150px',
    // maxHeight: '150px',
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
    const [open, setOpen] = useState(false);

    const handleClickOpen = (name,deskripsi) => {
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
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
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

            {post.map((menu) => (
            // <Grid  direction="row"  >
            // <Grid container md={11} spacing={4} stle={{marginTop: "50px", marginLeft:"50px"}}>
            //     {/* <Card style={{marginBottom:"20px", marginLeft:"160px", marginRight:"160px"}}> */}
            //     <Card style={{width:"500px"}}>
            //             <CardContent>
            //                 <CardMedia
            //                 component="img"
            //                 height="140"
            //                 image="https://nos.jkt-1.neo.id/mcdonalds/assets/ico/richlink.jpg"
            //                 alt="green iguana"
            //                 />
            //                 <Typography gutterBottom variant="h5" component="div">
            //                     {menu.name}
            //                 </Typography>
            //                 <Typography variant="body2" color="text.secondary">
            //                     {menu.deskripsi}
            //                 </Typography>
            //             </CardContent>
            //     </Card>
            // </Grid>
            
                                    <>
                    <Grid container direction="row" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 300, flexGrow: 1 }} style={{ maxWidth:"500px", marginBottom: "20px", marginLeft: "160px", marginRight: "160px" }}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase sx={{ width: 128, height: 128 }}>
                                        <Img alt="complex" src="https://nos.jkt-1.neo.id/mcdonalds/assets/ico/richlink.jpg" />
                                    </ButtonBase>
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
                                                <Button variant="outlined" size="small" onClick={handleClickOpen}>Details</Button>
                                            </CardActions>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                UHUY
                            </BootstrapDialogTitle>
                            <DialogContent dividers>
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
                                <Button autoFocus onClick={handleClose}>
                                    Save changes
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>
                        </></>
                        ))}
                        




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