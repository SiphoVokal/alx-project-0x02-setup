import Card from "../components/common/Card";
import Header from "@/components/layout/Header";


const Home: React.FC = () => {
    return (
      <div >
        <Header />
        <div className="flex flex-col items-center space-y-4 p-6">
        <Card
          title="Welcome to Our Site"
          content="This is the first card component with some introductory content."
        />
        <Card
          title="Features"
          content="Our platform offers great features to help you get started quickly."
        />
        <Card
          title="Contact Us"
          content="Have any questions? Reach out to our support team anytime."
        />
        </div>
      </div>
    );
}

export default Home;