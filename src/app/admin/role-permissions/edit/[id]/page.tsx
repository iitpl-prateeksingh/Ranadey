import EditRoleClient from "./EditRoleClient";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default function Page({ params }) {
  return <EditRoleClient id={params.id} />;
}
