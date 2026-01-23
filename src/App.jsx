import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

// Landing Pages
import Testing from "./pages/Landing/Testing";
// import Slide from "./pages/Landing/Slide";

// Authentication Pages
import SignUp from "./pages/Authontication/SignUp";
import ResetSucces from "./pages/Authontication/ResetSucces";
import ResetPassword from "./pages/Authontication/ResetPassword";
import EnterOtp from "./pages/Authontication/EnterOtp";
import OtpRequest from "./pages/Authontication/OtpRequest";
import ForgotPassword from "./pages/Authontication/ForgotPassword";
import Login from "./pages/Authontication/Login";
import SignupAc from "./pages/Authontication/SignupAc";

// Profile Pages
import CollaboratorProfile from "./pages/profile/CollaboratorProfile";
import CreatorProfile from "./pages/profile/CreatorProfile";

// Common Components
import Header from "./component/Header";
import ColHeader from "./component/ColHeader.jsx";

// After Sign-in Pages
import Home from "./pages/AfterSignHome/Home";
import JobCreated from "./pages/AfterSignHome/JobCreated";
import Created from "./pages/AfterSignHome/Created";

// Col-finance Components
import Overview from "./pages/ColFinance/Overview";
import Transaction from "./pages/ColFinance/Transaction.jsx";

// After Sign-in (Role based)
import RoleSection from "./pages/AfterSignIn/RoleSection";
import CreatorRoleProfile from "./pages/AfterSignIn/CreatorRoleProfile";
import CreatorRoleSucces from "./pages/AfterSignIn/CreatorRoleSucces";
import CollabretorRoleProfile from "./pages/AfterSignIn/CollabretorRoleProfile";
import CollabretorRoleSucces from "./pages/AfterSignIn/CollabretorRoleSucces";
import CreatorEditProfile from "./pages/AfterSignHome/CreatorEditProfile";

import Finder from "./pages/Finder/Finder";
import UserList from "./pages/Finder/UserList";
import FinderProfile from "./pages/Finder/FinderProfile";
import Profile from "./pages/Finder/Profile";

import ColHome from "./pages/AfterSignCol/ColHome";
import Subscription from "./pages/Subscription/Subscription";

import CreatorSucces from "./pages/profile/CreatorSucces";
import CollaboratorSucces from "./pages/profile/CollaboratorSucces";

// Financial Components
import ChoosePayment from "./pages/Financials/ChoosePayment";

// Admin Components
import Dashboard from "./pages/Admin/Dashboard";
import User from "./pages/Admin/User";
import AdminSubscription from "./pages/Admin/AdminSubscription";

// ColabratorWork Components
import MyJobs from "./pages/ColabratorWork/MyJobs";
import Allcontacts from "./pages/ColabratorWork/Allcontacts";

// ColabratorView Components
import UX from "./pages/ColabratorView/UX";
import Proposal from "./pages/colabratorview/Proposal";
import UploadUX from "./pages/ColabratorView/UploadUX";
import Message from "./pages/ColabratorView/Message";
import CollabrationHome from "./pages/ColabratorView/CollabrationHome";
import CollabrationFilter from "./pages/ColabratorView/CollabrationFilter";
import CollabrationSaved from "./pages/ColabratorView/CollabrationSaved";
import CollabrationRecent from "./pages/ColabratorView/CollabrationRecent";

// MyProject Components
import ActiveContracts from "./pages/MyProject/ActiveContracts";
import EditWork from "./pages/MyProject/EditWork";  
import AwatingContracts from "./pages/MyProject/AwatingContracts";
import PendingContracts from "./pages/MyProject/PendingContracts";
import CompletedContracts from "./pages/MyProject/CompletedContracts";
import ProposalsPage from "./pages/MyProject/ProposalsPage";
import Hiredfreelancers from "./pages/MyProject/Hiredfreelancers";
import MyProjectmessage from "./pages/MyProject/myprojectmessage.jsx";
import Pending from "./pages/MyProject/pending.jsx";

import CreatorviewProfile from "./pages/ColabProfile/CreatorviewProfile";

export default function App() {
  return (
    <Router>
      {/* Global Toast */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Uncomment if header is global */}
      {/* <Header /> */}

      <Routes>
        {/* Landing */}
        <Route path="/" element={<Testing />} />

        {/* After Sign-in */}
        <Route path="/home" element={<Home />} />
        <Route path="/job-created" element={<JobCreated />} />
        <Route path="/created" element={<Created />} />
        <Route path="/creator-edit-profile" element={<CreatorEditProfile />} />

        {/* Col-Finance */}
        <Route path="/finance-overview" element={<Overview />} />
        <Route path="/transaction" element={<Transaction />} />

        {/* Role Flow */}
        <Route path="/role-section" element={<RoleSection />} />
        <Route path="/creator-role-profile" element={<CreatorRoleProfile />} />
        <Route path="/creator-role-success" element={<CreatorRoleSucces />} />
        {/* Collaborator Role Flow */}
        <Route
          path="/collaborator-role-profile"
          element={<CollabretorRoleProfile />}
        />
        <Route
          path="/collaborator-role-success"
          element={<CollabretorRoleSucces />}
        />

        

        <Route path="/creator-success" element={<CreatorSucces />} />

        <Route path="/collaborator-success" element={<CollaboratorSucces />} />

        <Route path="/finder" element={<Finder />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/finder-profile" element={<FinderProfile />} />
        <Route path="/pro-file" element={<Profile />} />

        {/* collaberator */}
        <Route path="/col-home" element={<ColHome />} />

        {/* subscription */}

        <Route path="/subscription" element={<Subscription />} />

        {/* Authentication */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupac" element={<SignupAc />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-request" element={<OtpRequest />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-succes" element={<ResetSucces />} />

        {/* Profiles */}
        <Route path="/collaborator-profile" element={<CollaboratorProfile />} />
        <Route path="/creator-profile" element={<CreatorProfile />} />

        {/* Financial Pages */}
        <Route path="/choose-payment" element={<ChoosePayment />} />

        {/* Admin Pages */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/subscription" element={<AdminSubscription />} />

        {/* ColabratorWork Pages */}
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/all-contacts" element={<Allcontacts />} />

        {/* ColabratorView Pages */}
        <Route path="/ux" element={<UX />} />
        <Route path="/Uploadux" element={<UploadUX />} />
        <Route path="/Proposal" element={<Proposal />} />
        <Route path="/message" element={<Message />} />
        <Route path="/collabration" element={<CollabrationHome />} />
        <Route path="/collabration-filter" element={<CollabrationFilter />} />
        <Route path="/collabration-recent" element={<CollabrationRecent />} />
        <Route path="/collabration-saved" element={<CollabrationSaved />} />

          {/* My Project Pages */}
        <Route path="/activecontracts" element={<ActiveContracts />} />
        <Route path="/editwork" element={<EditWork />} />
        <Route path="/watingcontracts" element={<AwatingContracts />} />
        <Route path="/pendingcontracts" element={<PendingContracts />} />
        <Route path="/completedcontracts" element={<CompletedContracts />} />
        <Route path="/proposalspage" element={<ProposalsPage />} />
<Route path="/hiredfreelancers" element={<Hiredfreelancers />} />
<Route path="/myprojectmessage" element={<MyProjectmessage />} />
<Route path="/pending" element={<Pending />} />

{/* ColabratorProfile Pages */}
<Route path="/CreatorviewProfile" element={<CreatorviewProfile />} />

        {/* Header Preview */}
        <Route path="/header" element={<Header />} />
        <Route path="/colheader" element={<ColHeader />} />

        {/* 404 */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}
