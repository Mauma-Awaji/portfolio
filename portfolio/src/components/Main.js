export default function Main() {
  return (
    <main className="flex justify-between flex-grow ">
      {/*-- Left column */}
      <section className="w-1/8 p-6 bg-white shadow-md rounded">
        {/*-- Projects*/}
      </section>
      {/*-- Middle column */}
      <div className="flex-grow bg-gradient-to-b from-red-700 to-blue-500 text-white text-center p-16 shadow-lg"></div>
      {/*-- Right column */}
      <aside className="w-1/8 p-6 bg-gray-200 shadow-md rounded ml-auto"></aside>
    </main>
  );
}
