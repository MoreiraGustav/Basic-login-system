import { api } from "@/api";

export const login = async (email: string, senha: string): Promise<boolean> => {
  const contas = await api;

  for (const conta of contas) {
    if (email === conta.email && senha === conta.senha) {
      return true;
    }
  }

  return false;
};
