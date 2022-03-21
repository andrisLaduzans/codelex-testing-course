import { accountStatement } from "./accountStatement";

describe("account statement", () => {
  it("should be able to deposit sum", () => {
    const account = accountStatement();
    account.deposit(500);

    const amount = account.printStatement();
    expect(amount.map(({ amount, balance }) => ({ amount, balance }))).toEqual([
      { amount: "+500", balance: 500 },
    ]);
  });

  it("balance entries should have transaction amount and balance", () => {
    const account = accountStatement();
    account.deposit(500);
    account.withdraw(200);

    const balance = account.printStatement();

    expect(balance.map(({ amount, balance }) => ({ amount, balance }))).toEqual(
      [
        {
          amount: "+500",
          balance: 500,
        },
        { amount: "-200", balance: 300 },
      ]
    );
  });

  // it("balance entries should have time of transaction", () => {
  //   const account = accountStatement();
  //   const depositTime = new Date("12/17/22");
  //   account.deposit(500);

  //   const withdrawTime = new Date("12/18/22");
  //   account.withdraw(200);

  //   const balance = account.printStatement();

  //   expect(balance).toEqual([
  //     {
  //       amount: "+500",
  //       balance: 500,
  //       date: "2022.12.17",
  //     },
  //     { amount: "-200", balance: 300, date: "2022.12.18" },
  //   ]);
  // });
});
