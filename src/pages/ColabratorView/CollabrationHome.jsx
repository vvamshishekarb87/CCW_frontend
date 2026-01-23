import React, { useEffect, useState } from "react";
import bgImage from "../../assets/Mywork/hero-bg.png";

import text1 from "../../assets/collabration/text1.png";
import flag from "../../assets/collabration/flag9.png";

import yellowcircle from "../../assets/collabration/yellowcircle.png";
import arrow from "../../assets/collabration/arrow.png";
import honeycomb from "../../assets/collabration/honeycomb.png";

import Footer from "../../component/Footer";
import Header from "../../component/Header";

import { Link, useLocation } from "react-router-dom";




import CollabrationSaved from "./CollabrationSaved";
import CollabrationRecent from "./CollabrationRecent";




const CollabrationHome = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("recent");



  return (
    <div className="w-full">
       {/* content */}
    

<div className="
  fixed top-0 left-0 w-full z-50
  bg-white/10
  backdrop-blur-md
  border-b border-white/10
">
  <Header />
</div>




{/* HERO */}
<div
  className="w-full min-h-[92vh] flex items-center justify-center pt-[64px]"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>


        <div className="flex flex-col items-center px-4">

          {/* ONLY IMAGE TEXT */}
          <img
            src={text1}
            alt="Hero Text"
            className="mb-10 w-full max-w-[420px]"
          />



{/* SEARCH BAR */}
<div
  className="
    w-full sm:w-[890px]
    max-w-[890px]
    h-[44px] sm:h-[48px]
    flex items-center
    bg-white
    border border-[#6D3BC1]
    rounded-[10px]
    overflow-hidden
    mx-auto
  "
>
  {/* INPUT */}
  <input
    type="text"
    placeholder="Search Jobs"
    className="
      flex-1
      h-full
      px-4 sm:px-6
      text-[14px] sm:text-[15px]
      text-gray-600
      outline-none
      bg-transparent
      placeholder:text-gray-400
    "
  />

  {/* SEARCH BUTTON */}
  <button
    className="
      h-full
      px-4 sm:px-8
      text-[13px] sm:text-[15px]
      font-medium
      text-white
      bg-gradient-to-br from-[#4B1D8C] to-[#2B0A4F]
      rounded-r-[10px]
      flex items-center justify-center gap-2
      shrink-0
    "
  >
    {/* SEARCH ICON */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
      />
    </svg>

    {/* SEARCH TEXT — NOW VISIBLE ON MOBILE */}
    <span>Search</span>
  </button>
</div>




        </div>
      </div>

    

{/* ================= JOBS SECTION ================= */}
<div className="bg-[#f8f9fc] py-10">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">

    {/* ================= LEFT ================= */}
<div className="lg:col-span-2 flex flex-col order-2 lg:order-1">


      {/* TITLE */}
      <h2 className="text-[20px] font-semibold text-[#2b1c1c] mb-6">
        Jobs you might like
      </h2>

      {/* ================= TABS ================= */}
      <div className="relative mb-8">

{/* TAB LABELS */}
<div className="flex gap-16 text-[15px] relative">

  {/* BEST MATCH */}
<span
  onClick={() => {
    setActiveTab("best");
  }}
  className={`
    cursor-pointer relative pb-3 font-semibold
    ${activeTab === "best"
      ? "text-[#2b1c1c]"
      : "text-gray-400 hover:text-gray-600"}
  `}
>

    Best match
    {activeTab === "best" && (
      <span
        className="
          absolute left-0 -bottom-[6px]
          h-[3px] w-full
          bg-red-500
          rounded-full
          z-10
        "
      />
    )}
  </span>

  {/* RECENT */}
 <span
  onClick={() => {
    setActiveTab("recent");
  }}
  className={`
    cursor-pointer relative pb-3 font-semibold
    ${activeTab === "recent"
      ? "text-[#2b1c1c]"
      : "text-gray-400 hover:text-gray-600"}
  `}
>

    Recent
    {activeTab === "recent" && (
      <span
        className="
          absolute left-0 -bottom-[6px]
          h-[3px] w-full
          bg-red-500
          rounded-full
          z-10
        "
      />
    )}
  </span>

  {/* SAVED */}
  <span
    onClick={() => setActiveTab("saved")}
    className={`
      cursor-pointer relative pb-3 font-semibold
      ${activeTab === "saved"
        ? "text-[#2b1c1c]"
        : "text-gray-400 hover:text-gray-600"}
    `}
  >
    Saved
    {activeTab === "saved" && (
      <span
        className="
          absolute left-0 -bottom-[6px]
          h-[3px] w-full
          bg-red-500
          rounded-full
          z-10
        "
      />
    )}
  </span>
</div>

{/* BASE DIVIDER (GREY LINE) */}
<div className="mt-1 h-[2px] bg-gray-200 w-full relative z-0" />

      </div>



    <div
  className={`
    flex-1 flex flex-col
    ${activeTab === "recent"
  ? "px-6 py-2"
  : "bg-white rounded-xl shadow-sm p-6"}
  `}
>

 {/* RECENT TAB CONTENT */}
  {activeTab === "recent" && <CollabrationRecent />}


 {activeTab !== "recent" &&
  Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      className={`${i !== 0 ? "pt-6 border-t border-gray-200" : ""}`}
    >


      
{/* ================= FIRST CARD ================= */}
{i === 0 && (
  <>
    {/* CARD */}
    <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-6">

      {/* LEFT CONTENT */}
      <div className="flex-1 min-w-0 w-full">

        {/* TITLE + ICONS (INLINE ON MOBILE) */}
        <div className="flex items-start justify-between gap-3 md:block">
          {/* TITLE */}
          <h3 className="font-semibold text-[17px] mb-2 md:mb-2">
            UI / UX Designer
          </h3>

          {/* ICONS — INLINE WITH TITLE ON MOBILE */}
          {activeTab === "saved" && (
            <div className="flex items-center gap-3 md:hidden">
              {/* Heart */}
              <div className="flex items-center justify-center w-9 h-9 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF5252">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Like */}
              <div className="flex items-center justify-center w-9 h-9 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 10V20 M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5 C21 9 21.5 10.5 21.5 11.5 L20 18.5C19.5 20 18.5 21 17 21H7 M7 10H4C3 10 2 11 2 12V18 C2 19 3 20 4 20H7"
                    stroke="#808080"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* META */}
        <p className="text-[14px] text-gray-500 mb-2">
          Fixed-price · Intermediate · Est. Budget $2,000 · Posted 8 hours ago
        </p>

        {/* DESCRIPTION */}
        <p className="text-[16px] text-gray-600 mb-4 leading-relaxed">
          Hi, “This post is to search for UI / UX Designer”! I am looking for someone
          who has good experience in designing platforms for formative years. We have
          a set of 100s of worksheets and designing for creating website and other the
          attached image as reference for style and structure, not an exact layout to
          copy. The final design should look modern, clean, and premium.
          <span className="text-[#4B1D8C] font-medium cursor-pointer ml-1">
            more
          </span>
        </p>

        {/* FOOTER */}
        <div className="flex items-center gap-x-5 gap-y-2 text-[14px] text-gray-500 flex-wrap">
          <span className="text-[#4B1D8C] font-medium">$ Fixed Rate</span>
          <span className="text-[#4B1D8C]">★★★★☆</span>
          <span>4/5 (12 Reviews)</span>

          <div className="flex items-center gap-2">
            <img
              src={flag}
              alt="USA"
              className="w-[18px] h-[12px] rounded-[4px] object-cover"
            />
            <span>Manhattan, USA</span>
          </div>
        </div>
      </div>

      {/* DESKTOP ICONS (UNCHANGED) */}
      {activeTab === "saved" && (
        <div className="hidden md:flex flex-row items-center gap-[20px] h-[46px] flex-shrink-0">
          {/* Heart */}
          <div className="flex items-center justify-center w-10 h-10 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF5252">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Like */}
          <div className="flex items-center justify-center w-10 h-10 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 10V20 M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5 C21 9 21.5 10.5 21.5 11.5 L20 18.5C19.5 20 18.5 21 17 21H7 M7 10H4C3 10 2 11 2 12V18 C2 19 3 20 4 20H7"
                stroke="#808080"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>

    {/* DIVIDER */}
    {activeTab === "saved" && (
      <div className="w-full h-[1px] bg-gray-200 my-6" />
    )}
  </>
)}

{/* ================= SECOND CARD ================= */}
{i === 1 && (
  <>
    {/* CARD 2 */}
    <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-6">

      {/* LEFT CONTENT */}
      <div className="flex-1 min-w-0 w-full">

        {/* TITLE + ICONS INLINE (MOBILE) */}
        <div className="flex items-start justify-between gap-3 md:block">
          <h3 className="font-semibold text-[17px] mb-2">
            UI designer
          </h3>

          {/* ICONS — MOBILE INLINE */}
          {activeTab === "saved" && (
            <div className="flex items-center gap-3 md:hidden">
              {/* Heart */}
              <div className="flex items-center justify-center w-9 h-9 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF5252">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                  C13.09 3.81 14.76 3 16.5 3
                  19.58 3 22 5.42 22 8.5
                  c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Like */}
              <div className="flex items-center justify-center w-9 h-9 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 10V20
                       M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5
                       C21 9 21.5 10.5 21.5 11.5
                       L20 18.5C19.5 20 18.5 21 17 21H7
                       M7 10H4C3 10 2 11 2 12V18
                       C2 19 3 20 4 20H7"
                    stroke="#808080"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* META */}
        <p className="text-[14px] text-gray-500 mb-3">
          Fixed-price · Intermediate · Est. Budget $2,000 · Posted 8 hours ago
        </p>

        {/* DESCRIPTION — UNCHANGED */}
        <p className="text-[16px] text-gray-600 mb-5 leading-relaxed">
          We are looking for a talented Web UX/UI Designer to design the core pages and
          visual system for a new online learning platform. You will be responsible for
          creating a polished, modern, responsive design in Figma that can be
          implemented inside Thinkific by our development team.
          <span className="text-[#4B1D8C] font-medium cursor-pointer ml-1">
            more
          </span>
        </p>

        {/* FOOTER */}
        <div className="flex items-center gap-6 text-[15px] text-gray-500 flex-wrap">
          <span className="text-[#4B1D8C] font-medium">$ Fixed Rate</span>
          <span className="text-[#4B1D8C]">★★★★☆</span>
          <span>4/5 (12 Reviews)</span>

          <div className="flex items-center gap-2">
            <img
              src={flag}
              alt="USA"
              className="w-[18px] h-[12px] rounded-[4px] object-cover"
            />
            <span>Manhattan, USA</span>
          </div>
        </div>
      </div>

      {/* DESKTOP ICONS — UNCHANGED */}
      {activeTab === "saved" && (
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {/* Heart */}
          <div className="flex items-center justify-center w-10 h-10 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF5252">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
              2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
              C13.09 3.81 14.76 3 16.5 3
              19.58 3 22 5.42 22 8.5
              c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Like */}
          <div className="flex items-center justify-center w-10 h-10 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 10V20
                   M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5
                   C21 9 21.5 10.5 21.5 11.5
                   L20 18.5C19.5 20 18.5 21 17 21H7
                   M7 10H4C3 10 2 11 2 12V18
                   C2 19 3 20 4 20H7"
                stroke="#808080"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>

    {/* DIVIDER */}
    {activeTab === "saved" && (
      <div className="w-full h-[1px] bg-gray-200 my-6" />
    )}
  </>
)}



{/* ================= THIRD CARD ================= */}
{i === 2 && (
  <>
    <div
      className={`
        ${activeTab === "saved" ? "hidden md:flex" : "flex"}
        flex-col md:flex-row md:justify-between items-start gap-4 md:gap-6
      `}
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 min-w-0 w-full">

        {/* TITLE + ICONS INLINE (MOBILE) */}
        <div className="flex items-start justify-between gap-3 md:block">
          <h3 className="font-semibold text-[16px] mb-1">
            Ux Designer
          </h3>

          {/* ICONS — MOBILE INLINE */}
          {activeTab === "saved" && (
            <div className="flex items-center gap-3 md:hidden">
              {/* Heart */}
              <div className="flex items-center justify-center w-9 h-9 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF5252">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                  C13.09 3.81 14.76 3 16.5 3
                  19.58 3 22 5.42 22 8.5
                  c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Like */}
              <div className="flex items-center justify-center w-9 h-9 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 10V20
                       M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5
                       C21 9 21.5 10.5 21.5 11.5
                       L20 18.5C19.5 20 18.5 21 17 21H7
                       M7 10H4C3 10 2 11 2 12V18
                       C2 19 3 20 4 20H7"
                    stroke="#808080"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* META */}
        <p className="text-[14px] text-gray-500 mb-2">
          Hourly-rate · Intermediate · Est. Budget $2,000 · Posted 8 hours ago
        </p>

        {/* DESCRIPTION */}
        <p className="text-[16px] text-gray-600 mb-4 leading-relaxed">
          This role is ideal for a designer who understands how learning platforms
          work, has strong UX instincts, and can translate business goals into
          intuitive, elegant interfaces. Design the visual identity and UI system
          for a learning-focused website, covering color palette, typography,
          components, spacing, iconography.
          <span className="text-[#4B1D8C] font-medium cursor-pointer ml-1">
            more
          </span>
        </p>

        {/* FOOTER */}
        <div className="flex items-center gap-5 text-[14px] text-gray-500 flex-wrap">
          <span className="text-[#4B1D8C] font-medium">$ Hourly Rate</span>
          <span className="text-[#4B1D8C]">★★★★☆</span>
          <span>4/5 (12 Reviews)</span>

          <div className="flex items-center gap-2">
            <img
              src={flag}
              alt="USA"
              className="w-[18px] h-[12px] rounded-[4px] object-cover"
            />
            <span>Manhattan, USA</span>
          </div>
        </div>
      </div>

      {/* DESKTOP ICONS — UNCHANGED */}
      {activeTab === "saved" && (
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {/* Heart */}
          <div className="flex items-center justify-center w-10 h-10 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF5252">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
              2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
              C13.09 3.81 14.76 3 16.5 3
              19.58 3 22 5.42 22 8.5
              c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Like */}
          <div className="flex items-center justify-center w-10 h-10 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 10V20
                   M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5
                   C21 9 21.5 10.5 21.5 11.5
                   L20 18.5C19.5 20 18.5 21 17 21H7
                   M7 10H4C3 10 2 11 2 12V18
                   C2 19 3 20 4 20H7"
                stroke="#808080"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>

    {/* DIVIDER */}
    {activeTab === "saved" && (
      <div className="hidden md:block w-full h-[1px] bg-gray-200 my-6" />
    )}
  </>
)}


{i === 3 && (
  <>
    {/* CARD 4 */}
    <div className="hidden md:flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-6">


      {/* LEFT CONTENT */}
      <div className="flex-1 min-w-0 w-full">

        {/* TITLE + ICONS INLINE (MOBILE) */}
        <div className="flex items-start justify-between gap-3 md:block">
          <h3 className="font-semibold text-[16px] mb-1">
            UI / UX designer Needed for SaaS Platform Dashboard
          </h3>

          {/* ICONS — MOBILE INLINE */}
          {activeTab === "saved" && (
            <div className="flex items-center gap-3 md:hidden">
              {/* Heart */}
              <div className="flex items-center justify-center w-9 h-9 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF5252">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                  C13.09 3.81 14.76 3 16.5 3
                  19.58 3 22 5.42 22 8.5
                  c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Like */}
              <div className="flex items-center justify-center w-9 h-9 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 10V20
                       M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5
                       C21 9 21.5 10.5 21.5 11.5
                       L20 18.5C19.5 20 18.5 21 17 21H7
                       M7 10H4C3 10 2 11 2 12V18
                       C2 19 3 20 4 20H7"
                    stroke="#808080"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* META */}
        <p className="text-[14px] text-gray-500 mb-2">
          Hourly-rate · Intermediate · Est. Budget $2,000 · Posted 8 hours ago
        </p>

        {/* DESCRIPTION — UNCHANGED */}
        <p className="text-[16px] text-gray-600 mb-4 leading-relaxed">
          We are seeking a talented UX/UI Designer to join our team for our SaaS
          platform. The ideal candidate will focus on designing user-friendly
          dashboards and customer-facing screens. This role requires approximately
          7–20 hours per week and is perfect for someone who can enhance our
          platform’s usability and visual appeal.
          <span className="text-[#4B1D8C] font-medium cursor-pointer ml-1">
            more
          </span>
        </p>

        {/* FOOTER */}
        <div className="flex items-center gap-5 text-[14px] text-gray-500 flex-wrap">
          <span className="text-[#4B1D8C] font-medium">$ Hourly Rate</span>
          <span className="text-[#4B1D8C]">★★★★☆</span>
          <span>4/5 (12 Reviews)</span>

          <div className="flex items-center gap-2">
            <img
              src={flag}
              alt="USA"
              className="w-[18px] h-[12px] rounded-[4px] object-cover"
            />
            <span>Manhattan, USA</span>
          </div>
        </div>
      </div>

      {/* DESKTOP ICONS — UNCHANGED */}
      {activeTab === "saved" && (
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {/* Heart */}
          <div className="flex items-center justify-center w-10 h-10 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF5252">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
              2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
              C13.09 3.81 14.76 3 16.5 3
              19.58 3 22 5.42 22 8.5
              c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Like */}
          <div className="flex items-center justify-center w-10 h-10 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 10V20
                   M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5
                   C21 9 21.5 10.5 21.5 11.5
                   L20 18.5C19.5 20 18.5 21 17 21H7
                   M7 10H4C3 10 2 11 2 12V18
                   C2 19 3 20 4 20H7"
                stroke="#808080"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>

    {/* DIVIDER */}
    {activeTab === "saved" && (
      <div className="w-full h-[1px] bg-gray-200 my-6" />
    )}
  </>
)}


{/* ================= FIFTH CARD ================= */}
{i === 4 && (
  <div className="hidden md:flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-6">


    {/* LEFT CONTENT */}
    <div className="flex-1 min-w-0 w-full">

      {/* TITLE + ICONS INLINE (MOBILE) */}
      <div className="flex items-start justify-between gap-3 md:block">
        <h3 className="font-semibold text-[16px] mb-1">
          UI / UX Designer
        </h3>

        {/* ICONS — MOBILE INLINE */}
        {activeTab === "saved" && (
          <div className="flex items-center gap-3 md:hidden">
            {/* Heart */}
            <div className="flex items-center justify-center w-9 h-9 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF5252">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                C13.09 3.81 14.76 3 16.5 3
                19.58 3 22 5.42 22 8.5
                c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Like */}
            <div className="flex items-center justify-center w-9 h-9 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 10V20
                     M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5
                     C21 9 21.5 10.5 21.5 11.5
                     L20 18.5C19.5 20 18.5 21 17 21H7
                     M7 10H4C3 10 2 11 2 12V18
                     C2 19 3 20 4 20H7"
                  stroke="#808080"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* META */}
      <p className="text-[14px] text-gray-500 mb-2">
        Hourly-rate · Intermediate · Est. Budget $2,000 · Posted 8 hours ago
      </p>

      {/* DESCRIPTION — UNCHANGED */}
      <p className="text-[16px] text-gray-600 mb-4 leading-relaxed">
        We are looking for a skilled UX/UI Designer who can help improve usability
        and refine visual consistency across our product. The ideal candidate will
        be able to identify UX gaps, enhance workflows, and deliver intuitive user
        experiences for our growing platform.
        <span className="text-[#4B1D8C] font-medium cursor-pointer ml-1">
          more
        </span>
      </p>

      {/* FOOTER */}
      <div className="flex items-center gap-5 text-[14px] text-gray-500 flex-wrap">
        <span className="text-[#4B1D8C] font-medium">$ Hourly Rate</span>
        <span className="text-[#4B1D8C]">★★★★☆</span>
        <span>4/5 (12 Reviews)</span>

        <div className="flex items-center gap-2">
          <img
            src={flag}
            alt="USA"
            className="w-[18px] h-[12px] rounded-[4px] object-cover"
          />
          <span>Manhattan, USA</span>
        </div>
      </div>
    </div>

    {/* DESKTOP ICONS — UNCHANGED */}
    {activeTab === "saved" && (
      <div className="hidden md:flex items-center gap-3 flex-shrink-0">
        {/* Heart */}
        <div className="flex items-center justify-center w-10 h-10 bg-[#E8E8E8] border-[3px] border-[#808080] rounded-full shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF5252">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
            2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
            C13.09 3.81 14.76 3 16.5 3
            19.58 3 22 5.42 22 8.5
            c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Like */}
        <div className="flex items-center justify-center w-10 h-10 bg-white border-[3px] border-[#808080] rounded-full shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 10V20
                 M7 10L10.5 3C11.5 3 12.5 4 12.5 6V9H19.5
                 C21 9 21.5 10.5 21.5 11.5
                 L20 18.5C19.5 20 18.5 21 17 21H7
                 M7 10H4C3 10 2 11 2 12V18
                 C2 19 3 20 4 20H7"
              stroke="#808080"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    )}
  </div>
)}




    </div>
  ))}

</div>


    </div>

    {/* RIGHT SIDEBAR */}
<div className="space-y-6 order-1 lg:order-2">



  <div
    className="
      bg-white rounded-2xl shadow-md px-8 py-7 text-center
      order-1 sm:order-3
    "
  >
    <h3 className="text-2xl font-semibold text-[#2b1c1c] mb-1">
      Pradeep
    </h3>

    <p className="text-sm text-gray-500 mb-8">
      UI/UX designer
    </p>

    <h4 className="text-left text-lg font-semibold text-[#2b1c1c] mb-4">
      Set up your account
    </h4>

    <div className="w-full h-[8px] bg-gray-200 rounded-full overflow-hidden">
      <div className="h-full w-[75%] bg-[#4B1D8C] rounded-full" />
    </div>

    <p className="text-right mt-2 text-lg font-semibold text-[#2b1c1c]">
      75%
    </p>

    <button
      className="
        w-full mt-6 py-3 rounded-full
        border-2 border-[#4B1D8C]
        ring-1 ring-[#4B1D8C]/40
        text-[#4B1D8C] font-semibold text-base
        bg-transparent
        hover:bg-[#4B1D8C]/5
        hover:ring-[#4B1D8C]
        transition
      "
    >
      Complete your profile
    </button>

    <p className="hidden sm:block mt-6 text-sm text-gray-500 italic leading-relaxed">
      100% completion of your profile will help
      <br />
      you get more reach.
    </p>
  </div>





<div className="hidden sm:block bg-white rounded-2xl shadow-md px-6 py-6">

  {/* TITLE */}
  <h4 className="text-xl font-semibold text-[#2b1c1c] mb-4">
    Verification
  </h4>

  {/* DIVIDER */}
  <div className="h-px bg-gray-200 mb-6" />

  {/* ITEM 1 — USER */}
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-4">
      <svg
        className="w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12a5 5 0 100-10 5 5 0 000 10z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 22c0-4.418 4.03-8 9-8s9 3.582 9 8"
        />
      </svg>

      <span className="text-lg text-[#2b1c1c]">
        Identity verified
      </span>
    </div>

    <span className="text-[#5b2bbd] text-lg font-medium cursor-pointer">
      Verify
    </span>
  </div>

  {/* ITEM 2 — PHONE */}
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-4">
      <svg
        className="w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 5.5A2.5 2.5 0 014.5 3h2a2 2 0 012 1.6l.5 2a2 2 0 01-.6 1.9l-1.2 1.2a16 16 0 006.6 6.6l1.2-1.2a2 2 0 011.9-.6l2 .5a2 2 0 011.6 2v2a2.5 2.5 0 01-2.5 2.5C9.4 21 3 14.6 3 6A2.5 2.5 0 012 5.5z"
        />
      </svg>

      <span className="text-lg text-[#2b1c1c]">
        Phone Verified
      </span>
    </div>

    <span className="text-[#5b2bbd] text-lg font-medium cursor-pointer">
      Verify
    </span>
  </div>

  {/* ITEM 3 — EMAIL */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
      <svg
        className="w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l9 6 9-6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>

      <span className="text-lg text-[#2b1c1c]">
        Email Verified
      </span>
    </div>

    <span className="text-[#5b2bbd] text-lg font-medium cursor-pointer">
      Verify
    </span>
  </div>

</div>



{/* SUBSCRIPTION IMAGE SECTION */}
<div
  className="
    relative
    w-full
    h-[90px]        /* ⬅ reduced height */
    rounded-2xl
    overflow-hidden
    flex
    items-center
  "
  style={{
    background: "linear-gradient(266.38deg, #51218F 4.44%, #020202 100.18%)",
  }}
>
  {/* HONEYCOMB OVERLAY — SUBTLE GREY */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${honeycomb})`,
      backgroundRepeat: "repeat",
      backgroundSize: "120px",
      opacity: 0.18,
      filter: "grayscale(100%)",
      mixBlendMode: "overlay",
    }}
  />

  {/* SOFT DARK FADE */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 w-full h-full flex items-center">

    {/* TEXT — LEFT (FORCED 2 LINES) */}
    <p
      className="
        ml-6
        text-white
        text-[16px]     /* ⬅ slightly smaller */
        font-medium
        leading-snug
        max-w-[65%]
        line-clamp-2    /* ⬅ ensures ONLY 2 lines */
      "
    >
      Get Subcribtion for getting more revenue in a month
    </p>

    {/* YELLOW CIRCLE — SMALLER */}
    <div className="absolute right-[-10px] top-1/2 -translate-y-1/2">
      <div className="relative w-[68px] h-[68px]">
        <img
          src={yellowcircle}
          alt="circle"
          className="w-full h-full object-contain"
        />
        <img
          src={arrow}
          alt="arrow"
          className="absolute inset-0 m-auto w-6 h-6 object-contain"
        />
      </div>
    </div>

  </div>
</div>





{/* ALL JOB SUMMARY — DESKTOP ONLY */}
<div className="hidden sm:block bg-white rounded-2xl shadow-md px-6 py-5">

  {/* HEADER */}
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-lg font-semibold text-[#2b1c1c]">
      All Job
    </h4>
    <span className="text-sm text-gray-500">
      Total <span className="font-semibold text-[#2b1c1c]">10</span>
    </span>
  </div>

  {/* DIVIDER */}
  <div className="h-px bg-gray-200 mb-4" />

  {/* ACTIVE PROJECTS */}
  <div className="flex items-center gap-3 mb-3">
    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13l2 2 4-4" />
    </svg>
    <p className="text-sm text-[#2b1c1c]">
      <span className="font-medium">Active projects :</span> 02
    </p>
  </div>

  {/* COMPLETED PROJECTS */}
  <div className="flex items-center gap-3 mb-3">
    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4 5 5 0 019.9 1A3.5 3.5 0 0118.5 19H7a4 4 0 01-4-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" />
    </svg>
    <p className="text-sm text-[#2b1c1c]">
      <span className="font-medium">Completed projects :</span> 50
    </p>
  </div>

  {/* CANCELLED PROJECTS */}
  <div className="flex items-center gap-3 mb-6">
    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6M15 9l-6 6" />
    </svg>
    <p className="text-sm text-[#2b1c1c]">
      <span className="font-medium">Cancelled projects :</span> 01
    </p>
  </div>

  {/* VIEW ALL BUTTON */}
  <div className="flex justify-center">
    <button
      className="
        px-8 py-2
        rounded-full
        border-2 border-[#4B1D8C]
        ring-1 ring-[#4B1D8C]/40
        text-[#4B1D8C]
        text-sm font-semibold
        bg-white
        shadow-[0_0_0_1px_rgba(75,29,140,0.15)]
        hover:bg-[#4B1D8C]/10
        hover:ring-[#4B1D8C]/60
        transition-all duration-200
      "
    >
      View all
    </button>
  </div>

</div>




{/* YOUR BIDS CARD */}
<div className="bg-white rounded-2xl shadow-md px-8 py-7">

  {/* HEADER */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-2xl font-semibold text-[#2b1c1c]">
      Your Bids
    </h3>

    <span className="text-lg text-[#2b1c1c]">
      Available bids <span className="font-bold text-2xl ml-1">16</span>
    </span>
  </div>

  {/* INFO TEXT */}
  <p className="text-xl text-[#2b1c1c] mb-10">
    <span className="font-bold">16 bids</span> left out of 6
  </p>

{/* BUTTON — STRONG OUTLINE */}
<div className="flex justify-center">
  <button
    className="
      px-14 py-4
      rounded-full

      border-2 border-[#4B1D8C]
      ring-1 ring-[#4B1D8C]/40

      text-[#4B1D8C]
      text-lg font-semibold
      bg-white

      shadow-[0_0_0_1px_rgba(75,29,140,0.18)]

      hover:bg-[#4B1D8C]/10
      hover:ring-[#4B1D8C]/60

      transition-all duration-200
    "
  >
    Get more Bids
  </button>
</div>
</div>
 </div>

  </div>
</div>
 {/* FOOTER */}
      <div className="-mx-4">
        <Footer />
      </div>
    </div>
  );
};

export default CollabrationHome;
