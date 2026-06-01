"use client";

// NOTE: This file is now a client wrapper for the actual server component.

import { OrderSuccessContent } from "./SuccessContent";

export default function OrderSuccessPage({ searchParams }: { searchParams: { orderId?: string } }) {
  const orderId = searchParams.orderId ?? "UNKNOWN";
  return <OrderSuccessContent orderId={orderId} />;
}
