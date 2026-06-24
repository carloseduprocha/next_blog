import { PostsList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {

    return (
        <div>
            <header>
                <h1 className="text-6xl font-bold text-center py-8">
                    Aqui é o header
                </h1>
            </header>

            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense>
            <footer>
                <p className="text-6xl font-bold text-center py-8">Footer</p>
            </footer>
        </div>
    );
}
