import MoreFeaturesSection from "../components/dashboard/MoreFeaturesSection";
import NewsSection from "../components/dashboard/NewsSection";
import PerformanceSection from "../components/dashboard/PerformanceSection";
import ScheduleSection from "../components/dashboard/ScheduleSection";
import TodoSection from "../components/dashboard/TodoSection";
import WeatherSection from "../components/dashboard/WeatherSection";
import WelcomeSection from "../components/dashboard/WelcomeSection";

const Dashboard = () => {
  return (
    <>
      <WelcomeSection />
      <WeatherSection />
      <TodoSection />
      <PerformanceSection />
      <NewsSection />
      <ScheduleSection />
      <MoreFeaturesSection />
    </>
  );
};

export default Dashboard;
