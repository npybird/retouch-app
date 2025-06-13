"use client";

import { Form, Input, Button, RadioGroup, Radio, Alert, Select, SelectItem } from "@heroui/react";
import { DatePicker } from "@heroui/date-picker";
import { useState, useEffect } from "react";

export default function ReceiptFormPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const storedImage = sessionStorage.getItem("capturedImage");
    setImage(storedImage);
  }, []);

  return (
    <section className="flex flex-col gap-2 md:py-10">
      <div className="items-start justify-start border-b-1 pb-2 dark:border-white border-gray-500">
        <span className="text-lg">Campaign I :</span>
        <h2 className="text-2xl font-bold text-left dark:text-cyan-300 text-blue-600">Receipt to Rewards</h2>
      </div>

      <div className="text-md mb-4">
        <span>Please </span>
        <span className="text-lg font-semibold dark:text-cyan-300 text-blue-600">fill up&nbsp;</span>
        <span>a receipt </span>
        <span className="text-lg font-semibold dark:text-pink-400 text-red-600">details</span>
      </div>

      {image && (
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt="Uploaded receipt"
            className="w-full max-w-xs rounded shadow"
          />
        </div>
      )}

      <Form className="flex flex-col gap-4 max-w-md">
        <Input
          name="receiptNumber"
          label="Receipt No."
          labelPlacement="outside"
          startContent="receipt-"
          type="number"
          maxLength={6}
          isRequired
          placeholder="eg. 696969"
          description="Only 6-digit receipt is allowed"
        />

        <DatePicker
          name="receiptDate"
          label="Receipt accuired date"
          labelPlacement="outside"
          isRequired
        />

        <Select
          isRequired
          name="category"
          label="Type of services/products"
          labelPlacement="outside"
          placeholder="Please select the type of your receipt"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <SelectItem key="food">Foods & Beverages</SelectItem>
          <SelectItem key="shopping">Shopping</SelectItem>
          <SelectItem key="transport">Transports</SelectItem>
          <SelectItem key="entertainment">Entertainments</SelectItem>
          <SelectItem key="health">Health & Beauty</SelectItem>
          <SelectItem key="education">Education</SelectItem>
          <SelectItem key="bills">Bills</SelectItem>
          <SelectItem key="online">Online Shopping</SelectItem>
          <SelectItem key="donation">Donation</SelectItem>
          <SelectItem key="other">Others</SelectItem>
        </Select>

        {selectedCategory === "other" && (
          <Input
            name="customCategory"
            label="Others"
            labelPlacement="outside"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            isRequired
            placeholder="eg. Drugs/Toys/Onlyfans Subscription"
          />
        )}

        <Input
          name="amount"
          label="Receipt amount"
          labelPlacement="outside"
          endContent="฿"
          type="number"
          min={0}
          step="0.01"
          placeholder="eg. 250.00"
          isRequired
        />

        <div className="mt-2 self-center">
          <Button
            type="submit"
            className="dark:bg-cyan-300 bg-blue-500 dark:text-black text-white"
          >Submit</Button>
        </div>
      </Form>

    </section>
  );
}
