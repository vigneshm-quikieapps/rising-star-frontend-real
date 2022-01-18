import React, { useEffect, useState, useMemo, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Box,
  Typography,
  MenuItem,
  CircularProgress,
  AccordionSummary,
  AccordionDetails,
  Modal,
  Dialog,
  DialogContent,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Card, HeadingText, SubHeadingText } from "../../components/common";
import {
  IconButton,
  ImgIcon,
  Grid,
  Accordion,
  GradientButton,
  DatePicker,
  Button,
  Warning,
} from "../../components";
import { TextField, Output } from "../../components/index";
import { backIcon } from "../../assets/icons";
import { getMemberEnrolmentList } from "../../redux/action/memberAction";
import { getClassSessionsByTermId } from "../../redux/action/sessionAction";
import toPascal from "../../utils/to-pascal";
import ClassList from "./components/class-lst";
import SessionList from "./components/session-list";
import { useGetEnrolment } from "../../services/queries";
import { useSetError } from "../../contexts/error-context";
import { regularEnrollment } from "../../services/enrolmentServices";
import { useAddEnrolment } from "../../services/mutations";
import DialogBox from "../../components/dialog";

const AddEnrolment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const member = useSelector((state) => state.members.currentMember || {});
  const businessList = useSelector((state) => state.businesses.businessList);
  const enrolmentList = useSelector((state) => state.members.enrolmentList);
  const sessionList = useSelector(
    (state) => state.sessions.sessionsOfClassInTerm,
  );
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [selectedClassName, setSelectedClassName] = useState("");
  const [selectedSessionName, setSelectedSessionName] = useState("");
  const [selectedTermSDate, setSelectedTermSDate] = useState("");
  const [selectedTermEDate, setSelectedTermEDate] = useState("");
  const [selectedTermName, setSelectedTermName] = useState("");
  const [selectedTimings, setSelectedTimings] = useState("");
  const [selectedEnrolment, setSelectedEnrolment] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [showClassList, setShowClassList] = useState(false);
  const [showSessionList, setShowSessionList] = useState(false);
  const setError = useSetError();
  const [isWarnDiscardOpen, setIsWarnDiscardOpen] = useState(false);
  const [onSubmitEnrolmentOpen, setOnSubmitEnrolmentOpen] = useState(false);
  const [ddata, setData] = useState("");
  const memID = member._id;
  const [enrolmentMessage, setEnrolmentMessage] = useState("");
  const isSaving = useRef(false);

  const clubMembershipId = useMemo(() => {
    const list = member?.membership;
    const membership = list?.find(
      (mShip) => mShip.businessId === selectedBusiness,
    );
    return membership?.clubMembershipId || "";
  }, [member, selectedBusiness]);

  const { data, isLoading } = useGetEnrolment(selectedSession, {
    refetchOnWindowFocus: false,
    onError: (error) => {
      setError(error);
    },
  });
  const { mutateAsync: addEnrolment } = useAddEnrolment({
    onSuccess: async (data) => {
      setEnrolmentMessage(data.data.message); // the response
    },
    onError: async (error) => setError(error),
  });

  useEffect(() => {
    businessList.length && setSelectedBusiness(businessList[0]._id);
  }, [businessList]);

  useEffect(() => {
    member?._id &&
      selectedBusiness &&
      dispatch(
        getMemberEnrolmentList({
          memberId: member._id,
          businessId: selectedBusiness,
        }),
      );
  }, [dispatch, member, selectedBusiness]);
  const businessChangeHandler = (e) => setSelectedBusiness(e.target.value);

  const currentEnrolment = useMemo(
    () =>
      data?.enrolment || {
        class: { name: "", charges: [] },
        session: { name: "", pattern: [], term: { label: "" } },
      },
    [data],
  );
  const {
    class: { name: className, charges: classCharges },
    session: {
      name: sessionName,
      pattern,
      term: { label: termName },
    },
    enrolledStatus: status,
    startDate,
  } = currentEnrolment;
  const timings = useMemo(() => {
    if (!pattern.length) return " - - - ";
    const days = pattern.map(({ day }) => day).join(", ");
    const startTime = new Date(pattern[0].startTime).toLocaleTimeString();
    const endTime = new Date(pattern[0].endTime).toLocaleTimeString();
    return `${toPascal(days)}, ${startTime} to ${endTime}`.replace(
      /:00 /g,
      " ",
    );
  }, [pattern]);

  const calcDate = (date) =>
    date ? new Date(date).toLocaleDateString() : " - - - ";

  const enrolmentDate = calcDate(currentEnrolment?.registeredDate);
  // const startDate = calcDate(currentEnrolment?.startDate);
  const lastActionDate = calcDate(currentEnrolment?.updatedAt);

  const ClassSelectHandler = (id, name) => {
    setShowClassList(false);
    setSelectedEnrolment(id);
    setSelectedClassName(name);
    // localStorage.setItem("Id", selectedEnrolment);
  };
  const SessionSelectHandler = (
    id,
    name,
    termStartDate,
    termEndDate,
    termName,
    timings,
  ) => {
    setShowSessionList(false);
    setSelectedSession(id);
    setSelectedSessionName(name);
    setSelectedTermSDate(termStartDate);
    setSelectedTermEDate(termEndDate);
    setSelectedTermName(termName);
    setSelectedTimings(timings);
  };

  const submitEnrolment = async () => {
    // regularEnrollment(selectedSession, member._id);
    setOnSubmitEnrolmentOpen(true);
    let body = {
      sessionId: selectedSession,
      memberId: member._id,
    };
    await addEnrolment(body);
  };
  // const handleSubmitEnrolmentYes = () => {
  //   regularEnrollment(selectedSession, member._id);
  //   setOnSubmitEnrolmentOpen(false);
  //   history.push(`/members/enrolments/${memID}`);
  // };

  // const handleSubmitEnrolmentNo = () => {
  //   isSaving.current = false;
  //   setOnSubmitEnrolmentOpen(false);
  // };

  const handleDiscardEnrolmentYes = () => {
    setIsWarnDiscardOpen(false);
    history.push(`/members/enrolments/${memID}`);
  };

  const handleDiscardEnrolmentNo = () => {
    isSaving.current = false;
    setIsWarnDiscardOpen(false);
  };
  const handleDiscardEnrolmentWarn = () => {
    isSaving.current = false;
    setIsWarnDiscardOpen(true);
  };
  if (!member)
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 153px)",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
        <IconButton
          onClick={() => history.push(`/members/enrolments/${memID}`)}
        >
          <ImgIcon>{backIcon}</ImgIcon>
        </IconButton>
        <Typography
          variant="h3"
          sx={{ fontSize: "20px", fontWeight: "bold", ml: 1 }}
        >
          Add a new enrolment
        </Typography>
      </Box>
      <Card>
        <HeadingText>{member.name}</HeadingText>
        <SubHeadingText>Student/Member</SubHeadingText>
        <Grid>
          <TextField
            select
            variant="filled"
            label="Business Name"
            value={selectedBusiness}
            onChange={businessChangeHandler}
          >
            {businessList
              .filter(({ _id }) =>
                member?.membership?.some(
                  ({ businessId }) => businessId === _id,
                ),
              )
              .map(({ _id, name }) => {
                localStorage.setItem("BusinessName", name);
                return (
                  <MenuItem key={_id} value={_id}>
                    {name}
                  </MenuItem>
                );
              })}
          </TextField>
          <Box />
          <Output
            title="Club Membership Number"
            description={clubMembershipId}
          />
        </Grid>
      </Card>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography variant="h2" sx={{ fontSize: "20px", flex: 1 }}>
              Enrolment Details
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid sx={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <GradientButton
              active
              sx={{ mr: 2 }}
              onClick={() => setShowClassList(true)}
            >
              Search for a Class
            </GradientButton>
            {/* <Output title="Class Name" description={className} /> */}
            <Output title="Class Name" description={selectedClassName} />
            <Output />
            <GradientButton
              active
              sx={{ mr: 2 }}
              onClick={() => setShowSessionList(true)}
            >
              Search for a Session
            </GradientButton>
            {/* <Output title="Session Name" description={sessionName} /> */}
            <Output title="Session Name" description={selectedSessionName} />
            <Output title="Timings" description={selectedTimings} />
            <Output />
            {/* <Output
              title="Term Start Date"
              description={calcDate(currentEnrolment?.session?.term?.startDate)}
            /> */}
            <Output
              title="Term Start Date"
              description={calcDate(selectedTermSDate)}
            />
            {/* <Output
              title="Term End Date"
              description={calcDate(currentEnrolment?.session?.term?.endDate)}
            /> */}
            <Output
              title="Term End Date"
              description={calcDate(selectedTermEDate)}
            />
            <Output />
            {/* <Output title="Term" description={termName} /> */}
            <Output title="Term" description={selectedTermName} />

            <Output
              title="Member Start Date"
              description={
                startDate ? new Date(startDate).toLocaleDateString() : " - - - "
              }
            />
          </Grid>
        </AccordionDetails>
      </Accordion>
      <ClassList
        open={showClassList}
        onClose={() => setShowClassList(false)}
        onSelect={ClassSelectHandler}
        memberId={member?._id}
        businessId={selectedBusiness}
        memberName={member?.name}
      />
      <SessionList
        open={showSessionList}
        classId={selectedEnrolment}
        onClose={() => setShowSessionList(false)}
        onSelect={SessionSelectHandler}
        memberId={member?._id}
        businessId={selectedBusiness}
        memberName={member?.name}
      />
      <GradientButton onClick={submitEnrolment}>
        Submit for Enrolment
      </GradientButton>
      <Button sx={{ ml: 2 }} onClick={handleDiscardEnrolmentWarn}>
        Discard
      </Button>
      <Warning
        open={isWarnDiscardOpen}
        title="Warning"
        description={
          isSaving.current
            ? "Are you sure, you want to save? There are unsaved sessions!"
            : "Are you sure, you want to discard the changes?"
        }
        onNo={handleDiscardEnrolmentNo}
        onYes={handleDiscardEnrolmentYes}
      />
      <DialogBox>
        <Dialog open={onSubmitEnrolmentOpen}>
          <DialogContent>{enrolmentMessage}</DialogContent>
        </Dialog>
      </DialogBox>
    </>
  );
};

export default AddEnrolment;
