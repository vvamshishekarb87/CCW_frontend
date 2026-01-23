import React from 'react';
import flag from "../../assets/Mywork/flag.png"; 

const SavedDraft = () => {
  return (
    <div className="w-full bg-white rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] p-1 md:p-6">
      {[0, 1, 2, 3, 4].map((_, i) => (
        <div
          key={i}
          className={`${i !== 0 ? "pt-6 border-t border-gray-200 mt-6" : ""}`}
        >
          {/* ================= FIRST CARD ================= */}
          {i === 0 && (
            <div className="flex justify-between items-start gap-4 md:gap-6">
              <div className="w-full px-2 md:px-6">
                <h3 className="font-semibold text-[15px] md:text-[17px] mb-2 text-[#2A1E17]">
                  UI / UX Designer
                </h3>

                <p className="text-[12px] md:text-[14px] text-gray-500 mb-2">
                  Fixed-price · Intermediate · Est. Budget $2,000 · Posted 8 hours ago
                </p>

                <p className="text-[14px] md:text-[16px] text-gray-600 mb-4 leading-tight md:pr-8">
                  Hi, “This post is to search for UI / UX Designer”! I am looking for someone
                  who has good experience in designing platforms for formative years. We have
                  a set of 100s of worksheets and designing for creating website and other the
                  attached image as reference for style and structure, not an exact layout to
                  copy. The final design should look modern, clean, and premium.
                  <span className="text-[#4B1D8C] font-medium cursor-pointer ml-1">
                    more
                  </span>
                </p>

                <div className="flex items-center gap-3 md:gap-5 text-[12px] md:text-[14px] text-gray-500 flex-wrap">
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
            </div>
          )}

          {/* ================= SECOND CARD ================= */}
          {i === 1 && (
            <div className="flex justify-between items-start gap-4 md:gap-6">
              <div className="w-full px-2 md:px-6">
                <h3 className="font-semibold text-[15px] md:text-[17px] mb-2 text-[#2A1E17]">
                  UI designer
                </h3>

                <p className="text-[12px] md:text-[14px] text-gray-500 mb-3">
                  Fixed-price · Intermediate · Est. Budget $2,000 · Posted 8 hours ago
                </p>

                <p className="text-[14px] md:text-[16px] text-gray-600 mb-5 leading-tight md:pr-8 ">
                  We are looking for a talented Web UX/UI Designer to design the core pages and
                  visual system for a new online learning platform. You will be responsible for
                  creating a polished, modern, responsive design in Figma that can be
                  implemented inside Thinkific by our development team.
                  <span className="text-[#4B1D8C] font-medium cursor-pointer ml-1">
                    more
                  </span>
                </p>

                <div className="flex items-center gap-3 md:gap-6 text-[12px] md:text-[15px] text-gray-500 flex-wrap">
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
            </div>
          )}

          {/* ================= THIRD CARD ================= */}
          {i === 2 && (
            <div className="flex justify-between items-start gap-4 md:gap-6">
              <div className="w-full px-2 md:px-6">
                <h3 className="font-semibold text-[14px] md:text-[16px] mb-1 text-[#2A1E17]">
                  Ux Designer
                </h3>

                <p className="text-[12px] md:text-[14px] text-gray-500 mb-2">
                  Hourly-rate · Intermediate · Est. Budget $2,000 · Posted 8 hours ago
                </p>

                <p className="text-[14px] md:text-[16px] text-gray-600 mb-4 leading-tight md:pr-8">
                  This role is ideal for a designer who understands how learning platforms
                  work, has strong UX instincts, and can translate business goals into
                  intuitive, elegant interfaces. Design the visual identity and UI system
                  for a learning-focused website, covering color palette, typography,
                  components, spacing, iconography.
                  <span className="text-[#4B1D8C] font-medium cursor-pointer ml-1">
                    more
                  </span>
                </p>

                <div className="flex items-center gap-3 md:gap-5 text-[12px] md:text-[14px] text-gray-500 flex-wrap">
                  <span className="text-[#4B1D8C] font-medium">$ Hourly Rate</span>
                  <span className="text-[#4B1D8C]">★★★★☆</span>
                  <span>4/5 (12 Reviews)</span>

                  {/* FLAG ICON */}
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
            </div>
          )}

          {/* ================= FOURTH CARD ================= */}
          {i === 3 && (
            <div className="flex justify-between items-start gap-4 md:gap-6">
              <div className="w-full px-2 md:px-6">
                <h3 className="font-semibold text-[14px] md:text-[16px] mb-1 text-[#2A1E17]">
                  UI / UX designer Needed for SaaS Platform Dashboard
                </h3>

                <p className="text-[12px] md:text-[14px] text-gray-500 mb-2">
                  Hourly-rate · Intermediate · Est. Budget $2,000 · Posted 8 hours ago
                </p>

                <p className="text-[14px] md:text-[16px] text-gray-600 mb-4 leading-tight md:pr-8">
                  We are seeking a talented UX/UI Designer to join our team for our SaaS
                  platform. The ideal candidate will focus on designing user-friendly
                  dashboards and customer-facing screens. This role requires approximately
                  7–20 hours per week and is perfect for someone who can enhance our
                  platform’s usability and visual appeal.
                  <span className="text-[#4B1D8C] font-medium cursor-pointer ml-1">
                    more
                  </span>
                </p>

                <div className="flex items-center gap-3 md:gap-5 text-[12px] md:text-[14px] text-gray-500 flex-wrap">
                  <span className="text-[#4B1D8C] font-medium">$ Hourly Rate</span>
                  <span className="text-[#4B1D8C]">★★★★☆</span>
                  <span>4/5 (12 Reviews)</span>

                  {/* FLAG ICON */}
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
            </div>
          )}

         
        </div>
      ))}
    </div>
  );
};

export default SavedDraft;