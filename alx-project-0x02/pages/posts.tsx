import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                <p className="text-5xl font-bold">Posts</p>
            </div>
        </div>
    );
}

export default Posts