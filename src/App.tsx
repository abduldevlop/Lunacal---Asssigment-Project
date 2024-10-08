import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useState } from "react";
import { tabs } from "./data/tabs.json";

const App = () => {
  const [selectTab, setSelectTab] = useState("about");
  const tabSection = [
    { id: 1, title: "About Me", value: "about" },
    { id: 2, title: "Experiences", value: "experiences" },
    { id: 3, title: "Recommended", value: "recommended" },
  ];

  return (
    <div className="p-6 h-screen bg-[#272B30] text-white flex justify-center w-screen">
      {/* Left Half - Empty for larger screens */}
      <div className="w-1/2 hidden lg:block"></div>

      {/* Right Half - Content */}
      <div className="w-full lg:w-1/2">
        {/* Profile Info Section */}
        <Card className="w-full max-w-xl lg:w-[720px] h-auto p-2 lg:h-[255px] lg:mt-[-24px] rounded-br-xl rounded-bl-xl rounded-t-none bg-[#2F343A] border-none shadow-custom relative">
          <img
            src="/question-icon.svg"
            alt="question"
            className="absolute top-1 left-3 w-6"
          />
          <img
            src="/menu-icon.svg"
            alt="menu"
            className="absolute bottom-24 left-3 w-6"
          />
          <div>
            <Tabs
              defaultValue="about"
              className="flex flex-col items-center h-auto lg:h-[250px] "
            >
              <TabsList
                title="About Me"
                className="bg-[#141415] flex justify-center gap-2 mt-2 w-[85%] p-1 rounded-2xl"
                defaultValue={"about"}
              >
                {tabSection.map((tab) => (
                  <TabsTrigger
                    value={tab.value}
                    key={tab.id}
                    onClick={() => setSelectTab(tab.value)}
                    className={`w-[195px] h-[49px] ${
                      tab.value === selectTab
                        ? "bg-[#2b2b2c] text-white"
                        : "hover:bg-[#171718]"
                    } border-none bg-transparent  active:outline-none focus:outline-none  rounded-2xl text-[#A3ADB2] outline-none transition-all ease-in-out`}
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tabs Content */}
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="overflow-y-scroll px-12 my-5 py-5 h-auto lg:h-64 custom-scrollbar text-[#969696] font-[400] text-[17px] leading-[25.2px] plus-jakarta-sans"
                >
                  <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </Card>

        <div
          className="w-full lg:w-[500px] ml-10 my-5 h-[4px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
            boxShadow: "0px 4px 4px 0px #00000054",
          }}
        />

        {/* Gallery Section */}
        <Card className="w-full max-w-xl h-auto lg:h-[300px] rounded-2xl border-none shadow-custom bg-[#363C43] relative px-6 lg:px-10 pt-5">
          <img
            src="/question-icon.svg"
            alt="question"
            className="absolute top-5 left-3 w-6"
          />
          <img
            src="/menu-icon.svg"
            alt="menu"
            className="absolute bottom-24 left-3 w-6"
          />

          <div className="flex justify-between items-center mb-4">
            <Button className="text-[16px] ml-5 bg-[#171717] text-white w-[130px] py-6 rounded-xl  active:outline-none focus:outline-none hover:border-none">
              Gallery
            </Button>

            <Button
              variant="outline"
              className=" active:outline-none focus:outline-none hover:border-none flex items-center bg-[#41474D] border-none text-white text-sm px-5 py-6 
               rounded-full shadow-[0px_3.26px_3.26px_#FFFFFF26_inset,0px_0px_48.91px_#FFFFFF0D_inset,9px_10px_7.1px_#00000066,-0.5px_-0.5px_6.9px_#FFFFFF40] 
               hover:outline-none hover:bg-[#41474D] hover:text-white cursor-pointer"
            >
              <Plus className="mr-2" size={18} />
              Add Image
            </Button>

            <div className="flex items-center gap-5">
              <div className="bg-[#252627] rounded-full text-[#6F787C] p-2 shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] cursor-pointer">
                <ArrowLeft />
              </div>
              <div className="bg-[#252627] rounded-full text-[#6F787C] p-2 shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] cursor-pointer">
                <ArrowRight />
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex space-x-4 overflow-x-auto mt-10 ml-5">
            <img
              src="/image-1.png"
              alt="Image 1"
              className="w-[145px] h-[150px] rounded-[24px] filter grayscale hover:filter-none transition-all cursor-pointer duration-500 ease-in-out"
            />
            <img
              src="/image-2.png"
              alt="Image 2"
              className="w-[145px] h-[150px] rounded-[24px] filter grayscale hover:filter-none transition-all cursor-pointer duration-500 ease-in-out"
            />
            <img
              src="/image-3.png"
              alt="Image 3"
              className="w-[140px] h-[150px] rounded-[24px] filter grayscale hover:filter-none transition-all cursor-pointer duration-500 ease-in-out"
            />
          </div>
        </Card>

        <div
          className="w-full lg:w-[500px] ml-10 my-2 h-[4px] mt-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
            boxShadow: "0px 4px 4px 0px #00000054",
          }}
        />
      </div>
    </div>
  );
};

export default App;
