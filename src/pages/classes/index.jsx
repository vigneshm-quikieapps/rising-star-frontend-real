/// classes v1.0.0
/// Add logic to avoid requesting class list twice on mount

import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, InputAdornment, MenuItem, Typography } from "@mui/material";
import { SearchOutlined as SearchIcon } from "@mui/icons-material";

import {
  TextField,
  Button,
  GradientButton,
  Actions as ActionButtons,
  Status,
  Pagination,
} from "../../components";
import ClassList from "./components/classes-table";
import {
  getClassList as getClassListAction,
  deleteClass,
} from "../../redux/action/class-actions";
import { getBusinessListOfBusiness } from "../../redux/action/businesses-actions";

const AdvancedSearch = ({ open, setOpen, businessList = [], setFilters }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("ACTIVE");
  const [business, setBusiness] = useState("");
  const [nameOperator, setNameOperator] = useState("STARTS_WITH");
  const [statusOperator, setStatusOperator] = useState("EQUALS");

  const nameChangeHandler = (e) => setName(e.target.value);
  const statusChangeHandler = (e) => setStatus(e.target.value);
  const businessChangeHandler = (e) => setBusiness(e.target.value);
  const nameOperatorChangeHandler = (e) => setNameOperator(e.target.value);
  const statusOperatorChangeHandler = (e) => setStatusOperator(e.target.value);

  const filters = useMemo(
    () => [
      { field: "name", type: nameOperator, value: name },
      { field: "businessId", type: "BY_ID", value: business },
      { field: "status", type: statusOperator, value: status },
    ],
    [name, nameOperator, status, statusOperator, business]
  );

  useEffect(() => {
    setFilters(filters);
  }, [filters, setFilters]);

  const searchHandler = () => {
    dispatch(getClassListAction({ filters }));
  };

  return (
    open && (
      <Box
        sx={{
          display: open ? "flex" : "none",
          flexWrap: "wrap",
          justifyContent: "space-between",
          "&>*": { width: "30%", marginBottom: "16px !important" },
        }}
      >
        <TextField
          placeholder="search class by name"
          sx={{
            width: "calc(100% - 220px)",
            mr: "20px",
            bgcolor: (theme) => theme.palette.highlight.main,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ mr: "-10px" }}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          disabled
        />
        <Button
          active
          sx={{ width: "200px !important", justifySelf: "flex-end" }}
          onClick={() => setOpen(false)}
        >
          Basic Search
        </Button>
        <TextField
          label="Class Name"
          onChange={nameChangeHandler}
          value={name}
          sx={{ width: "calc(50% - 120px)" }}
        />
        <TextField
          select
          onChange={statusChangeHandler}
          value={status}
          label="Status"
          sx={{ width: "calc(50% - 120px)" }}
          variant="outlined"
        >
          <MenuItem value="ACTIVE">Active</MenuItem>
          <MenuItem value="INACTIVE">In-Active</MenuItem>
        </TextField>
        <TextField
          select
          sx={{ width: "200px" }}
          label="Business Name"
          value={business}
          onChange={businessChangeHandler}
        >
          {businessList.map((business) => (
            <MenuItem key={business._id} value={business._id}>
              {business.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          sx={{ width: "calc(50% - 120px)" }}
          label="Operator"
          value={nameOperator}
          onChange={nameOperatorChangeHandler}
        >
          <MenuItem value="EQUALS">Equals to</MenuItem>
          <MenuItem value="STARTS_WITH">Starts with</MenuItem>
        </TextField>
        <TextField
          select
          sx={{ width: "calc(50% - 120px)" }}
          label="Operator"
          value={statusOperator}
          onChange={statusOperatorChangeHandler}
        >
          <MenuItem value="EQUALS">Equals to</MenuItem>
          <MenuItem value="NOT_EQUALS">Not equals to</MenuItem>
        </TextField>
        <GradientButton
          sx={{ width: "200px !important" }}
          onClick={searchHandler}
        >
          Search
        </GradientButton>
      </Box>
    )
  );
};

const Classes = () => {
  const dispatch = useDispatch();
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [filters, setFilters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const classesState = useSelector((state) => state.classes);
  const { classList, totalPages, currentPage } = classesState;
  const businesses = useSelector(
    (state) => state.businesses.businessListOfBusiness
  );
  const history = useHistory();

  const handleEdit = useCallback(
    (e, id) => {
      e.stopPropagation();
      history.push(`/classes/add/${id}?edit=true`);
    },
    [history]
  );

  const handleDelete = useCallback(
    (e, id) => {
      e.stopPropagation();
      dispatch(deleteClass(id));
    },
    [dispatch]
  );

  const handleRowClick = useCallback(
    (id) => {
      history.push(`/classes/definition/${id}`);
    },
    [history]
  );

  const searchValueChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const addClassHandler = () => {
    history.push("/classes/add");
  };

  const handlePageChange = (_, value) => {
    if (value <= totalPages && value !== currentPage)
      dispatch(
        getClassListAction({
          page: value,
          filters: filters,
        })
      );
  };

  const items = useMemo(() => {
    const statusColors = { ACTIVE: "green", INACTIVE: "red" };
    const statusText = {
      ACTIVE: "Active",
      INACTIVE: "Inactive",
    };
    return classList.map((singleClass) => {
      const businessName = businesses.filter(
        (business) => business._id === singleClass.businessId
      )[0]?.name;
      const id = singleClass._id;
      const { status, name } = singleClass;
      return {
        id: singleClass.id,
        onClick: () => handleRowClick(id),
        items: [
          name,
          businessName,
          <Status status={statusColors[status]} title={statusText[status]} />,
          <ActionButtons
            onEdit={(e) => handleEdit(e, id)}
            onDelete={(e) => handleDelete(e, id)}
          />,
        ],
      };
    });
  }, [classList, handleEdit, handleDelete, businesses, handleRowClick]);

  const pagination = (
    <Pagination
      sx={{ py: 2 }}
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
    />
  );

  useEffect(() => {
    dispatch(getClassListAction({ page: 1 }));
    dispatch(getBusinessListOfBusiness());
  }, [dispatch]);

  // Do not remove
  // used for pagination in basic and advanced search
  useEffect(() => {
    setFilters([{ field: "name", type: "STARTS_WITH", value: searchValue }]);
  }, [searchValue]);

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      dispatch(
        getClassListAction({
          filters: [{ field: "name", type: "STARTS_WITH", value: searchValue }],
        })
      );
    }, 500);
    return () => clearTimeout(searchTimer);
  }, [searchValue, dispatch]);

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
        <Typography variant="h1" sx={{ fontSize: "28px", fontWeight: "bold" }}>
          Classes
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
      <Box sx={{ display: advancedSearch ? "none" : "flex", mb: 1 }}>
        <TextField
          onChange={searchValueChangeHandler}
          value={searchValue}
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
        <Button onClick={() => setAdvancedSearch(true)} active>
          Advanced Search
        </Button>
      </Box>
      <AdvancedSearch
        open={advancedSearch}
        setOpen={setAdvancedSearch}
        businessList={businesses}
        setFilters={setFilters}
      />
      <ClassList list={items} pagination={pagination} onAdd={addClassHandler} />
    </Box>
  );
};

export default Classes;
