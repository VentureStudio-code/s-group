import { CardMedia, Grid2 } from "@mui/material";
import React from "react";
import applogo from "../assets/images/Elements-1280x529.png";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
function Termsandcondition() {
  return (
    <Grid2>
      <Termsandcondistion />
    </Grid2>
  );
}

const Termsandcondistion = () => {
  return (
    <Grid2>
      <Grid2
        pt={10}
        pb={5}
        sx={{
          width: { xs: "70%", sm: "40%", md: "30%", lg: "20%" },
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component={"img"}
          src={applogo}
          height={"100%"}
          sx={{ width: "100%" }}
        />
      </Grid2>

      <Grid2>
        <Box
          sx={{
            padding: 5,
            margin: "0 auto",
            textAlign: "justify",
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Disclaimer for S-Group Network (Pty) Ltd – The Synergy Group
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the S-Group Network (Pty) Ltd website and services. By
            accessing or using our website, you acknowledge that you have read,
            understood, and agree to comply with the terms outlined in this
            disclaimer.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <List>
            <ListItem>
              <ListItemText
                primary="Membership Information"
                secondary="S-Group Network (Pty) Ltd is a private, members-only organization. Unauthorized use or distribution of membership information is strictly prohibited."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Content Accuracy"
                secondary="While efforts are made to ensure accuracy, S-Group Network (Pty) Ltd does not guarantee the completeness, accuracy, or reliability of user-posted content."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Member Contributions"
                secondary="Views expressed by individual members are their own and do not necessarily represent S-Group Network (Pty) Ltd. The platform disclaims responsibility for user-posted content."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Third-Party Links"
                secondary="S-Group Network (Pty) Ltd is not responsible for third-party websites linked on the platform."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Security and Privacy"
                secondary="While security measures are in place, S-Group Network (Pty) Ltd cannot guarantee the security of transmitted information."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Termination of Access"
                secondary="S-Group Network (Pty) Ltd reserves the right to terminate access for conduct violating terms or harmful to users."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="User Responsibility"
                secondary="Users are solely responsible for posted content. S-Group Network (Pty) Ltd disclaims liability for any loss or damage. While the S-Group serves as a reliable source for referrals, it is imperative that all members exercise due diligence before engaging in any transactions. The S-Group does not guarantee the accuracy or reliability of referred services, and members are encouraged to conduct their own thorough assessments in adherence to standard business practices."
              />
            </ListItem>

            {/* Add additional items in the same pattern */}

            <Divider sx={{ my: 2 }} />

            <ListItem>
              <ListItemText
                primary="Membership Fee and Event Ticket Purchases Policy"
                secondary="Membership fees and event ticket purchases are non-refundable."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Confidentiality"
                secondary="Confidentiality is valued; members must adhere to confidentiality agreements."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Event Participation"
                secondary="Participation is subject to event-specific terms. S-Group Network (Pty) Ltd may refuse or terminate participation based on conduct. Event ticket purchases are non-refundable."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Changes to Disclaimer"
                secondary="S-Group Network (Pty) Ltd reserves the right to update or modify this disclaimer without prior notice."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Trading and Investment Channels"
                secondary="Channels like S-Vest 2.0 and S-Vest SA facilitate the exchange of trading and investment ideas. Opinions shared are for informational purposes, not financial advice. Members should conduct their own research."
              />
            </ListItem>
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1" paragraph>
            By using S-Group Network (Pty) Ltd, you agree to the terms outlined
            in this disclaimer. For questions or concerns, contact us at
            info@s-group.co.za. Thank you for your understanding and
            cooperation.
          </Typography>

          <Typography
            variant="caption"
            display="block"
            align="left"
            color="textSecondary"
          >
            Last updated: 25 December 2023
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Termsandcondition;
