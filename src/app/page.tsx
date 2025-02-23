// app/page.tsx

import ChatInterface from '../../components/ChatInterface'; // Corrected import path for components in root

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">

            <ChatInterface />
        </main>
    );
}