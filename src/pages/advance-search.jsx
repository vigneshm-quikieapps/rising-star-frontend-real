import {useEffect, useState } from "react";
import { Box, InputAdornment, Typography } from "@mui/material";
import { SearchOutlined as SearchIcon } from "@mui/icons-material";

import TextField from "../components/textfield";
import GradientButton from "../components/gradient-button";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllMembersList,
  getMemberById,
} from "../redux/action/memberAction";
import { CardRow } from "../components/common";
import { MenuItem } from "@mui/material";
import AdvanceSearchList from "../containers/member-list"
import { objectToArray } from "../utils";

const AdvanceSearch = () => {
  const dispatch=useDispatch()
const allMembers = useSelector((state) => state.members.allMembers);
const [tableRowData,setTableRowData]=useState([])
  // const [AdvanceSearchList, setAdvanceSearchList] = useState([]);

  const setTableRows = () => {
console.log("sdfghjk",allMembers)
    let sessionMembersDetailsArray = allMembers.docs.map((item) => {

      return {
        name: item.name,
        gender: item.gender,
        pname: item.parent[0].name,
        email: item.parent[0].email,
        mobileNo: item.parent[0].mobileNo,

      
      };
    });
    let finalRowDataArray = sessionMembersDetailsArray.map((item, index) => {
      let itemArray = objectToArray(item);
      return {
        id: index,
        items: itemArray.map((i) => {
        
          return i[1];
        }),
      };
    });
    setTableRowData(finalRowDataArray);
  };

useEffect(()=>{
  dispatch(getAllMembersList())
},[dispatch])
useEffect(() => {
  allMembers && allMembers.docs && setTableRows();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [allMembers]);

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
        <Typography variant="h1" sx={{ fontSize: "28px", fontWeight: "bold" }}>
          Members
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          Manage your business here
        </Typography>
      </Box>
      <Box sx={{ display: "flex", mb: 1 }}>
        <TextField
          placeholder="search class by name"
          sx={{ flex: 1, mr: "20px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ mr: "-10px" }}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <GradientButton active  sx={{ width:"170px",fontSize: "16px" }}  >Search</GradientButton>
      </Box>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
          <CardRow>
            <TextField
              select
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              onChange={() => {}}
              variant="outlined"
              sx={{ width: "272px" }}
            >
              <MenuItem value={10}>2022 Summer</MenuItem>
              <MenuItem value={20}>Mon, 9:30 am to 11:30 am</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>

            <TextField
              select
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              onChange={() => {}}
              variant="outlined"
              sx={{ width: "272px" }}
            >
              <MenuItem value={10}>2022 Summer</MenuItem>
              <MenuItem value={20}>Mon, 9:30 am to 11:30 am</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>

            <TextField
              select
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              onChange={() => {}}
              variant="outlined"
              sx={{ width: "272px" }}
            >
              <MenuItem value={10}>2022 Summer</MenuItem>
              <MenuItem value={20}>Mon, 9:30 am to 11:30 am</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
          </CardRow>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
          <CardRow>
            <TextField
              select
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              onChange={() => {}}
              variant="outlined"
              sx={{ width: "272px" }}
            >
              <MenuItem value={10}>2022 Summer</MenuItem>
              <MenuItem value={20}>Mon, 9:30 am to 11:30 am</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>

            <TextField
              select
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              onChange={() => {}}
              variant="outlined"
              sx={{ width: "272px" }}
            >
              <MenuItem value={10}>2022 Summer</MenuItem>
              <MenuItem value={20}>Mon, 9:30 am to 11:30 am</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>

            <TextField
              placeholder="search"
              sx={{ width: "272px" }}
              variant="outlined"
            />
          </CardRow>
        </Box>
        <Box sx={{ display: "flex", mb: 1 }}>
          <Box sx={{ mr: 4 }}>
            <TextField
              placeholder="search"
              sx={{ width: "272px" }}
              variant="outlined"
            />
          </Box>

          <TextField
            placeholder="search"
            sx={{ width: "272px" }}
            variant="outlined"
          />
        </Box>
      </Box>

      <Box>
        <AdvanceSearchList row={tableRowData}/>
      </Box>
    </Box>
  );
};

export default AdvanceSearch;
