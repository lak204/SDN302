import HumanTable from './components/HumanTable';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Human Database</h1>
        <HumanTable />
      </main>
    </div>
  );
}
