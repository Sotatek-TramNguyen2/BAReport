import svgPaths from "./svg-4ziap3493h";
import imgFrame from "./d5a65ab14db0f97e9678bb14d0c0e27c1c4f2f83.png";
import { imgElement } from "./svg-kag6g";
type ButtonCopilotProps = {
  className?: string;
  property1?: "Off" | "Hover" | "Blue";
};

function ButtonCopilot({ className, property1 = "Hover" }: ButtonCopilotProps) {
  const isBlue = property1 === "Blue";
  const isOff = property1 === "Off";
  return (
    <div className={className || `content-stretch flex flex-col h-[40px] items-center justify-center px-[16px] py-[4px] relative rounded-[4px] w-[212.258px] ${isOff ? "" : isBlue ? "bg-[#eff8ff]" : "bg-[#e7e9ed]"}`}>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
        <div className="relative shrink-0 size-[16px]" data-name="search-text">
          <div className="absolute inset-[9.38%]" data-name="search-text">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isOff ? "0 0 12.9999 13" : "0 0 19.4998 19.5"}>
              {["Hover", "Blue"].includes(property1) && <path d={svgPaths.p27eb7000} fill="var(--fill-0, #36373B)" id="search-text" />}
              {isOff && (
                <g id="search-text">
                  <path d={svgPaths.paae7d00} fill="var(--fill-0, #5E6670)" />
                  <path d={svgPaths.paae7d00} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  <path d={svgPaths.paae7d00} fill="var(--fill-2, black)" fillOpacity="0.2" />
                </g>
              )}
            </svg>
          </div>
        </div>
        <div className={`flex flex-col font-["Manrope:Medium",sans-serif] font-medium justify-center leading-[0] relative text-[14px] ${isOff ? "shrink-0 text-[#3c4148] whitespace-nowrap" : isBlue ? "shrink-0 text-[#0a58c8] whitespace-nowrap" : "flex-[1_0_0] h-[20px] min-w-px text-[#3c4148]"}`}>
          <p className="leading-[1.4]">Insight finder</p>
        </div>
      </div>
    </div>
  );
}

export default function ListCacDAnBldBql({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex h-[1024px] items-start relative rounded-[24px] w-[1440px]"} data-name="List các dự án - BLĐ/BQL">
      <div className="bg-[#f7f8fa] h-[1024px] relative shrink-0 w-[254px]" data-name="Side bar">
        <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="relative shrink-0 w-full" data-name="Search">
              <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[24px] px-[16px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                  <div className="h-[17px] relative shrink-0 w-[93px]" data-name="Frame">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 17">
                      <g id="Frame">
                        <path d={svgPaths.p1d0c500} fill="var(--fill-0, #0A58C8)" id="Vector" />
                        <g id="Group">
                          <path d={svgPaths.p15ae7d80} fill="var(--fill-0, #022259)" id="Vector_2" />
                          <path d={svgPaths.p32534500} fill="var(--fill-0, #022259)" id="Vector_3" />
                          <path d={svgPaths.p9260080} fill="var(--fill-0, #022259)" id="Vector_4" />
                          <path d={svgPaths.p23348600} fill="var(--fill-0, #022259)" id="Vector_5" />
                          <path d={svgPaths.p3c04adf0} fill="var(--fill-0, white)" id="Vector_6" />
                          <path d={svgPaths.p84a2300} fill="var(--fill-0, white)" id="Vector_7" />
                        </g>
                        <g id="Group_2">
                          <path d={svgPaths.p5401b00} fill="var(--fill-0, white)" id="Vector_8" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                  <div className="bg-[#0a58c8] relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
                    <div className="content-stretch flex flex-col items-start px-[17px] py-[9px] relative size-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <div className="h-[14px] relative shrink-0 w-[17.5px]" data-name="Img">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 14">
                              <g id="Img">
                                <path d={svgPaths.p23cb4280} fill="var(--fill-0, white)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                            <p className="leading-[1.4]">My channel</p>
                          </div>
                        </div>
                        <div className="h-[5.627px] relative shrink-0 w-[10.124px]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1241 5.62734">
                            <path d={svgPaths.pfc9ba00} fill="var(--fill-0, white)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="List">
              <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] px-[16px] relative size-full">
                <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full">
                  <ButtonCopilot className="h-[40px] relative rounded-[4px] shrink-0 w-full" property1="Off" />
                  <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Button - Control panel">
                    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button - Library">
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col items-start justify-center pl-[16px] py-[4px] relative size-full">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                            <div className="relative shrink-0 size-[16px]" data-name="Project">
                              <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
                                <div className="absolute inset-[-4.96%_-4.22%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4583 12.4583">
                                    <g id="Vector">
                                      <path d={svgPaths.p26ed8b00} stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d={svgPaths.p26ed8b00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d={svgPaths.p26ed8b00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute inset-[41.67%_66.67%_41.67%_33.33%]" data-name="Vector">
                                <div className="absolute inset-[-21.09%_-0.56px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 3.79167">
                                    <g id="Vector">
                                      <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[41.67%]" data-name="Vector">
                                <div className="absolute inset-[-42.19%_-0.56px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 2.45833">
                                    <g id="Vector">
                                      <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute inset-[41.67%_33.33%_33.33%_66.67%]" data-name="Vector">
                                <div className="absolute inset-[-14.06%_-0.56px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 5.125">
                                    <g id="Vector">
                                      <path d="M0.5625 0.5625V4.5625" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V4.5625" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V4.5625" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] min-w-px relative text-[#3c4148] text-[14px]">
                              <p className="leading-[1.4]">Workspace</p>
                            </div>
                            <div className="relative shrink-0 size-[24px]" data-name="angle-up-small">
                              <div className="absolute inset-[38.54%_30.21%]" data-name="angle-up-small">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50054 5.50076">
                                  <g id="angle-up-small">
                                    <path d={svgPaths.pb99acf0} fill="var(--fill-0, #5E6670)" />
                                    <path d={svgPaths.pb99acf0} fill="var(--fill-1, black)" fillOpacity="0.2" />
                                    <path d={svgPaths.pb99acf0} fill="var(--fill-2, black)" fillOpacity="0.2" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] relative size-full">
                        <div className="bg-[#eff8ff] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="Dashboard">
                                <div className="absolute bottom-1/2 left-[12.5%] right-[58.33%] top-[12.5%]" data-name="Vector">
                                  <div className="absolute inset-[-9.38%_-12.05%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79167 7.125">
                                      <path d={svgPaths.p31fdb480} id="Vector" stroke="var(--stroke-0, #0A58C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[12.5%_12.5%_66.67%_58.33%]" data-name="Vector">
                                  <div className="absolute inset-[-16.88%_-12.05%_-16.87%_-12.05%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79167 4.45833">
                                      <path d={svgPaths.p20430ac0} id="Vector" stroke="var(--stroke-0, #0A58C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute bottom-[12.5%] left-[58.33%] right-[12.5%] top-1/2" data-name="Vector">
                                  <div className="absolute inset-[-9.38%_-12.05%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79167 7.125">
                                      <path d={svgPaths.p31fdb480} id="Vector" stroke="var(--stroke-0, #0A58C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[66.67%_58.33%_12.5%_12.5%]" data-name="Vector">
                                  <div className="absolute inset-[-16.88%_-12.05%_-16.87%_-12.05%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79167 4.45833">
                                      <path d={svgPaths.p20430ac0} id="Vector" stroke="var(--stroke-0, #0A58C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#0a58c8] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4]">Dashboard</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[40px] relative shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="Project">
                                <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
                                  <div className="absolute inset-[-4.96%_-4.22%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4583 12.4583">
                                      <g id="Vector">
                                        <path d={svgPaths.p26ed8b00} stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d={svgPaths.p26ed8b00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d={svgPaths.p26ed8b00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[41.67%_66.67%_41.67%_33.33%]" data-name="Vector">
                                  <div className="absolute inset-[-21.09%_-0.56px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 3.79167">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[41.67%]" data-name="Vector">
                                  <div className="absolute inset-[-42.19%_-0.56px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 2.45833">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[41.67%_33.33%_33.33%_66.67%]" data-name="Vector">
                                  <div className="absolute inset-[-14.06%_-0.56px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 5.125">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625V4.5625" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V4.5625" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V4.5625" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#3c4148] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4]">Projects</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[40px] relative shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="star-magic">
                                <div className="absolute inset-[9.37%_9.38%_9.38%_9.38%]" data-name="star-magic">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9997 13.0007">
                                    <path d={svgPaths.p36666470} fill="var(--fill-0, #36373B)" id="star-magic" />
                                  </svg>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#3c4148] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4]">AI tracker</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Button - My note">
                    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button - My note">
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col items-start justify-center pl-[16px] py-[4px] relative size-full">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                            <div className="relative shrink-0 size-[16px]" data-name="Shared bot">
                              <div className="absolute bottom-[66.67%] left-[33.33%] right-1/2 top-[16.67%]" data-name="Vector">
                                <div className="absolute inset-[-21.09%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79167 3.79167">
                                    <g id="Vector">
                                      <path d={svgPaths.p9eb3200} stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d={svgPaths.p9eb3200} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d={svgPaths.p9eb3200} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute inset-[33.33%_16.67%_16.67%_16.67%]" data-name="Vector">
                                <div className="absolute inset-[-7.03%_-5.27%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7917 9.125">
                                    <g id="Vector">
                                      <path d={svgPaths.p1455a600} stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d={svgPaths.p1455a600} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d={svgPaths.p1455a600} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute inset-[58.33%_83.33%_41.67%_8.33%]" data-name="Vector">
                                <div className="absolute inset-[-0.56px_-42.19%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.45833 1.125">
                                    <g id="Vector">
                                      <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute inset-[58.33%_8.33%_41.67%_83.33%]" data-name="Vector">
                                <div className="absolute inset-[-0.56px_-42.19%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.45833 1.125">
                                    <g id="Vector">
                                      <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute inset-[54.17%_37.5%_37.5%_62.5%]" data-name="Vector">
                                <div className="absolute inset-[-42.19%_-0.56px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 2.45833">
                                    <g id="Vector">
                                      <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute inset-[54.17%_62.5%_37.5%_37.5%]" data-name="Vector">
                                <div className="absolute inset-[-42.19%_-0.56px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 2.45833">
                                    <g id="Vector">
                                      <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] min-w-px relative text-[#3c4148] text-[14px]">
                              <p className="leading-[1.4]">AI tools</p>
                            </div>
                            <div className="relative shrink-0 size-[24px]" data-name="angle-up-small">
                              <div className="absolute inset-[38.54%_30.21%]" data-name="angle-up-small">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50054 5.50076">
                                  <g id="angle-up-small">
                                    <path d={svgPaths.pb99acf0} fill="var(--fill-0, #5E6670)" />
                                    <path d={svgPaths.pb99acf0} fill="var(--fill-1, black)" fillOpacity="0.2" />
                                    <path d={svgPaths.pb99acf0} fill="var(--fill-2, black)" fillOpacity="0.2" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] relative size-full">
                        <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="Deep research">
                                <div className="absolute inset-[12.5%]" data-name="Vector">
                                  <div className="absolute inset-[-4.69%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.125 13.125">
                                      <g id="Vector">
                                        <path d={svgPaths.p12b3bd00} stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d={svgPaths.p12b3bd00} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d={svgPaths.p12b3bd00} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[12.5%_79.17%_70.83%_20.83%]" data-name="Vector">
                                  <div className="absolute inset-[-21.09%_-0.56px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 3.79167">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[70.83%_20.83%_12.5%_79.17%]" data-name="Vector">
                                  <div className="absolute inset-[-21.09%_-0.56px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 3.79167">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V3.22917" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[20.83%_70.83%_79.17%_12.5%]" data-name="Vector">
                                  <div className="absolute inset-[-0.56px_-21.09%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79167 1.125">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625H3.22917" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625H3.22917" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625H3.22917" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[79.17%_12.5%_20.83%_70.83%]" data-name="Vector">
                                  <div className="absolute inset-[-0.56px_-21.09%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79167 1.125">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625H3.22917" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625H3.22917" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625H3.22917" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#3c4148] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4]">Deep research</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[40px] relative shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="share">
                                <div className="absolute inset-[9.38%_9.38%_9.38%_9.37%]" data-name="share">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0007 13">
                                    <path d={svgPaths.p69f5280} fill="var(--fill-0, #36373B)" id="share" />
                                  </svg>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#3c4148] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4]">Shared research</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[40px] relative shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="Shared bot">
                                <div className="absolute bottom-[66.67%] left-[33.33%] right-1/2 top-[16.67%]" data-name="Vector">
                                  <div className="absolute inset-[-21.09%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79167 3.79167">
                                      <g id="Vector">
                                        <path d={svgPaths.p9eb3200} stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d={svgPaths.p9eb3200} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d={svgPaths.p9eb3200} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[33.33%_16.67%_16.67%_16.67%]" data-name="Vector">
                                  <div className="absolute inset-[-7.03%_-5.27%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7917 9.125">
                                      <g id="Vector">
                                        <path d={svgPaths.p1455a600} stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d={svgPaths.p1455a600} stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d={svgPaths.p1455a600} stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[58.33%_83.33%_41.67%_8.33%]" data-name="Vector">
                                  <div className="absolute inset-[-0.56px_-42.19%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.45833 1.125">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[58.33%_8.33%_41.67%_83.33%]" data-name="Vector">
                                  <div className="absolute inset-[-0.56px_-42.19%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.45833 1.125">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625H1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[54.17%_37.5%_37.5%_62.5%]" data-name="Vector">
                                  <div className="absolute inset-[-42.19%_-0.56px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 2.45833">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute inset-[54.17%_62.5%_37.5%_37.5%]" data-name="Vector">
                                  <div className="absolute inset-[-42.19%_-0.56px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.125 2.45833">
                                      <g id="Vector">
                                        <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-0, #5E6670)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-1, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                        <path d="M0.5625 0.5625V1.89583" stroke="var(--stroke-2, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.125" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#3c4148] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4] whitespace-pre-wrap">{`Shared  bot`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[40px] relative shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="speaker">
                                <div className="absolute inset-[9.38%_17.71%]" data-name="speaker">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
                                    <path d={svgPaths.pe671600} fill="var(--fill-0, #36373B)" id="speaker" />
                                  </svg>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#3c4148] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4]">Meeting record</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-end relative rounded-[4px] shrink-0 w-full" data-name="Button - Data sources">
                    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button - Library">
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[4px] relative size-full">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                            <div className="h-[15.36px] relative shrink-0 w-[16px]" data-name="book-open-reader">
                              <div className="absolute inset-[9.38%]" data-name="book-open-reader">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9987 12.48">
                                  <g id="book-open-reader">
                                    <path d={svgPaths.p742a100} fill="var(--fill-0, #5E6670)" />
                                    <path d={svgPaths.p742a100} fill="var(--fill-1, black)" fillOpacity="0.2" />
                                    <path d={svgPaths.p742a100} fill="var(--fill-2, black)" fillOpacity="0.2" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c4148] text-[14px] whitespace-nowrap">
                              <p className="leading-[1.4]">Library</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Button - Control panel">
                    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button - Library">
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col items-start justify-center pl-[16px] py-[4px] relative size-full">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                            <div className="relative shrink-0 size-[16px]" data-name="folder-settings">
                              <div className="absolute inset-[13.54%_9.37%_13.54%_9.38%]" data-name="folder-settings">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 11.6667">
                                  <g id="folder-settings">
                                    <path d={svgPaths.p2baf3300} fill="var(--fill-0, #5E6670)" />
                                    <path d={svgPaths.p2baf3300} fill="var(--fill-1, black)" fillOpacity="0.2" />
                                    <path d={svgPaths.p2baf3300} fill="var(--fill-2, black)" fillOpacity="0.2" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] min-w-px relative text-[#3c4148] text-[14px]">
                              <p className="leading-[1.4]">Setting</p>
                            </div>
                            <div className="relative shrink-0 size-[24px]" data-name="angle-up-small">
                              <div className="absolute inset-[38.54%_30.21%]" data-name="angle-up-small">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50054 5.50076">
                                  <g id="angle-up-small">
                                    <path d={svgPaths.pb99acf0} fill="var(--fill-0, #5E6670)" />
                                    <path d={svgPaths.pb99acf0} fill="var(--fill-1, black)" fillOpacity="0.2" />
                                    <path d={svgPaths.pb99acf0} fill="var(--fill-2, black)" fillOpacity="0.2" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] relative size-full">
                        <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="user-plus-alt">
                                <div className="absolute inset-[9.38%]" data-name="user-plus-alt">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                                    <g id="user-plus-alt">
                                      <path d={svgPaths.p18ead180} fill="var(--fill-0, #5E6670)" />
                                      <path d={svgPaths.p18ead180} fill="var(--fill-1, black)" fillOpacity="0.2" />
                                      <path d={svgPaths.p18ead180} fill="var(--fill-2, black)" fillOpacity="0.2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#3c4148] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4]">Member</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[40px] relative shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="presentation-chart-pie">
                                <div className="absolute inset-[9.38%_9.38%_9.37%_9.38%]" data-name="presentation-chart-pie">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13.0002">
                                    <g id="presentation-chart-pie">
                                      <path d={svgPaths.p21527500} fill="var(--fill-0, #5E6670)" />
                                      <path d={svgPaths.p21527500} fill="var(--fill-1, black)" fillOpacity="0.2" />
                                      <path d={svgPaths.p21527500} fill="var(--fill-2, black)" fillOpacity="0.2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#3c4148] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4]">Usage monitor</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[40px] relative shrink-0 w-full" data-name="VerticalBorder">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative size-full">
                              <div className="relative shrink-0 size-[16px]" data-name="buildings">
                                <div className="absolute inset-[9.37%_9.38%]" data-name="buildings">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13.0008">
                                    <g id="buildings">
                                      <path d={svgPaths.p361eb640} fill="var(--fill-0, #5E6670)" />
                                      <path d={svgPaths.p361eb640} fill="var(--fill-1, black)" fillOpacity="0.2" />
                                      <path d={svgPaths.p361eb640} fill="var(--fill-2, black)" fillOpacity="0.2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="h-[16px] overflow-clip relative shrink-0 w-[166px]" data-name="Container">
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-0 text-[#3c4148] text-[14px] top-[7.66px] w-[164px]">
                                  <p className="leading-[1.4]">Billing Management</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[rgba(245,246,247,0.5)] h-[609px] overflow-clip right-0 rounded-[1px] top-0 w-[4px]" data-name="Scrollbar" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="h-[60px] relative shrink-0 w-full" data-name="HorizontalBorder">
              <div aria-hidden="true" className="absolute border-[#e7e9ed] border-solid border-t inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#e7e9ed] flex-[1_0_0] min-w-px relative rounded-[9999px]" data-name="Background">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center p-[4px] relative size-full">
                        <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Frame">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame} />
                          </div>
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] min-w-px relative text-[#3c4148] text-[14px]">
                          <p className="leading-[1.4]">buihuong@sotatek.c..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[32px] relative shrink-0 w-[31.406px]" data-name="Button - Settings">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.4064 32">
                      <g id="Button - Settings">
                        <rect fill="var(--fill-0, #F7F8FA)" height="32" rx="15.7032" width="31.4064" />
                        <g id="Vector">
                          <path d={svgPaths.p1e037680} fill="var(--fill-0, #5E6670)" />
                          <path d={svgPaths.p1e037680} fill="var(--fill-1, black)" fillOpacity="0.2" />
                          <path d={svgPaths.p1e037680} fill="var(--fill-2, black)" fillOpacity="0.2" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e7e9ed] border-r border-solid inset-0 pointer-events-none" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] h-[1024px] items-center min-w-px relative">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Chat">
          <div className="bg-white content-stretch flex flex-col h-[57px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[1186px]" data-name="Header">
            <div aria-hidden="true" className="absolute border-[#f7f8fa] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[459.5px]">
                <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[18px] text-[transparent] whitespace-nowrap">Dashboard</p>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex h-full items-center justify-end relative shrink-0 w-[418.75px]">
                  <div className="content-stretch flex gap-[16px] h-full items-center relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[4px] h-full items-end justify-center relative shrink-0" data-name="Input">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px relative">
                        <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[8px]" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[#e7e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[8px] relative size-full">
                              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#16181a] text-[14px] whitespace-nowrap">
                                <p className="leading-[1.4]">12,000</p>
                              </div>
                              <div className="relative shrink-0 size-[16px]" data-name="credit-card">
                                <div className="absolute inset-[17.71%_9.38%]" data-name="credit-card">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10.3333">
                                    <path d={svgPaths.pe474340} fill="var(--fill-0, #16181A)" id="credit-card" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="bell-notification">
                      <div className="absolute inset-[9.38%_13.54%_9.38%_13.55%]" data-name="bell-notification">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4972 19.5">
                          <g id="bell-notification">
                            <path d={svgPaths.p32422100} fill="var(--fill-0, #5E6670)" />
                            <path d={svgPaths.p32422100} fill="var(--fill-1, black)" fillOpacity="0.2" />
                            <path d={svgPaths.p32422100} fill="var(--fill-2, black)" fillOpacity="0.2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Conversation">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[32px] items-center pb-[84px] pt-[32px] px-[24px] relative size-full">
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[16px] shrink-0 w-full" data-name="MyTasks">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Tổng quan</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center px-[9px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
                      <div aria-hidden="true" className="absolute border border-[rgba(145,158,171,0.24)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[14px] text-center whitespace-nowrap">
                        <p>
                          <span className="leading-[1.4]">{`Tuần 12 `}</span>
                          <span className="leading-[1.4] text-[#9c9c9c]">(01/11/2025 - 02/11/2025)</span>
                        </p>
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="Img">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="Img">
                            <path d={svgPaths.p37a44c80} fill="var(--fill-0, #1C252E)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
                      <div className="bg-[#2db04a] relative rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_4px_30px_0px_rgba(46,45,116,0.05)] shrink-0 w-full" data-name="Statitstic Card">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[16px] isolate items-start px-[16px] py-[12px] relative size-full">
                            <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center overflow-clip p-[5.333px] relative rounded-[5.333px] shrink-0 size-[24px] z-[3]" data-name="Square Icon Badge">
                              <div className="relative shrink-0 size-[12px]" data-name="folder-open">
                                <div className="absolute inset-[17.71%_5.21%_13.54%_5.21%]" data-name="folder-open">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7497 8.25">
                                    <path d={svgPaths.p415a300} fill="var(--fill-0, #F1FCF2)" id="folder-open" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative z-[2]" data-name="Body">
                              <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]">Tổng dự án</p>
                              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Numbers">
                                <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[60px] text-white tracking-[-0.5px] whitespace-nowrap">24</p>
                              </div>
                              <div className="absolute bg-white content-stretch drop-shadow-[-2px_0px_8px_rgba(0,0,0,0.08),0px_8px_8px_rgba(0,0,0,0.06)] flex items-center justify-center left-[926px] px-[24px] py-[10px] rounded-[200px] top-[67px]" data-name="Button / Primary">
                                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button / Content">
                                  <div className="relative shrink-0 size-[20px]" data-name="rocket">
                                    <div className="absolute inset-[9.36%_9.34%_9.42%_9.36%]" data-name="rocket">
                                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2593 16.2445">
                                        <path d={svgPaths.p2246bd80} fill="var(--fill-0, #2DB04A)" id="rocket" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#2db04a] text-[14px] text-right whitespace-nowrap">
                                    <p className="leading-[1.4]">Ai insight</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-[-26px_-133px_-49px_959px] z-[1]" data-name="Ornament">
                              <div className="absolute inset-[-64px_-56px_125px_225px]" data-name="Ellipse">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 145">
                                  <path d={svgPaths.p2ab22480} id="Ellipse" stroke="url(#paint0_linear_1_4214)" strokeOpacity="0.3" />
                                  <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4214" x1="71.5" x2="71.5" y1="0" y2="145">
                                      <stop stopColor="white" stopOpacity="0.5" />
                                      <stop offset="1" stopColor="white" stopOpacity="0.25" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="absolute inset-[-64px_55px_-100px_-111px]" data-name="Ellipse">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 368 370">
                                  <path d={svgPaths.p1f093980} id="Ellipse" stroke="url(#paint0_linear_1_4246)" strokeOpacity="0.3" />
                                  <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4246" x1="184" x2="184" y1="0" y2="370">
                                      <stop stopColor="white" stopOpacity="0.5" />
                                      <stop offset="1" stopColor="white" stopOpacity="0.25" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="absolute inset-[-64px_55px_-18px_-29px]" data-name="Ellipse">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 286 288">
                                  <path d={svgPaths.pc440b00} id="Ellipse" stroke="url(#paint0_linear_1_4281)" strokeOpacity="0.3" />
                                  <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4281" x1="143" x2="143" y1="0" y2="288">
                                      <stop stopColor="white" stopOpacity="0.5" />
                                      <stop offset="1" stopColor="white" stopOpacity="0.25" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="absolute inset-[-64px_-56px_88px_188px]" data-name="Ellipse">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 182">
                                  <path d={svgPaths.p1962700} id="Ellipse" stroke="url(#paint0_linear_1_4204)" strokeOpacity="0.3" />
                                  <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4204" x1="90" x2="90" y1="0" y2="182">
                                      <stop stopColor="white" stopOpacity="0.5" />
                                      <stop offset="1" stopColor="white" stopOpacity="0.25" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="absolute inset-[-64px_55px_39px_28px]" data-name="Ellipse">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 229 231">
                                  <path d={svgPaths.p38bba700} id="Ellipse" stroke="url(#paint0_linear_1_4202)" strokeOpacity="0.3" />
                                  <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4202" x1="114.5" x2="114.5" y1="0" y2="231">
                                      <stop stopColor="white" stopOpacity="0.5" />
                                      <stop offset="1" stopColor="white" stopOpacity="0.25" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="absolute flex h-[182.172px] items-center justify-center right-[60.39px] top-[-73.7px] w-[165.504px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                                <div className="-rotate-75 flex-none">
                                  <div className="h-[130.153px] relative w-[153.724px]" data-name="Ornament">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.724 130.153">
                                      <path d={svgPaths.p2632700} fill="var(--fill-0, #56D271)" id="Ornament" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e7e9ed] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
                        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[24px] px-[16px] relative size-full">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative self-stretch shrink-0 w-[316px]">
                              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[14px] whitespace-nowrap">
                                <p className="leading-[1.4]">Kế hoạch</p>
                              </div>
                              <div className="bg-[#56d271] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Progressbar">
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-center justify-center px-[46px] py-px relative size-full">
                                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
                                      <p className="leading-[1.4]">6 dự án (25%)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px relative">
                              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[14px] whitespace-nowrap">
                                <p className="leading-[1.4]">Đang thực hiện</p>
                              </div>
                              <div className="bg-[#fc6] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Progressbar">
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#16181a] text-[12px] whitespace-nowrap">
                                      <p className="leading-[1.4]">6 dự án (25%)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[257px]">
                              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[14px] whitespace-nowrap">
                                <p className="leading-[1.4]">Hoàn thành</p>
                              </div>
                              <div className="bg-[#8ee7a1] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Progressbar">
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#16181a] text-[12px] whitespace-nowrap">
                                      <p className="leading-[1.4]">6 dự án (25%)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center justify-center min-w-px relative">
                              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[14px] whitespace-nowrap">
                                <p className="leading-[1.4]">Tạm dừng</p>
                              </div>
                              <div className="bg-[#fd9] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Progressbar">
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#16181a] text-[12px] whitespace-nowrap">
                                      <p className="leading-[1.4]">6 dự án (25%)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center justify-center min-w-px relative">
                              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[14px] whitespace-nowrap">
                                <p className="leading-[1.4]">Hủy</p>
                              </div>
                              <div className="bg-[#c0efd8] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Progressbar">
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#16181a] text-[12px] whitespace-nowrap">
                                      <p className="leading-[1.4]">1 dự án (10%)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-[8px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[#e7e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
                        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[16px] whitespace-nowrap">
                          <p className="leading-[1.4]">Thống kê ngân sách</p>
                        </div>
                        <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[18.642px] items-center relative shrink-0 w-[341px]">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 size-[198.137px]" data-name="Container">
                              <div className="h-[198.137px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                <div className="absolute contents inset-[6.13%_5.73%_5.36%_5.73%]" data-name="Group">
                                  <div className="absolute contents inset-[6.13%_5.73%_5.36%_5.73%]" data-name="Group">
                                    <div className="absolute bottom-[69.87%] contents left-[16.31%] right-1/2 top-[6.13%]" data-name="Group">
                                      <div className="absolute bottom-[69.87%] left-[16.31%] right-1/2 top-[6.13%]" data-name="Vector">
                                        <div className="absolute inset-[-0.89%_-0.77%_2.46%_1.77%]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.0919 46.8069">
                                            <path d={svgPaths.p357ecc00} fill="var(--fill-0, #FFBF24)" id="Vector" stroke="var(--stroke-2, white)" strokeWidth="1.03197" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute contents inset-[22.85%_58.17%_6.9%_5.73%]" data-name="Group">
                                      <div className="absolute inset-[22.85%_58.17%_6.9%_5.73%]" data-name="Vector">
                                        <div className="absolute inset-[0.83%_0.59%_0.34%_-0.72%]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.6221 137.572">
                                            <path d={svgPaths.p16ffb000} fill="var(--fill-0, #61ADFF)" id="Vector" stroke="var(--stroke-1, white)" strokeWidth="1.03197" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute contents inset-[6.13%_5.73%_5.36%_39.92%]" data-name="Group">
                                      <div className="absolute inset-[6.13%_5.73%_5.36%_39.92%]" data-name="Vector">
                                        <div className="absolute inset-[-0.16%_-0.48%_-0.29%_0.29%]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.889 176.185">
                                            <path d={svgPaths.p167c2200} fill="var(--fill-0, #2DB04A)" id="Vector" stroke="var(--stroke-1, white)" strokeWidth="1.03197" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-[calc(50%-0.07px)] py-px top-[90.57px] w-[86px]" data-name="Text">
                                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3c4148] text-[12px] w-[92px]">15,230,000,000</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[13.701px] items-start relative shrink-0 w-[130.496px]" data-name="Container">
                              <div className="content-stretch flex gap-[9.321px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="bg-[#2db04a] relative rounded-[19547788px] shrink-0 size-[9.321px]" data-name="Container" />
                                <div className="relative shrink-0 w-[89px]" data-name="Text">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start leading-[1.4] relative size-full text-[#3c4148]">
                                    <p className="font-['Manrope:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[14.755px] w-[min-content]">Đã giải ngân</p>
                                    <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-[96px]">12,030 triệu</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[9.321px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="bg-[#61adff] relative rounded-[19547788px] shrink-0 size-[9.321px]" data-name="Container" />
                                <div className="relative shrink-0" data-name="Text">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.4] py-px relative size-full text-[#3c4148]">
                                    <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[14.755px] w-[111.853px]">Còn lại</p>
                                    <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-[89px]">3,230 triệu</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[9.321px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="bg-[#ffbf24] relative rounded-[19547788px] shrink-0 size-[9.321px]" data-name="Container" />
                                <div className="relative shrink-0" data-name="Text">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.4] py-px relative size-full text-[#3c4148]">
                                    <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[14.755px] w-[111.853px]">Chờ duyệt</p>
                                    <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-[89px]">3,230 triệu</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-white content-stretch drop-shadow-[-2px_0px_8px_rgba(0,0,0,0.08),0px_8px_8px_rgba(0,0,0,0.06)] flex gap-[8px] h-[36px] items-center justify-center left-[62px] px-[14px] py-[8px] rounded-[8px] top-[44.57px]" data-name="Tooltip">
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#16181a] text-[0px] whitespace-nowrap">
                                  <span className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] text-[12px]">Đã giải ngân</span>
                                  <span className="leading-[1.4] text-[12px]">: 12,030 triệu (60%)</span>
                                </p>
                              </div>
                              <div className="-translate-y-1/2 absolute flex items-center justify-center left-[104.31px] size-[10px] top-[calc(50%+18px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                                <div className="-rotate-45 flex-none">
                                  <div className="relative size-[7.071px]" data-name="Below tooltip">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.07074 7.07074">
                                      <path d={svgPaths.p1e9ad070} fill="var(--fill-0, white)" id="Below tooltip" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-[180px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                            <div className="-rotate-90 flex-none">
                              <div className="h-0 relative w-[180px]" data-name="Separator">
                                <div className="absolute inset-[-1px_0_0_0]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
                                    <line id="Separator" stroke="var(--stroke-0, #E7E9ED)" x2="180" y1="0.5" y2="0.5" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                            <div className="h-[241px] relative shrink-0 w-[545px]">
                              <div className="absolute font-['Manrope:Medium',sans-serif] font-medium h-[210.914px] leading-[1.4] left-0 text-[#16181a] text-[12px] top-0 w-[32.675px]">
                                <p className="absolute bottom-[13.31px] h-[7.536px] left-0 translate-y-full w-[21.101px]">01</p>
                                <p className="absolute bottom-[93.53px] h-[8.29px] left-0 translate-y-full w-[22.609px]">10</p>
                                <p className="absolute bottom-[133.64px] h-[7.536px] left-0 translate-y-full w-[22.609px]">15</p>
                                <p className="absolute bottom-[171.39px] h-[7.536px] left-0 translate-y-full w-[22.609px]">20</p>
                                <p className="absolute bottom-[211.51px] h-[7.536px] left-0 translate-y-full w-[22.609px]">30</p>
                                <p className="absolute bottom-[53.42px] h-[7.536px] left-0 translate-y-full w-[22.609px]">05</p>
                              </div>
                              <div className="absolute bottom-[24.48px] h-[212.494px] left-[48.51px] right-[-117px]" data-name="grid">
                                <div className="absolute inset-[-0.35%_0_0_0]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 613.49 213.248">
                                    <g id="grid">
                                      <line id="Line" stroke="var(--stroke-0, #DFF9E4)" strokeDasharray="3.01 3.01" strokeWidth="0.753623" x2="613.49" y1="212.871" y2="212.871" />
                                      <line id="Line_2" stroke="var(--stroke-0, #DFF9E4)" strokeDasharray="3.01 3.01" strokeWidth="0.753623" x2="613.49" y1="170.213" y2="170.213" />
                                      <line id="Line_3" stroke="var(--stroke-0, #DFF9E4)" strokeDasharray="3.01 3.01" strokeWidth="0.753623" x2="613.49" y1="127.553" y2="127.553" />
                                      <line id="Line_4" stroke="var(--stroke-0, #DFF9E4)" strokeDasharray="3.01 3.01" strokeWidth="0.753623" x2="613.49" y1="84.8924" y2="84.8924" />
                                      <line id="Line_5" stroke="var(--stroke-0, #DFF9E4)" strokeDasharray="3.01 3.01" strokeWidth="0.753623" x2="613.49" y1="43.037" y2="43.037" />
                                      <line id="Line_6" stroke="var(--stroke-0, #DFF9E4)" strokeDasharray="3.01 3.01" strokeWidth="0.753623" x2="613.49" y1="0.376812" y2="0.376812" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="-translate-x-1/2 absolute bottom-0 h-[179px] left-[calc(50%-202px)] w-[45px]" data-name="chart/bar">
                                <p className="absolute bottom-[18.62px] font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] left-[-1.11%] right-[6.73%] text-[#3c4148] text-[12px] text-center translate-y-full">Dự án 1</p>
                              </div>
                              <div className="absolute contents left-[48px] top-[11px]">
                                <div className="absolute bg-[#2db04a] h-[140px] left-[48px] rounded-bl-[3px] rounded-br-[3px] top-[75px] w-[39px]" data-name="Mark" />
                                <div className="absolute bg-[#08f] h-[64px] left-[48px] rounded-tl-[3px] rounded-tr-[3px] top-[11px] w-[39px]" data-name="Mark" />
                              </div>
                              <div className="absolute contents left-[130px] top-[91px]">
                                <div className="absolute bg-[#2db04a] h-[85.098px] left-[130px] rounded-bl-[3px] rounded-br-[3px] top-[129.9px] w-[39px]" data-name="Mark" />
                                <div className="absolute bg-[#ffbf24] content-stretch flex h-[19.451px] items-center left-[130px] top-[110.45px] w-[39px]" data-name="Mark">
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] w-[39px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    aaaaaaaaaaaaaaaa
                                  </p>
                                </div>
                                <div className="absolute bg-[#08f] h-[47px] left-[130px] rounded-tl-[3px] rounded-tr-[3px] top-[91px] w-[39px]" data-name="Mark" />
                              </div>
                              <div className="absolute contents left-[212px] top-[53px]">
                                <div className="absolute bg-[#2db04a] h-[111.176px] left-[212px] rounded-bl-[3px] rounded-br-[3px] top-[103.82px] w-[39px]" data-name="Mark" />
                                <div className="absolute bg-[#08f] h-[51px] left-[212px] rounded-tl-[3px] rounded-tr-[3px] top-[53px] w-[39px]" data-name="Mark" />
                              </div>
                              <div className="absolute contents left-[294px] top-[132px]">
                                <div className="absolute bg-[#2db04a] h-[56.961px] left-[294px] rounded-bl-[3px] rounded-br-[3px] top-[158.04px] w-[39px]" data-name="Mark" />
                                <div className="absolute bg-[#08f] h-[26px] left-[294px] rounded-tl-[3px] rounded-tr-[3px] top-[132px] w-[39px]" data-name="Mark" />
                              </div>
                              <div className="absolute contents left-[376px] top-[11px]">
                                <div className="absolute bg-[#2db04a] h-[140px] left-[376px] rounded-bl-[3px] rounded-br-[3px] top-[75px] w-[39px]" data-name="Mark" />
                                <div className="absolute bg-[#08f] h-[64px] left-[376px] rounded-tl-[3px] rounded-tr-[3px] top-[11px] w-[39px]" data-name="Mark" />
                              </div>
                              <div className="absolute contents left-[458px] top-[71px]">
                                <div className="absolute bg-[#2db04a] h-[98.824px] left-[458px] rounded-bl-[3px] rounded-br-[3px] top-[116.18px] w-[39px]" data-name="Mark" />
                                <div className="absolute bg-[#08f] h-[45px] left-[458px] rounded-tl-[3px] rounded-tr-[3px] top-[71px] w-[39px]" data-name="Mark" />
                              </div>
                              <div className="-translate-x-1/2 absolute bottom-0 h-[162px] left-[calc(50%-123.5px)] w-[46px]" data-name="chart/bar">
                                <p className="absolute bottom-[19px] font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] left-[-1.08%] right-[1.08%] text-[#3c4148] text-[12px] text-center translate-y-full">Dự án 2</p>
                              </div>
                              <div className="-translate-x-1/2 absolute bottom-0 h-[87px] left-[calc(50%-39.5px)] w-[34px]" data-name="chart/bar">
                                <p className="absolute bottom-[19px] font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] left-[-41.18%] right-[-44.12%] text-[#3c4148] text-[12px] text-center translate-y-full">Triển khai...</p>
                              </div>
                              <div className="-translate-x-1/2 absolute bottom-0 h-[115px] left-[calc(50%+42.5px)] w-[40px]" data-name="chart/bar">
                                <p className="absolute bottom-[20px] font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] left-[-10%] right-[-10%] text-[#3c4148] text-[12px] text-center translate-y-full">Dự án 3</p>
                              </div>
                              <div className="-translate-x-1/2 absolute bottom-0 h-[180px] left-[calc(50%+123.5px)] w-[46px]" data-name="chart/bar">
                                <p className="absolute bottom-[20px] font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] left-0 right-0 text-[#3c4148] text-[12px] text-center translate-y-full">Dự án 4</p>
                              </div>
                              <div className="-translate-x-1/2 absolute bottom-0 h-[115px] left-[calc(50%+205px)] w-[39px]" data-name="chart/bar">
                                <p className="-translate-x-1/2 absolute bottom-[20px] font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] left-1/2 text-[#3c4148] text-[12px] text-center translate-y-full w-[65px]">Phát triển...</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[13.701px] items-start relative shrink-0 w-[86.22px]" data-name="Container">
                              <div className="content-stretch flex gap-[9.321px] h-[23.303px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="bg-[#2db04a] relative rounded-[19547788px] shrink-0 size-[9.321px]" data-name="Container" />
                                <div className="h-[23.303px] relative shrink-0 w-[111.462px]" data-name="Text">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                    <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] left-0 text-[#3c4148] text-[14.755px] top-[2.68px] w-[111.853px]">Đã giải ngân</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[9.321px] h-[23.303px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="bg-[#2b7fff] relative rounded-[19547788px] shrink-0 size-[9.321px]" data-name="Container" />
                                <div className="h-[23.303px] relative shrink-0 w-[111.289px]" data-name="Text">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                    <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] left-0 text-[#3c4148] text-[14.755px] top-[0.58px] w-[111.853px]">Còn lại</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-white content-stretch drop-shadow-[-2px_0px_8px_rgba(0,0,0,0.08),0px_8px_8px_rgba(0,0,0,0.06)] flex gap-[8px] h-[36px] items-center justify-center left-[380px] px-[14px] py-[8px] rounded-[8px] top-[166px]" data-name="Tooltip">
                          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#16181a] text-[0px] whitespace-nowrap">
                              <span className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] text-[12px]">Đã giải ngân</span>
                              <span className="leading-[1.4] text-[12px]">: 1,005 triệu (5%)</span>
                            </p>
                          </div>
                          <div className="-translate-y-1/2 absolute flex items-center justify-center left-[104.31px] size-[10px] top-[calc(50%+18px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                            <div className="-rotate-45 flex-none">
                              <div className="relative size-[7.071px]" data-name="Below tooltip">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.07074 7.07074">
                                  <path d={svgPaths.p1e9ad070} fill="var(--fill-0, white)" id="Below tooltip" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[16px] shrink-0 w-full" data-name="MyTasks">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Hiệu quả thực thi</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] h-[372.667px] items-start min-w-px relative">
                      <div className="flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch">
                        <div aria-hidden="true" className="absolute border border-[#e7e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col gap-[24px] items-center p-[16px] relative size-full">
                            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                              <div className="flex flex-[1_0_0] flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#1c252e] text-[16px]">
                                <p className="leading-[1.4]">Dự án theo mức độ rủi ro</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                              <div className="relative shrink-0 size-[203.667px]" data-name="Chart">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203.667 203.667">
                                  <g id="Chart">
                                    <circle cx="101.834" cy="101.834" fill="var(--fill-0, #FFBF24)" id="Ellipse 8" r="101.834" transform="rotate(-90 101.834 101.834)" />
                                    <path d={svgPaths.p1afd2cb0} fill="var(--fill-0, #FFC7C3)" id="Ellipse 6" />
                                    <path d={svgPaths.p3dd65200} fill="var(--fill-0, #2DB04A)" id="Ellipse 7" />
                                  </g>
                                </svg>
                              </div>
                              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Content">
                                <div className="bg-white col-1 content-stretch flex gap-[24px] items-center ml-0 mt-0 overflow-clip py-[14px] relative rounded-[15px] row-1" data-name="Content">
                                  <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[96px]" data-name="Sent">
                                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
                                      <div className="relative shrink-0 size-[8px]">
                                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                          <circle cx="4" cy="4" fill="var(--fill-0, #2DB04A)" id="Ellipse 61" r="4" />
                                        </svg>
                                      </div>
                                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c4148] text-[14px] whitespace-nowrap">
                                        <p className="leading-[1.4]">Đúng tiến độ</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#16181a] text-[14px] text-center w-full">
                                      <p className="leading-[1.4]">63%</p>
                                    </div>
                                  </div>
                                  <div className="flex h-[47px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                                    <div className="-rotate-90 flex-none">
                                      <div className="h-0 relative w-[47px]" data-name="Separator">
                                        <div className="absolute inset-[-1px_0_0_0]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 1">
                                            <line id="Separator" stroke="var(--stroke-0, #F4F7FE)" x2="47" y1="0.5" y2="0.5" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                      <div className="relative shrink-0 size-[8px]">
                                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                          <circle cx="4" cy="4" fill="var(--fill-0, #FFCC66)" id="Ellipse 61" r="4" />
                                        </svg>
                                      </div>
                                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c4148] text-[14px] whitespace-nowrap">
                                        <p className="leading-[1.4]">Nguy cơ trễ</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] min-w-full relative shrink-0 text-[#16181a] text-[14px] text-center w-[min-content]">
                                      <p className="leading-[1.4]">25%</p>
                                    </div>
                                  </div>
                                  <div className="flex h-[47px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                                    <div className="-rotate-90 flex-none">
                                      <div className="h-0 relative w-[47px]" data-name="Separator">
                                        <div className="absolute inset-[-1px_0_0_0]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 1">
                                            <line id="Separator" stroke="var(--stroke-0, #F4F7FE)" x2="47" y1="0.5" y2="0.5" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Recieved">
                                    <div className="col-1 content-stretch flex flex-col gap-[5px] items-center ml-0 mt-0 relative row-1 w-[64px]">
                                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                        <div className="relative shrink-0 size-[8px]">
                                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                            <circle cx="4" cy="4" fill="var(--fill-0, #FFC7C3)" id="Ellipse 61" r="4" />
                                          </svg>
                                        </div>
                                        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c4148] text-[14px] whitespace-nowrap">
                                          <p className="leading-[1.4]">Trễ hạn</p>
                                        </div>
                                      </div>
                                      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] min-w-full relative shrink-0 text-[#16181a] text-[14px] text-center w-[min-content]">
                                        <p className="leading-[1.4]">25%</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative self-stretch">
                      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8px]">
                        <div aria-hidden="true" className="absolute border border-[#e7e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col gap-[48px] items-center p-[16px] relative size-full">
                            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                              <div className="flex flex-[1_0_0] flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#1c252e] text-[16px]">
                                <p className="leading-[1.4]">Chỉ số SPI</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-center relative shrink-0">
                              <div className="h-[190px] relative shrink-0 w-[403px]" data-name="Chart">
                                <div className="-translate-x-1/2 absolute h-[327.61px] left-[calc(50%+0.29px)] top-[23px] w-[327.58px]" data-name="Chart">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327.58 327.61">
                                    <g id="Chart">
                                      <path d={svgPaths.p3abd2980} fill="var(--fill-0, #12B76A)" id="Ellipse 141" />
                                      <path d={svgPaths.p8298080} fill="var(--fill-0, #FFC7C3)" id="Ellipse 141_2" />
                                      <g id="Vector 2">
                                        <path d="M166.951 0V11" stroke="var(--stroke-0, #5E6670)" />
                                        <path d="M166.951 0V11" stroke="var(--stroke-1, black)" strokeOpacity="0.2" />
                                        <path d="M166.951 0V11" stroke="var(--stroke-2, black)" strokeOpacity="0.2" />
                                      </g>
                                      <g id="Union">
                                        <path clipRule="evenodd" d={svgPaths.p17a7000} fill="#5E6670" fillRule="evenodd" />
                                        <path clipRule="evenodd" d={svgPaths.p17a7000} fill="black" fillOpacity="0.2" fillRule="evenodd" />
                                        <path clipRule="evenodd" d={svgPaths.p17a7000} fill="black" fillOpacity="0.2" fillRule="evenodd" />
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[202px] text-[#16181a] text-[12px] top-[10.5px] whitespace-nowrap">
                                  <p className="leading-[1.4]">1</p>
                                </div>
                                <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[22px] text-[#16181a] text-[12px] top-[182.5px] whitespace-nowrap">
                                  <p className="leading-[1.4]">0</p>
                                </div>
                                <div className="absolute left-[196px] size-[14px] top-[172px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                    <g id="Ellipse 146">
                                      <circle cx="7" cy="7" fill="var(--fill-0, #5E6670)" r="7" />
                                      <circle cx="7" cy="7" fill="var(--fill-1, black)" fillOpacity="0.2" r="7" />
                                      <circle cx="7" cy="7" fill="var(--fill-2, black)" fillOpacity="0.2" r="7" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="absolute left-[376px] size-[24px] top-[163px]" data-name="Frame">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <g id="Frame">
                                      <path d={svgPaths.p331bb900} id="Vector" stroke="var(--stroke-0, #16181A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">
                                <p className="leading-[1.4]">1.1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0">
                      <div aria-hidden="true" className="absolute border border-[#e7e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[16px] whitespace-nowrap">
                          <p className="leading-[1.4] whitespace-pre">{`Chỉ số  tuân thủ tiến độ theo phòng ban`}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[328px] items-start pb-[24px] px-[24px] relative shrink-0 w-[600px]" data-name="Chart">
                        <div className="h-full relative shrink-0" data-name="Y Axis">
                          <div className="flex flex-col items-end size-full">
                            <div className="content-stretch flex flex-col items-end pb-[24px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-end justify-center min-h-px relative" data-name="Label">
                                <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 z-[1]" data-name="Axis-container">
                                  <div className="content-stretch flex flex-col items-end overflow-clip pr-[8px] relative shrink-0" data-name="Value-container">
                                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3c4148] text-[12px] text-right whitespace-nowrap">Ban A</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-end justify-center min-h-px relative" data-name="Label">
                                <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 z-[1]" data-name="Axis-container">
                                  <div className="content-stretch flex flex-col items-end overflow-clip pr-[8px] relative shrink-0" data-name="Value-container">
                                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3c4148] text-[12px] text-right whitespace-nowrap">Ban C</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-end justify-center min-h-px relative" data-name="Label">
                                <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 z-[1]" data-name="Axis-container">
                                  <div className="content-stretch flex flex-col items-end overflow-clip pr-[8px] relative shrink-0" data-name="Value-container">
                                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3c4148] text-[12px] text-right whitespace-nowrap">Ban S</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-end justify-center min-h-px relative" data-name="Label">
                                <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 z-[1]" data-name="Axis-container">
                                  <div className="content-stretch flex flex-col items-end overflow-clip pr-[8px] relative shrink-0" data-name="Value-container">
                                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3c4148] text-[12px] text-right whitespace-nowrap">Ban F</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-end justify-center min-h-px relative" data-name="Label">
                                <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 z-[1]" data-name="Axis-container">
                                  <div className="content-stretch flex flex-col items-end overflow-clip pr-[8px] relative shrink-0" data-name="Value-container">
                                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#3c4148] text-[12px] text-right whitespace-nowrap">Ban Y</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Bar Area">
                          <div className="content-stretch flex flex-[1_0_0] items-start mb-[-9999px] min-h-px relative w-full" data-name="_Grid">
                            <div className="content-stretch flex flex-[1_0_0] h-full items-start justify-between min-w-px relative" data-name="X-asix-grid">
                              <div className="content-stretch flex flex-col gap-[8px] h-full items-center relative shrink-0 w-0" data-name="Value">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Line-container">
                                  <div className="h-[8px] relative shrink-0 w-full" data-name="Empty" />
                                  <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="Plot-area">
                                    <div className="h-full relative shrink-0 w-0" data-name="Line">
                                      <div className="absolute inset-[0_-0.5px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 272">
                                          <path d="M0.5 0V272" id="Line" stroke="var(--stroke-0, #C7C7CC)" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Value">
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#3c4148] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    0 %
                                  </p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[8px] h-full items-center relative shrink-0 w-0" data-name="Value">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Line-container">
                                  <div className="h-[8px] relative shrink-0 w-full" data-name="Empty" />
                                  <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="Plot-area">
                                    <div className="h-full relative shrink-0 w-0" data-name="Line">
                                      <div className="absolute inset-[0_-0.5px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 272">
                                          <path d="M0.5 0V272" id="Line" stroke="var(--stroke-0, #F2F2F7)" strokeDasharray="2 2" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Value">
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#3c4148] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    20
                                  </p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[8px] h-full items-center relative shrink-0 w-0" data-name="Value">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Line-container">
                                  <div className="h-[8px] relative shrink-0 w-full" data-name="Empty" />
                                  <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="Plot-area">
                                    <div className="h-full relative shrink-0 w-0" data-name="Line">
                                      <div className="absolute inset-[0_-0.5px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 272">
                                          <path d="M0.5 0V272" id="Line" stroke="var(--stroke-0, #F2F2F7)" strokeDasharray="2 2" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Value">
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#3c4148] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    40
                                  </p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[8px] h-full items-center relative shrink-0 w-0" data-name="Value">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Line-container">
                                  <div className="h-[8px] relative shrink-0 w-full" data-name="Empty" />
                                  <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="Plot-area">
                                    <div className="h-full relative shrink-0 w-0" data-name="Line">
                                      <div className="absolute inset-[0_-0.5px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 272">
                                          <path d="M0.5 0V272" id="Line" stroke="var(--stroke-0, #F2F2F7)" strokeDasharray="2 2" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Value">
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#3c4148] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    60
                                  </p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[8px] h-full items-center relative shrink-0 w-0" data-name="Value">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Line-container">
                                  <div className="h-[8px] relative shrink-0 w-full" data-name="Empty" />
                                  <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="Plot-area">
                                    <div className="h-full relative shrink-0 w-0" data-name="Line">
                                      <div className="absolute inset-[0_-0.5px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 272">
                                          <path d="M0.5 0V272" id="Line" stroke="var(--stroke-0, #F2F2F7)" strokeDasharray="2 2" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Value">
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#3c4148] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    80
                                  </p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[8px] h-full items-center relative shrink-0 w-0" data-name="Value">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Line-container">
                                  <div className="h-[8px] relative shrink-0 w-full" data-name="Empty" />
                                  <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="Plot-area">
                                    <div className="h-full relative shrink-0 w-0" data-name="Line">
                                      <div className="absolute inset-[0_-0.5px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 272">
                                          <path d="M0.5 0V272" id="Line" stroke="var(--stroke-0, #F2F2F7)" strokeDasharray="2 2" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Value">
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#3c4148] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    100
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Bars">
                            <div className="content-stretch flex flex-col items-start pb-[24px] relative size-full">
                              <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Bar">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[2px] items-center py-[12px] relative size-full">
                                    <div className="bg-[#2db04a] h-[32px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[193px]" data-name="Mark" />
                                    <div className="bg-[#ffbf24] content-stretch flex h-[32px] items-center relative shrink-0" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaaaaaaaaaaa
                                      </p>
                                    </div>
                                    <div className="bg-[#ffc7c3] content-stretch flex h-[32px] items-center relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaa
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Bar">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[2px] items-center py-[12px] relative size-full">
                                    <div className="bg-[#2db04a] h-[32px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[137px]" data-name="Mark" />
                                    <div className="bg-[#ffbf24] content-stretch flex h-[32px] items-center relative shrink-0" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaaaaaaaaaaa
                                      </p>
                                    </div>
                                    <div className="bg-[#ffc7c3] content-stretch flex h-[32px] items-center relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaa
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Bar">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[2px] items-center py-[12px] relative size-full">
                                    <div className="bg-[#2db04a] h-[32px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[261px]" data-name="Mark" />
                                    <div className="bg-[#ffbf24] content-stretch flex h-[32px] items-center relative shrink-0" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaaaaaaaaaaa
                                      </p>
                                    </div>
                                    <div className="bg-[#ffc7c3] content-stretch flex h-[32px] items-center relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaa
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Bar">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[2px] items-center py-[12px] relative size-full">
                                    <div className="bg-[#2db04a] h-[32px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[55px]" data-name="Mark" />
                                    <div className="bg-[#ffbf24] content-stretch flex h-[32px] items-center relative shrink-0 w-[74px]" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaaaaaaaaaaa
                                      </p>
                                    </div>
                                    <div className="bg-[#ffc7c3] content-stretch flex h-[32px] items-center relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaa
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Bar">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[2px] items-center py-[12px] relative size-full">
                                    <div className="bg-[#2db04a] h-[32px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[223px]" data-name="Mark" />
                                    <div className="bg-[#ffbf24] content-stretch flex h-[32px] items-center relative shrink-0" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaaaaaaaaaaa
                                      </p>
                                    </div>
                                    <div className="bg-[#ffc7c3] content-stretch flex h-[32px] items-center relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Mark">
                                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[transparent] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        aaaaaaa
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[13px] items-start relative shrink-0 w-full" data-name="Container">
                        <div className="content-stretch flex gap-[8.844px] h-[22.111px] items-center relative shrink-0" data-name="Container">
                          <div className="bg-[#2db04a] relative rounded-[18547658px] shrink-0 size-[8.844px]" data-name="Container" />
                          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3c4148] text-[14px] whitespace-nowrap">Đúng tiến độ</p>
                        </div>
                        <div className="content-stretch flex gap-[8.844px] h-[22.111px] items-center relative shrink-0" data-name="Container">
                          <div className="bg-[#f7cb45] relative rounded-[18547658px] shrink-0 size-[8.844px]" data-name="Container" />
                          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3c4148] text-[14px] whitespace-nowrap">Nguy cơ trễ</p>
                        </div>
                        <div className="content-stretch flex gap-[8.844px] h-[22.111px] items-center relative shrink-0" data-name="Container">
                          <div className="bg-[#ffc7c3] relative rounded-[18547658px] shrink-0 size-[8.844px]" data-name="Container" />
                          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3c4148] text-[14px] whitespace-nowrap">Trễ hạn</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch">
                      <div aria-hidden="true" className="absolute border border-[#e7e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-col items-center size-full">
                        <div className="content-stretch flex flex-col gap-[32px] items-center pb-[32px] pt-[16px] px-[16px] relative size-full">
                          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                            <div className="flex flex-[1_0_0] flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#1c252e] text-[16px]">
                              <p className="leading-[1.4]">Thống kê sử dụng nguồn lực</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content 1">
                              <div className="content-stretch flex items-center justify-between leading-[1.4] relative shrink-0 text-[#3c4148] w-full whitespace-nowrap">
                                <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[12px]">Phòng Tài chính (12 lượt tham gia dự án)</p>
                                <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[10px]">10%</p>
                              </div>
                              <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress bar">
                                <div className="bg-[#eff4fb] col-1 h-[12px] ml-0 mt-0 relative rounded-[21px] row-1 w-full" />
                                <div className="bg-[#2db04a] col-1 h-[12px] ml-0 mt-[0.33px] relative rounded-[21px] row-1 w-[22.67%]" />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content 6">
                              <div className="content-stretch flex items-center justify-between leading-[1.4] relative shrink-0 text-[#3c4148] w-full whitespace-nowrap">
                                <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[12px]">Phòng Nhân sự (7 lượt tham gia dự án)</p>
                                <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[10px]">10%</p>
                              </div>
                              <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress bar">
                                <div className="bg-[#eff4fb] col-1 h-[12px] ml-0 mt-0 relative rounded-[21px] row-1 w-full" />
                                <div className="bg-[#2db04a] col-1 h-[12px] ml-0 mt-0 relative rounded-[21px] row-1 w-[12.98%]" />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content 7">
                              <div className="content-stretch flex items-center justify-between leading-[1.4] relative shrink-0 text-[#3c4148] w-full whitespace-nowrap">
                                <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[12px]">Phòng IT ( 15 lượt tham gia dự án)</p>
                                <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[10px]">100%</p>
                              </div>
                              <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress bar">
                                <div className="bg-[#eff4fb] col-1 h-[12px] ml-0 mt-[0.33px] relative rounded-[21px] row-1 w-full" />
                                <div className="bg-[#f04438] col-1 h-[12px] ml-0 mt-0 relative rounded-[21px] row-1 w-[98.17%]" />
                              </div>
                              <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f04438] text-[12px] whitespace-nowrap">Cần bổ sung nhân lực</p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content 8">
                              <div className="content-stretch flex items-center justify-between leading-[1.4] relative shrink-0 text-[#3c4148] w-full whitespace-nowrap">
                                <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[12px]">Phòng IT (8 lượt tham gia dự án)</p>
                                <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[10px]">20%</p>
                              </div>
                              <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress bar">
                                <div className="bg-[#eff4fb] col-1 h-[12px] ml-0 mt-0 relative rounded-[21px] row-1 w-full" />
                                <div className="bg-[#2db04a] col-1 h-[12px] ml-0 mt-0 relative rounded-[21px] row-1 w-[27.24%]" />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content 5">
                              <div className="content-stretch flex items-center justify-between leading-[1.4] relative shrink-0 text-[#3c4148] w-full whitespace-nowrap">
                                <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[12px]">Cửu Long JOC (4 lượt tham gia dự án)</p>
                                <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[10px]">10%</p>
                              </div>
                              <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress bar">
                                <div className="bg-[#eff4fb] col-1 h-[12px] ml-0 mt-0 relative rounded-[21px] row-1 w-full" />
                                <div className="bg-[#2db04a] col-1 h-[12px] ml-0 mt-0 relative rounded-[21px] row-1 w-[21.76%]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="MyTasks">
                  <div className="overflow-x-auto overflow-y-clip size-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
                      <div className="absolute blur-[125.788px] h-[650px] left-[70px] opacity-16 top-[199.39px] w-[1210px]" data-name="Background Chat">
                        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1064.892px_1064.892px]" style={{ maskImage: `url('${imgElement}')` }} data-name="Element">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1210 650">
                            <ellipse cx="605" cy="325" fill="url(#paint0_radial_1_4220)" id="Element" rx="605" ry="325" />
                            <defs>
                              <radialGradient cx="0" cy="0" gradientTransform="matrix(-157.931 361.682 -673.284 -84.8389 703.601 213.74)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_4220" r="1">
                                <stop stopColor="#FF060A" />
                                <stop offset="1" stopColor="#FF2A2D" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="absolute bottom-[48.28%] left-[-40.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[435.203px_416.824px] mask-size-[1064.892px_1064.892px] right-1/2 top-[-39.14%]" style={{ maskImage: `url('${imgElement}')` }} data-name="Element">
                          <div className="absolute inset-[-32.09%_-17.24%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1478.59 969.735">
                              <g filter="url(#filter0_f_1_4150)" id="Element">
                                <ellipse cx="739.293" cy="484.868" fill="var(--fill-0, #5344FE)" fillOpacity="0.68" rx="549.741" ry="295.316" />
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="969.735" id="filter0_f_1_4150" width="1478.59" x="0" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result="effect1_foregroundBlur_1_4150" stdDeviation="94.7759" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[17.11%_-43.64%_17.11%_77.85%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-829.008px_-182.15px] mask-size-[1064.892px_1064.892px] mix-blend-overlay" style={{ maskImage: `url('${imgElement}')` }} data-name="Element">
                          <div className="absolute inset-[-53.82%_-28.91%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1256.39 887.972">
                              <g filter="url(#filter0_f_1_4175)" id="Element" style={{ mixBlendMode: "overlay" }}>
                                <ellipse cx="628.197" cy="443.986" fill="var(--fill-0, #FE445A)" rx="398.027" ry="213.816" />
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="887.972" id="filter0_f_1_4175" width="1256.39" x="0" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result="effect1_foregroundBlur_1_4175" stdDeviation="115.085" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[23.14%_53.56%_11.07%_-19.35%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[206.078px_-246.404px] mask-size-[1064.892px_1064.892px] mix-blend-overlay" style={{ maskImage: `url('${imgElement}')` }} data-name="Element">
                          <div className="absolute inset-[-53.82%_-28.91%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1256.39 887.972">
                              <g filter="url(#filter0_f_1_4148)" id="Element" style={{ mixBlendMode: "overlay" }}>
                                <ellipse cx="628.197" cy="443.986" fill="var(--fill-0, #D74D12)" rx="398.027" ry="213.816" />
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="887.972" id="filter0_f_1_4148" width="1256.39" x="0" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result="effect1_foregroundBlur_1_4148" stdDeviation="115.085" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[10.51%_4.5%_-2.93%_-2.46%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[26.172px_-111.896px] mask-size-[1064.892px_1064.892px] mix-blend-darken" style={{ maskImage: `url('${imgElement}')` }} data-name="Element">
                          <div className="absolute inset-[-13.52%_-6.85%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1347.73 763.207">
                              <g filter="url(#filter0_f_1_4275)" id="Element" style={{ mixBlendMode: "darken" }}>
                                <path d={svgPaths.p2d313900} fill="var(--fill-0, #AC0CB9)" fillOpacity="0.7" />
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="763.207" id="filter0_f_1_4275" width="1347.73" x="0" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                  <feGaussianBlur result="effect1_foregroundBlur_1_4275" stdDeviation="40.6183" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                          <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#0a0a0a] text-[18px] whitespace-nowrap">Quản trị rủi ro và kiểm soát</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[16px] h-[434px] items-start relative shrink-0 w-full">
                        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch">
                          <div aria-hidden="true" className="absolute border border-[#e7e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex flex-col justify-center size-full">
                            <div className="content-stretch flex flex-col items-start justify-between p-[16px] relative size-full">
                              <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[16px] whitespace-nowrap">
                                <p className="leading-[1.4]">Mốc theo mức độ rủi ro</p>
                              </div>
                              <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 size-[222.069px]" data-name="Container">
                                  <div className="content-stretch flex flex-col gap-[5.405px] h-[100px] items-center justify-center py-[15.539px] relative shrink-0 w-[217px]" data-name="Chart">
                                    <div className="-translate-x-1/2 absolute h-[99.992px] left-[calc(50%+4.43px)] top-[-0.78px] w-[199.984px]" data-name="Chart">
                                      <div className="absolute inset-[0_0_-100%_0]" data-name="Chart">
                                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 199.984 199.984">
                                          <g id="Chart">
                                            <path d={svgPaths.p16428a00} fill="var(--fill-0, #12B76A)" id="Ellipse 141" />
                                            <path d={svgPaths.p17225e00} fill="var(--fill-0, #FFC7C3)" id="Ellipse 144" />
                                            <path d={svgPaths.p2f25a000} fill="var(--fill-0, #FFBF24)" id="Ellipse 143" />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[calc(50%+2.5px)] top-[76.39px] whitespace-nowrap">
                                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#a2a5ae] text-[14px]">Tổng</p>
                                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[20px]">
                                      <p className="leading-[1.4]">48</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Total">
                                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center min-w-px relative" data-name="Total">
                                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Label">
                                        <div className="bg-[#12b76a] relative rounded-[10px] shrink-0 size-[8px]" data-name="Dot" />
                                        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3c4148] text-[14px] text-center whitespace-nowrap">Đúng tiến độ</p>
                                      </div>
                                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Number">
                                        <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#12b76a] text-[12px] whitespace-nowrap">50%</p>
                                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fi-rr-caret-up">
                                          <div className="absolute inset-[35.06%_22.56%_33.33%_22.56%]" data-name="Vector">
                                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78108 5.05719">
                                              <path d={svgPaths.p20d15380} fill="var(--fill-0, #12B76A)" id="Vector" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center min-w-px relative" data-name="Total">
                                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Label">
                                        <div className="bg-[#ffbf24] relative rounded-[10px] shrink-0 size-[8px]" data-name="Dot" />
                                        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3c4148] text-[14px] text-center whitespace-nowrap">Nguy cơ trễ</p>
                                      </div>
                                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Number">
                                        <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#12b76a] text-[12px] whitespace-nowrap">30%</p>
                                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fi-rr-caret-up">
                                          <div className="absolute inset-[35.06%_22.56%_33.33%_22.56%]" data-name="Vector">
                                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78108 5.05719">
                                              <path d={svgPaths.p20d15380} fill="var(--fill-0, #12B76A)" id="Vector" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center min-w-px relative" data-name="Total">
                                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Label">
                                        <div className="bg-[#ffc7c3] relative rounded-[10px] shrink-0 size-[8px]" data-name="Dot" />
                                        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#3c4148] text-[14px] text-center whitespace-nowrap">Trễ hạn</p>
                                      </div>
                                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Number">
                                        <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#12b76a] text-[12px] whitespace-nowrap">30%</p>
                                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fi-rr-caret-up">
                                          <div className="absolute inset-[35.06%_22.56%_33.33%_22.56%]" data-name="Vector">
                                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78108 5.05719">
                                              <path d={svgPaths.p20d15380} fill="var(--fill-0, #12B76A)" id="Vector" />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch">
                          <div aria-hidden="true" className="absolute border border-[#e7e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex flex-col items-center justify-center size-full">
                            <div className="content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
                              <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c252e] text-[16px] w-full">
                                <p className="leading-[1.4]">Tình trạng thực thi chỉ đạo</p>
                              </div>
                              <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[8px] h-[194px] items-center justify-center relative shrink-0 w-full" data-name="Half Donut">
                                  <div className="content-stretch flex flex-col gap-[8px] h-[148px] items-center justify-center py-[23px] relative shrink-0 w-full" data-name="Chart">
                                    <div className="-translate-x-1/2 absolute h-[148px] left-[calc(50%-0.33px)] top-0 w-[296px]" data-name="Chart">
                                      <div className="absolute inset-[0_0_-100%_0]" data-name="Chart">
                                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 296">
                                          <g id="Chart">
                                            <path d={svgPaths.p383c9980} fill="var(--fill-0, #E7E9ED)" id="Ellipse 141" />
                                            <path d={svgPaths.p3f400300} fill="var(--fill-0, #F04438)" id="Ellipse 141_2" />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[calc(50%+2.17px)] top-[113.68px] whitespace-nowrap">
                                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#a2a5ae] text-[14px]">Tổng</p>
                                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[20px]">
                                      <p className="leading-[1.4]">15</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                  <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
                                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                                      <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Text">
                                        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] relative shrink-0 text-[#3c4148] text-[12px] w-full">
                                          <p className="leading-[1.4]">Chỉ đạo chậm tiến độ</p>
                                        </div>
                                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                          <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#16181a] text-[24px] whitespace-nowrap">5</p>
                                          <div className="content-stretch flex items-center relative shrink-0">
                                            <div className="flex items-center justify-center relative shrink-0">
                                              <div className="flex-none rotate-180">
                                                <div className="overflow-clip relative size-[16px]" data-name="fi-rr-caret-up">
                                                  <div className="absolute inset-[35.06%_22.56%_33.33%_22.56%]" data-name="Vector">
                                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78108 5.05719">
                                                      <path d={svgPaths.p20d15380} fill="var(--fill-0, #F04438)" id="Vector" />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#f04438] text-[12px] whitespace-nowrap">-20.0%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                                      <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Text">
                                        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] relative shrink-0 text-[#3c4148] text-[12px] w-full">
                                          <p className="leading-[1.4]">Chỉ đạo hoàn thành</p>
                                        </div>
                                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                          <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#16181a] text-[24px] whitespace-nowrap">15</p>
                                          <div className="content-stretch flex items-center relative shrink-0">
                                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fi-rr-caret-up">
                                              <div className="absolute inset-[35.06%_22.56%_33.33%_22.56%]" data-name="Vector">
                                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78108 5.05719">
                                                  <path d={svgPaths.p20d15380} fill="var(--fill-0, #12B76A)" id="Vector" />
                                                </svg>
                                              </div>
                                            </div>
                                            <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#2db04a] text-[12px] whitespace-nowrap">+31.5%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                                    <div className="content-stretch flex items-center justify-between leading-[1.4] relative shrink-0 text-[14px] text-center w-full whitespace-nowrap">
                                      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#3c4148]">Chỉ đạo chậm trên 30 ngày</p>
                                      <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[red]">2</p>
                                    </div>
                                    <div className="h-0 relative shrink-0 w-full">
                                      <div className="absolute inset-[-1px_0_0_0]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320.667 1">
                                          <line id="Line 1" stroke="var(--stroke-0, #E7E9ED)" x2="320.667" y1="0.5" y2="0.5" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex items-center justify-between leading-[1.4] relative shrink-0 text-[14px] text-center w-full whitespace-nowrap">
                                      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#3c4148]">Thời gian chậm trung bình (ĐV: ngày)</p>
                                      <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[#3c1d1c]">12</p>
                                    </div>
                                    <div className="h-0 relative shrink-0 w-full">
                                      <div className="absolute inset-[-1px_0_0_0]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320.667 1">
                                          <line id="Line 1" stroke="var(--stroke-0, #E7E9ED)" x2="320.667" y1="0.5" y2="0.5" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex items-center justify-between leading-[1.4] relative shrink-0 text-[14px] text-center w-full whitespace-nowrap">
                                      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#3c4148]">Chỉ đạo sắp đến hạn</p>
                                      <p className="font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[#ffbf24]">5</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Frame">
                          <div aria-hidden="true" className="absolute border border-[#e7e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#16181a] text-[16px] whitespace-nowrap">Dự án nguy cơ cao</p>
                              <div className="content-stretch flex h-[356px] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative rounded-[8px] self-stretch" data-name="Frame">
                                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                                      <div className="bg-[#fef3f2] relative rounded-[16px] shrink-0 w-full" data-name="card-avatar/5">
                                        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
                                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                                            <div className="bg-[#ffe6e4] content-stretch flex items-center justify-center p-[5.217px] relative rounded-[104.348px] shrink-0 size-[24px]" data-name="Button">
                                              <div className="relative shrink-0 size-[13.565px]" data-name="stopwatch">
                                                <div className="absolute inset-[9.38%_17.71%_9.38%_13.54%]" data-name="stopwatch">
                                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.32609 11.0217">
                                                    <path d={svgPaths.p1ae9a700} fill="var(--fill-0, #F04438)" id="stopwatch" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
                                              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#16181a] text-[14px] w-[min-content]">Dự án D- ERP Platform</p>
                                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                                                <div className="relative shrink-0 size-[16px]" data-name="user">
                                                  <div className="absolute inset-[9.38%_17.71%]" data-name="user">
                                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
                                                      <path d={svgPaths.p992bda0} fill="var(--fill-0, #36373B)" id="user" />
                                                    </svg>
                                                  </div>
                                                </div>
                                                <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#16181a] text-[14px] whitespace-nowrap">Người phụ trách:</p>
                                                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#16181a] text-[14px] whitespace-nowrap">Nguyễn Văn A</p>
                                              </div>
                                              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                                                <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0">
                                                  <div className="relative shrink-0 size-[16px]" data-name="clock">
                                                    <div className="absolute inset-[5.21%]" data-name="clock">
                                                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                                                        <path d={svgPaths.p17070680} fill="var(--fill-0, #16181A)" id="clock" />
                                                      </svg>
                                                    </div>
                                                  </div>
                                                  <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#16181a] text-[14px] whitespace-nowrap">Thời gian:</p>
                                                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
                                                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f04438] text-[14px] whitespace-nowrap">28/11/2024</p>
                                                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Warning">
                                                        <div className="-translate-y-1/2 absolute h-[13.333px] left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
                                                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                                                            <path d={svgPaths.p108b8e80} fill="var(--fill-0, #FFBF24)" id="Vector" />
                                                          </svg>
                                                        </div>
                                                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-1/2 top-1/2 w-[1.333px]" data-name="Vector">
                                                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 8">
                                                            <path clipRule="evenodd" d={svgPaths.p16a4b300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f04438] text-[14px] whitespace-nowrap">Quá hạn 3 ngày</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg-white relative rounded-[200px] shrink-0 w-full" data-name="Button / Primary">
                                            <div className="flex flex-row items-center justify-center size-full">
                                              <div className="content-stretch flex items-center justify-center px-[16px] py-[5.5px] relative size-full">
                                                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button / Content">
                                                  <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#f04438] text-[12px] whitespace-nowrap">
                                                    <p className="leading-[1.4]">Chỉ đạo ngay</p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="bg-[#fef3f2] relative rounded-[16px] shrink-0 w-full" data-name="card-avatar/5">
                                        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
                                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                                            <div className="bg-[#ffe6e4] content-stretch flex items-center justify-center p-[5.217px] relative rounded-[104.348px] shrink-0 size-[24px]" data-name="Button">
                                              <div className="relative shrink-0 size-[13.565px]" data-name="stopwatch">
                                                <div className="absolute inset-[9.38%_17.71%_9.38%_13.54%]" data-name="stopwatch">
                                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.32609 11.0217">
                                                    <path d={svgPaths.p1ae9a700} fill="var(--fill-0, #F04438)" id="stopwatch" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
                                              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#16181a] text-[14px] w-[min-content]">Dự án D- ERP Platform</p>
                                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                                                <div className="relative shrink-0 size-[16px]" data-name="user">
                                                  <div className="absolute inset-[9.38%_17.71%]" data-name="user">
                                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 13">
                                                      <path d={svgPaths.p992bda0} fill="var(--fill-0, #36373B)" id="user" />
                                                    </svg>
                                                  </div>
                                                </div>
                                                <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#16181a] text-[14px] whitespace-nowrap">Người phụ trách:</p>
                                                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#16181a] text-[14px] whitespace-nowrap">Nguyễn Văn A</p>
                                              </div>
                                              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                                                <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0">
                                                  <div className="relative shrink-0 size-[16px]" data-name="clock">
                                                    <div className="absolute inset-[5.21%]" data-name="clock">
                                                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
                                                        <path d={svgPaths.p17070680} fill="var(--fill-0, #16181A)" id="clock" />
                                                      </svg>
                                                    </div>
                                                  </div>
                                                  <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#16181a] text-[14px] whitespace-nowrap">Thời gian:</p>
                                                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
                                                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f04438] text-[14px] whitespace-nowrap">28/11/2024</p>
                                                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Warning">
                                                        <div className="-translate-y-1/2 absolute h-[13.333px] left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
                                                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                                                            <path d={svgPaths.p108b8e80} fill="var(--fill-0, #FFBF24)" id="Vector" />
                                                          </svg>
                                                        </div>
                                                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-1/2 top-1/2 w-[1.333px]" data-name="Vector">
                                                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 8">
                                                            <path clipRule="evenodd" d={svgPaths.p16a4b300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#f04438] text-[14px] whitespace-nowrap">Quá hạn 3 ngày</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg-white relative rounded-[200px] shrink-0 w-full" data-name="Button / Primary">
                                            <div className="flex flex-row items-center justify-center size-full">
                                              <div className="content-stretch flex items-center justify-center px-[16px] py-[5.5px] relative size-full">
                                                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button / Content">
                                                  <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#f04438] text-[12px] whitespace-nowrap">
                                                    <p className="leading-[1.4]">Chỉ đạo ngay</p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
                </div>
                <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="MyTasks">
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                      <div className="bg-[#eff8ff] min-w-[255px] relative rounded-[16px] shadow-[0px_2px_4px_0px_rgba(25,33,61,0.08)] shrink-0 w-full" data-name="Component 5">
                        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-start min-w-[inherit] p-[24px] relative size-full">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="relative rounded-[200px] shrink-0 size-[32px]" data-name="Circle Avatar">
                                <div className="overflow-clip relative rounded-[inherit] size-full">
                                  <div className="absolute left-0 pointer-events-none rounded-[64px] size-[32px] top-0" data-name="Avatar/06">
                                    <div aria-hidden="true" className="absolute bg-[#f6faff] inset-0 rounded-[64px]" />
                                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2px_4px_0px_rgba(35,136,255,0.08)]" />
                                  </div>
                                  <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="magicoon">
                                    <div className="absolute inset-[9.39%_9.4%_9.42%_9.39%]" data-name="magicoon">
                                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9928 12.9914">
                                        <path d={svgPaths.p271ddc00} fill="var(--fill-0, #0A58C8)" id="magicoon" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div aria-hidden="true" className="absolute border border-[#f0f2f5] border-solid inset-0 pointer-events-none rounded-[200px]" />
                              </div>
                              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#16181a] text-[16px] whitespace-nowrap">AI Insight</p>
                            </div>
                            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#16181a] text-[14px] w-[min-content]">Project is currently at risk with SPI of 0.82 - key milestones (MÔC A, MÔC D) require immediate attention due to significant variance from planned progress. Recommend reallocating team capacity to address high-risk milestones or revise project timeline.</p>
                            <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[200px] shrink-0" data-name="Button / Primary">
                              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button / Content">
                                <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#0a58c8] text-[14px] whitespace-nowrap">
                                  <p className="leading-[1.4]">{`Xem chi tiết `}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}