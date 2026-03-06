import Sidebar from "@/components/Sidebar";
import ContentTabs from "@/components/ContentTabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 lg:p-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6 items-start">
        <Sidebar />
        <ContentTabs />
      </div>
    </div>
  );
};

export default Index;
