"use client";

import { supabase } from "@/lib/supabase";

import { useState, useRef } from "react";

import { useRouter } from "next/navigation";

import { CameraIcon } from "@/components/icons";

import Webcam from "react-webcam";

const generateReceiptNumber = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // สุ่มเลข 6 หลัก
};

export default function CameraPage() {
  const router = useRouter();

  const webcamRef = useRef<Webcam>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [imageCaptured, setImageCaptured] = useState(false);

  const base64ToFile = (base64: string, filename: string): File => {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1] ?? "image/jpeg";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
  };

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setScreenshot(imageSrc);
      setImageCaptured(true);
      sessionStorage.setItem("capturedImage", imageSrc);
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setScreenshot(url);
      setImageCaptured(true);
      sessionStorage.setItem("capturedImage", url);
    }
  };

  return (
    <section className="flex flex-col gap-2 md:py-10">
      <div className="items-start justify-start border-b-1 pb-2 dark:border-white border-gray-500">
        <span className="text-lg">Campaign I :</span>
        <h2 className="text-2xl font-bold text-left dark:text-cyan-300 text-blue-600">Receipt to Rewards</h2>
      </div>

      <div className="text-md mb-4">
        <span>Please </span>
        <span className="text-lg font-semibold dark:text-cyan-300 text-blue-600">capture&nbsp;</span>
        <span>or </span>
        <span className="text-lg font-semibold dark:text-pink-400 text-red-600">upload </span>
        <span>a receipt picture</span>
      </div>

      {!screenshot ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded shadow w-full max-w-xs"
          videoConstraints={{ facingMode: "environment" }}
        />
      ) : (
        <img src={screenshot} alt="preview" className="w-full max-w-xs rounded shadow" />
      )}

      <div className="flex flex-col gap-3 mt-4">
        <button
          onClick={capture}
          className="flex w-full py-2 px-4 rounded-full justify-center items-center dark:bg-cyan-300 bg-blue-500 dark:text-black text-white dark:hover:bg-cyan-600 hover:bg-blue-700/70"
        >
          <CameraIcon />&nbsp;ถ่ายภาพจากกล้อง
        </button>

        <label className="flex w-full py-2 px-4 rounded-full justify-center items-center dark:bg-emerald-400 bg-green-500 text-white cursor-pointer hover:bg-green-700">
          📁 อัปโหลดภาพจากเครื่อง
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>
      {imageCaptured && screenshot && (
        <button
          onClick={() => router.push("/receipt-form")}
          className="mt-4 py-2 px-4 rounded-full dark:bg-green-500 bg-emerald-500 dark:text-black text-white dark:hover:bg-green-800 hover:bg-emerald-800"
        >
          Next
        </button>
      )}
    </section >
  );
}
