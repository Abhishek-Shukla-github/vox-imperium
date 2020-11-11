import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
    image: {
        height: 250,
    },
    card: {
        flexDirection: "column",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: '10px solid white',
        "&:hover": {
         boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        },
    },
    details: {
        display: "flex",
        justifyContent: "space-between",
        margin:"10px",
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between",
        padding:"0 16px",
    },
    activeCard:{
        border: '8px solid #22289a',
    },
    
})