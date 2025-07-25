import Link from "next/link";
import Header from "@/components/layout/Header"

const About: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center">
                <h1 className="text-5xl font-bold">about</h1>
            </main>
        </div>
    );
}

export default About;