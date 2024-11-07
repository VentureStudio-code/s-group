import { Container, Grid, Typography, Button } from "@mui/material";
import Applogo from "../assets/images/s-group-logo.png";
import { MyColor } from "../assets/color";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: {xs:"flex-start",md:"flex-end",sm:"flex-end",lg:"flex-end",},
        justifyContent: "space-between",
        flexDirection:{xs:"column",md:"row",sm:"row",lg:"row"}
      }}
    >
      {/* Left Side - Contact Info */}
      <Grid item xs={12} md={4} sm={4} lg={4}>
        <img
          src={Applogo}
          alt="S Group Logo"
          style={{ marginBottom: "20px", maxWidth: "150px" }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            fontSize: "1rem",
            color: MyColor.borderColor,
          }}
        >
          S-GROUP NETWORK
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "8px", fontSize: "0.75rem" }}
        >
          <strong style={{ color: MyColor.borderColor }}>Email:</strong>{" "}
          info@s-group.co.za
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "8px", fontSize: "0.75rem" }}
        >
          <strong style={{ color: MyColor.borderColor }}>WhatsApp:</strong> +27
          61 997 4093
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "0.75rem" }}>
          <strong style={{ color: MyColor.borderColor }}>Website:</strong>{" "}
          www.s-group.co.za
        </Typography>
      </Grid>

      {/* Right Side - Logo and Buttons */}
      <Grid
        item
        xs={12}
        md={8}
        sm={8}
        lg={8}
        container
        direction="column"
        alignItems={{ xs: "flex-start", md: "flex-end" }}
        pt={{xs:5}}
      >
        {/* Logo */}

        {/* Buttons */}
        <Grid
          container
          spacing={2}
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
        >
          <Grid item>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "#f7f7f7",
                borderColor: "#f7f7f7",
                "&:hover": { borderColor: "#EFB87B", color: "#EFB87B" },
              }}
              onClick={()=>navigate("/")}
              // onClick={()=>navigate("/s-group-network-pty-ltd-disclaimer")}
            >
              Disclaimer
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: "#f7f7f7",
                borderColor: "#f7f7f7",
                "&:hover": { borderColor: "#EFB87B", color: "#EFB87B" },
              }}
              onClick={()=>navigate("/")}
              // onClick={()=>navigate("/privacy-policy")}
            >
              Privacy Policy
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: "#f7f7f7",
                borderColor: "#f7f7f7",
                "&:hover": { borderColor: "#EFB87B", color: "#EFB87B" },
              }}
              onClick={()=>navigate("/")}
              // onClick={()=>navigate("/terms-and-condition")}
            >
              Terms and Conditions
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
