export interface GmoExecution {
  amount: string;
  executionId: number;
  clientOrderId?: string;
  orderId: number;
  positionId: number;
  symbol: string;
  side: "BUY" | "SELL";
  settleType: "OPEN" | "CLOSE";
  size: string;
  price: string;
  lossGain: string;
  fee: string;
  settledSwap: string;
  timestamp: string; // ISO 8601
}

export interface GmoPosition {
  positionId: number;
  symbol: string;
  side: "BUY" | "SELL";
  size: string;
  orderdSize: string;
  price: string;
  lossGain: string;
  leverage: string;
  losscutPrice: string;
  timestamp: string;
}

export interface GmoMarginInfo {
  actualProfitLoss: string;
  availableAmount: string;
  margin: string;
  marginRatio: string;
  profitLoss: string;
  transferableAmount: string;
}

export interface GmoApiMessage {
  message_code: string;
  message_string: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface GmoApiResponse {
  status: number;
  data: {
    list?: GmoExecution[] | GmoPosition[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  messages?: GmoApiMessage[];
  responsetime: string;
}

export interface GmoOrderResult {
  rootOrderId: number;
  clientOrderId?: string;
  orderId: number;
}

export interface GmoOrderInfo {
  rootOrderId: number;
  orderId: number;
  clientOrderId?: string;
  symbol: string;
  side: "BUY" | "SELL";
  orderType: "NORMAL" | "OCO" | "IFD" | "IFDOCO" | "LOSSCUT";
  executionType: "MARKET" | "LIMIT" | "STOP";
  settleType: "OPEN" | "CLOSE";
  size: string;
  price: string;
  status: "WAITING" | "ORDERED" | "MODIFYING" | "CANCELED" | "EXECUTED" | "EXPIRED";
  cancelType?: string;
  expiry?: string;
  timestamp: string;
}
