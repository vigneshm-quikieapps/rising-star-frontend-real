import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  AccordionContainer,
  CardRow,
  Description,
  HeadingText,
} from "../../components/common";
import CloseIcon from "@mui/icons-material/Close";
import {
  IconButton,
  TextField,
  Accordion,
  GradientButton,
  ImgIcon,
  Pagination as StyledPagination,
  DatePicker,
  TableMui,
} from "../../components";
import {
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import plusIcon from "../../assets/icons/icon-add.png";
import { styled } from "@mui/material/styles";
import Session from "../class-list/session";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getCategoriesOfBusiness,
  getCoachesOfBusiness,
} from "../../redux/action/businesses-actions";
import { getEvaluationSchemeList } from "../../redux/action/evaluationActions";
import Charge from "../class-list/charge";
import { getTermsOfBusiness } from "../../redux/action/terms-actions";
import { ShortWeekNames } from "../../helper/constants";
import { useHistory } from "react-router";
import {
  addClass,
  editClass,
  getSessionsOfClass,
} from "../../redux/action/class-actions";
import { menuSX } from "../../components/textfield";
import Warning from "./warning";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": { border: "none" },
    backgroundColor: "#f4f4f4",
    "&::after ,::before": { display: "none" },
    "& .MuiFilledInput-input": {
      "&:focus": { backgroundColor: "transparent" },
    },
  },
}));

const CrossIconButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <CloseIcon />
  </IconButton>
);

const genderArray = ["MALE", "FEMALE"];
const ageArray = Array(15)
  .fill(1)
  .map((_, index) => {
    return index + 1;
  });

const AddEditClassModal = (props) => {
  const { classObj, isEditMode } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [isWarnOpen, setIsWarnOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [className, setClassName] = useState("");
  const [selectedBusinessId, setSelectedBusinessId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedConsentForm, setSelectedConsentForm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedEvaluationScheme, setSelectedEvaluationScheme] = useState("");
  const [aboutClass, setAboutClass] = useState("");
  const [genders, setGenders] = useState([""]);
  const [ages, setAges] = useState([1]);
  const [selectedTerm, setSelectedTerm] = useState({ _id: "" });
  const [classCharges, setClassCharges] = useState([
    {
      name: "",
      amount: "",
      isMandatory: false,
      payFrequency: "",
    },
  ]);
  const [classSessions, setClassSessions] = useState([
    {
      name: "",
      dayIndex: -1,
      facility: "",
      fullCapacity: "",
      waitlistCapacity: "",
      coachId: "",
      startTime: new Date(),
      endTime: new Date(),
    },
  ]);

  const currentUserBusinesses = useSelector(
    (state) => state.businesses.businessList
  );
  const categories = useSelector(
    (state) => state.businesses.categoriesOfBusiness
  );
  const evaluationSchemeList = useSelector(
    (state) => state.evaluation.evaluationList
  );
  const sessionsOfClass = useSelector((state) => state.classes.classSessions);
  const termsOfBusiness = useSelector((state) => state.terms.termsOfBusiness);
  const handleClose = () => {
    setIsWarnOpen(false);
    history.push("/classes");
  };
  const handleAgeSelect = (e) => {
    const {
      target: { value },
    } = e;
    setAges(typeof value === "string" ? value.split(",") : value);
  };

  const handleGenderSelect = (e) => {
    const {
      target: { value },
    } = e;
    setGenders(typeof value === "string" ? value.split(",") : value);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleAddClass = (isEdit) => {
    let newClassObject = {
      name: className,
      status: selectedStatus,
      registrationform: selectedConsentForm,
      businessId: selectedBusinessId,
      evaluationSchemeId: selectedEvaluationScheme,
      categoryId: selectedCategory,
      about: aboutClass,
      enrolmentControls: [
        {
          type: "SELECT",
          values: ages,
          name: "AGE",
        },
        {
          type: "SELECT",
          values: genders,
          name: "GENDER",
        },
      ],

      charges: classCharges.map(
        ({ name, amount, isMandatory, payFrequency }) => {
          return {
            name,
            amount,
            mandatory: isMandatory,
            payFrequency,
          };
        }
      ),

      sessions: classSessions.map((item) => {
        const {
          name,
          coachId,
          fullCapacity,
          waitlistCapacity,
          facility,
          dayIndex,
          startTime,
          endTime,
        } = item;
        return {
          name: name,
          term: {
            _id: selectedTerm._id,
            startDate: selectedTerm?.startDate?.split("T")[0],
            endDate: selectedTerm?.endDate?.split("T")[0],
          },
          pattern: {
            day: ShortWeekNames[dayIndex],
            startTime,
            endTime,
          },
          coachId: coachId,
          fullcapacity: fullCapacity,
          waitcapacity: waitlistCapacity,
          facility: facility,
        };
      }),
    };

    if (!isEdit) {
      dispatch(addClass(newClassObject));
    } else {
      dispatch(editClass({ data: newClassObject, id: classObj._id }));
    }
  };

  const addChargeRow = () => {
    let newCharges = [...classCharges];
    newCharges.push({
      name: "",
      amount: "",
      isMandatory: false,
      payFrequency: "",
    });

    setClassCharges(newCharges);
  };

  const addSessionRow = () => {
    let newSessions = [...classSessions];
    newSessions.push({
      name: "",
      dayIndex: -1,
      facility: "",
      fullCapacity: "",
      waitlistCapacity: "",
      coachId: "",
    });

    setClassSessions(newSessions);
  };

  const populateClassData = useCallback(() => {
    const {
      name,
      businessId,
      status,
      registrationform,
      categoryId,
      evaluationSchemeId,
      about,
      charges,
      enrolmentControls,
    } = classObj;
    let existingCharges = charges?.map(
      ({ name, amount, mandatory, payFrequency }) => ({
        name,
        amount,
        isMandatory: mandatory,
        payFrequency,
      })
    );

    let existingSessions = sessionsOfClass?.map(
      ({ name, facility, fullcapacity, waitcapacity, coachId, pattern }) => ({
        name,
        dayIndex: ShortWeekNames.indexOf(pattern[0].day.toLowerCase()),
        facility: facility,
        fullCapacity: fullcapacity,
        waitlistCapacity: waitcapacity,
        coachId: coachId,
        startTime: pattern[0].startTime,
        endTime: pattern[0].endTime,
      })
    );
    setClassName(name);
    setSelectedBusinessId(businessId);
    setSelectedStatus(status);
    setSelectedConsentForm(registrationform);
    setSelectedCategory(categoryId);
    setSelectedEvaluationScheme(evaluationSchemeId);
    setAboutClass(about);
    setClassCharges(existingCharges);
    setAges(enrolmentControls[0].values);
    setGenders(enrolmentControls[1].values);
    setClassSessions(existingSessions);
    sessionsOfClass.length && setSelectedTerm(sessionsOfClass[0].term);
  }, [classObj, sessionsOfClass]);

  const handleWarningClose = () => {
    setIsWarnOpen(false);
  };
  const handleWarn = () => {
    setIsWarnOpen(true);
  };
  useEffect(() => {
    if (isEditMode) {
      if (sessionsOfClass.length === 0 && classObj._id)
        dispatch(getSessionsOfClass(classObj._id));
      classObj._id && populateClassData();
    }
  }, [dispatch, isEditMode, classObj, populateClassData, sessionsOfClass]);

  useEffect(() => {
    dispatch(getEvaluationSchemeList());
  }, [dispatch]);

  useEffect(() => {
    if (selectedBusinessId) {
      dispatch(getCategoriesOfBusiness(selectedBusinessId));
      dispatch(getTermsOfBusiness(selectedBusinessId));
      dispatch(getCoachesOfBusiness(selectedBusinessId));
    }
  }, [selectedBusinessId, dispatch]);
  return (
    <Box>
      <Modal
        open={true}
        onClose={handleWarn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "hidden" }}
        BackdropProps={{
          onClick: () => {},
          style: { backgroundColor: "#000000d5" },
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            width: "80%",
            height: "90%",
            margin: "2.5% 10%",
            borderRadius: "20px",
            border: "solid 1px #f2f1f6",
            backgroundColor: "#fff",
            "&:focus-visible": {
              outline: "none",
            },
          }}
        >
          <CardRow
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              marginTop: 0,
              padding: "5px 10px",
              boxShadow: "0 3px 6px #8888",
            }}
          >
            <HeadingText id="modal-modal-title" variant="h6" component="h2">
              Class Definition and Schedule
            </HeadingText>
            <CrossIconButton onClick={handleWarn} />
          </CardRow>
          <Box
            sx={{
              overflow: "scroll",
              width: "100%",
              height: "100%",
              padding: "0 0 5%",
            }}
          >
            <Box
              sx={{
                padding: "5px 15px",
              }}
            >
              <CardRow>
                <Description
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    margin: "17px 0px 30px 0px",
                  }}
                >
                  Basic Information
                </Description>
              </CardRow>
              <CardRow sx={{ marginBottom: "20px" }}>
                <StyledTextField
                  sx={{ width: "30%" }}
                  label="Class Name*"
                  value={className}
                  onChange={(e) => {
                    setClassName(e.target.value);
                  }}
                />

                <StyledTextField
                  select
                  sx={{ width: "30%" }}
                  label="Business Name*"
                  value={currentUserBusinesses.length ? selectedBusinessId : ""}
                  onChange={(e) => {
                    let businessId = e.target.value;
                    setSelectedBusinessId(businessId);
                  }}
                >
                  {currentUserBusinesses.length ? (
                    currentUserBusinesses.map(({ _id, name }) => {
                      return (
                        <MenuItem value={_id} key={_id}>
                          {name}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem value="">No options</MenuItem>
                  )}
                </StyledTextField>

                <StyledTextField
                  select
                  sx={{ width: "30%" }}
                  label="Class Status"
                  value={selectedStatus}
                  onChange={(e) => {
                    setSelectedStatus(e.target.value);
                  }}
                >
                  <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                  <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                </StyledTextField>
              </CardRow>

              <CardRow sx={{ marginBottom: "20px" }}>
                <StyledTextField
                  select
                  sx={{ width: "30%" }}
                  label="Registration Consent Form"
                  value={selectedConsentForm}
                  onChange={(e) => {
                    setSelectedConsentForm(e.target.value);
                  }}
                >
                  <MenuItem value="STANDARD">STANDARD</MenuItem>
                </StyledTextField>

                <StyledTextField
                  select
                  sx={{ width: "30%" }}
                  label="Class Category*"
                  value={categories.length ? selectedCategory : ""}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                  }}
                >
                  {categories.length ? (
                    categories.map(({ _id, name }) => {
                      return (
                        <MenuItem key={_id} value={_id}>
                          {name}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem value="">No categories</MenuItem>
                  )}
                </StyledTextField>

                <StyledTextField
                  select
                  sx={{ width: "30%" }}
                  label="Evaluation Scheme*"
                  value={
                    evaluationSchemeList.length ? selectedEvaluationScheme : ""
                  }
                  onChange={(e) => {
                    setSelectedEvaluationScheme(e.target.value);
                  }}
                >
                  {evaluationSchemeList.length ? (
                    evaluationSchemeList.map(({ _id, name }) => {
                      return (
                        <MenuItem key={_id} value={_id}>
                          {name}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem value="">No evaluations</MenuItem>
                  )}
                </StyledTextField>
              </CardRow>

              <CardRow>
                <StyledTextField
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      height: "auto",
                    },
                  }}
                  multiline
                  rows={4}
                  placeholder={"About this class"}
                  value={aboutClass}
                  onChange={(e) => {
                    setAboutClass(e.target.value);
                  }}
                ></StyledTextField>
              </CardRow>

              <CardRow>
                <AccordionContainer>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Enrolment Controls</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <CardRow sx={{ marginTop: "10px" }}>
                        <StyledTextField
                          select
                          SelectProps={{
                            multiple: true,
                            MenuProps: {
                              sx: menuSX,
                            },
                          }}
                          sx={{ width: "40%" }}
                          label="Age"
                          value={ages}
                          onChange={handleAgeSelect}
                        >
                          {ageArray.length ? (
                            ageArray.map((item) => {
                              return (
                                <MenuItem key={item} value={item}>
                                  {item}
                                </MenuItem>
                              );
                            })
                          ) : (
                            <MenuItem value="">No options</MenuItem>
                          )}
                        </StyledTextField>
                        <StyledTextField
                          select
                          SelectProps={{
                            multiple: true,
                            MenuProps: {
                              sx: menuSX,
                            },
                          }}
                          sx={{ width: "40%" }}
                          label="Gender"
                          value={genders}
                          onChange={handleGenderSelect}
                        >
                          {genderArray.length ? (
                            genderArray.map((item) => {
                              return (
                                <MenuItem key={item} value={item}>
                                  {item}
                                </MenuItem>
                              );
                            })
                          ) : (
                            <MenuItem value="">No options</MenuItem>
                          )}
                        </StyledTextField>
                      </CardRow>
                    </AccordionDetails>
                  </Accordion>
                </AccordionContainer>
              </CardRow>

              <CardRow>
                <AccordionContainer>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon id="collapse-button" />}
                      aria-controls="collapse-button"
                      id="panel1a-header"
                    >
                      <CardRow
                        sx={{
                          margin: "10px 0",
                          width: "100%",
                          padding: "0 10px 0 0",
                        }}
                        onClick={() => {}}
                      >
                        <Typography>Charges</Typography>
                        <GradientButton
                          onClick={(e) => {
                            e.stopPropagation();
                            addChargeRow();
                          }}
                        >
                          <ImgIcon alt="plus">{plusIcon}</ImgIcon>Add Charge
                        </GradientButton>
                      </CardRow>
                    </AccordionSummary>
                    {classCharges.length ? (
                      <AccordionDetails
                        sx={{
                          padding: 0,
                          backgroundColor: "rgba(219, 216, 227, 0.5)",
                        }}
                      >
                        <TableMui>
                          <TableHead>
                            <TableRow>
                              <TableCell>Charge Name</TableCell>
                              <TableCell>Amount</TableCell>
                              <TableCell>Mandatory</TableCell>
                              <TableCell>Pay Frequency</TableCell>
                              <TableCell>Action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {classCharges.map((item, index) => {
                              return (
                                <Charge
                                  key={index}
                                  data={item}
                                  index={index}
                                  setChargeData={setClassCharges}
                                  charges={classCharges}
                                />
                              );
                            })}
                          </TableBody>
                        </TableMui>
                        <CardRow
                          sx={{
                            justifyContent: "center",
                          }}
                        >
                          <StyledPagination
                            sx={{
                              "& ul": {
                                justifyContent: "center",
                                margin: "15px",
                                "& .MuiButtonBase-root": {
                                  width: 30,
                                  height: 30,
                                  backgroundColor: "#fff",
                                  borderRadius: (theme) =>
                                    theme.shape.borderRadiuses.primary,
                                },
                                "& .Mui-selected": {
                                  backgroundColor: (theme) =>
                                    theme.palette.darkIndigo.main,
                                  color: "#fff",
                                },
                              },
                            }}
                            count={5}
                            page={page}
                            onChange={handleChange}
                          />
                        </CardRow>
                      </AccordionDetails>
                    ) : null}
                  </Accordion>
                </AccordionContainer>
              </CardRow>

              <CardRow>
                <AccordionContainer>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <CardRow sx={{ width: "100%", padding: "0 10px 0 0" }}>
                        <Typography>Class Schedule</Typography>
                        <GradientButton
                          onClick={(e) => {
                            e.stopPropagation();
                            addSessionRow();
                          }}
                        >
                          <ImgIcon alt="plus">{plusIcon}</ImgIcon>Add Session
                        </GradientButton>
                      </CardRow>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: 0,
                        backgroundColor: "rgba(219, 216, 227, 0.5)",
                      }}
                    >
                      <Box sx={{ padding: "15px" }}>
                        <CardRow
                          sx={{
                            marginTop: "1%",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ width: "40%" }}>
                            <StyledTextField
                              select
                              label="term"
                              value={
                                termsOfBusiness.length ? selectedTerm._id : ""
                              }
                              variant={"filled"}
                              onChange={(e) => {
                                setSelectedTerm(
                                  termsOfBusiness.find(
                                    ({ _id }) => _id === e.target.value
                                  )
                                );
                              }}
                              sx={{ width: "100%" }}
                            >
                              {termsOfBusiness.length ? (
                                termsOfBusiness.map(({ _id, label }) => {
                                  return (
                                    <MenuItem key={label} value={_id}>
                                      {label}
                                    </MenuItem>
                                  );
                                })
                              ) : (
                                <MenuItem value="">No terms</MenuItem>
                              )}
                            </StyledTextField>
                          </Box>
                          <Box sx={{ width: "20%" }}>
                            <DatePicker
                              disabled
                              label="Start Date"
                              date={selectedTerm?.startDate}
                            />
                          </Box>
                          <Box sx={{ width: "20%" }}>
                            <DatePicker
                              disabled
                              label="End Date"
                              date={selectedTerm?.endDate}
                              sx={{ width: "100%", margin: 20 }}
                            />
                          </Box>
                        </CardRow>
                      </Box>
                      {classSessions.length ? (
                        <>
                          <CardRow>
                            <Description
                              sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                margin: "17px 0px 5px 15px",
                              }}
                            >
                              Sessions
                            </Description>
                          </CardRow>
                          {classSessions.map((session, index) => {
                            return (
                              <Session
                                key={index}
                                data={session}
                                index={index}
                                sessions={classSessions}
                                setSessionData={setClassSessions}
                              />
                            );
                          })}
                        </>
                      ) : null}
                    </AccordionDetails>
                  </Accordion>
                </AccordionContainer>
              </CardRow>

              <CardRow sx={{ justifyContent: "flex-start" }}>
                <GradientButton
                  size="large"
                  sx={{ marginRight: "1%" }}
                  onClick={() => {
                    handleAddClass(isEditMode);
                  }}
                >
                  {isEditMode ? "Edit" : "Save"}
                </GradientButton>
                <GradientButton size="large" discard onClick={handleWarn}>
                  Discard
                </GradientButton>
              </CardRow>

              <Warning
                open={isWarnOpen}
                title="Warning"
                description="Are you sure, you want to close? data will be lost!"
                handleClose={handleWarningClose}
                accept={handleClose}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddEditClassModal;
