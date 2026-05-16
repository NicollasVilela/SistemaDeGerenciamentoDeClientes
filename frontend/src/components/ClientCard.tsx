type Props = {
  nome: string;
  email: string;
  empresa: string;
};

export function ClientCard({ nome, email, empresa }: Props) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p>{email}</p>
      <p>{empresa}</p>
    </div>
  );
}
