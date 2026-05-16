import { useEffect, useState } from "react";
import { api } from "../services/api";
import { ClientCard } from "../components/ClientCard";

export function Dashboard() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get("/clientes").then((response) => {
      setClientes(response.data);
    });
  }, []);

  return (
    <main>
      <h1>CRM Clientes</h1>

      {clientes.map((cliente: any) => (
        <ClientCard
          key={cliente.id}
          nome={cliente.nome}
          email={cliente.email}
          empresa={cliente.empresa}
        />
      ))}
    </main>
  );
}
