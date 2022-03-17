interface Entry {
  amount: string;
  balance: number;
  date: Date;
}

export const accountStatement = () => {
  const entries: Entry[] = [];
  let balance = 0;
  let dateOverride: Date;

  const deposit = (sum: number) => {
    balance += sum;
    const date = dateOverride || new Date();
    entries.push({ amount: `+${sum}`, balance, date });
  };

  const withdraw = (sum: number) => {
    balance -= sum;
    const date = dateOverride || new Date();
    entries.push({ amount: `-${sum}`, balance, date });
  };

  const printStatement = () => {
    return entries.map(({ amount, balance, date }) => ({
      amount,
      balance,
      date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`,
    }));
  };

  const setDate = (date: Date) => {
    dateOverride = date;
  };

  return {
    deposit,
    withdraw,
    printStatement,
  };
};
