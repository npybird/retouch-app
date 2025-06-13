"use client";

import {
  Progress,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Accordion,
  AccordionItem,
  Checkbox,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@heroui/react";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  ArrowClickIcon,
  CouponIcon,
  CameraIcon,
  TimeIcon,
  HelpIcon,
  ReceiptIcon,
  GiftIcon,
  NoIcon
} from "@/components/icons";

export default function ReceiptPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const submissionHistory = [
    {
      date: "June 10, 2025",
      receipt: "receipt-123456",
      price: 350,
      status: "Approved",
    },
    {
      date: "June 8, 2025",
      receipt: "receipt-654321",
      price: 520,
      status: "Pending",
    },
    {
      date: "June 6, 2025",
      receipt: "receipt-987654",
      price: 150,
      status: "Rejected",
    },
    {
      date: "June 2, 2025",
      receipt: "receipt-696969",
      price: 690,
      status: "Approved",
    },
    {
      date: "June 12, 2025",
      receipt: "receipt-969696",
      price: 960,
      status: "Approved",
    },
  ];

  const sortedSubmissionHistory = [...submissionHistory].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="flex flex-col gap-2 md:py-10">
      <div className="items-start justify-start border-b-1 pb-2 dark:border-white border-gray-500">
        <span className="text-lg">Campaign I :</span>
        <h2 className="text-2xl font-bold text-left dark:text-cyan-300 text-blue-600">Receipt to Rewards</h2>
      </div>

      <div className="text-md">
        <span>Turn your </span>
        <span className="font-bold">receipts&nbsp;</span>
        <span>into exciting </span>
        <span className="font-bold">rewards!&nbsp;</span>
      </div>
      <div className="text-sm">
        <span>Simply scan your receipt from any purchase, You’ll receive exclusive discount coupons or special privileges in return. Whether it’s shopping, dining, or other services—and fill in a short form. </span>
        <br />
        <span className="font-bold">It’s fast, easy, and rewarding. Don’t miss out!</span>
      </div>

      <div className="flex flex-col justify-center items-center my-2">
        <Card className="w-[90vw] h-[20vh] border-none bg-gradient-to-b dark:from-cyan-200 dark:to-cyan-600 from-blue-200 to-blue-600">
          <CardHeader className="text-lg pb-0 dark:text-black text-gray-800 justify-center font-semibold">
            <span className="text-2xl">🚀&nbsp;</span>
            <span className="text-md"> Your&nbsp;</span>
            <span className="text-2xl dark:text-pink-400 text-red-600 font-bold">Progression&nbsp;</span>
            <span className="text-2xl">🚀</span>
          </CardHeader>
          <CardBody className="">
            <Progress
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r dark:from-red-500 from-red-800 dark:to-pink-300 to-pink-500",
                label: "tracking-wider text-md font-semibold dark:text-black text-gray-800",
                value: "font-semibold dark:text-pink-500 text-red-600 absolute left-[69%] -translate-x-1/2",
              }}
              label="🎟️"
              radius="sm"
              showValueLabel={true}
              size="md"
              value={69}
            />

            <div
              className="absolute left-[69%] -translate-x-4 top-[55%] -translate-y-1/2"
            >
              <div className="text-2xl">🏃🏻‍➡️</div>
            </div>
          </CardBody>
          <CardFooter className="text-tiny justify-center items-center pt-0 dark:text-black text-cyan-50">valid until 7/31/25</CardFooter>
        </Card>
      </div>

      <div className="flex flex-col my-2">
        <Accordion>
          <AccordionItem
            key="rules"
            aria-label="Campaign Rules"
            indicator={({ isOpen }) => (isOpen ? <CouponIcon /> : <ArrowClickIcon />)}
            title="📜 Campaign Rules"
            classNames={
              { title: "text-lg font-semibold pb-2 border-b-1 justify-start items-start dark:text-cyan-300 text-blue-600" }
            }
          >
            <Accordion className="justify-center items-center">
              <AccordionItem key="duration" aria-label="Campaign Duration" indicator={<TimeIcon />} title="Ⅰ. Campaign Duration">
                <ul className="list-disc ml-5 text-sm">
                  <li>From June 1, 2025 to July 31, 2025 (or while supplies last)</li>
                </ul>
              </AccordionItem>

              <AccordionItem key="participate" aria-label="How to Participate" indicator={<HelpIcon />} title="Ⅱ. How to Participate">
                <ul className="list-disc ml-5 text-sm">
                  <li>Upload or take a picture of a receipt from any purchase (shopping, dining, or services)</li>
                  <li>Fill out the form completely: name, phone number, email, and attach the receipt</li>
                </ul>
              </AccordionItem>

              <AccordionItem key="requirements" aria-label="Receipt Requirements" indicator={<ReceiptIcon />} title="Ⅲ. Receipt Requirements">
                <ul className="list-disc ml-5 text-sm">
                  <li>The receipt must be dated within the campaign period</li>
                  <li>One receipt per submission</li>
                  <li>Receipt must clearly show the store name, date, and purchase amount</li>
                </ul>
              </AccordionItem>

              <AccordionItem key="rewards" aria-label="Rewards" indicator={<GiftIcon />} title="Ⅳ. Rewards">
                <ul className="list-disc ml-5 text-sm">
                  <li>Participants will receive exclusive discount coupons or special privileges</li>
                  <li>Reward details are subject to change without prior notice</li>
                </ul>
              </AccordionItem>

              <AccordionItem key="violation" aria-label="Violation of Terms" indicator={<NoIcon />} title="Ⅴ. Violation of Terms">
                <ul className="list-disc ml-5 text-sm">
                  <li>Any fraud, tampering, or falsification will result in disqualification and possible legal action</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </AccordionItem>
        </Accordion>

        <div className="mt-6">
          <span className="text-lg font-semibold text-blue-600 dark:text-cyan-300">📅 Submission History</span>
          <div className="max-h-[50vh] overflow-y-auto mt-3">
            <ul className="space-y-2 text-sm">
              {sortedSubmissionHistory.map((entry) => (
                <li
                  key={entry.receipt}
                  className="border dark:border-cyan-300 border-blue-500 rounded p-3"
                >
                  <div>📆 {entry.date}</div>
                  <div>
                    🧾 Receipt: <span className="font-mono">{entry.receipt}</span>
                  </div>
                  <div>
                    💰 Price: <span className="font-medium">{entry.price} baht</span>
                  </div>
                  <div>
                    📋 Status:{" "}
                    <span
                      className={
                        entry.status === "Approved"
                          ? "text-green-600 font-semibold"
                          : entry.status === "Pending"
                            ? "text-yellow-500 font-semibold"
                            : "text-red-600 font-semibold"
                      }
                    >
                      {entry.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-3">
          <Checkbox
            isRequired
            id="terms-checkbox"
            isSelected={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="terms-checkbox" className="text-sm text-gray-800 dark:text-white">
            I have read and accept all&nbsp;
            <span
              className="dark:text-cyan-300 text-blue-600 underline cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleOpen();
              }}
            >
              terms & conditions
            </span>
          </label>
        </div>

        <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
          <ModalContent>
            <ModalHeader className="text-lg font-bold">Terms & Conditions</ModalHeader>
            <ModalBody>
              {/* Add your terms and conditions content here */}
              <p>All participants must comply with the campaign rules and guidelines...</p>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={handleClose}
                className="dark:bg-cyan-300 bg-blue-600 dark:text-black text-white dark:hover:bg-cyan-600 hover:bg-blue-900"
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button
          className="w-full mt-4 dark:bg-cyan-300 dark:hover:bg-cyan-600 bg-blue-600 hover:bg-blue-800 dark:text-black text-white "
          onClick={() => {
            if (!isChecked) {
              setShowError(true);
              return;
            }
            setShowError(false);
            router.push("/camera");
          }}
        >
          <CameraIcon /> Proceed to Camera
        </Button>
        {showError && (
          <p className="text-red-600 mt-2 text-sm">Please accept the terms & conditions before continuing.</p>
        )}
      </div>


    </section>
  );
}
