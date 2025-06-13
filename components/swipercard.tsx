import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import {
    RadioGroup,
    useRadio,
    VisuallyHidden,
    RadioProps,
    cn,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Link,
    useDisclosure,
    CircularProgress,
    Card,
    CardBody,
    CardFooter,
    Chip,
} from "@heroui/react";

export const CouponSelect = (props: RadioProps) => {
    const {
        Component,
        children,
        description,
        getBaseProps,
        getWrapperProps,
        getInputProps,
        getLabelProps,
        getLabelWrapperProps,
        getControlProps,
    } = useRadio(props);

    return (
        <Component
            {...getBaseProps()}
            className={cn(
                "group inline-flex items-center justify-between hover:bg-content2 flex-row-reverse",
                "max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
                "data-[selected=true]:border-primary",
            )}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <span {...getWrapperProps()}>
                <span {...getControlProps()} />
            </span>
            <div {...getLabelWrapperProps()}>
                {children && <span {...getLabelProps()}>{children}</span>}
                {description && (
                    <span className="text-small text-foreground opacity-70">{description}</span>
                )}
            </div>
        </Component>
    );
};

export function SwiperCard() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const Card1 = () => (
        <div className="rounded-xl h-48 bg-background border-2 dark:border-cyan-300 border-blue-600 text-foreground shadow-md dark:shadow-cyan-200 shadow-blue-500 px-6 py-5 mx-10 mb-10 text-start">
            <div className="grid grid-cols-2 justify-between h-full">
                <div className="flex flex-col justify-center items-center border-r-1">
                    <span className="text-3xl">⭐️</span>
                    <div className="font-bold mt-2 mb-1 text-center">
                        <span className="text-2xl dark:text-cyan-300 text-blue-600">696 </span>
                        <span className="text-lg text-foreground">Points</span>
                    </div>
                    <div className="text-sm font-semibold">
                        <span className="text-foreground">Your Total Points</span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center ml-2">
                    <span className="text-3xl">🎯</span>
                    <div className="font-bold mt-2 mb-1">
                        <span className="text-2xl dark:text-pink-600 text-red-600">1,000 </span>
                        <span className="text-lg text-foreground">Points</span>
                    </div>
                    <div className="text-sm font-semibold">
                        <span className="text-foreground">Your Target Points</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const Card2 = () => (
        <div className="rounded-xl h-48 overflow-hidden bg-background border-2 dark:border-cyan-300 border-blue-600 text-foreground shadow-md dark:shadow-cyan-200 shadow-blue-500 px-6 py-5 mx-10 mb-10 text-start">
            <div className="grid grid-cols-2 justify-between h-full">
                <div className="flex flex-col justify-center items-start">
                    <span className="text-3xl text-center">🎟️</span>
                    <div className="font-bold mt-2 mb-1 text-center">
                        <span className="text-2xl dark:text-cyan-300 text-blue-600">69 </span>
                        <span className="text-lg text-foreground">Coupons</span>
                    </div>

                    <div className="text-sm font-semibold">
                        <span className="text-foreground">Your Total Coupons</span>
                    </div>

                    <Link className="mt-2 text-sm" onPress={onOpen}>See all coupons</Link>
                    <Modal
                        backdrop="opaque"
                        placement="center"
                        classNames={{
                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                        }}
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                    >
                        <ModalContent>
                            {(onclose) => (
                                <>
                                    <ModalHeader className="flex flex-col text-2xl mt-2 gap-1">Your Coupons</ModalHeader>
                                    <ModalBody>
                                        <div className="flex flex-col justify-start items-center ml-2 overflow-y-auto max-h-[70vw]">
                                            <RadioGroup className="w-full justify-stretch" label="Apply your coupons">
                                                <CouponSelect description="Min. spend ฿199, Max. ฿100" value="5-percent">
                                                    5% Discount
                                                </CouponSelect>

                                                <CouponSelect description="Min. spend ฿499, Max. ฿200" value="10-percent">
                                                    10% Discount
                                                </CouponSelect>

                                                <CouponSelect description="Min. spend ฿999, Max. ฿300" value="15-percent">
                                                    15% Discount
                                                </CouponSelect>

                                                <CouponSelect description="Min. spend ฿1299, Max. ฿500" value="20-percent">
                                                    20% Discount
                                                </CouponSelect>

                                                <CouponSelect description="Min. spend ฿1499" value="500-baht">
                                                    ฿500 Off
                                                </CouponSelect>

                                                <CouponSelect description="Min. spend ฿1999" value="1000-baht">
                                                    ฿1000 Off
                                                </CouponSelect>

                                                <CouponSelect description="Min. spend ฿6969" value="free">
                                                    Free
                                                </CouponSelect>
                                            </RadioGroup>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onclose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onclose}>
                                            Apply
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>

                <div className="flex flex-col justify-start items-center ml-2 overflow-y-auto max-h-full">
                    <RadioGroup label="Apply your coupons">
                        <CouponSelect
                            description="Min. spend ฿199, Max. ฿100"
                            value="5-percent">
                            5% Discount
                        </CouponSelect>

                        <CouponSelect description="Min. spend ฿499, Max. ฿200" value="10-percent">
                            10% Discount
                        </CouponSelect>

                        <CouponSelect description="Min. spend ฿999, Max. ฿300" value="15-percent">
                            15% Discount
                        </CouponSelect>
                    </RadioGroup>
                </div>
            </div>
        </div>
    );

    const Card3 = () => (
        <div className="rounded-xl h-48 bg-background border-2 dark:border-cyan-300 border-blue-600 text-foreground shadow-md dark:shadow-cyan-200 shadow-blue-500 px-6 py-5 mx-10 mb-10 text-start">
            <div className="grid grid-cols-2 justify-between h-full">
                <div className="flex flex-col">
                    <span className="text-3xl text-center">🚀</span>
                    <div className="font-bold mt-2 mb-1">
                        <span className="block text-lg text-foreground text-start">Your </span>
                        <span className="block text-2xl text-center dark:text-cyan-300 text-blue-600">Progress</span>
                        <span className="block text-lg text-end text-foreground">Today</span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center ml-2">
                    <Card className="w-[30vw] h-[30vw] border-none bg-gradient-to-br dark:from-cyan-200 dark:to-cyan-600 from-blue-200 to-blue-600">
                        <CardBody className="justify-center items-center pb-0">
                            <CircularProgress
                                classNames={{
                                    svg: "w-20 h-20 drop-shadow-md",
                                    indicator: "dark:stroke-black stroke-white",
                                    track: "stroke-white/10",
                                    value: "text-lg font-semibold dark:text-black text-white",
                                }}
                                showValueLabel={true}
                                strokeWidth={3}
                                value={69}
                            />
                        </CardBody>
                        <CardFooter className="justify-center items-center h-8 pt-0">
                            <Chip
                                classNames={{
                                    content: "mt-2 dark:text-black text-white/90 text-tiny font-semibold",
                                }}
                                variant="light"
                            >
                                304 Points Left
                            </Chip>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );

    const cardComponents = [<Card1 />, <Card2 />, <Card3 />];

    return (
        <div className="flex flex-col items-center gap-4">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={16}
                slidesPerView={1}
                className="w-full max-w-md"
            >
                {cardComponents.map((card, i) => (
                    <SwiperSlide key={i}>
                        {card}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}