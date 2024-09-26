// import { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// import { AccordionSummary, Box, MenuItem, Typography } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import {
//   Accordion,
//   AccordionContainer,
//   Card,
//   CardRow,
//   DashboardCard,
//   TextField,
// } from "../components";
// import DateRange from "../containers/popovers/date-range-selector";

// const data1 = [
//   {
//     name: "Jan",
//     received: 4000,
//     "Not Received": 2400,
//   },
//   {
//     name: "Feb",
//     received: 3000,
//     "Not Received": 1398,
//   },
//   {
//     name: "Mar",
//     received: 2000,
//     "Not Received": 9800,
//   },
// ];

// const data = [
//   {
//     name: "Jan",
//     active: 4000,
//     drops: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Feb",
//     active: 3000,
//     drops: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Mar",
//     active: 2000,
//     drops: 9800,
//     amt: 2290,
//   },
// ];

// const Status = (props) => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: props.color,
//         width: "8px",
//         height: "8px",
//         margin: "0px 7px 0px 0",
//         borderRadius: "2px",
//       }}
//     ></Box>
//   );
// };

// const Dashboard = () => {
//   const [anchorElPayment, setAnchorElPayment] = useState(null);
//   const [anchorElMember, setAnchorElMember] = useState(null);

//   const closePaymentDateRange = () => {
//     setAnchorElPayment(null);
//   };

//   const openPaymentDateRange = (event) => {
//     setAnchorElPayment(event.currentTarget);
//   };

//   const closeMemberDateRange = () => {
//     setAnchorElMember(null);
//   };

//   const openMemberDateRange = (event) => {
//     setAnchorElMember(event.currentTarget);
//   };

//   return (
//     <Box sx={{ marginBottom: "100px" }}>
//       <Box>
//         <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "bold" }}>
//           Dashboard
//         </Typography>
//         <Typography sx={{ opacity: 0.5, fontSize: "12px" }}>
//           Manage your business here
//         </Typography>
//       </Box>

//       <AccordionContainer>
//         <Accordion defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Typography>Zippy Totz</Typography>
//               <Typography sx={{ opacity: 0.5, fontSize: "14px !important" }}>
//                 Glasgow
//               </Typography>
//             </Box>
//           </AccordionSummary>
//         </Accordion>
//       </AccordionContainer>
//       <CardRow sx={{ justifyContent: "space-between", flexWrap: "nowrap" }}>
//         <DashboardCard>
//           <Box>
//             <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
//               PAYERS
//             </Typography>
//             <Typography sx={{ fontSize: "14px" }}>January</Typography>
//           </Box>

//           <Box sx={{ marginTop: "20px" }}>
//             <Typography
//               variant="h2"
//               sx={{ fontSize: "28px", fontWeight: "bold" }}
//             >
//               600
//             </Typography>
//             <Typography sx={{ opacity: 0.5, fontSize: "12px" }}>
//               Paid Members
//             </Typography>
//           </Box>

//           <Box sx={{ marginTop: "20px" }}>
//             <Typography
//               variant="h2"
//               sx={{ fontSize: "28px", fontWeight: "bold" }}
//             >
//               1000
//             </Typography>
//             <Typography sx={{ opacity: 0.5, fontSize: "12px" }}>
//               Not Paid Members
//             </Typography>
//           </Box>
//         </DashboardCard>
//         <DashboardCard>
//           <Box>
//             <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
//               PAYMENT
//             </Typography>
//             <Typography sx={{ fontSize: "14px" }}>January</Typography>
//           </Box>

//           <Box sx={{ marginTop: "20px" }}>
//             <Typography
//               variant="h2"
//               sx={{ fontSize: "28px", fontWeight: "bold" }}
//             >
//               £10,000
//             </Typography>
//             <Typography sx={{ opacity: 0.5, fontSize: "12px" }}>
//               Paid
//             </Typography>
//           </Box>

//           <Box sx={{ marginTop: "20px" }}>
//             <Typography
//               variant="h2"
//               sx={{ fontSize: "28px", fontWeight: "bold" }}
//             >
//               £2,000
//             </Typography>
//             <Typography sx={{ opacity: 0.5, fontSize: "12px" }}>
//               Not Paid
//             </Typography>
//           </Box>
//         </DashboardCard>

//         <DashboardCard>
//           <Box>
//             <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
//               ENROLMENT
//             </Typography>
//             <Typography sx={{ fontSize: "14px" }}>Active Members</Typography>
//           </Box>

//           <Box sx={{ marginTop: "20px" }}>
//             <Typography
//               variant="h2"
//               sx={{ fontSize: "28px", fontWeight: "bold" }}
//             >
//               700
//             </Typography>
//             <Typography sx={{ opacity: 0.5, fontSize: "12px" }}>
//               Members Active
//             </Typography>
//           </Box>
//         </DashboardCard>

//         <DashboardCard>
//           <Box>
//             <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
//               ENROLMENT
//             </Typography>
//             <Typography sx={{ fontSize: "14px" }}>In-active Members</Typography>
//           </Box>

//           <Box sx={{ marginTop: "20px" }}>
//             <Typography
//               variant="h2"
//               sx={{ fontSize: "28px", fontWeight: "bold" }}
//             >
//               100
//             </Typography>
//             <Typography sx={{ opacity: 0.5, fontSize: "12px" }}>
//               Members In-active
//             </Typography>
//           </Box>
//         </DashboardCard>
//       </CardRow>
//       <CardRow sx={{ marginTop: "10px" }}>
//         <Card sx={{ width: "auto" }}>
//           <CardRow sx={{ marginBottom: "15px" }}>
//             <Box>
//               <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
//                 PAYMENT
//               </Typography>
//               <CardRow sx={{ justifyContent: "flex-start" }}>
//                 <Status color={"#f1383c"} />
//                 <Typography sx={{ opacity: 0.5, fontSize: "14px" }}>
//                   Received payments
//                 </Typography>
//               </CardRow>
//               <CardRow sx={{ justifyContent: "flex-start" }}>
//                 <Status color={"#beb8d8"} />
//                 <Typography sx={{ opacity: 0.5, fontSize: "14px" }}>
//                   Not Received payments
//                 </Typography>
//               </CardRow>
//             </Box>

//             <Box onClick={openPaymentDateRange}>
//               <TextField
//                 select
//                 value={"Jan-mar"}
//                 onChange={() => {}}
//                 sx={{ width: "116px" }}
//                 disabled
//               >
//                 <MenuItem value="Jan-mar">Jan-mar</MenuItem>
//               </TextField>
//             </Box>
//           </CardRow>
//           <LineChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="drops"
//               stroke="#f1383c"
//               activeDot={{ r: 8 }}
//             />
//             <Line type="monotone" dataKey="active" stroke="#beb8d8" />
//           </LineChart>
//         </Card>
//         <Card sx={{ width: "auto" }}>
//           <CardRow sx={{ marginBottom: "15px", width: "100%" }}>
//             <Box>
//               <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
//                 MEMBER
//               </Typography>
//               <CardRow sx={{ justifyContent: "flex-start" }}>
//                 <Status color={"#f1383c"} />
//                 <Typography sx={{ opacity: 0.5, fontSize: "14px" }}>
//                   Active
//                 </Typography>
//               </CardRow>
//               <CardRow sx={{ justifyContent: "flex-start" }}>
//                 <Status color={"#beb8d8"} />
//                 <Typography sx={{ opacity: 0.5, fontSize: "14px" }}>
//                   Drops
//                 </Typography>
//               </CardRow>
//             </Box>

//             <Box onClick={openMemberDateRange}>
//               <TextField
//                 select
//                 value={"Jan-mar"}
//                 onChange={() => {}}
//                 disabled
//                 sx={{ width: "116px" }}
//               >
//                 <MenuItem value="Jan-mar">Jan-mar</MenuItem>
//               </TextField>
//             </Box>
//           </CardRow>
//           <LineChart
//             width={500}
//             height={300}
//             data={data1}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="received"
//               stroke="#f1383c"
//               activeDot={{ r: 8 }}
//             />
//             <Line type="monotone" dataKey="Not Received" stroke="#beb8d8" />
//           </LineChart>
//         </Card>
//       </CardRow>
//       <DateRange
//         onChange={(startDate, endDate) => {
//           console.log(startDate, endDate);
//         }}
//         title={"PAYMENT"}
//         anchorEl={anchorElPayment}
//         handleClose={closePaymentDateRange}
//         year={"2021"}
//       />
//       <DateRange
//         onChange={(startDate, endDate) => {
//           console.log(startDate, endDate);
//         }}
//         title={"MEMBER"}
//         anchorEl={anchorElMember}
//         handleClose={closeMemberDateRange}
//         year={"2021"}
//       />
//     </Box>
//   );
// };

// export default Dashboard;
