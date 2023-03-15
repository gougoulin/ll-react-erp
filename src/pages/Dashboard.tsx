import styled from "styled-components";
import { colors, space } from "../assets/css/params";
import MoreFeaturesSection from "../components/dashboard/MoreFeaturesSection";
import NewsSection from "../components/dashboard/NewsSection";
import PerformanceSection from "../components/dashboard/PerformanceSection";
import ScheduleSection from "../components/dashboard/ScheduleSection";
import TodoSection from "../components/dashboard/TodoSection";
import WeatherSection from "../components/dashboard/WeatherSection";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import PageSwitchAnimationWrapper from "../components/PageSwitchAnimationWrapper";

export const MainContentLayout = styled.div`
  flex: 1;
  padding: ${space.medium};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-content: flex-start;
  gap: ${space.medium};
  background: ${colors.gray4};
`;

const Dashboard = () => {
  return (
    <PageSwitchAnimationWrapper>
      <MainContentLayout>
        <WelcomeSection />
        <WeatherSection />
        <TodoSection />
        <PerformanceSection />
        <NewsSection />
        <ScheduleSection />
        <MoreFeaturesSection />
      </MainContentLayout>
    </PageSwitchAnimationWrapper>
  );
};

export default Dashboard;
