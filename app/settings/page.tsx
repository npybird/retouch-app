"use client";

export default function SettingsPage() {
  return (
    <section className="flex flex-col gap-2 md:py-10">
      <div className="items-start justify-start border-b-1 pb-2 dark:border-white border-gray-500">
        <span className="text-lg">Setting Page :</span>
        <h2 className="text-2xl font-bold text-left dark:text-cyan-300 text-blue-600">Settings</h2>
      </div>

      <div className="text-md mb-4">
        <span>Please </span>
        <span className="text-lg font-semibold dark:text-cyan-300 text-blue-600">capture&nbsp;</span>
        <span>or </span>
        <span className="text-lg font-semibold dark:text-pink-400 text-red-600">upload </span>
        <span>a receipt picture</span>
      </div>
    </section >
  );
}
