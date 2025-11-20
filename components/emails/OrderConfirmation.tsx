import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
    Hr,
} from '@react-email/components';

interface OrderConfirmationProps {
    orderId: string;
    totalAmount: number;
    customerName?: string;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
    orderId,
    totalAmount,
    customerName = 'Valued Customer',
}) => {
    const previewText = `Order Confirmation #${orderId}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            KYO WEAR
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello {customerName},
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Thank you for your order. We are getting it ready to be shipped.
                        </Text>
                        <Section className="mt-[32px] mb-[32px]">
                            <Text className="text-black text-[14px] leading-[24px] font-bold">
                                Order ID: {orderId}
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px]">
                                Total: ${(totalAmount / 100).toFixed(2)}
                            </Text>
                        </Section>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            If you have any questions, please reply to this email.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default OrderConfirmation;
