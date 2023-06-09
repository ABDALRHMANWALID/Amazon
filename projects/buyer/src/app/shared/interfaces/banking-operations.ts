export interface BankingOperations {
  id: number;
  cash: number;
  from_user_id: number;
  cash_from_credit_card_id: number;
  to_user_id: number;
  cash_to_credit_card_id: number;
  operation_date: string;
}
