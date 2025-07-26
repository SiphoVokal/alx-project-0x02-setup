import Header from "@/components/layout/Header";
import Button from "../components/common/Button";

const About: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl font-bold mb-6">About</h1>
        <div className="flex space-x-4">
          <Button title="Small" size="small" shape="rounded-sm" />
          <Button title="Medium" size="medium" shape="rounded-md" />
          <Button title="Large" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
};

export default About;
