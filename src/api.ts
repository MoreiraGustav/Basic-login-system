const contas: { email: string; senha: string }[] = [
    {
      email: "Gustavo@dio",
      senha: "1234",
    },
    {
      email: "pacote@pacote.com",
      senha: "pacote123",
    },
  ];
  export const api = new Promise<{ email: string; senha: string }[]>((resolve) => {
    setTimeout(() => {
      resolve(contas);
    }, 3000);
  });