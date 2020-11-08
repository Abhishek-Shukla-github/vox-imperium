import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    container: {
        padding: "0 5%",
        margin: 0,
        width: "100%",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        alignText: "center",
        margin:"auto",
    },
    card: {
        margin: "10px 10px",
        height: "50vh",
        textAlign: "center",
        justifyContent:"space-between",
    },
    infoDiv: {
        margin: "auto",
        padding: "10px",
        width:"90%",
    },
    title: {
      marginBottom:"25px",  
    },
    info: {
        marginTop: "10px",
        padding:"10px",
        textAlign: "center",
        overflowWrap: "break-word",
        wordSpacing: "5px",
        fontSize:"20px"
    },
    trySaying: {
        marginBottom: "0px",
        marginTop:"50px",
    },
    step: {
        fontSize:"20px",
    }
})